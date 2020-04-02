var list = ["sitdown","one leg","look at different backgrounds","juggle with socks", "height of the toss "]
var ran = Math.random()*list.length;
console.log(ran)
var gen = Math.floor(ran);
console.log(list[gen])
var hi = document.getElementById("changeee")
console.log(hi)

var data=[];

var datanum = document.forms[0].elements[0];





function change (){
    console.log(datanum.value)

    if (datanum.value != null){

        var ran = Math.random()*list.length;

        var gen = Math.floor(ran);
        hi.innerHTML=list[gen];

    }

    else{
        hi.innerHTML="error please type again"
    }
    
   
    
    
}

function generate(){


}




