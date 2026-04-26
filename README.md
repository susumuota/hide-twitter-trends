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

Edit selectors and styles directly in [content.css](content.css). `display: none` hides the element completely and changes the layout. `visibility: hidden` makes it invisible but still keeps the layout. `opacity: 0.1` just makes it transparent (e.g. links are still clickable). `!important` is used so the rules win against Twitter's inline styles.

```css
div:has(> div > div > div > form[aria-label="Search"]) { opacity: 0.8 !important; }
div:has(> div > div > div > div > a[href="/i/premium_sign_up"] > div > span > div > span > span) { display: none !important; }
div:has(> div[data-testid="news_sidebar"]) { display: none !important; }
div:has(> section > div[aria-label*="Timeline: Trending now"]) { display: none !important; }
div:has(> div > aside[aria-label*="Who to follow"]) { display: none !important; }
div:has(> div[data-testid="GrokDrawer"]) { display: none !important; }
div:has(> div[data-testid="DMDrawer"]) { display: none !important; }
div:has(> nav[aria-label="Footer"]) { opacity: 0.1 !important; }
```

## License

MIT License. See [LICENSE](LICENSE) for details.

## Author

Susumu OTA
- https://github.com/susumuota
