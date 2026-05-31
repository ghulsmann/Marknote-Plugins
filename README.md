# Marknote Plugins

A public collection of plugins for [Marknote](https://marknote.co.uk) — the native markdown studio for Windows.

Marknote's plugin runtime ships in 1.4.0. A plugin can add commands to the command palette and transform markdown before the preview renders. See the [developer guide](https://marknote.co.uk/plugins/build) for the full API and manifest schema.

## What's here

| Plugin | Description | Capabilities |
| --- | --- | --- |
| [`marknote-demo`](./marknote-demo) | The reference plugin — a `Show timestamp` command and a transform that rewrites `{{date}}` to today's date. | Commands, Preview transforms |

## Installing a plugin

Plugins are folders. Drop one into your local Marknote plugins directory:

```text
%LocalAppData%\Marknote\plugins\
```

Open **Settings → Plugins** in Marknote to confirm it was discovered, then restart the app to activate it. Failed manifests show up in that dialog with a status line explaining exactly which field went wrong.

## Contributing a plugin

Pull requests welcome. To add your plugin to this gallery:

1. Fork this repo.
2. Create a top-level folder named after your plugin's id (reverse-DNS style, e.g. `com.example.my-plugin`).
3. Add your `manifest.json`, your entry-point JS, and a `README.md` describing what your plugin does and how to use it.
4. Open a PR that also adds a row to the table above and a card to the plugin gallery on [marknote.co.uk/plugins](https://marknote.co.uk/plugins).

Submissions are lightly moderated for safety. We won't merge plugins that hot-load remote code, ask for credentials, or otherwise stray from the spirit of "small, useful add-ons for a local editor".

Don't have an idea but want to help? Issues tagged [`good first plugin`](https://github.com/ghulsmann/Marknote-Issues/issues?q=is%3Aopen+label%3A%22good+first+plugin%22) are user-requested plugin ideas waiting for someone to build them.

## Building your first plugin

The fastest path is to copy `marknote-demo` and edit it:

```powershell
# 1. Copy the demo into your plugins directory
Copy-Item -Recurse marknote-demo "$env:LOCALAPPDATA\Marknote\plugins\"

# 2. Rename the folder to your plugin id
Rename-Item "$env:LOCALAPPDATA\Marknote\plugins\marknote-demo" com.example.my-plugin

# 3. Edit manifest.json and main.js
# 4. Restart Marknote
```

See the [developer guide](https://marknote.co.uk/plugins/build) for the manifest schema, the full `marknote.*` API, and notes on the sandbox model.

## License

Code in this repo is published under the [MIT License](./LICENSE). When you contribute a plugin, the contents of your folder are licensed the same way unless you ship a separate `LICENSE` file inside your folder.
