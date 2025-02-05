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
    div.style.backgroundColor = 'red';
  })
}
