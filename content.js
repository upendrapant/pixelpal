(() => {
    // Extract colors from the page
    const colors = [...new Set(
      Array.from(document.querySelectorAll('*'))
        .map((el) => getComputedStyle(el).backgroundColor)
        .filter((color) => color && color !== 'rgba(0, 0, 0, 0)')
    )];
  
    // Extract fonts from the page
    const fonts = [...new Set(
      Array.from(document.querySelectorAll('*'))
        .map((el) => getComputedStyle(el).fontFamily)
    )];
  
    // Send data back to the popup
    chrome.runtime.sendMessage({ colors, fonts });
  })();
  