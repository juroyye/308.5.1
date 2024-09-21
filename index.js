

let arr = [3,7,1,6,4,2,8,0,5,2]

function findSum(){
      let sum = 0;

      for (let i =0; i < arr.length; i++){
        sum += arr[i]
      }
      console.log(sum)
}


function findAvg(){
      let sum = 0;

      for (let i =0; i < arr.length; i++){
        (sum += arr[i]/arr.length)
      }
      console.log(sum)
}



findSum();
findAvg();
