chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyPlainText",
    title: "Copy as Plain Text",
    contexts: ["all"],
  });
  chrome.contextMenus.create({
    id: "copyMarkdown",
    title: "Copy as Markdown",
    contexts: ["all"],
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copyPlainText" || request.action === "copyMarkdown") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const format = request.action === "copyPlainText" ? "plain" : "markdown";
      copyPageInfo(tabs[0], format);
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copyPlainText") {
    copyPageInfo(tab, "plain");
  } else if (info.menuItemId === "copyMarkdown") {
    copyPageInfo(tab, "markdown");
  }
});

function copyPageInfo(tab, format) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: (format) => {
      const title = document.title;
      const url = document.URL;
      let textCopy = "";
      if (format === "plain") {
        textCopy = `${title}\n${url}`;
      } else if (format === "markdown") {
        textCopy = `[${title}](${url})`;
      }


      navigator.clipboard
        .writeText(textCopy)
        .then(() => {
          console.log("Copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    },
    args: [format],
  });
}
