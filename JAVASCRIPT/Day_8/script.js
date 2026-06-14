//TASK 1
let numbers = [10, 20, 30, 40, 50];
// Print all elements using a loop
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//TASK 2
let sum=0;
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
console.log("Sum:",sum);

//TASK 3
let max=numbers[0];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>max)
        max=numbers[i];
}
console.log("Maximum element:",max);

//TASK 4
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0)
        console.log(numbers[i]);
}

//TASK 5
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
// Print it row by row
for(let i=0;i<3;i++){
    let row="";
    for(let j=0;j<3;j++)
        row+=matrix[i][j]+" ";
    console.log(row);
}

