// The Ekselator's translation table. One row per line: Durban word ← triggers, comma-separated.
// Longest trigger wins. Anything in (brackets) is a note, not a trigger. Rows with no triggers are skipped.
// Special rules (Vaal, December → Dezemba, barbecue → braai, Durban → Durbs, wellbeing “well” → kiff, No laka, verb endings) and guard rules
// (like/love/dig/rate only after a pronoun or intensifier; “a fine” and “make sure / not sure / to be sure” left alone) live in ekselator.js.
window.EK_LEXICON = `
Kiff ← lekker, good, really good, so good, very good, pretty good, nice, so nice, cool, great, amazing, wonderful, lovely, excellent, fantastic, brilliant, epic, superb, incredible, terrific, marvellous, splendid, phenomenal, outstanding, exceptional, fabulous, glorious, ace, solid, stellar, quality, premium, golden, perfect, flawless, immaculate, divine, dreamy, magic, magical, unreal, slick, smooth, fresh, crisp, clean, smashing, cracking, sweet, neat, wicked, mint, class, dope, fire, lit, banging, bussin, slaps, hits different, on point, vibey, delightful, super, mega, primo, A1, a banger, a vibe, goated, chef’s kiss, out of this world
Tops ← awesome, rad, sick, gnarly, the best, best ever, top-notch, top tier, top class, top drawer, first-class, next-level, elite, number one, unbeatable, unmatched, unrivalled, second to none, cream of the crop, world-class, legendary, supreme, peak, GOAT, the greatest, ten out of ten, champion, off the charts, in a league of its own, head and shoulders above, the real deal, the business
Shambeez ← beautiful, gorgeous, stunning, breathtaking, magnificent, exquisite, pretty, attractive, striking, radiant, dazzling, picturesque, scenic, jaw-dropping, drop-dead gorgeous, a stunner, a vision, handsome, a beaut, easy on the eyes, pretty as a picture, a masterpiece, heavenly
Smaak ← like, love, fancy, enjoy, adore, appreciate, dig, rate, keen on, into, fond of, vibe with, mad about, crazy about, obsessed with, hooked on, can’t get enough of, a fan of, big fan of, partial to, sold on, smitten with, cherish
Jol ← party, night out, big night, bash, celebration, rave, festival, good time, get-together, shindig, gathering, gig, sesh, knees-up, turn-up, night on the town, function, groove, a social, a vibe session, house party, birthday party, street party, New Year’s party
Bru / Mfethu ← bro, bruh, dude, mate, buddy, pal, man, boet, china, my guy, fella, chap, bloke, homie, broski, amigo, partner, chief, big guy, bra, my bra, oke, my man, big man, boss man, brother, my brother, brother man, friend, my friend, chommie, chommy, bafo, broer, boeta, grootman, sbari, mzala, gazi, my gazi (brother pool: each match rolls 50/50 for bru or mfethu)
Mfethu ← mfo, mfowethu, bafethu, mngani, umngani (isiZulu origin: always mfethu)
Ouens ← guys, everyone, everybody, people, folks, y’all, you lot, you all, lads, okes, ous, the crew, the squad, the gang, the boys, the team, the crowd, peeps, whole gang, majita, gents, fam, the fam, ladies and gents
Stekkies ← girls, the girls, gals, ladies, the ladies, girlies, the girlies, chicks, the chicks, cherrie, cherries, babes, the babes, goose, the gooses, women, young ladies
Laatie ← kid, child, youngster, little one, young one, little guy, young fella, junior, youth, lighty, the small one, grommet, grom, little bro, son, the little ones, my son, my daughter, little ones, toddler, youngsters
Aweh ← hello, hi, hey, hey there, hiya, heya, hello there, greetings, yo, howzit, morning, good morning, good day, hola, heita, eita, sawubona, molo, hello hello, good afternoon, good evening, hi everyone, hi all, dumela, thobela
Whakind ← how are you, how’s it going, how are things, how’s everything, how’s life, how have you been, how are you keeping, you good, you alright, all good with you, how goes it, unjani, hoe gaan dit
Whakindekse ← what’s up, sup, wassup, what’s happening, what’s going on, what’s new, what’s the story, what’s cooking, what’s the vibe, howdy, what’s good, what’s crackin, what’s poppin, what’s the word, ola, hope this email finds you well, I hope this email finds you well, trust this email finds you well, trust you are well
Shap shap ← okay, ok, all good, sorted, fine, sure, done, agreed, alright, no problem, no worries, understood, will do, got it, gotcha, say no more, roger, copy that, deal, bet, easy, all set, we’re on, sharp, sharp sharp, sho, no stress, all sorted, easy peasy, klaar, finish and klaar, sounds good, sounds like a plan, works for me, that works, happy with that, good to go, confirmed, noted, received with thanks, bye, goodbye, see you soon, see you later, catch you later
Shot ← thanks, thank you, thanks a lot, thanks so much, thank you very much, cheers, ta, dankie, appreciated, appreciate it, much appreciated, many thanks, thanks a mil, big thanks, ngiyabonga, baie dankie, danke, merci, gracias, kind regards, warm regards, best regards, regards, best wishes, many thanks in advance, thanks in advance
One time ← definitely, absolutely, for sure, for real, certainly, 100%, 110%, no doubt, no cap, totally, without fail, without question, guaranteed, legit, surely, you bet, damn straight, absolutely yes, fo sho, fosho, deadset, most definitely, swear down, on god, frfr
Ekse ← I’m telling you, I say, you know, trust me, believe me, I swear, I promise you, real talk, not gonna lie, ngl, to be honest, tbh, mark my words, I kid you not, true story, for real though
Chips! ← watch out, look out, careful, be careful, heads up, warning, incoming, mind out, beware, danger, red alert, eyes up, behind you, pasop, awas, watch it
Choon ← tell, tell them, tell him, tell her, inform, let them know, let him know, speak to, have a word with, say to, tune, give them a piece of your mind, give them a shout, let me know, please advise, keep me posted, keep me in the loop, update me, drop me a message, send me a message, give me a shout
Check ← see, look, look at, have a look, check out, watch, peek, peep, spot, scope, scope out, glance at, look here, observe, bona, kyk, look see
Vy ← leave, go, head out, head off, depart, exit, take off, bounce, dip, split, jet, get going, hit the road, make a move, push off, let’s go, let’s roll, let’s move, off we go, shoot off, waai, let’s waai, bail, bailing, doing a runner, knock off, knocking off, clock out, heading home, home time
Ducking out ← sneak out, sneak off, sneak away, slip out, slip away, duck away, leave quietly, ghost, vanish, disappear, Irish goodbye, French exit, make a quiet exit
Scheming ← planning, plotting, thinking about, considering, contemplating, dreaming of, brainstorming, mulling, mulling over, cooking up, hatching a plan, figuring out, working on a plan, can’t wait, cannot wait, counting the days, counting down the days
Dala ← do it, just do it, get it done, make it happen, handle it, sort it out, sort it, go for it, send it, get after it, crack on, get cracking, get moving, get stuck in, make a plan, go for gold, get on with it, make it work
Park ← chill, chill out, relax, hang out, lounge, lounge about, unwind, kick back, veg out, take it easy, do nothing, laze around, loaf, switch off, decompress, put your feet up, chillax, sit back, take a load off
Skit ← dance, bust a move, boogie, jive, get down, shake a leg, cut shapes, two-step, hit the dance floor, vosho
Chow ← eat, munch, devour, feast, feast on, dine, grab a bite, snack on, graze, nosh, tuck in, dig in, wolf down, scoff, polish off, smash, demolish, inhale, let’s eat, grab some food, get food, something to eat, grab lunch, grab dinner
Perato ← potato, potatoes, spud, spuds, tater, taters, mash, mashed potato, mashed potatoes, baked potato, roast potatoes, slap chips, hot chips
Robot ← traffic light, traffic lights, stoplight, stop light, red light, the lights, the signals, traffic signal, traffic signals
Pozi ← home, house, place, my place, crib, pad, digs, flat, apartment, base, HQ, residence, khaya, kaya, plek
The coast ← the seaside, the shore, the coastline (special rule: if “Vaal” appears anywhere in the input, append “Not the Vaal.” to the output)
Baggies ← board shorts, boardshorts, swim shorts, swimming shorts, swimming trunks, trunks, boardies, swimwear, swim trunks, bathing shorts, surf shorts, boardie
Larney ← fancy, posh, classy, upmarket, high-end, exclusive, swanky, ritzy, plush, lavish, luxurious, glam, chic, bougie, hoity-toity, la-di-da, dressed up, fancy-pants, smart-casual, five-star, suited up
Prawn ← idiot, fool, clown, muppet, twit, dummy, doofus, wally, plonker, numpty, chop, dork, airhead, dimwit, bozo, donut, pampoen
Kook ← poser, wannabe, tryhard, show-off, pretender, rookie, noob, all the gear and no idea, weekend warrior, amateur, beginner, clueless, out of their depth, chancer
Vaalie ← inlander, Joburger, Gautenger, someone from Joburg, upcountry visitor, from the big smoke, city slicker, from Joburg, from Jozi, from Gauteng, from Pretoria
Thundercloud ← smack, slap, klap, snotklap, hiding, clip, whack, wallop, moer, bliksem, warm klap
Voes’ek ← go away, get lost, shoo, scram, buzz off, beat it, clear off, on your bike, away with you, hamba, voetsek, tsek, suka
Thick bucks ← rich, loaded, wealthy, minted, flush, rolling in it, well-off, ballin, balling, money bags, big money, big bucks, deep pockets, made of money, paid, stacked, stacks, moneyed, a baller, bank, cheese
Yano ← amapiano, the piano, log drum, log drums, piano tracks (music context only)
Logging ← longboarding
Gqom ← club music, dance music, electronic music, house music, deep house, EDM, techno, rave music, club bangers, the beat, beats, doef doef, speaker music
Guff ← swim, a swim, a quick swim, quick swim, a dip, a quick dip, quick dip, go for a dip, a paddle
Laaping ← flexing, showing off, show off, flaunting it, flashing cash, acting rich, pretending to be rich
Tuff ← looks good, looking good, looks sharp, looking sharp, looking fresh, looks fresh
It’s chai ← you’re in trouble, you're in trouble, you are in trouble, you’re in big trouble, you're in big trouble
Dezemba ← (special rule — every “December” in the input becomes “Dezemba” and counts as a translated word. Lives in ekselator.js)
Bunny ← (no triggers — it is a dish, not a translation)
No laka ← (special rule — when the input is a positive, review-like sentence, the output’s final sentence sometimes gets “No laka.” in front)
`;
