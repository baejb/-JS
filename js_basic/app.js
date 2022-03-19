//object 속성을 가진 데이터를 저장할 수 있게 함 

const player = {
    name : "jeongbin",
    points : 10 ,
    fat : true ,

};
console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat = false; // 속성 변경 가능 
player.lastName = "patato"; // 언제든지 속성 추가 가능 
console.log(player);
