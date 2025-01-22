# Link Copy Chrome Extension

A Chrome extension that allows you to easily copy the current page's title and URL in either plain text or Markdown format.

## Features

- Copy page information through the context menu (right-click)
- Copy page information through the popup menu (toolbar icon)
- Two copy formats supported:
  - Plain Text: Copies title and URL on separate lines
  - Markdown: Copies as a Markdown link format

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the extension directory

## Usage

### Context Menu

1. Right-click anywhere on a webpage
2. Select either:
   - "Copy as Plain Text" to copy in plain text format
   - "Copy as Markdown" to copy in Markdown format

### Popup Menu

1. Click the extension icon in the Chrome toolbar
2. Choose either:
   - "Copy as Plain Text" to copy in plain text format
   - "Copy as Markdown" to copy in Markdown format

## Output Format Examples

### Plain Text Format
```
Page Title
https://example.com
```

### Markdown Format
```
[Page Title](https://example.com)
```

## File Structure

```
.
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── src/
│   ├── background.js
│   ├── popup.html
│   ├── popup.js
│   └── styles/
│       └── popup.css
└── manifest.json
```

## Permissions Required

- `activeTab`: To access the current tab's information
- `contextMenus`: To add items to the right-click context menu
- `clipboardWrite`: To copy text to clipboard
- `scripting`: To execute scripts in the current tab

## Development

To modify or enhance the extension:

1. Make your changes to the source files
2. Go to `chrome://extensions/`
3. Click the reload button on the extension card
4. Test your changes

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
