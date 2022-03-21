//document는 브라우저에 이미 존재하는 객체 , HTML을 가리키는 객체
const title = document.getElementById("title");

console.dir(title); // dir 더 자세한 정보 알려줌 
title.innerText = "Got you";

console.log(title.id);
console.log(title.className);