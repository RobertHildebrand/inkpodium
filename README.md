<p align="center"><img src="logo.svg" width="150" alt="InkPodium logo — an iP monogram with a pen nib dotting the i, standing on a winner's podium"></p>

# InkPodium

**Annotate, compose, and present PDFs — entirely in your browser.**

Live: **https://roberthildebrand.github.io/inkpodium/**

A single-file, serverless PDF studio:

- **Ink that feels right** — pressure-sensitive pen (Apple Pencil supported, with
  palm rejection), stroke smoothing, four highlighters that auto-straighten over
  text, custom colors, three widths, two erasers (whole-stroke and precision),
  full undo/redo.
- **Real annotation tools** — hand tool to grab and drag anything, lasso to
  move/resize/recolor/delete, text boxes, rectangle/ellipse/arrow shapes.
- **LaTeX & graphs** — text boxes render LaTeX (live preview, MathJax runs
  locally), and a plot dialog stamps f(x) with axes onto the page as ordinary
  vector ink — undo, lasso, or erase it like any stroke.
- **Page composition** — merge multiple PDFs, insert blank pages anywhere
  (blank, lined, grid, or dot paper — the ruling exports with the PDF),
  drag-and-drop reordering with multi-page selection, delete pages.
  Annotations follow their pages.
- **Presentation mode** — fullscreen with a labeled, auto-hiding toolbar,
  laser pointer, one-tap new whiteboard pages, every tool still live while
  you present.
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
- All JavaScript libraries (pdf.js, pdf-lib, MathJax) are vendored into this
  repository and pinned — no third-party CDN code executes. pdf.js font `eval`
  is disabled (CVE-2024-4367 mitigation).
- On shared computers, remember that browser storage is per-OS-account: use the
  erase button when you're done.

## Use

Open the site, open a PDF or start writing on blank pages. Press `?` for the
full guide.

**Install it as an app** (optional): on iPhone/iPad use Share → *Add to Home
Screen*; on Mac/Windows, Chrome and Edge show an *Install* icon in the address
bar — you get a Dock/Start-menu icon that opens in its own window and works
fully offline. Installed copies update themselves whenever the site does.

MIT licensed. Built with [pdf.js](https://mozilla.github.io/pdf.js/),
[pdf-lib](https://pdf-lib.js.org/), and [MathJax](https://www.mathjax.org/).
