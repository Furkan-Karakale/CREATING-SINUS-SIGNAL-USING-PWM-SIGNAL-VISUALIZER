let canvas = document.querySelector('canvas');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let mouse = {
    x:undefined,
    y:undefined
}





let frekans = 2
let genlik = 200;
let fazFarki = 0;
let maxLength = genlik*4*2;

let gorselOfsett=0
let parca=30


let step = maxLength/(parca*frekans)
let radianStep = Math.PI*2/parca


let frek = Math.PI/maxLength*2*frekans;

c.beginPath();
c.moveTo(100,canvas.height/2-gorselOfsett);

for (let i = 0;i<= maxLength;i++)
{
    c.lineTo(i+100,canvas.height/ 2 - Math.sin(i*frek+fazFarki) * genlik-gorselOfsett);
}
c.stroke();

let prop=15;
let triangleFunc = 0;

c.beginPath();
c.moveTo(0,canvas.height/2-gorselOfsett);
for (let i = 0;i<= maxLength;i++)
{
    if(triangleFunc>=genlik && prop>0)prop=-prop
    if(triangleFunc<=-genlik && prop<0)prop=-prop

    c.lineTo(i+100,canvas.height/ 2 - triangleFunc);
    triangleFunc+=prop
}
c.stroke();

c.beginPath();
c.moveTo(100,canvas.height/2-gorselOfsett);
for (let i = 0;i<= maxLength;i++)
{
    if(triangleFunc>=genlik && prop>0)prop=-prop
    if(triangleFunc<=-genlik && prop<0)prop=-prop

    if(Math.sin(i*frek+fazFarki) * genlik >= triangleFunc && Math.sin(i*frek+fazFarki)>0)
        c.lineTo(i+100,canvas.height/ 2 - genlik);
    else if(Math.sin(i*frek+fazFarki) * genlik <= triangleFunc && Math.sin(i*frek+fazFarki)<0)
        c.lineTo(i+100,canvas.height/ 2 + genlik);
    else
        c.lineTo(i+100,canvas.height/ 2 - 0);
    triangleFunc += prop
}
c.stroke();