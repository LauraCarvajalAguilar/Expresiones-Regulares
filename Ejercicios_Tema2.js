var texto = " \
Mido un metro sesenta y dos, tengo una mochila azul \
Prefiero hacer la tarea en mi cuarto con la musica sonando \
Mayormente me despierto tarde, mi papá es el que tiene que despertar \
Mi signo es Sagitario, pelo castaño, ojos cafes claros \
Me gusta dibujar en mis tiempos libres y ver videos en youtube \
Tengo una mejor ammiga con la que siempre voy a todos lados \
Que conzco desde la preparatoria, donde siempre haciamos locuras\
";

let mensaje1 = "Accidentally in Love";
let palabras = mensaje1.match(/[A-Z][a-z]{7,14}/g);
console.log(palabras);


var mensaje2 = /[a-z]+[^aeiou ]\b/gmi;
result = texto.match(mensaje2);
console.log(result);

var mensaje3 = /[M][^aeiou][a-z]+/g
result = texto.match(mensaje3);
console.log(result);

let mensaje4 = "Me gusta hacer las cosas 'bien' aunque a veces me estrese 'sigh' pero siempre termino haciendolo"
let frase = mensaje4.match(/['][a-z|A-Z]+[']/g);
console.log(frase);

let mensaje5 = "La IP de mi casa es 192.168.10.25 y la del vecino de a lado es 192.168.20.11"
let numero = mensaje5.match(/(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/g)
console.log(numero);

var horas = "\
12:30:00 \
15:40:61 \
09:11:30\
";

var mensaje6 = /([0-12]{1,2})[:]([0-59]{1,2})[:]([0-59]{1,2})\b/g;
result = horas.match(mensaje6)
console.log(result);

var mensaje7 = /(\d{3})[-](\d{3})[-](\d{4})\b/g;

var telefono = "\
985-112-0302 \
999-130-3674 \
985-111-1238 \
998-980-0051 \
";
result = telefono.match(mensaje7)
console.log(result);

var mensaje8 = /([a-z|0-9])+[@]([a-z|0-9])+[.]([a-z|0-9]{3})+\b/g;

var correos = "\
laura_lizz1@hotmail.com \
lauranime25@gmail.com \
mariosky856@hotmail.com \
correos \
";
result = correos.match(mensaje8)
console.log(result);

var mensaje9 = "\
http//:www.animeflv.com \
http//:www.youtube.com \
http//:www.doramasmp4.com \
";
let newlink = mensaje9.match(/[http//:www.]+[a-z]+[.]+([a-z]{3})/g);
console.log(newlink);

var mensaje10 = "El codigo postal de mi zona es: 97780"; //Elimina un codigo postal
let codigopostal = mensaje10.match(/[0-9]{5}/g, "*");
console.log(codigopostal);