document.getElementById("copyPlainText").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.runtime.sendMessage({ action: "copyPlainText", tab: tabs[0] });
    window.close();
  });
});

document.getElementById("copyMarkdown").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.runtime.sendMessage({ action: "copyMarkdown", tab: tabs[0] });
    window.close();
  });
});
