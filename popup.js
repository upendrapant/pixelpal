document.getElementById('extract').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          files: ['content.js']
        },
        () => {
          console.log("Script injected.");
        }
      );
    });
  });
chrome.runtime.onMessage.addListener((message) => {
    if (message.colors) {
      const colorsContainer = document.getElementById('colors');
      colorsContainer.innerHTML = '';
      message.colors.forEach((color) => {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        colorsContainer.appendChild(colorDiv);
      });
    }
  
    if (message.fonts) {
      const fontsList = document.getElementById('fonts');
      fontsList.innerHTML = '';
      message.fonts.forEach((font) => {
        const fontItem = document.createElement('li');
        fontItem.textContent = font;
        fontsList.appendChild(fontItem);
      });
    }
  });


  