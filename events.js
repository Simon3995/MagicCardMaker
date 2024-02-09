let inputs = document.getElementsByTagName('input');
let selects = document.getElementsByTagName('select');
let cardview = document.getElementById("cardview");

for (let input of inputs) {
    switch (input.type) {
        case "number":
            input.addEventListener("change", function(e) {
                card[e.target.id] = e.target.value;
            }, false);
        case "text":
            input.addEventListener("keyup", function(e) {
                card[e.target.id] = e.target.value;
            }, false);
            break;
        case "checkbox":
            input.addEventListener("change", function(e) {
                card[e.target.id] = e.target.checked;
            }, false);
            break;
    }
}

for (let select of selects) {
    select.addEventListener("change", function(e) {
        card[e.target.id] = e.target.value;
    }, false);
}

document.getElementById("description").onkeyup = (e) => {
    card["description"] = e.target.value;
}

cardview.ondragover = (e) => {
    e.preventDefault();
}

cardview.ondrop = (e) => {
    e.preventDefault();

    card.img.src = URL.createObjectURL(e.dataTransfer.files[0]);
}