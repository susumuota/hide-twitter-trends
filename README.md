# Hide Twitter Trends

Hide `What’s happening`, `Who to follow`, `Subscribe to Premium` and more on the Twitter sidebar.

## Installation

- Open Terminal and type,

```sh
git clone https://github.com/susumuota/hide-twitter-trends.git
```

- Open Chrome's extensions setting page `chrome://extensions`.
- Turn `Developer mode` on.
- Click `Load unpacked`.
- Specify the folder `/path/to/hide-twitter-trends`.

## Settings

Specify `selector` and `style` in [content.js](content.js). `display: none` hides the element completely and changes the layout. `visibility: hidden` makes it invisible but still keeps the layout. `opacity: 0.1` just makes it transparent (e.g. links are still clickable).

```javascript
  const patterns = [
    { selector: 'div:has(> div > div > div > form[aria-label="Search"])', style: 'opacity: 0.8' },
    { selector: 'div:has(> div > div > div > div > a[href="/i/premium_sign_up"]', style: 'display: none' },
    { selector: 'div:has(> div > button[aria-label*="Space"])', style: 'display: none' },
    { selector: 'div:has(> section > div[aria-label*="Timeline: Trending now"])', style: 'display: none' },
    { selector: 'div:has(> div > aside[aria-label*="Who to follow"])', style: 'display: none' },
    { selector: 'div:has(> nav[aria-label="Footer"])', style: 'opacity: 0.1' },
    { selector: 'div:has(> div[data-testid="DMDrawer"])', style: 'display: none' },
    { selector: 'div:has(> div[data-testid="GrokDrawer"])', style: 'display: none' },
  ];
```

## License

MIT License. See [LICENSE](LICENSE) for details.

## Author

Susumu OTA
- https://github.com/susumuota
