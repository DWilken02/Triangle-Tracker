//Business Logic
function checkType(side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return "This is not a triangle";
  } else if (side1 === side2 && side3 === side1) {
    return "This triangle is Equilateral";
  } else if (side2 === side1 || side3 === side2 || side1 === side3) {
    return "This triangle is Isosceles";
  } else if (side3 !== side1 && side3 !== side2 && side1 !== side2) {
    return "This triangle is Scalene";
  } else {
    return "This is not a triangle";
  }
}

//UI Logic
window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const side1Length = parseInt(document.getElementById("triangle1Input").value);
    const side2Length = parseInt(document.getElementById("triangle2Input").value);
    const side3Length = parseInt(document.getElementById("triangle3Input").value);
    const triangleType = checkType(side1Length, side2Length, side3Length);
    document.getElementById("output").innerText = triangleType;
  }
}