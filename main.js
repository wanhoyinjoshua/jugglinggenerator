var list = ["sitdown","oppositehand","standup ","high juggles","low juggles","start jugling with left hand", " start juggling with right hand"
, "left foot ", "right foot "]
var ran = Math.random()*list.length;
console.log(ran)
var gen = Math.floor(ran);
console.log(list[gen])
var hi = document.getElementById("changeee")
console.log(hi)




function change (){
    
   
    var ran = Math.random()*list.length;

var gen = Math.floor(ran);
hi.innerHTML=list[gen];
    
}




