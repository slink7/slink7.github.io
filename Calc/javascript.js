var first_value = 0;
var current_value = 0;
var result = 0;
var first_number = true;
var operator = '';

function update_screen(){
    var screen = document.getElementById("screen");
    switch(operator){
        case '+': result = first_value + current_value; break;
        case '-': result = first_value - current_value; break;
        case '*': result = first_value * current_value; break;
        case '/': result = first_value / current_value; break;
        default: result = 0;
    }
    screen.innerHTML = first_value + "</br>" + operator + " " + current_value + "</br>" + result;
}

window.onload = function() {

    for(var k = 0;k<10;k++){
        var btn = document.getElementById("btn"+k);
        console.log("btn"+k)
        btn.onclick = function() {
            current_value*=10;
            current_value+= +this.innerHTML;
            update_screen();
        }
    }

    var operators = ['+','-','*','/'];
    operators.forEach(element => {
        var btn = document.getElementById("btn"+element);
        btn.onclick = function() {
            operator = this.innerHTML;
            if(first_number) { 
                first_number = false;
                first_value = current_value;
            } else {
                first_value = result;
            }

            current_value = 0;
            
            update_screen();
        }
    });

    document.getElementById("btnCE").onclick = function() {
        current_value = 0;
        first_value = 0;
        first_number = true;
        operator = '';
        update_screen();
    }

    document.getElementById("btnBack").onclick = function() {
        current_value = Math.floor(current_value/10);
        update_screen();
    }

};