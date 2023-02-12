function caculate_the_perimeter() {
var width = document.getElementById('width').value;
var height = document.getElementById('height').value;
var perimeter = (parseInt(width) + parseInt(height))*2;
document.getElementById('rs').innerHTML = "perimeter of rechtangle: " + perimeter;
}
function caculate_the_area() {
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var area = parseInt(width) * parseInt(height);
document.getElementById('rs').innerHTML ="area of rechtangle: " + area;
}