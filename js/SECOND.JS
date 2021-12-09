/* const left = []; //skapar listor för varje riktining
const up = [];
const right = [];
const down = [];
const snowFlake = [];


const Width = 1400; // bredd som den snöar på
const Height = 2000; // höjden som den snöar på
const Count = 100; // antal snöflingor 
const MaxStep = 2; // max steg i rörelsen
const MinStep = 1; // min steg i rörelsen
const MaxFlake = 13; // max storlek på snöflinga
const MinFlake = 2; // min storlek på snöflinga


for (i = 0; i < Count; i++) {
    down[i] = MinStep + Math.random() * MaxStep; //innehållet i down arrayen är lika med minStep + random antal * maxstep
    snowFlake[i] = MinFlake + Math.random() * MaxFlake;
    left[i] = Math.random() * Width;
    up[i] = Math.random() * Height;
    right[i] = MinStep + Math.random() * -MaxStep;
}


document.querySelector("div").innerHTML += "<div>" + . + "</div>" product.name

















function hejhej(e) {
    e.preventDefault;
}




hejhej.map((product => {

    console.log(product)
    document.querySelector("div").innerHTML += "<div>" + product.name + "</div>" product.name
})) */