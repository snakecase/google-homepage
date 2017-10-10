function dropdown() {
    var element = document.getElementById("dropdown"),
    style = window.getComputedStyle(element),
    display = style.getPropertyValue('display');
    if (display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}