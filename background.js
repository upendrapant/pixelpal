chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.colors && message.fonts) {
      // Pass data to the popup
      chrome.runtime.sendMessage(message);
    }
  });
  