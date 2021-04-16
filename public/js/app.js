$('#uceniciMenu').on('click', function () {
  $('.uceniciMenu').toggle();
})

function filterFunction(id, dropdown) {
  var input, filter, ul, li, a, i;
  console.log(id);
  console.log(dropdown);

  input = document.getElementById(id);
  filter = input.value.toUpperCase();
  div = document.getElementById(dropdown);
  text = div.getElementsByTagName("p");
  label = div.getElementsByTagName("label");
  img = div.getElementsByTagName("img");

  for (i = 0; i < text.length; i++) {
    txtValue = text[i].textContent || text[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      text[i].style.display = "";
      label[i].style.display = "";
      if (img[i] !== undefined) {
        img[i].style.display = "";
      }
    } else {
      text[i].style.display = "none";
      label[i].style.display = "none";
      if (img[i] !== undefined) {
        img[i].style.display = "none";
      }
    }
  }
}

//slider
$('.owl-carousel').owlCarousel({
  loop: true,
  lazyLoad: true,
  items: 1,
  smartSpeed: 1400,
  autoplayHoverPause: true,
  margin: 10,
  dots: true,
  touchDrag: false,
  mouseDrag: false,
  transitionStyle: false,

});