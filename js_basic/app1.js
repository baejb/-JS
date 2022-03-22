
//querySelector는 element를 CSS 방식으로 검색할 수 있음 
const title2=document.querySelector("div.hello:first-child h1");
//querySelector는 하나만 가져오니까 querySelectorAll 해주면 됨 


// click event 는 클릭하는것 ,click을 listen
function handleTitleClick(){
    title2.style.color="blue";
}
function handleMouseEnter(){
    title2.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    title2.innerText = "Mouse is Gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handelWindowOffline(){
    alert("SOS no WIFI");
}
function handelWindowOnline(){
    alert("ALL GOOOD!");
}
//유저가 title2을 클릭하면 실행
title2.addEventListener("click",handleTitleClick);
title2.addEventListener("mouseenter",handleMouseEnter);
title2.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handelWindowOffline);
window.addEventListener("online",handelWindowOnline);