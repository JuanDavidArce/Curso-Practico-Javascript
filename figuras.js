// Codigo cuadrado

function perimetroCuadrado(lado)
{
    return lado*4;
};

function areaCuadrado(lado)
{
    return lado*lado;
};



// codigo triangulo
function perimetroTriangulo(lado1,lado2,base)
{
    return lado1 + lado2 + base;
};

function areaTriangulo(base,altura)
{
    return (base*altura)/2
};



// Codigo circulo
const PI =Math.PI;
function diametroCirculo(radio)
{
    return radio*2;
};

function perimetroCirculo(radio)
{
    const diametro= diametroCirculo(radio);
    return diametro*PI;
};

function areaCirculo(radio)
{
    return (radio*radio)*PI
}


// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado()
{
    const input= document.getElementById("inputCuadrado");
    const value =parseFloat(input.value);
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado()
{
    const input= document.getElementById("inputCuadrado");
    const value =parseFloat(input.value);

    const area = areaCuadrado(value);
    alert(area);
};

function calcularPerimetroTriangulo()
{
    const inputBase= document.getElementById("inputTrianguloBase");
    const base = parseFloat (inputBase.value);

    const inputLado1= document.getElementById("inputTrianguloLado1");
    const lado1 = parseFloat (inputLado1.value);

    const inputLado2= document.getElementById("inputTrianguloLado2");
    const lado2 = parseFloat(inputLado2.value);
    const perimetro= perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
};

function calcularAreaTriangulo()
{

    const inputBase= document.getElementById("inputTrianguloBase");
    const base = parseFloat(inputBase.value);

    const inputAltura= document.getElementById("inputTrianguloAltura");
    const altura =parseFloat(inputAltura.value);
    
    const area= areaTriangulo(base, altura);
    alert(area);

    
};

function calcularPerimetroCirculo()
{
    const input= document.getElementById("inputCirculo");
    const value =parseFloat(input.value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);

};

function calcularAreaCirculo()
{
    const input= document.getElementById("inputCirculo");
    const value =parseFloat(input.value);
    const area = areaCirculo(value);
    alert(area);
};