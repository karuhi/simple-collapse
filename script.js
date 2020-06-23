function toggleShowStatus(element) {
  var next = element.nextElementSibling;
  next.classList.toggle("active");
  var last = element.lastElementChild;
  last.classList.toggle("active");
}
