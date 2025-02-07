// Purpose: This file is responsible for changing the background color of all divs on the current tab to #303030 when the button is clicked.
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle').addEventListener('click', () => {
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

  // BoxShadow panel
  const panelsboxshadow = document.querySelectorAll('.panel.panel-default');
  const panelheaderboxshadow = document.querySelectorAll('.project-header');
  const projectcircle = document.querySelectorAll('.project-circle');
  const userselecttime = document.querySelectorAll('.user-select-none');

  // Navbars elements
  const layoutbar = document.getElementById('student-switch-curriculum');
  const sidebar = document.querySelectorAll('.sidebar');
  const logocontainer = document.querySelectorAll('.logo-container');
  const lastitems = document.querySelectorAll('.sidebar > ul > li:last-child');

  // Home page
  const progressinfo = document.querySelectorAll('.progress-information');
  const summarycard = document.querySelectorAll('.summary-card');
  const rectbackground = document.querySelectorAll('.highcharts-background');

  // Modal Content
  const modalcontent = document.querySelectorAll('.modal-content');

  // Start changing the background color of all elements
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

  // Change home page
  progressinfo.forEach(progress => {
    progress.style.backgroundColor = '#303030';
  })
  summarycard.forEach(card => {
    card.style.backgroundColor = '#303030';
    card.style.borderColor = 'rgba(254, 254, 254, 0.5)';
    card.style.boxShadow = '5px 5px 10px 1px rgba(254, 254, 254, 0.1)';
  })
  rectbackground.forEach(rect => {
    rect.setAttribute('fill', '#303030');
  })

  // Change box shadow of panel
  panelsboxshadow.forEach(panel => {
    panel.style.boxShadow = '5px 5px 10px 1px rgba(254, 254, 254, 0.1)';
    panel.style.backgroundColor = '#303030';
    panel.style.borderColor = 'rgba(254, 254, 254, 0.5)';
  })
  panelheaderboxshadow.forEach(panel => {
    panel.style.boxShadow = '5px 5px 10px 1px rgba(254, 254, 254, 0.1)';
  })
  projectcircle.forEach(circle => {
    circle.style.boxShadow = '10px 20px 10px rgba(64, 64, 64, 0.5)';
  })
  userselecttime.forEach(time => {
    time.style.boxShadow = '0px 0px 10px 2px rgba(64, 64, 64, 0.5)';
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

  // Modal content
  modalcontent.forEach(modal => {
    modal.style.boxShadow = '0 5px 15px rgba(254, 254, 254, 0.5)';
  })
  const style = document.createElement('style');
  style.innerHTML = `
  .modal-header { background-color: #404040 !important; }
  .modal-header .close { color: #fefefe !important; }
  .modal-body { background-color: #303030 !important; }
  `;
  document.head.appendChild(style);
}
