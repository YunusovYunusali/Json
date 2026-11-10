



// let newarr = []
// function takror(arr){
//     for(let i of nums){
//         if(nums[i] !== newarr[i]){
//         newarr.push(nums[i])   
//     }
//     }
//     return arr;
// }
// console.log(takror(newarr));
// console.log(takror(nums));

// let nums = [1,1,2,2,3,3,4,5,6,7,6,7,4,8,9,8,10]
// let unit =[];
// function takror(arr){
//     for(let i of nums){
//         if(nums.indexOf(i)=== nums.lastIndexOf(i)){
//             unit.push(i)
//         }
//     }
//     return arr;
// }
// console.log(takror(unit));



// function arrkvadrat(){
//     let kvadrti= [];
//     let toq = [];
//     for(let i of nums){
//         if(i % 2==0){
             
//             kvadrti.push(Math.pow(i,2))
//         }else{
//           toq.push(i)
//         } 
//     }
//      console.log(toq);
//     return kvadrti;
// }
// console.log(arrkvadrat());



// function arrcoun(){
//     let sanoq= [];
//     let count = 0;
//     for(let of i nums){
//        if()
//     }

// }

const Matem = {
    floor: function(float){
        if(float<0){
            return 0;
        }if(float > 0 ){
            return float - (float % 1);

        }else{
            return float - (float% 1)-1;
        }
    },

    ceil: function(float){
        if(float == 0){
            return 0;
        }if(float > 0){
            return float - (float % 1) + 1;

        }else{
            return float - (float % 1 ) +1 ;
        }

    },
    round: function(float){
        if(float == 0){
            return 0;
        }if(float > 0){
            let qoldiq = float % 1 ;
            if(qoldiq >= 0.5){
            return float - (float % 1) + 1;
            }else{
            return float -(float % 1) ;
                 }
        }
    },
    max: function (...args) {
        let max=0;
        if(args.length === 0){
            return "Xatos son"
        }
        for(let i of args){
          if(i > max){
            max=i;
          }
        }
        return max;
  },
  
  min: function (...args) {
    if(args.length === 0){
            return "Xatos son"
        }
        let min = args[0]
    for(let i of args){
        if(i < min){
            min = i;
        }
       
    }
    
    return min;
  },
  trunc: function (float) {
    if(float == 0){
        return 0
    }
    if(float > 0){
        return float - (float % 1);
    }
  },
  pow: function (arg1, arg2) {
    return arg1 ** arg2;
  },
    
    
}
console.log(Matem.floor(4.4));
console.log(Matem.ceil(4.2))
console.log(Matem.round(4.5));
console.log(Matem.max(1,2,3,4,5,6,7,21))
console.log(Matem.min(12,32,52,48,75,9,65,85,3));
console.log(Matem.trunc(4.9));
console.log(Matem.pow(5,3));





const users = [
  { id: 1, name: "Anvar", age: 25, job: "Dasturchi" },
  { id: 1, name: "Anvar", age: 25, job: "Dasturchi" },
  { id: 2, name: "Zilola", age: 22, job: "Dizayner" },
  { id: 2, name: "Zilola", age: 22, job: "Dizayner" },
  { id: 3, name: "Jasur", age: 30, job: "Menejer" },
  { id: 3, name: "Jasur", age: 30, job: "Menejer" },
  { id: 4, name: "Madina", age: 27, job: "Shifokor" },
  { id: 4, name: "Madina", age: 27, job: "Shifokor" },
];
 

let unreplace = [];

for(let i=0; i< users.length;i++){
  let myjson = JSON.stringify(users[i]);
  if(!unreplace.includes(myjson)){
    unreplace.push(myjson)
  }

}

let UserUnreplese = [];
for(let i = 0; i< unreplace.length; i++){
    UserUnreplese.push(JSON.parse(unreplace[i]))
}

console.log(UserUnreplese);




