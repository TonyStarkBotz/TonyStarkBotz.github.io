# DigitalGalaxyHQ Web Hub

A modern multi-page GitHub Pages site for **DigitalGalaxyHQ**.

## Live Structure

- `/` — Main home page with links to all projects
- `/DGHQLinks/` — Link dashboard
- `/MarvelHorizon/` — Marvel Horizon social hub
- `/MovieTimes/` — Movie listing app
- `/Payment/` — UPI payment page
- `/Tic-tac-toe/` — Browser game

## Project Goals

- Keep a clean, modern interface across pages.
- Make navigation easy from every subpage back to home.
- Keep brand identity consistent as **DigitalGalaxyHQ**.

## Local Development

Because this is a static site, you can run it with any static server.

### Option 1: Python

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

### Option 2: VS Code Live Server

Open the repo and start **Live Server** from `index.html`.

## Branding

If you want to customize account identity values used by scripts, edit:

- `main.js`
  - `Github_Username`
  - `Email_Id`

## Deployment

1. Push changes to your `main` (or publishing) branch.
2. Enable **GitHub Pages** in repository settings.
3. Set source branch/folder (usually root).

## License

This project includes an MIT License (`LICENSE`).
