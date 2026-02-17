# @xyflow/react interactive-nodes repro

Minimal Next.js (App Router) sandbox to reproduce and fix the **interactive-nodes** bug: clicks on buttons/inputs inside custom nodes don’t work (or trigger pan) when the library’s default pointer-events are in effect.

## Run

```bash
npm install
npm run dev
```

Open the app and use the node: click the button, type in the input. With the fix applied (default), both work and the node is draggable.

## Bug vs fix

- **Bug:** The library sets `.react-flow__viewport` and `.react-flow__nodes` to `pointer-events: none`, and the overlay `.react-flow__viewport-portal` can catch clicks. Result: clicks never reach the node’s button/input.
- **Fix:** Override so viewport and nodes get `pointer-events: auto`, and the viewport-portal gets `pointer-events: none !important` so it doesn’t block. Interactive elements inside nodes use `nodrag` / `nopan` and get appropriate pointer-events/cursors.

## Toggle in this repo

- **See the bug:** In `app/page.tsx`, comment out the line `import './fix.css'`. Reload; the node’s button and input will no longer receive clicks.
- **See the fix:** Ensure `import './fix.css'` is present (after `import './force-bug.css'`). The fix is applied by default.

CSS load order in the page is important: library → `force-bug.css` → `fix.css`. `force-bug.css` forces the broken state so the bug is reproducible regardless of app CSS order; `fix.css` then overrides it (viewport-portal must use `!important` to win).

## Layout

The canvas is embedded in a card (flex, overflow hidden, constrained height) so the repro matches real apps where the flow lives inside a constrained container rather than full viewport.
