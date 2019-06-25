window.onload = main;

function main() {
    btn = document.getElementById("build");
    btn.onclick = build;
}

function build() {
    listbox = document.getElementById("list");
    output = document.getElementById("output");
    errors = document.getElementById("errors");

    output.innerHTML = "";
    errors.innerHTML = "";

    text = listbox.value;
    list = text.split('\n');

    list.forEach(function(card){
        num = parseInt(card.substr(0, card.indexOf(" ")));
        name = card.substr(card.indexOf(" ")+1);
        name = name.replace(/\s/g, '');

        for (i=0; i<num; i++){
            img = output.appendChild(document.createElement("img"));
            img.data = name;
            img.src = "cards/"+name+".jpg"

            img.onerror = function() { 
                this.parentNode.removeChild(this);  
                errors.innerHTML += "<li class='error'>Error: sorry, could not find card " + this.data + "</li>"; 
            };
        }
    });
}
