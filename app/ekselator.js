// The Ekselator engine and the site-wide language filter. Plain JS. Loads after ekselator-lexicon.js.
// window.ekRun(text) -> { segs, hits, blocked, fluent }   segs: strings and { s, orig } for translated bits.
// window.lsdBlocked(text) -> strict check (Mode B). window.lsdHard(text) -> tier 2 only. window.safeText(text) -> '' if blocked (Mode B).
(function () {
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const norm = s => String(s).toLowerCase().replace(/'/g, '’').replace(/\s+/g, ' ').trim();

  // Verb rows get simple endings: liked/likes/liking → smaak, ate → chow, left → vy, told → choon.
  const VERB_ROWS = ['smaak', 'choon', 'check', 'vy', 'ducking out', 'dala', 'park', 'skit', 'chow'];
  const NO_ENDINGS = new Set(['keen', 'into', 'fond', 'mad', 'crazy', 'obsessed', 'hooked', 'can’t', 'a', 'big', 'partial', 'sold', 'smitten', 'let’s', 'off', 'doing', 'bailing', 'rate', 'dig', 'just', 'irish', 'french', 'two-step', 'bona', 'kyk', 'waai', 'vosho', 'chillax', 'nosh', 'look see', 'something', 'knocking', 'heading', 'home', 'please', 'can’t', 'cannot']);
  const IRREG = { eat: ['ate', 'eaten', 'eats', 'eating'], leave: ['left', 'leaves', 'leaving'], tell: ['told', 'tells', 'telling'], go: ['went', 'goes'], see: ['saw', 'seen', 'sees', 'seeing'], take: ['took', 'taken', 'takes', 'taking'], get: ['got', 'gets', 'getting'], make: ['made', 'makes', 'making'], do: ['did', 'does'], hit: ['hits', 'hitting'], split: ['splits', 'splitting'], say: ['said', 'says', 'saying'], speak: ['spoke', 'speaks', 'speaking'], give: ['gave', 'given', 'gives', 'giving'], put: ['puts', 'putting'], sit: ['sat', 'sits', 'sitting'], sneak: ['snuck', 'sneaked', 'sneaks', 'sneaking'], shoot: ['shoots', 'shooting'], have: ['had', 'has', 'having'], cut: ['cuts', 'cutting'], shake: ['shook', 'shakes', 'shaking'], send: ['sent', 'sends', 'sending'], hang: ['hung', 'hangs', 'hanging'], unwind: ['unwound', 'unwinds', 'unwinding'], bust: ['busts', 'busting'], boogie: ['boogied', 'boogies', 'boogying'], dine: ['dined', 'dines', 'dining'], spot: ['spotted', 'spots', 'spotting'], slip: ['slipped', 'slips', 'slipping'] };
  const endings = w => {
    if (IRREG[w]) return IRREG[w];
    if (/e$/.test(w)) return [w + 'd', w + 's', w.slice(0, -1) + 'ing'];
    if (/[^aeiou]y$/.test(w)) return [w.slice(0, -1) + 'ied', w.slice(0, -1) + 'ies', w + 'ing'];
    if (/(s|sh|ch|x|z)$/.test(w)) return [w + 'ed', w + 'es', w + 'ing'];
    if (/^[^aeiou]*[aeiou][^aeiouwxy]$/.test(w)) return [w + w.slice(-1) + 'ed', w + 's', w + w.slice(-1) + 'ing'];
    return [w + 'ed', w + 's', w + 'ing'];
  };
  const PREFER = { fancy: 'larney' }; // "fancy" sits in two rows; the adjective wins.

  let LEX = null;
  function lex() {
    if (LEX) return LEX;
    const map = new Map(), heads = new Set();
    String(window.EK_LEXICON || '').split('\n').forEach(line => {
      const k = line.indexOf('←'); if (k < 0) return;
      const head = line.slice(0, k).trim(), out = head.toLowerCase(); heads.add(norm(head).replace(/!$/, ''));
      const trig = line.slice(k + 1).replace(/\([^)]*\)/g, '').split(',').map(norm).filter(Boolean);
      const verb = VERB_ROWS.includes(out);
      trig.forEach(t => {
        const put = (key, v) => { if (!map.has(key) || PREFER[key] === v) map.set(key, v); };
        put(t, out);
        if (verb) { const [w, ...rest] = t.split(' '); if (!NO_ENDINGS.has(w) && !NO_ENDINGS.has(t) && w.length > 1) endings(w).forEach(e => { const key = [e, ...rest].join(' '); if (!map.has(key)) map.set(key, out); }); }
      });
    });
    // Special rule: December → Dezemba, always. Campaign vocabulary, not one of the 50 lessons, so it isn't in the table.
    map.set('december', 'Dezemba');
    // Campaign vocabulary: Durban → Durbs (exact word only; Durbanite stays). Case follows the input.
    map.set('durban', 'durbs');
    // Campaign vocabulary: barbecue → braai.
    ['barbecue', 'bbq', 'cookout'].forEach(k => map.set(k, 'braai')); ['barbecues', 'bbqs', 'cookouts'].forEach(k => map.set(k, 'braais'));
    heads.add('bru'); heads.add('mfethu');
    (window.LSD2 && window.LSD2.lessons || []).forEach(l => heads.add(norm(l.w).replace(/!$/, '')));
    heads.delete('durban');
    const keys = [...map.keys()].sort((a, b) => b.length - a.length).map(s => esc(s).replace(/’/g, "['’]").replace(/ /g, '\\s+'));
    const re = new RegExp("(?<![\\p{L}\\p{N}'’])(?:" + keys.join('|') + ")(?![\\p{L}\\p{N}'’])", 'giu');
    return (LEX = { map, heads, re });
  }

  // Guard rules. like/love/dig/rate (any ending) only become smaak straight after a pronoun or a simple intensifier.
  const SMAAK_GUARD = /^(?:like[sd]?|liking|love[sd]?|loving|dig|digs|digging|rate[sd]?|rating)\b/;
  const SMAAK_OK = new Set(['i', 'we', 'you', 'they', 'he', 'she', 'really', 'actually', 'properly']);
  const FINE_NOT = new Set(['a', 'the', 'parking', 'speeding', 'traffic']);
  const SURE_NOT = new Set(['make', 'makes', 'making', 'made', 'not']);
  const prevWord = (text, off) => { const m = text.slice(Math.max(0, off - 40), off).match(/([\p{L}\p{N}’']+)\s+$/u); return m ? m[1].toLowerCase().replace(/'/g, '’') : ''; };
  const NOT_AFTER_LIKE = /(?:^|\s)(looks?|looked|feels?|felt|sounds?|seems?|seemed|just|kind\s+of|sort\s+of|things|is|was|it’s|it's|more|nothing|something|anything)\s+$/i;
  const POSITIVE = new Set(['kiff', 'tops', 'shambeez', 'smaak']);

  function ekRun(text) {
    // PRODUCTION: route all free text through a server-side moderation API (e.g. OpenAI Moderation / Azure AI Content Safety) PLUS this custom SA wordlist before rendering. Client-side filtering is a placeholder and must not ship as the only defence.
    text = String(text || '');
    const scan = lsdScan(text);
    if (scan.tier === 2) return { segs: [], hits: 0, blocked: true, fluent: false };
    text = lsdMask(text, scan.spans);
    const { map, heads, re } = lex();
    const segs = []; let last = 0, hits = 0, pos = 0;
    re.lastIndex = 0; let m;
    while ((m = re.exec(text))) {
      const raw = m[0], key = norm(raw), off = m.index;
      if (heads.has(key)) continue;
      let out = map.get(key); if (!out) continue;
      if (out === 'bru / mfethu') out = Math.random() < 0.5 ? 'bru' : 'mfethu'; // brother pool: fresh roll per match
      if (out === 'smaak' && SMAAK_GUARD.test(key) && !SMAAK_OK.has(prevWord(text, off))) continue;
      if (key === 'fine' && (FINE_NOT.has(prevWord(text, off)) || /\d/.test(prevWord(text, off)))) continue; // "a R500 fine" stays a fine
      if (key === 'sure' && (SURE_NOT.has(prevWord(text, off)) || /\bto\s+be\s+$/i.test(text.slice(Math.max(0, off - 10), off)))) continue;
      if (key === 'done' && /well\s+$/i.test(text.slice(Math.max(0, off - 8), off))) continue; // "well done" stays
      if (off > last) segs.push({ t: text.slice(last, off), off: last });
      if (raw.length > 1 && raw === raw.toUpperCase() && /\p{L}{2}/u.test(raw)) out = out.toUpperCase();
      else if (raw[0] !== raw[0].toLowerCase()) out = out[0].toUpperCase() + out.slice(1);
      if (key === 'bbq' || key === 'bbqs') out = /(?:^|[.!?]\s*)$/.test(text.slice(0, off)) ? out[0].toUpperCase() + out.slice(1).toLowerCase() : out.toLowerCase(); // an acronym, not shouting
      if (key === 'december') out = raw === raw.toUpperCase() ? 'DEZEMBA' : 'Dezemba'; // proper noun, always capitalised
      let end = off + raw.length;
      if (out.endsWith('!') && text[end] === '!') out = out.slice(0, -1);
      segs.push({ s: out, orig: raw, off });
      hits++; if (POSITIVE.has(out.toLowerCase())) pos++;
      last = end;
    }
    if (last < text.length) segs.push({ t: text.slice(last), off: last });
    // Wellbeing rule: "well" → kiff only straight after a state-of-being word ("I am well", "hope you're well", "I've been very well").
    // "well done", "oh well", "sleep well", "well, let's see" are left alone.
    for (let si = segs.length - 1; si >= 0; si--) {
      const sg = segs[si]; if (sg.t == null) continue;
      const wr = /(?<![\p{L}\p{N}'’])(?:(?:am|i['’]m|are|you['’]re|is|was|be|been|feeling|keeping|doing)|(?:are|is|was|were)\s+(?:you|he|she|they|we|it|everyone|everybody|y['’]all))\s+(?:(?:very|really)\s+)?(well)(?![\p{L}\p{N}'’])/giu;
      const parts = []; let lp = 0, w;
      while ((w = wr.exec(sg.t))) {
        const ws = w.index + w[0].length - w[1].length;
        if (ws > lp) parts.push({ t: sg.t.slice(lp, ws), off: sg.off + lp });
        parts.push({ s: w[1] === 'WELL' ? 'KIFF' : w[1][0] === 'W' ? 'Kiff' : 'kiff', orig: w[1], off: sg.off + ws }); hits++;
        lp = ws + w[1].length;
      }
      if (!parts.length) continue;
      if (lp < sg.t.length) parts.push({ t: sg.t.slice(lp), off: sg.off + lp });
      segs.splice(si, 1, ...parts);
    }
    // No laka: a properly positive review gets it in front of its final sentence.
    if (pos >= 3) {
      const body = text.replace(/\s+$/, ''); let p = 0; const sr = /[.!?]["”’)]*\s+(?=\S)/g; let x;
      while ((x = sr.exec(body))) p = sr.lastIndex;
      const i = segs.findIndex(s => s.off <= p && (s.t != null ? s.off + s.t.length > p : s.off === p));
      if (i > -1) { const s = segs[i]; const flag = { s: 'No laka.', orig: '', extra: true };
        if (s.t == null || s.off === p) segs.splice(i, 0, flag, ' ');
        else segs.splice(i, 1, { t: s.t.slice(0, p - s.off), off: s.off }, flag, ' ', { t: s.t.slice(p - s.off), off: p }); }
    }
    const vaal = /(?<![\p{L}])vaal(?![\p{L}])/iu.test(text);
    if (vaal) segs.push(' ', { s: 'Not the Vaal.', orig: '', extra: true });
    return { segs: segs.map(s => typeof s === 'string' ? s : s.t != null ? s.t : { s: s.s, orig: s.orig, extra: !!s.extra }), hits, blocked: false, fluent: !!text.trim() && hits === 0 && !vaal };
  }

  // ---- Language and content filter. Two tiers, two modes. ----
  // PRODUCTION: route all free text through a server-side moderation API (e.g. OpenAI Moderation / Azure AI Content Safety) PLUS this custom SA wordlist before rendering. Client-side filtering is a placeholder and must not ship as the only defence. Shareable text and Submit a word entries should also be human-reviewed where feasible.
  // Tier 1 = profanity. Tier 2 = slurs, hate speech, sexual violence.
  // Mode A (private, the Ekselator): tier 1 is masked (sh*t), tier 2 hard-blocks. Mode B (anything shareable): both tiers hard-block.
  // Deliberately NOT filtered (normal SA usage, still translation triggers): moer, bliksem, klap, warm klap, voetsek, tsek, suka.
  const T1 = {
    exact: ['mf', 'fck', 'fuk', 'fuq', 'fukk', 'fuking', 'fukin', 'shat', 'crap', 'crappy', 'arse', 'arses', 'dick', 'dicks', 'cock', 'cocks', 'prick', 'pricks', 'cunt', 'cunts', 'twat', 'twats', 'hoe', 'hoes', 'skank', 'skanks', 'douche', 'tits', 'titty', 'titties', 'cum', 'wtf', 'stfu', 'gtfo', 'porn', 'porno', 'nudes', 'piss', 'pissed', 'jackass', 'dumbass', 'wanker', 'wankers', 'bollocks',
      'kak', 'kakhuis', 'kakpraat', 'fok', 'fokken', 'fokkol', 'fokol', 'fokof', 'fokkof', 'gefok', 'befok', 'fokker', 'fokkit', 'poes', 'poese', 'poesie', 'piel', 'piele', 'soutpiel', 'doos', 'naai', 'genaai', 'naaier', 'hoer', 'hoere', 'teef', 'stront', 'poephol', 'etter', 'masepoes', 'swernoot', 'gatkruiper',
      'msunu', 'umsunu', 'ngquza', 'ingquza', 'umnqundu', 'mnqundu', 'isifebe', 'sifebe', 'umthondo', 'golo'],
    pre: ['fuck', 'motherf', 'fckin', 'shit', 'bullshit', 'horseshit', 'bitch', 'biatch', 'bastard', 'asshole', 'arsehole', 'dickhead', 'wank', 'twat', 'whore', 'slut', 'douchebag', 'pussy', 'pussies', 'jizz', 'blowjob', 'handjob', 'dildo', 'porn', 'piss', 'fokk', 'poes', 'hoerkind', 'msunu', 'cocksuck', 'bollock', 'mofo'],
    sub: ['fuck', 'shit', 'bitch', 'whore', 'dildo', 'jizz', 'cunt', 'wanker', 'asshole', 'arsehole', 'blowjob', 'handjob', 'fokken', 'fokkof', 'masepoes', 'msunu', 'mnqundu', 'poephol', 'bullshit'],
    phrase: [/\bjou\s+ma\s+se\b[^.!?\n]*/g, /\bjou\s+(?:ou\s+)?gat\b/g, /\b(?:jou|you)\s+vrek\b/g, /\bvrek\s+jy\b/g],
  };
  const T2 = {
    exact: ['fag', 'fags', 'spaz', 'spastic', 'spastics', 'tranny', 'trannies', 'chink', 'chinks', 'gook', 'gooks', 'spic', 'spics', 'kike', 'kikes', 'paki', 'pakis', 'coon', 'coons', 'dyke', 'dykes', 'lesbo', 'shemale', 'golliwog', 'darkie', 'darkies', 'negro', 'negroes', 'wog', 'wogs', 'coolie', 'coolies', 'koelie', 'koelies', 'ikula', 'amakula', 'kwerekwere', 'amakwerekwere', 'makwerekwere', 'rape', 'raped', 'rapes', 'raping', 'rapey', 'pedo', 'paedo', 'pedos', 'roofie', 'roofied', 'roofies', 'jackroll', 'jackrolling', 'incest', 'molest', 'midget', 'tard', 'mongoloid', 'retard', 'retards', 'retarded', 'hotnot', 'houtkop', 'stabane', 'isitabane', 'moffie', 'moffies'],
    pre: ['kaffir', 'kaffer', 'kafir', 'kaffre', 'caffre', 'nigger', 'nigga', 'niggah', 'nigguh', 'niga', 'faggot', 'retard', 'rapist', 'molest', 'pedophil', 'paedophil', 'hotnot', 'houtkop', 'moffie', 'stabane', 'towelhead', 'raghead', 'sandnigger', 'wetback', 'gangbang', 'sexslave'],
    sub: ['kaffir', 'kaffer', 'nigger', 'nigga', 'faggot', 'hotnot', 'houtkop', 'moffie'],
    phrase: [/\b(?:bloody|stupid|dirty|filthy|typical|fucking|f\*cking|fokken|f\*kken)\s+(?:charou|charous|coolie|coolies|boesman|boesmans|bushman|bushmen)\b/g, /\b(?:jou|you)\s+(?:boesman|bushman|charou)\b/g, /\bjungle\s+bunny\b/g, /\bsex\s+slave\b/g, /\bgang\s*bang\b/g],
  };
  // Innocent words that contain listed strings (Scunthorpe cases). Never flagged.
  const ALLOW = new Set(['niger', 'nigeria', 'nigerian', 'nigerians', 'niggard', 'niggardly', 'scunthorpe', 'penistone', 'cockatoo', 'cocktail', 'cocktails', 'cockpit', 'peacock', 'hancock', 'shuttlecock', 'dickens', 'arsenal', 'arsenic', 'poespas', 'fokus', 'rapeseed', 'retardant', 'pedometer', 'shiitake', 'shitake', 'kakkerlak', 'spiel', 'hoek', 'therapist', 'grape', 'drape', 'scrape', 'cumin', 'document', 'dosent', 'naaimasjien', 'etters', 'letter', 'sussex', 'essex']);
  const LEET = { '@': 'a', '4': 'a', '3': 'e', '1': 'i', '!': 'i', '|': 'i', '0': 'o', '5': 's', '$': 's', '7': 't', '+': 't', '8': 'b', '9': 'g' };
  const sq = s => s.replace(/(.)\1+/g, '$1');
  const sqOK = e => (sq(e) === e ? e.length >= 3 : sq(e).length >= 5);
  const hit = (c, q, T) => T.exact.some(e => c === e || (sqOK(e) && q === sq(e))) || T.pre.some(e => c.startsWith(e) || (sqOK(e) && q.startsWith(sq(e)))) || T.sub.some(e => c.includes(e) || (sqOK(e) && q.includes(sq(e))));
  const SUFF = ['', 's', 'es', 'ed', 'er', 'ers', 'ing', 'in', 'y', 'head', 'hole', 'ken'];
  function classify(w) {
    const base = w.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
    if (base.includes('*')) {
      const letters = base.replace(/[^a-z]/g, ''); if (letters.length < 2) return 0;
      const r = new RegExp('^' + base.replace(/[^a-z*]/g, '').replace(/\*+/g, '[a-z]{1,4}') + '$');
      const any = T => T.exact.some(e => r.test(e)) || T.pre.some(e => SUFF.some(s => r.test(e + s)));
      return any(T2) ? 2 : any(T1) ? 1 : 0;
    }
    const cands = [...new Set([base.replace(/[^a-z]/g, ''), base.replace(/ph/g, 'f').replace(/[@4310!|5$7+89]/g, ch => LEET[ch]).replace(/[^a-z]/g, '')])].filter(c => c.length >= 2 && !ALLOW.has(c));
    let tier = 0;
    for (const c of cands) { const q = sq(c); if (hit(c, q, T2)) return 2; if (hit(c, q, T1)) tier = 1; }
    return tier;
  }
  // Returns { tier, spans: [{ a, b, tier }] } with positions in the original text.
  function lsdScan(text) {
    text = String(text || ''); const spans = []; let tier = 0;
    const add = (a, b, t) => { spans.push({ a, b, tier: t }); tier = Math.max(tier, t); };
    const low = text.toLowerCase();
    [[T2.phrase, 2], [T1.phrase, 1]].forEach(([list, t]) => list.forEach(re => { re.lastIndex = 0; let m; while ((m = re.exec(low))) add(m.index, m.index + m[0].length, t); }));
    const toks = []; const tr = /[\p{L}\p{N}@$*|+!]+/gu; let m;
    while ((m = tr.exec(text))) { const w = m[0].replace(/!+$/, ''); if (w) toks.push({ w, a: m.index, b: m.index + w.length }); }
    // Spaced or dotted letters: f o k, f.o.k, s-h-i-t
    const used = new Set();
    for (let i = 0; i < toks.length; i++) {
      if (toks[i].w.length !== 1) continue; let j = i;
      while (j + 1 < toks.length && toks[j + 1].w.length === 1 && /^[\s._\-]{1,2}$/.test(text.slice(toks[j].b, toks[j + 1].a))) j++;
      if (j - i >= 2) { const w = toks.slice(i, j + 1).map(x => x.w).join(''), t = classify(w); if (t) { add(toks[i].a, toks[j].b, t); for (let k = i; k <= j; k++) used.add(k); } i = j; }
    }
    toks.forEach((x, i) => { if (used.has(i)) return; const t = classify(x.w); if (t) add(x.a, x.b, t); });
    return { tier, spans };
  }
  const lsdBlocked = text => lsdScan(text).tier > 0;      // Mode B: strict, for anything shareable
  const lsdHard = text => lsdScan(text).tier === 2;       // Mode A hard block
  // Mode A mask: the word stays in the sentence, vowels become *. Length kept.
  function lsdMask(text, spans) {
    const ch = String(text).split('');
    spans.filter(s => s.tier === 1).forEach(({ a, b }) => {
      // First vowel of each vowel run: fuck → f*ck, fucking → f*ck*ng, poes → p*es, kak → k*k.
      let n = 0; const V = /[aeiouAEIOU@0134!]/; for (let i = a; i < b; i++) if (V.test(ch[i]) && !(i > a && (V.test(ch[i - 1]) || ch[i - 1] === '*'))) { ch[i] = '*'; n++; }
      if (!n) { const ix = []; for (let i = a; i < b; i++) if (/[\p{L}\p{N}]/u.test(ch[i])) ix.push(i); ix.slice(1, -1).forEach(i => { ch[i] = '*'; }); if (ix.length === 2) ch[ix[1]] = '*'; }
    });
    return ch.join('');
  }
  const safeText = v => (lsdBlocked(v) ? '' : v);
  const ekTranslate = text => ekRun(text).segs;
  Object.assign(window, { ekRun, ekTranslate, lsdScan, lsdBlocked, lsdHard, lsdMask, safeText });
})();
