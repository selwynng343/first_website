
// finds all .collapsible in the html and then adds another class collapsible --expanded right after .collapsible class

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);