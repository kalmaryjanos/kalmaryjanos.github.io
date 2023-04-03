
var player = 0;
var computer = 0;

function alert_box(ertek, value) 
{
    if (ertek == value) {
        alert("DÖNTETLEN!");    
    }
    else if ((ertek == 0 && value == 2) || (ertek == 1 && value == 0) || (ertek == 2 && value == 1)) {
        alert("VESZTETTÉL!")
        computer = computer + 1;
        document.getElementById("num_1").innerHTML = computer;
    }
    else {
        alert("NYERTÉL!")
        player = player + 1;
        document.getElementById("num_2").innerHTML = player;
    }
    }


function generate_value(value) 
{
    var ertek = Math.floor(Math.random() * 3)
    alert_box(ertek, value);
}

function stone() 
{
    var ko = 0;
    generate_value(ko)    
}

function paper() 
{
    var papir = 1;
    generate_value(papir)    
}


function scissors() 
{
    var ollo = 2;
    generate_value(ollo)    
}