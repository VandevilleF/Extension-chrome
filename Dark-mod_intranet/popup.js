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
  // Body
  const body = document.querySelector('body');

  // Panel elements
  const panelbody = document.querySelectorAll('.panel-body');
  const panelheading = document.querySelectorAll('.panel-heading');
  const panelh3 = document.querySelectorAll('.panel.panel-default .panel-heading .panel-title')
  const paneltitle = document.querySelectorAll('.panel .panel-tile');
  const panelfooter = document.querySelectorAll('.panel-footer');
  const listgroupe = document.querySelectorAll('.list-group-item');
  const precode = document.querySelectorAll('pre');

  // Navbars elements
  const layoutbar = document.getElementById('student-switch-curriculum');
  const sidebar = document.querySelectorAll('.sidebar');
  const logocontainer = document.querySelectorAll('.logo-container');
  const lastitems = document.querySelectorAll('.sidebar > ul > li:last-child');

  // Body style
  body.style.backgroundColor = '#303030';
  body.style.color ='#fefefe';

  // Change background of Navbar elements
  layoutbar.style.backgroundColor = '#404040';
  sidebar.forEach(side => {
    side.style.backgroundColor = '#404040';
  })
  logocontainer.forEach(logo => {
    logo.style.backgroundColor = '#404040';
  })
  lastitems.forEach(item => {
    item.style.backgroundColor = '#404040';
  })

  // Change color of panel project header
  paneltitle.forEach(title => {
    title.style.color = '#fefefe';
  })

  // Change background and color for heading and footer panel
  panelheading.forEach(pheading => {
    pheading.style.backgroundColor = '#404040';
    pheading.style.color = '#fefefe';
  })
  panelfooter.forEach(pfooter => {
    pfooter.style.backgroundColor = '#404040';
  })
  panelh3.forEach(ph3 => {
    ph3.style.color = '#fefefe';
  })

  // Change background and color of panel body
  panelbody.forEach(panelb => {
    panelb.style.backgroundColor = '#303030';
    panelb.style.color = '#fefefe';
  })
  listgroupe.forEach(list => {
    list.style.backgroundColor = '#303030';
  })

  // Code section like main or given code
  precode.forEach(p => {
    p.style.backgroundColor = '#333333';
    p.style.color = '#fefefe';
  })
}
