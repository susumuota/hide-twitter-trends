# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## Project

Chrome extension (Manifest V3) that hides sidebar elements on x.com / twitter.com — trends, "Who to follow", premium signup, news sidebar, Grok/DM drawers, etc. The entire extension is `manifest.json` + `content.js`; there is no build step, no package manager, no test suite.

## Loading / testing changes

Reload the unpacked extension in `chrome://extensions` (Developer mode → Load unpacked → this folder), then refresh an x.com tab to see the effect. There is no `npm` / lint / test command — verification is manual in the browser. Style-set events are logged via `console.debug` in the page console.

## Architecture

`content.js` runs at page load on x.com / twitter.com. It defines a list of `{ selector, style }` patterns, locates `div#react-root`, and attaches a single `MutationObserver` over the whole subtree. On every mutation it re-applies each pattern's inline `style` to the first matching element (skipping if already set). This is the mechanism that keeps elements hidden as Twitter's SPA re-renders the sidebar.

Selectors rely heavily on CSS `:has()` to anchor on stable child attributes (`data-testid`, `aria-label`, `href`) rather than Twitter's volatile class names — when X changes its DOM, the fix is almost always a selector tweak in `content.js`, not a structural change. Recent commits (`fix: news sidebar query pattern`, `feat: improve premium signup selector`) follow this pattern.

`style` values are chosen per element: `display: none` removes from layout, `visibility: hidden` preserves layout, `opacity: <n>` keeps interactivity (used for the search box and footer so links remain clickable).

Bump `manifest.json`'s `version` when shipping user-visible changes.
