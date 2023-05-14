# Hide Twitter Trends

Hide Twitter trends on the sidebar (`What's happening`).

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
    { selector: 'div:has(> div > div > div > form[aria-label="Search Twitter"])', style: 'opacity: 0.5' },
    { selector: 'div:has(> div > section > div[aria-label="Timeline: Trending now"])', style: 'display: none' },
    { selector: 'div:has(> div > aside[aria-label="Who to follow"])', style: 'display: none' },
    { selector: 'div:has(> nav[aria-label="Footer"])', style: 'opacity: 0.1' },
  ];
```

## License

MIT License. See [LICENSE](LICENSE) for details.

## Author

Susumu OTA

