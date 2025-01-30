// function adr(name = 'Aidar', surName = 'Kanatbek') {
//     console.log(alert(`${name} - ${surName}`));
// }
// adr();

// let i = 0;
// for (i; i < 11; i++) {
//     console.log(i);
// }
// let adr = 0;
// while (adr < 10){
//     console.log(adr);
//     adr++;
// }
// let a = 0;
// while (a < 20) {
//     a++;
//     if (a === 10) continue;
//     console.log(a);
// }
// let i = 1;
// do {
//     console.log("В процессе..")
// } while (i < 10) {
//     console.log("I меньше 10");
// }
// const h1 = document.querySelector("h1");

// function fn1 (){
//     h1.textContent = 'Sigma';
// };
// function fn2 (){
//     h1.textContent = 'Batyr';
// };

// h1.addEventListener("mouseover", fn1);
// h1.addEventListener("mouseout", fn2);
// const adr = function (a1 = "h1"){
//     document.querySelector(a1).textContent = "Nigga";
// }
// adr();
// function adr (){
//     console.log(arguments.length);
// }
// adr('Hello');
function adr(a) {
    if (typeof a === 'number'){
        return 'Namber'
    } else if (typeof a === 'string') {
        return 'String'
    }else {
        return 'Error'
    }
}
console.log(adr(false));