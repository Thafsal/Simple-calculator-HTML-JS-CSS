var screen = document.getElementById("screen")

function Btnclick (value){
    screen.value += value;
}

function Clearscreen(){
    screen.value = "";
}

function findResult(){
    var result = eval(screen.value)
    screen.value = result;
}