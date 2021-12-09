/* const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

class Drop{
    constructor() {
        this.x = Math.random() * cnv.width;
        this.y = Math.random() * cnv.height;
        this.r = Math.random() * 3.5;
        this.v = Math.random() * 1.5;
    }

    make(){
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        this.y += this.v;
        if(this.y > cnv.height){
            this.x = Math.random() * cnv.width;
            this.y = 0;
        }

    }
}

let drops = [];
for (let i=0; i<1000; i++) drops.push(new Drop());

function anm(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0,0, cnv.width, cnv.height);
    drops.forEach(drop => drop.make());
    requestAnimationFrame(anm);
} */








/* snowfall.snow(document.querySelector(".container"),{
    round: true,
    minSize: 1,
    maxSize:6,
    shadow: true,
    flakeCount: 150,
    flakeColor: "#FFFFFF",
}); */












/* createSnowFlake();createSnowFlake();createSnowFlake();createSnowFlake();

setInterval(createSnowFlake, 100);

function createSnowFlake() {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('bi');
    snow_flake.classList.add('bi-snow2');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random () * 3 + 2 + 's'; //mellan 2-5 sekunder
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    },5000)
}
 */


Width = 1400; // bredd som den snöar på
Height = 2000; // höjden som den snöar på
Count = 100; // antal snöflingor 
MaxStep = 2; // max steg i rörelsen
MinStep = 1; // min steg i rörelsen
MaxFlake = 13; // max storlek på snöflinga
MinFlake = 2; // min storlek på snöflinga
 
left = new Array();
up = new Array();
right = new Array();
down = new Array();
snowFlake = new Array();
 
for (i = 0; i < Count; i++) {
left[i] = Math.random() * Width;
up[i] = Math.random() * Height;
right[i] = MinStep + Math.random() *-MaxStep;
down[i] = MinStep + Math.random() *MaxStep;
snowFlake[i] = MinFlake + Math.random() *MaxFlake;
 
document.write("<div id='Obj" + i + "' style='position:absolute; left:0px; top:-20px; z-index:10000; visibility:hidden; color:#fff; font-weight:normal; font-family:Verdana; font-size:"+ snowFlake[i]+"pt'>•</div>");
}
 
function animate() {
for (i = 0; i < Count; i++) {
up[i] += down[i];
left[i] += right[i];
 
document.getElementById("Obj" + i).style.visibility = "visible";
if (up[i] > Width || left[i] > Height || left[i] < 0) { // starta om från toppen av sidan när mitten nås
left[i] = Math.random() * Width; ///2
up[i] = -20;
right[i] = MinStep + Math.random ()* -MaxStep;
down[i] = MinStep + Math.random ()* MaxStep;
}
 
document.getElementById("Obj"+i).style.top = up[i] + "px";
document.getElementById("Obj"+i).style.left = left[i] + "px";
}
setTimeout("animate()", 50);// hastighet
}
 
setTimeout("animate()", 1000);




