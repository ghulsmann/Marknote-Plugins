// Marknote Demo plugin.
//
// Lives in this repo as a reference for the manifest format and the
// marknote.* JS API surface. To try it locally:
//   1. Copy this folder (the one containing manifest.json + main.js) into
//      %LocalAppData%\Marknote\plugins\
//   2. Restart Marknote (or open Settings → Plugins and click Reload —
//      the runtime activates plugins at startup, so a restart is the
//      reliable path for now).
//
// The `marknote` object below is supplied by the host. Each plugin gets
// its own scoped copy — registrations are attributed to the plugin id
// declared in manifest.json (uk.marknote.demo here).

// 1) A palette command. Open the palette (Ctrl+Shift+P) and search for
//    "Plugin · Show timestamp". The command appears with the "Plugin · "
//    prefix so the source is obvious.
marknote.commands.register({
  id: 'show-timestamp',
  title: 'Show timestamp',
  run() {
    marknote.notify('Plugin clock: ' + new Date().toLocaleString());
  },
});

// 2) A preview transform. Pure markdown → markdown — runs before markdig
//    sees the document. Returning a Promise<string> is also supported.
//    Here we replace `{{date}}` with today's date in YYYY-MM-DD form.
marknote.preview.onTransform(function (markdown) {
  const today = new Date().toISOString().slice(0, 10);
  return markdown.split('{{date}}').join(today);
});
