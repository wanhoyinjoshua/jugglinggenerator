var list = ["sitdown","look at different backgrounds", "height of the toss: high toss ","height of the toss: low toss "]
var ran = Math.random()*list.length;
console.log(ran); 
var gen = Math.floor(ran);
console.log(list[gen])
var hi = document.getElementById("changeee")
console.log(hi)

var data=[];
var numdata=[];

var datanum = document.forms[0].elements[0];

var changebutt = document.getElementById("shuufle")


hi.innerHTML="Type in 0 to start" ;
datanum.value = ""





function change (){
    console.log(datanum.value)

    changebutt.disabled = true;
    setTimeout(function(){ changebutt.disabled =false; }, 2000);

    if (isNaN(datanum.value)){

        
        hi.innerHTML="Give me a number tim , no characters "

    }

    else if (datanum.value==""){
        hi.innerHTML="Must input sth tim"

    }

    else{

        
        console.log(data)
        console.log(numdata)
      

        data.push(` ${hi.innerText}:${datanum.value}`)
        numdata.push(datanum.value)

        var ran = Math.random()*list.length;

        var gen = Math.floor(ran);
        

        
        hi.innerHTML=list[gen];
        datanum.value = ""
    }
    
   
    
    
}

function generate(){

    numdata.splice(0,1)
    
    console.log(numdata)
    
    
    function getAvg(numdata) {

        var  total = 0;

        for (let i =0; i<numdata.length; i++){

            total += parseInt(numdata[i], 10);

            
        }
        return total;

      }


    let total = getAvg(numdata);
    let average = total /  numdata.length;
    
    hi.innerHTML=`

    Good Job Tim !!!!!!<br><br>
    Your totaal attmept in this session is <strong>${numdata.length}</strong> <br><br>
    Your total no of catches in this session is <strong> ${total}(${Math.round(total/6)} cycles) </strong><br><br>
    Your avergae no of catches in this session is <strong>${Math.round(average*10)/10}(${Math.round(average/6)} cycles)</strong>`


    data.splice(0,1) ;

   let shuufle = document.getElementById("shuufle")

   shuufle.parentNode.removeChild(shuufle)
   let dataa = document.getElementById("genertae")

   dataa.parentNode.removeChild(dataa)
   let  textinput = document.getElementById("textinput")

   textinput.parentNode.removeChild( textinput)
  

  

for (let i =0 ; i <data.length;i++){
    let p = document.createElement("p");
    p.innerHTML= `${data[i]}`
    p.classList.add("pop");
    document.body.append(p);
    }

}






