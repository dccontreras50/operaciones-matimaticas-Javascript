"use strict"

const fig1 = document.querySelector('.fig1');
const fig2 = document.querySelector('.fig2');
const fig3 = document.querySelector('.fig3');
const fig4 = document.querySelector('.fig4');
const fig5 = document.querySelector('.fig5');
const fig6 = document.querySelector('.fig6');
const fig7 = document.querySelector('.fig7');
const fig8 = document.querySelector('.fig8');

fig1.addEventListener("click",function(){figura(1);});
fig2.addEventListener("click",function(){figura(2);});
fig3.addEventListener("click",function(){figura(3);});
fig4.addEventListener("click",function(){figura(4);});
fig5.addEventListener("click",function(){figura(5);});
fig6.addEventListener("click",function(){figura(6);});
fig7.addEventListener("click",function(){figura(7);});
fig8.addEventListener("click",function(){figura(8);});

function figura(fig){
    let figu = document.getElementById("textico7").style;
    switch(fig){
        case 1:
            figu.display = "inline-block";
            figu.width = "200px";
            figu.height = "160px";
            figu.background = "#ff0000";
            figu.borderRadius = "100px";
            figu.border = "2px solid #000";
            break;
        case 2:
            figu.display = "inline-block";
            figu.width = "100px";
            figu.height = "60px";
            figu.background = "#ff00ff";                
            figu.borderRadius = "0px";
            figu.border = "2px solid #00f";
        break;
    }
}


function calcular(){
    let a = parseInt(document.getElementById("v1").value);
    let b = parseInt(document.getElementById("v2").value);
    let txt = "";
    txt = "La suma es: "+(a+b);
    txt += "<br>La resta es: "+(a-b);
    txt +="<br>La multiplicación es: "+(a*b);
    if(b!=0){
        txt += "<br>la division es: "+(a/b);
    }else{
        txt += "<br>División por cero imposible";
    }
    document.getElementById("textico1").innerHTML = txt; 
}

function ordena(){
    let a = parseInt(document.getElementById("o1").value);
    let b = parseInt(document.getElementById("o2").value);
    let c = parseInt(document.getElementById("o3").value);
    let txt = "";
    if(a<b && a<c){
        txt = a + " , ";
        if(b<c){
            txt += b + " , " + c;
        }else{
            txt += c + " , " + b;
        }
    }else if(b<a && b<c){
        txt = b + " , ";
        if(a<c){
            txt += a + " , " + c;
        }else{
            txt += c + " , " + a;
        }
    }else{
        txt = c + " , ";
        if(b<a){
            txt += b + " , " + a;
        }else{
            txt += a + " , " + b;
        }
    }
    document.getElementById("textico2").innerHTML = txt;
}

function generar(){
    let i = 0;
    let fin =50, inc = 2;
    let txt = "While <br>";
    while(i<fin){
        txt += i + ", ";
        i = i+inc;
    }
    txt += "<br><br>For<br>";
    for(var h=0;h<=fin;h=h+inc){
        txt += h + ", ";
    }

    document.getElementById("textico3").innerHTML = txt;
}

function fibonacci(){
    let txt = "";
    let a=0,b=1,c;
    let n = parseInt(document.getElementById("f1").value);
    txt = a + ", " + b + ", ";
    if(n>=2 && n<=100){
        for (var i=2;i<n;i++){
            c= a+b;
            txt += c + ", "
            a=b;
            b=c;
        }
    }else{
        txt = "Solo ingrese valores entre 2 y 100.";
    }

    document.getElementById("textico4").innerHTML = txt;
}

function primo(){
    let txt = "";
    let n = parseInt(document.getElementById("np1").value);
    let primo = nprimo(n);
    if(primo==true){
        txt = "El numero " + n + " es PRIMO";
        document.getElementById("textico5").style.color= "#0000ff";
    }else{
        txt = "El numero " + n + " NO es PRIMO";
        document.getElementById("textico5").style.color= "#ff0000";
    }
    document.getElementById("textico5").innerHTML = txt;
}
function nprimo(n){
    let primo = true;
    let i=2;
    while(i<n){
        if((n%i)==0){
            primo=false;
            i=n;
        }
        i++;
    }
    return primo;
}

function gprimo(){
    let c = parseInt(document.getElementById("np2").value);
    let txt = "";
    let i=1, m=1;
    while(i<=c){
        let primo = nprimo(m);
        if(primo==true){
            txt += m + ", ";
            i++;
        }
        m++;
    }
    document.getElementById("textico6").innerHTML = txt;
}

function ocultar(nu){
    for(var i=1;i<=7;i++){
        document.getElementById("Eje"+i).style.display = "none";
    }
    document.getElementById("Eje"+nu).style.display = "block";
}

ocultar(7);






function ocultar(nu){
    for(var i=1;i<=6;i++){
        document.getElementById("Eje"+i).style.display = "none";
    }
    document.getElementById("Eje"+nu).style.display = "block";
}

ocultar(5);


