function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  //Tabs
  const tabs = document.querySelectorAll(tabsSelector),
    tabContent = document.querySelectorAll(tabsContentSelector),
    tabParent = document.querySelector(tabsParentSelector);
  function hideAllTabs() {
    tabContent.forEach((item, i) => {
      //item.style.display = 'none';
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTab(i = 0) {
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }
  hideAllTabs();
  showTab();
  tabParent.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideAllTabs();
          showTab(i);
        }
      });
    }
  })
}

export default tabs;
