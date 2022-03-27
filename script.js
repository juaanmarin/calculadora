//llamo los elemento de my "index.html con la funcion querySelector"
const mult=document.querySelector(".multiplicacion");
const div=document.querySelector(".divicion");
const sum=document.querySelector(".suma");
const rest=document.querySelector(".resta");
const num0=document.querySelector(".num0");
const num1=document.querySelector(".num1");
const num2=document.querySelector(".num2");
const num3=document.querySelector(".num3");
const num4=document.querySelector(".num4");
const num5=document.querySelector(".num5");
const num6=document.querySelector(".num6");
const num7=document.querySelector(".num7");
const num8=document.querySelector(".num8");
const num9=document.querySelector(".num9");
const punto=document.querySelector(".punto");
const limpiar=document.querySelector(".limpiar");
const eliminar=document.querySelector(".eliminar")
const result=document.querySelector("#resp");
const igual=document.querySelector(".igual");

//le doi una accion a cada uno de los botones con una arrow function que consiste en obtener el resultado actual y conatenarle un valor esto mismo se repite con los numeros y operadores aridmenticos
mult.addEventListener("click", () =>{
    result.value=`${result.value}*`;
});
div.addEventListener("click", () =>{
    result.value=`${result.value}/`;
});
sum.addEventListener("click", () =>{
    result.value=`${result.value}+`;
});
rest.addEventListener("click", () =>{
    result.value=`${result.value}-`;
});
num0.addEventListener("click", () =>{
    result.value=`${result.value}${0}`;
});
num1.addEventListener("click", () =>{
    result.value=`${result.value}${1}`;
})
num2.addEventListener("click", () =>{   
    result.value=`${result.value}${2}`;
});
num3.addEventListener("click", () =>{
    result.value=`${result.value}${3}`;
});
num4.addEventListener("click", () =>{
    result.value=`${result.value}${4}`;
});
num5.addEventListener("click", () =>{
    result.value=`${result.value}${5}`;
});
num6.addEventListener("click", () =>{
    result.value=`${result.value}${6}`;
});
num7.addEventListener("click", () =>{
    result.value=`${result.value}${7}`;
});
num8.addEventListener("click", () =>{
    result.value=`${result.value}${8}`;
});
num9.addEventListener("click", () =>{
    result.value=`${result.value}${9}`;
});
punto.addEventListener("click", () =>{
    result.value=`${result.value}.`
})
limpiar.addEventListener("click", () =>{
    result.value=``
})
//para eliminar un numero se obtiene el tamaño de este se recorre en un for pero el ultimo numero no se itera por lo cual en el "#result" no se eliminara el ultimo digoto que halla
eliminar.addEventListener("click", () =>{
    let resultado=result.value;
    let x="";
    for (let i=0; i<resultado.length-1; i++) {
        const element =x+=resultado[i];
    }
    result.value=x
})
//para obtener el resultado de las operaciones usamos el metodo eval de javaScript este tiene la tarea de evaluar lo que tiene por dentro el "#result" y hacer la operacion
igual.addEventListener("click", () =>{
    result.value=eval(result.value);
})
