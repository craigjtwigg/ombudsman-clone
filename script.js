const top1 = document.getElementById('topnav1');
const sub1 = document.getElementById('subnav1');

const top2 = document.getElementById('topnav2');
const sub2 = document.getElementById('subnav2');


const allTopNavs = document.querySelectorAll('.topnav');
const allSubNavs = document.querySelectorAll('.subnav');
const topNavArr = [...allTopNavs];
const subNavArr = [...allSubNavs];

function expandDropDown(topnav, subnav) {
  topnav.addEventListener('click', expandMe);
  function expandMe() {
    removeCollapseEvent(subnav);
    checkForActive();
    subnav.classList.toggle(getSubNavClass(subnav));
    collapseDropDown(topnav, subnav);
  }
  return {
    expandMe,
  };
}

function collapseDropDown(topnav, subnav) {
  topnav.addEventListener('click', collapseMe);
  function collapseMe() {
    removeExpandEvent(topnav);
    removeActive(subnav);
    expandDropDown(topnav, subnav);
  }
  return {
    collapseMe,
  };
}

function removeExpandEvent(topnav) {
  topnav.removeEventListener('click', expandDropDown.expandMe);
}

function removeCollapseEvent(subnav) {
  subnav.removeEventListener('click', collapseDropDown.collapseMe);
}

function removeActive(subnav) {
  subnav.classList.remove(getSubNavClass(subnav));
}

function checkForActive() {
  subNavArr.forEach((nav) => removeActive(nav));
}

function getSubNavClass(subNav) {
  return subNav.id;
}

expandDropDown(top1, sub1);
expandDropDown(top2, sub2);
expandDropDown(top3, sub3);