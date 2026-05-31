# Marknote Demo

The reference plugin shipped with Marknote 1.4.0. About 20 lines of code, and exercises both plugin surfaces available in that release.

## What it does

- **Command — `Show timestamp`**: open the command palette (`Ctrl+Shift+P`) and search for *Show timestamp*. The command appears with a `Plugin · ` prefix; selecting it pops a status-bar notification with the current local time.
- **Preview transform — `{{date}}`**: write `{{date}}` anywhere in a note and the preview renders today's date in `YYYY-MM-DD` form. The source stays as `{{date}}`, so the substitution refreshes every time you open the file.

## Install

```powershell
# Copy this folder into your local Marknote plugins directory.
Copy-Item -Recurse marknote-demo "$env:LOCALAPPDATA\Marknote\plugins\"
```

Then restart Marknote. Open **Settings → Plugins** to confirm it was discovered (you should see `Marknote Demo · v1.0.0` listed).

## Use it as a starter

This is the easiest scaffold to copy when building your own plugin:

1. Copy this folder, rename it to your reverse-DNS plugin id (e.g. `com.example.my-plugin`).
2. Edit `manifest.json` — update `id`, `name`, `author`, `description`. Leave `main`, `contributes`, and `minMarknoteVersion` as-is unless your plugin needs different capabilities.
3. Edit `main.js` — replace the example command and transform with your own. The full `marknote.*` API surface is documented at https://marknote.co.uk/plugins/build.

## Files

```text
marknote-demo/
  manifest.json   — plugin metadata (Marknote reads this at startup)
  main.js         — entry-point JS, evaluated inside a scoped IIFE
  README.md       — you are here
```
