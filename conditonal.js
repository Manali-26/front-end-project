const a=20;
const b=30;
const c=35;
const d=45;
const e=60;

const discountlimit=100;
const discountrate=0.10;

let totalprice=0;

for(let i=1;i<=5;i++){
    if(i==1){
        totalprice+=a;
    }
    else if(i==2){
        totalprice+=b;
    }
    else if(i==3){
        totalprice+=c;
    }
    else if(i==4){
        totalprice+=d;
    }
    else if(i==5){
        totalprice+=e;
    }

}

console.log("total price is ",totalprice);

if(totalprice>discountlimit){
    const discount =totalprice*discountrate;
   
    totalprice=totalprice-discount;
    console.log('after discount value',totalprice);
    }
else {
    console.log('no discount',totalprice);

}




// guess the number
// const correctnumber=3;
// let guessthenumber=null;
// while(guessthenumber !=correctnumber){
//   guessthenumber=prompt('guess the numbr');

//    if(guessthenumber==correctnumber){
//     document.getElementById('demo').innerHTML="<h2>kucky </h>"
//     // innerhtml isliye use kiya hai taki h2 tag consider kare naki use ek text ki tarh dekhe
//    }
//    else{
//     alert('try again');
//     //document.getElementById('demo').innerHTML="<h2>kucky </h>"
//    }

// }

// let isplaying= true;

// while(isplaying){
//     const action=prompt('enter "play" to continue or "quit" to exit' );
//     if(action=='quit')
//         {
//             isplaying=false;
//             console.log('thankfor playing');
            
//         }
//      else{
//         console.log('contnie playing');
        
//      }   
    
// }


// let i=1;
// while(i<=10){
//     console.log('2');
//     i++;
// }
  
// for(let i=0;i<=10;i=i+2){
//   console.log(i);
  
// }


// let a=2
// let b=3;

// if(a==b){
//     console.log("ais equql to b")
// }
// else{
//     console.log('not eaual');
    
// }
