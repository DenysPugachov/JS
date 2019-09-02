// let parentTabDiv = document.querySelector(".info-header"),
//   tabs = document.querySelectorAll(".info-header-tab"),
//   tabContent = document.querySelectorAll(".info-tabcontent");

function changeTab(parentTabDiv, tabs, tabContent) {
  function hideTabs(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabs(1);

  function showTab(b) {
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }

  parentTabDiv.addEventListener("click", function(e) {
    let target = e.target;
    if (target && target.matches(".info-header-tab")) {
      tabs.forEach(function(item, i) {
        if (target == tabs[i]) {
          hideTabs(0);
          showTab(i);
        }
      });
    }
  });
}
changeTab(parentTabDiv, tabs, tabContent);
