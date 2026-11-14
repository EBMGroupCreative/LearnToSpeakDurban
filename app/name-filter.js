// LTSD name filter — pair with profanity-blocklist.json
// validateName("...") -> { ok: true } | { ok: false, reason: "..." }
// Works in browser or Node. No dependencies.

const LEET = { "0":"o","1":"i","3":"e","4":"a","5":"s","7":"t","@":"a","$":"s","!":"i","+":"t" };

function normalize(raw) {
  let s = (raw || "").toLowerCase();
  s = s.replace(/[0134578@$!+]/g, c => LEET[c] ?? c);     // leetspeak
  s = s.normalize("NFKD").replace(/[̀-ͯ]/g, ""); // accents
  s = s.replace(/(.)\1{2,}/g, "$1$1");                     // fuuuuck -> fuuck
  return s;
}

function makeValidator(blocklist) {
  const subs  = blocklist.block_substring;
  const words = new Set(blocklist.block_word);
  const allow = new Set(blocklist.allowlist.map(normalize));

  return function validateName(raw) {
    const trimmed = (raw || "").trim();
    if (trimmed.length < 2)  return { ok: false, reason: "too_short" };
    if (trimmed.length > 24) return { ok: false, reason: "too_long" };

    const norm = normalize(trimmed);
    if (allow.has(norm)) return { ok: true };            // campaign words always pass

    // whole-word tier (avoids the Scunthorpe problem on short words)
    for (const token of norm.split(/[^a-z']+/)) {
      if (token && words.has(token) && !allow.has(token))
        return { ok: false, reason: "blocked_word" };
    }

    // substring tier (severe terms caught even inside other letters/spacing).
    // Allowlisted tokens are removed first so e.g. "Scunthorpe" never trips "cunt".
    const squashed = norm.split(/[^a-z']+/)
      .filter(t => t && !allow.has(t))
      .join("").replace(/[^a-z]/g, "");
    for (const bad of subs) {
      if (squashed.includes(bad.replace(/[^a-z]/g, "")))
        return { ok: false, reason: "blocked_term" };
    }
    return { ok: true };
  };
}

// Usage:
//   const blocklist = await (await fetch("profanity-blocklist.json")).json();
//   const validateName = makeValidator(blocklist);
//   validateName("Chloe")        -> { ok: true }
//   validateName("P0es master")  -> { ok: false, reason: "blocked_word" }
// Rejection copy suggestion (campaign voice):
//   "The registrar read that name and said no. Try another one, ekse."

if (typeof module !== "undefined") module.exports = { makeValidator, normalize };
