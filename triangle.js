function caculate_the_area_triangle() {
    var base = document.getElementById('base').value;
    var height = document.getElementById('height_triangle').value;
    var area = (parseInt(base)*parseInt(height))/2;
    document.getElementById('rs').innerHTML = "area of triangle: " + area;
}
function caculate_the_perimeter_triangle() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var perimeter = parseInt(a)+parseInt(b)+parseInt(c)
    document.getElementById('rs').innerHTML = "perimeter of triangle: " + perimeter;

}