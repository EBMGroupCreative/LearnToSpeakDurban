# Learn to Speak Durban

Campaign microsite for Gateway. A public service by Gateway.

Full developer handoff notes: see `../README.md` in the handoff bundle.

## Run locally
The site needs a static server, because the screens load over HTTP. Double-clicking `index.html` won't work.
```
npx serve .
# or
python3 -m http.server 8000
```

## Deploy to GitHub Pages
1. Create a new repository on GitHub (e.g. `learn-to-speak-durban`).
2. Upload the **contents** of this folder so `index.html` sits at the repo root (drag everything into *Add file → Upload files*, or `git push`).
3. Repo → *Settings → Pages* → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. The site goes live at `https://<user>.github.io/<repo>/` in a minute or two.
5. Custom domain (e.g. learntospeakdurban.com): add it under *Settings → Pages → Custom domain*, then point the domain's DNS at GitHub Pages.

```
git init && git add . && git commit -m "Learn to Speak Durban"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

`.nojekyll` is included so GitHub serves every file as-is. The same folder also works on Netlify, Vercel or S3.

### Before launch
- **Remove the testing controls** (each is marked “(testing)” on screen with a red “Testing only · remove before launch” label, and `TESTING ONLY` / `DEV ONLY` in code):
  - Final exam → “Sit it anyway (testing)” and its `force` state (`app/ExamScreen.babel`).
  - Enrolment desk → “Skip enrolment (testing)” and `skipEnrol()` (`app/Profiles.babel`).
  - Locker code screen → “(Prototype: any code works. Production verifies for real.)” and the accept-any-code logic in `LockerCode` (`app/Profiles.babel`). Wire it to Supabase email OTP: see `docs/access-handover.md`.
  - Student card → “Reset voucher (testing)” under the Study Grant (`app/Vouchers.babel`). This control must not exist in the live build: in production the one-way redeemed flag is enforced server-side and is never resettable from the interface.
- `index.html` → `LSD_CONFIG`: set `leaderboardUrl` to the score server and `demoRivals:false`.
- `#report` stores reports on the visitor's device only. Wire it to a monitored inbox.
- `#terms` is a placeholder until Gateway approves the competition terms.

## Routes (hash-based)
`#card` · `#home` · `#enrol` · `#profile` · `#lessons/00` (Durban) · `#lessons/01`…`#lessons/50` · `#dictionary` · `#activities` (Games) · `#activities/game-02`…`game-13` · `#leaderboard` · `#flashcards` · `#ekselator` · `#submit` · `#study` · `#kit` (`/postcard`, `/ooo`, `/quiz`) · `#exam` · `#merch` · `#report` · `#terms`

Everything except Home and Enrol is locked until the visitor enrols or comes back through the return door.

## Access
No passwords, no phone numbers. Email is the key; a 6-digit emailed locker code does all verification (Supabase email OTP, custom SMTP). Card issuance, Class Rankings writes and the Study Grant require a verified email. Full notes: `docs/access-handover.md`.

## Structure
- `index.html`: entry point, page CSS, `LSD_CONFIG`, script load order.
- `styles.css` → `tokens/`: colours, type, spacing, `@font-face`.
- `theme-orange.css`: the orange skin (on by default). Add `?theme=blue` to the URL for the original blue.
- `app/lessons.js`: **the 50 lessons**. Edit copy here.
- `app/data.js`: exam questions (50), game data, the Durdle December schedule, merch.
- `app/ekselator-lexicon.js`: The Ekselator's speak Durban word list.
- `app/*.babel`: screens (React/JSX, compiled in the browser).
- `assets/`: fonts, Gateway logos, pixel stickers, `migration/` (Great Migration art), `pack/` (Pack for Durban art), `bunny-chow.png`, `audio/` (lesson voice clips go here).
