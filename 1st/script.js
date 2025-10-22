function areaOfCircle() {
    var rad = document.getElementById("radius").value;
    if (rad <= 0) {
        document.getElementById("areaOfCircle").innerHTML = "Enter positive value";
        return;
    }
    var res = 3.14 * rad * rad;
    document.getElementById("areaOfCircle").innerHTML = "Area of circle: " + res.toFixed(2);
}

function areaOfRectangle() {
    var l = document.getElementById("length").value;
    var b = document.getElementById("breadth").value;
    if (l <= 0 || b <= 0) {
        document.getElementById("areaOfRectangle").innerHTML = "Enter positive value";
        return;
    }
    var res = l * b;
    document.getElementById("areaOfRectangle").innerHTML = "Area of rectangle: " + res;
}

function areaOfTriangle() {
    var a = parseFloat(document.getElementById("side1").value);
    var b = parseFloat(document.getElementById("side2").value);
    var c = parseFloat(document.getElementById("side3").value);
    if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("areaOfTriangle").innerHTML = "All sides must be greater than zero.";
        return;
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        document.getElementById("areaOfTriangle").innerHTML = "The given sides do not form a valid triangle.";
        return;
    }
    var s = (a + b + c) / 2;
    var res = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    res = Math.ceil(res * 100) / 100;
    document.getElementById("areaOfTriangle").innerHTML = "Area of triangle: " + res;
}

function reset() {
    if (event.target.id == "circle") {
        document.getElementById("radius").value = null;
        document.getElementById("areaOfCircle").innerHTML = null;
    } else if (event.target.id == "rectangle") {
        document.getElementById("length").value = null;
        document.getElementById("breadth").value = null;
        document.getElementById("areaOfRectangle").innerHTML = null;
    }
    else {
        document.getElementById("side1").value = null;
        document.getElementById("side2").value = null;
        document.getElementById("side3").value = null;
        document.getElementById("areaOfTriangle").innerHTML = null;
    }
}
