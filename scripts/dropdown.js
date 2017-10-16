function dropdown(num) {
    var element = document.getElementById("result-dropdown" + num),
    style = window.getComputedStyle(element),
    display = style.getPropertyValue('display');
    if (display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}