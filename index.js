const secondHand = document.querySelector(".sec-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setData(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
  
    const mins = now.getMinutes();
    const minsDegree = ((mins/60)*360)+90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`;
    // console.log(seconds);
    // console.log(mins);
    const hours = now.getHours();
    const hourDegree = ((hours/60)*360)+90;
    hoursHand.style.transform = `rotate(${hourDegree}deg)`;

   
// console.log(secondDegree);
     
}
setInterval(setData,1000);