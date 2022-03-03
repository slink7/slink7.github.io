
var messages = [
    "Reussite Critique",
    "Reussite",
    "Beau gosse",
    "Pas mal",
    "Bien",
    "Bof",
    "Bouh !",
    "Trop nul",
    "Tu as un cancer",
    "Defaite critique",
]

var max_value = 10, current_value = 0, previous_value = 0, mean = 0.0;
var sum = 0, count = 0;

function update_display() {
    document.getElementById("max-value").innerHTML = max_value;
    document.getElementById("current-value").innerHTML = current_value;
    document.getElementById("previous-value").innerHTML = previous_value;
    document.getElementById("mean-value").innerHTML = mean;
    var prctg = current_value/max_value;
    document.getElementById("commentary").innerHTML = messages[Math.round((messages.length-1)*prctg)];
    document.getElementById("commentary").style.color = "rgb("+prctg*255+","+(1-prctg)*255+",0)";
    document.getElementById("commentary").style.textShadow = "rgb("+prctg*255+","+(1-prctg)*255+",0) 0 0 10px";
}

window.onload = function() {
    document.getElementById("btnm1").onclick = function() {
        max_value-=1;
        update_display();
    }
    document.getElementById("btnm10").onclick = function() {
        max_value-=10;
        update_display();
    }
    document.getElementById("btnm100").onclick = function() {
        max_value-=100;
        update_display();
    }
    document.getElementById("btnp1").onclick = function() {
        max_value+=1;
        update_display();
    }
    document.getElementById("btnp10").onclick = function() {
        max_value+=10;
        update_display();
    }
    document.getElementById("btnp100").onclick = function() {
        max_value+=100;
        update_display();
    }
    document.getElementById("btnGENERATE").onclick = function() {
        previous_value = current_value;
        current_value = Math.round(Math.random()*max_value);
        sum += current_value;
        count++;
        mean = Math.round(100 * sum / count)/100;
        update_display();
    }
}