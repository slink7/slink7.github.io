
var messages = [
    "Wow",
    "Boloss",
]

var max_value = 10, current_value = 0, previous_value = 0, mean = 0.0;
var sum = 0, count = 0;

function update_display() {
    var e = document.getElementById("max-value");
    e.innerHTML = max_value;
    e = document.getElementById("current-value");
    e.innerHTML = current_value;
    e = document.getElementById("previous-value");
    e.innerHTML = previous_value;
    e = document.getElementById("mean-value");
    e.innerHTML = mean;
}

window.onload = function() {
    var btn;
    btn = document.getElementById("btnm1");
    btn.onclick = function() {
        max_value-=1;
        update_display();
    }
    btn = document.getElementById("btnm10");
    btn.onclick = function() {
        max_value-=10;
        update_display();
    }
    btn = document.getElementById("btnm100");
    btn.onclick = function() {
        max_value-=100;
        update_display();
    }
    btn = document.getElementById("btnp1");
    btn.onclick = function() {
        max_value+=1;
        update_display();
    }
    btn = document.getElementById("btnp10");
    btn.onclick = function() {
        max_value+=10;
        update_display();
    }
    btn = document.getElementById("btnp100");
    btn.onclick = function() {
        max_value+=100;
        update_display();
    }
    btn = document.getElementById("btnGENERATE");
    btn.onclick = function() {
        previous_value = current_value;
        current_value = Math.round(Math.random()*max_value);
        sum += current_value;
        count++;
        mean = Math.round(100 * sum / count)/100;
        update_display();
    }
}