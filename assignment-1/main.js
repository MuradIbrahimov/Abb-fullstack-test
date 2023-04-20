hideAllContent();
// addId();
// function addId() {
//   const contents = document.getElementsByClassName(`tab`);
//   for (let i = 0; i < contents.length; i++) {
//     console.log(contents[i]);
//     contents[i].addId(`${i} + 1`);
//   }
// }
function showContent(id) {
  const content = document.getElementById(`content-${id}`);
  hideAllContent();
  content.classList.remove("hidden");
  content.classList.add("d-flex");

  removeAllActive();
  event.target.classList.add("active");
  // this.classlist.add("active");
}
function hideAllContent() {
  const contents = document.getElementsByClassName("content");
  for (let i = 0; i < contents.length; i++) {
    let content = contents[i];
    content.classList.remove("d-flex");
    content.classList.add("hidden");
  }
}

function removeAllActive() {
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    tab.classList.remove("active");
  }
}
