chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("intranet.hbtn.io")) {
    chrome.storage.sync.get("darkMode", (data) => {
      if (data.darkMode) {
        chrome.scripting.insertCSS({
          target: { tabId: tabId },
          files: ["dark-mode.css"]
        });
      }
    });
  }
});
