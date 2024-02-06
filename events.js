let inputs = document.getElementsByTagName('input');
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