
//TASK 1
let str='Programming';
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}

//TASK 2
let vowel=0;
for(let i=0;i<str.length;i++){
    if ("aeiouAEIOU".includes(str[i])) vowel++;
}
console.log(vowel);

//TASK 3
let s="";
for(let i=str.length-1;i>=0;i++){
    s+=str[i];
}
console.log(s);

//TASK 4
let isPalindrome = true;
let n = str.length;
for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome)
    console.log("Palindrome");
else
    console.log("Not Palindrome");


//TASK 5
let sen=prompt("Enter a sentence:");
let arr=sen.split(' ');
for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
}