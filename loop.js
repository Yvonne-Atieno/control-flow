//Write a function that accepts an array of string
//s and console.logs each element using a for loop.

let arry=["cat","cow","dog","pet","food","puppy"];
for(let x=0;x<=arry.length-1;x++){
    console.log(x);
    console.log(arry[x]);

}
 //Write a function that accepts an array of numbers and uses the forEach() method to console.log each 
    let num=[7,9,6,8,3,5];
    const result = num.map(
        (item)=>{
            return item* 2


        }

    )
    
    console.log(result);


//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function numArry(num){
    let emptyArry =[];
    for(let w=0;w<num.length; w++){
      if(w<4){
        emptyArry.push(num[w]*8)

      }else if(w>=num.length-2){
        emptyArry.push(num[w]+5)
      }
      console.log(emptyArry)
    }

}
 let numb=[2,8,4,6,7,4,9];
  numArry(numb);


 //write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function fourth(arr){
    let p =0;
    while(p<arr.length){
        if (p===4){
            break;
        }
        console.log(arr[p]);
       p++; 
    }
fourth(arrNum);
}
//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruitArr(){
  for(let i=0;i<num.length;i++){
    if(i===2){
      continue;
    }
    console.log({"continue":i});
  }
}

  








