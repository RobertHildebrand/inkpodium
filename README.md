# OpenMarkup

**Annotate, compose, and present PDFs — entirely in your browser.**

Live: **https://roberthildebrand.github.io/openmarkup/**

A single-file, serverless PDF studio:

- **Ink that feels right** — pressure-sensitive pen (Apple Pencil supported, with
  palm rejection), stroke smoothing, four highlighters that auto-straighten over
  text, custom colors, three widths, two erasers (whole-stroke and precision),
  full undo/redo.
- **Real annotation tools** — lasso to move/resize/recolor/delete, text boxes,
  rectangle/ellipse/arrow shapes.
- **Page composition** — merge multiple PDFs, insert blank pages anywhere,
  drag-and-drop reordering, delete pages. Annotations follow their pages.
- **Presentation mode** — fullscreen with auto-hiding controls, laser pointer,
  every tool still live while you present.
- **True vector export** — one click downloads a real annotated PDF: your ink
  becomes vector paths inside the original file, text stays selectable and
  searchable, quality is never diminished.
- **Search, thumbnails, recents, session resume.**

## Privacy & security

- **Your documents never leave your device.** There is no server, no account,
  no upload, no telemetry. Files are read with the browser's file API and
  processed entirely locally.
- Annotations and cached documents live in your own browser storage
  (localStorage / IndexedDB); an **"Erase ALL my data"** button removes
  everything.
- All JavaScript libraries (pdf.js, pdf-lib) are vendored into this repository
  and pinned — no third-party CDN code executes. pdf.js font `eval` is disabled
  (CVE-2024-4367 mitigation).
- On shared computers, remember that browser storage is per-OS-account: use the
  erase button when you're done.

## Use

Open the site (works offline after first load on most browsers), open a PDF or
start writing on blank pages. Press `?` for the full guide.

MIT licensed. Built with [pdf.js](https://mozilla.github.io/pdf.js/) and
[pdf-lib](https://pdf-lib.js.org/).
