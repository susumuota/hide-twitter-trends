// SPDX-FileCopyrightText: 2023 Susumu OTA <1632335+susumuota@users.noreply.github.com>
// SPDX-License-Identifier: MIT

window.addEventListener('load', () => {
  const patterns = [
    { selector: 'div:has(> div > div > div > form[aria-label="Search Twitter"])', style: 'opacity: 0.5' },
    { selector: 'div:has(> aside[aria-label="Get Verified"])', style: 'display: none' },
    { selector: 'div:has(> div > section > div[aria-label="Timeline: Trending now"])', style: 'display: none' },
    { selector: 'div:has(> div > aside[aria-label="Who to follow"])', style: 'display: none' },
    { selector: 'div:has(> nav[aria-label="Footer"])', style: 'opacity: 0.1' },
  ];

  const root = document.querySelector('div[id="react-root"]');
  if (root === null) return;

  const observer = new MutationObserver(() => {
    patterns.forEach(({ selector, style }) => {
      const elm = root.querySelector(selector);
      if (elm === null || elm.getAttribute('style') === style) return;
      elm.setAttribute('style', style);
    });
  });

  observer.observe(root, { childList: true, subtree: true });
});
