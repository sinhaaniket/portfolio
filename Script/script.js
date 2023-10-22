let text=document.getElementById('text');
let text2=document.getElementById('text2');
let treeLeft=document.getElementById('tree-left');
let treeRight=document.getElementById('tree-right');
let gateLeft=document.getElementById('gate-left');
let gateRight=document.getElementById('gate-right');
window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    
    text.style.marginTop =  value * 2.5 +'px';
    text2.style.marginTop =  value * 2.5 +'px';
    treeLeft.style.left = value* -1.5 + 'px';
    treeRight.style.left = value* 1.5 + 'px';
    gateLeft.style.left = value* 0.5 + 'px';
    gateRight.style.left = value* -0.5 + 'px';
});

const txt = document.querySelector(".sec-txt");

const txtLoad = () => {
    setTimeout(() =>{
       txt.textContent= "Web Dev";
    }, 0);
    setTimeout(() =>{
       txt.textContent= "Programmer";
    }, 4000);
    setTimeout(() =>{
       txt.textContent= "Freelancer";
    }, 8000);
}

txtLoad();
setInterval(txtLoad, 12000);