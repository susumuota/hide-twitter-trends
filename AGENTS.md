# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## Project

Chrome extension (Manifest V3) that hides sidebar elements on x.com / twitter.com — trends, "Who to follow", premium signup, news sidebar, etc. The extension is just `manifest.json` + `content.css`; there is no JS, no build step, no package manager, no test suite.

Selectors are written per UI language: when an `aria-label` is the anchor (e.g. `"Who to follow"`), a parallel rule with the localized label (e.g. `"関連性の高いアカウント"`) is needed. Language-independent anchors (`data-testid`, `href`) only need one rule.

## Loading / testing changes

Reload the unpacked extension in `chrome://extensions` (Developer mode → Load unpacked → this folder), then refresh an x.com tab to see the effect. There is no `npm` / lint / test command — verification is purely visual in the browser.

## Architecture

Chrome injects `content.css` as a content-script stylesheet on x.com / twitter.com. Each rule uses CSS `:has()` to anchor on stable child attributes (`data-testid`, `aria-label`, `href`) rather than Twitter's volatile class names — so when X changes its DOM, the fix is almost always a selector tweak in `content.css`.

All declarations use `!important` to win against Twitter's inline styles. Hide-style choices are deliberate per element:
- `display: none` — removes from layout (most sidebar widgets)
- `opacity: <n>` — keeps the element interactive (search box at 0.8, footer at 0.2)

Bump `manifest.json`'s `version` when shipping user-visible changes.

## Commit messages

- Single line only — no body.
- Do not append a `Co-Authored-By:` trailer.

## History note

Prior versions (≤1.x) used `content.js` with a `MutationObserver` over `#react-root` to re-apply inline styles on every DOM mutation. v2.0.0 replaced that with a static stylesheet — the observer is no longer needed because CSS rules apply continuously regardless of SPA re-renders. If a future Twitter change applies an inline style we cannot beat with `!important`, the observer approach can be reintroduced for that single rule.
