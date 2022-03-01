//finds element by id
//document.getElementById(id) 

//finds elements by class name
//document.getElementsByClassName(name) 

//finds elements by tag name
//document.getElementsByTagName(name)

//calling the function in window.onload to make sure the HTML is loaded

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
    }
    screen.innerHTML = first_value + "</br>" + operator + " " + current_value + "</br>" + result;
}

window.onload = function() {

    for(var k = 0;k<10;k++){
        var btn = document.getElementById("btn"+k);
        console.log("btn"+k)
        btn.onclick = function() {
            console.log(this.innerHTML);
            current_value*=10;
            current_value+= +this.innerHTML;
            update_screen();
        }
    }

    var operators = ['+','-','*','/'];
    operators.forEach(element => {
        var btn = document.getElementById("btn"+element);
        btn.onclick = function() {
            console.log(this.innerHTML);
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

};

