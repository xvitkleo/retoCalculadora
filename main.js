let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let historialDisplay = document.querySelector(".historial");
let input="";
let operando="";
let historial="";
let operar=false;
let resultar=false;
let operSeguido=false;
let resultado;
buttons.forEach(a => a.addEventListener('click', function() {    
    if(a.textContent=="AC") {
        input="";
        historial="";
        operar=false;
        resultar=false;
        resultado=0;
        display.textContent = 0;
        historialDisplay.textContent=historial;
    }
    else if(a.textContent=="+/-") {
        input = (parseInt(input)*-1).toString();
        display.textContent = input;
        historialDisplay.textContent=historial;
    }
    else if("1234567890.".includes(a.textContent) && a.textContent!="") 
    {          
        if(resultar) 
        {
            input="";  
            resultar=false;
        }
        input=input.concat(a.textContent);
        display.textContent = input;
        historialDisplay.textContent=historial;
        operSeguido=false;
    }
    else if(a.firstChild.className!="fas fa-equals"){                
        switch (a.firstChild.className) {
            case "fas fa-divide": 
                operando="/";
                break;
            case "fas fa-times":
                operando="*";
                break;
            case "fas fa-minus":
                operando="-";
                break;
            case "fas fa-plus":
                operando="+";
                break;
            case "fas fa-percentage":
                operando="%";
                break;
        }           
        if(!operSeguido) {
            operSeguido=true;                           
            if(input=="") input=input.concat("0");
            historial=historial.concat(input); 
            input="";
            if(operar) 
            {
                resultado = eval(historial);
                display.textContent = resultado;
            }        
            operar=true;
            historial=historial.concat(operando);
            historialDisplay.textContent=historial; 
        }
        else {
            historial=historial.substr(0, historial.length-1);
            historial=historial.concat(operando);  
            historialDisplay.textContent=historial; 
        }
         
        
    }
    else {        
        historial=historial.concat(input); 
        input="";
        if(!"1234567890".includes(historial.charAt(historial.length-1))) historial=historial.concat(resultado.toString());
        resultado = eval(historial);
        display.textContent = resultado;
        historialDisplay.textContent=historial.concat("=");
        historial="";
        input=resultado.toString();
        resultar=true;
    }    
    console.log(resultado);
}))