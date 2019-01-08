// Code your solution here!

function printString(string){
  console.log(string[0]);
  if (string.length === 1){
    console.log(string);
  }else{
    printString(string.substring(1,string.length))
  }
}

function reverseString(string){
  if (string.length === 1) {
    return string
  } else {
    return string[string.length-1] + reverseString(string.substring(0,string.length - 1))
  }
}

function isPalindrome(string){
  if(string.length === 1){
    return true
  }
  if(string[0] != string[string.length-1]){
    return false
  }else{
    return isPalindrome(string.substring(1,string.length-1))
  }
}

function addUpTo(array,index){
  if (index===0){
    return array[index]
  }else{
    return addUpTo(array,index-1) + array[index]
  }
}

function maxOf(array){
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(),maxOf(array))
  }
}
function includesNumber(array,number){
  if (array.length===0){
    return false
  }
  if(array[0] === number){
    return true
  }else{
    return includesNumber(array.slice(1),number)
  }
}
