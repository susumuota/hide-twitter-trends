// SPDX-FileCopyrightText: 2023-2025 Susumu OTA <1632335+susumuota@users.noreply.github.com>
// SPDX-License-Identifier: MIT

window.addEventListener('load', () => {
  const patterns = [
    { selector: 'div:has(> div > div > div > form[aria-label="Search"])', style: 'opacity: 0.8' },
    { selector: 'div:has(> div > aside[aria-label="Subscribe to Premium"])', style: 'display: none' },
    { selector: 'div:has(> section > div[aria-label="Timeline: Trending now"])', style: 'display: none' },
    { selector: 'div:has(> div > aside[aria-label="Who to follow"])', style: 'display: none' },
    { selector: 'div:has(> nav[aria-label="Footer"])', style: 'opacity: 0.1' },
    { selector: 'div:has(> div[data-testid="DMDrawer"])', style: 'display: none' },
    { selector: 'div:has(> div[data-testid="GrokDrawer"])', style: 'display: none' },
  ];

  const root = document.querySelector('div[id="react-root"]');
  if (root === null) return;

  const observer = new MutationObserver(() => {
    patterns.forEach(({ selector, style }) => {
      const elm = root.querySelector(selector);
      if (elm === null || elm.getAttribute('style') === style) return;
      elm.setAttribute('style', style);
      console.debug(`set style: ${style} for ${selector}`);
    });
  });

  observer.observe(root, { childList: true, subtree: true });
});
