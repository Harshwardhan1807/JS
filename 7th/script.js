let arrayElements = [];
let maxSize = 0;

function addElement() {
    const val = document.getElementById("elementInput").value.trim();
    const output = document.getElementById("elementOutput");
    const final = document.getElementById("finalArray");

    maxSize = parseInt(document.getElementById("size").value);
    if (!val) return;

    if (arrayElements.length >= maxSize) {
        output.textContent = "Overflow: Array has reached maximum size.";
        return;
    }

    let element;
    try {
        element = JSON.parse(val);
    } catch {
        element = val;
    }

    arrayElements.push(element);
    output.textContent = "Element added successfully.";
    final.textContent = JSON.stringify(arrayElements);
    document.getElementById("elementInput").value = "";
}

function checkIfArray() {
    const index = parseInt(document.getElementById("indexInput").value);
    const output = document.getElementById("checkOutput");

    if (index >= 0 && index < arrayElements.length) {
        output.textContent = `Index ${index} is array: ${Array.isArray(arrayElements[index])}`;
    } else {
        output.textContent = "Invalid index.";
    }
}

function setArray() {
    const size = parseInt(document.getElementById("size").value);
    const message = document.getElementById("setMessage");
    const final = document.getElementById("finalArray");

    if (isNaN(size) || size < 1) {
        alert("Please enter a valid size greater than 0.");
        return;
    }
    message.textContent = `Array set to size ${size}.`;
    final.textContent = '[]';
}