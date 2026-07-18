# Fluxel

My web development studio site. Built with React + Vite.

## Run it locally

You need Node.js installed (you already have it from Regalvows).

```bash
npm install     # first time only, downloads dependencies
npm run dev     # starts the site at http://localhost:5173
```

Open the link it prints in your browser. Edits you save show up instantly.

## Edit your details

Almost everything you'll want to change lives in one file: `src/config.js`.
- Your WhatsApp number and email
- Your prices (Basic / Standard / Pro)
- Your projects (add a new one each time you deliver a client site)
- The skills and tech shown

Change a value there, save, and the site updates.

## Theme

The Light / Auto / Dark switch is in the top-right. "Auto" follows the
visitor's device setting. The choice is remembered on their next visit.

## Build for production

```bash
npm run build     # creates an optimised site in the dist/ folder
npm run preview   # preview that production build locally
```

## Deploy to Vercel (free)

1. Push this folder to a new GitHub repository.
2. Go to vercel.com, "Add New Project", and import that repo.
3. Vercel detects Vite automatically - just click Deploy.
4. You get a live link (like fluxel.vercel.app) that works on every device.

To use your own domain later, add it in the Vercel project settings.

## Before you share the link

- [ ] Set your real WhatsApp number in `src/config.js`
- [ ] Set your real email in `src/config.js`
- [ ] Set your real prices
- [ ] Test the enquiry form on your phone - it should open WhatsApp with the details filled in
