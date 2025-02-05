// Purpose: This file is responsible for changing the background color of all divs on the current tab to #303030 when the button is clicked.
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('changeColor').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: changeDivBackgrounds
      })
    })
  })
})

function changeDivBackgrounds() {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    div.style.backgroundColor = '#303030';
  })
}
