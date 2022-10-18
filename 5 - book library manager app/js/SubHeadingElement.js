export function SubHeadingElement() {
  let subheadingElement = document.querySelector(".subheading");

  this.getSubheading = function () {
    return subheadingElement.innerHTML;
  };

  this.setSubheading = function (theSubheading) {
    subheadingElement.innerHTML = theSubheading;
  };
}
