chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "plainText",
    title: "Copy as Plain Text",
    contexts: ["all"]
  });
  chrome.contextMenus.create({
    id: "markdown",
    title: "Copy as Markdown",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "plainText") {
    copyAsPlainText(tab);
  } else if (info.menuItemId === "markdown") {
    copyAsMarkdown(tab);
  }
});

function copyAsPlainText(tab) {
  // Check if the URL matches the target URL
  if (!tab.url.startsWith("https://example.com/")) {
    return;
  }

  const title = tab.title;
  const url = tab.url;
  const text = `${title}\n${url}`;
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Copied as plain text:', text);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
    });
}

function copyAsMarkdown(tab) {
  // Check if the URL matches the target URL
  if (!tab.url.startsWith("https://example.com/")) {
    return;
  }

  const title = tab.title;
  const url = tab.url;
  const markdown = `[${title}](${url})`;
  navigator.clipboard.writeText(markdown)
    .then(() => {
      console.log('Copied as Markdown:', markdown);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
    });
}
