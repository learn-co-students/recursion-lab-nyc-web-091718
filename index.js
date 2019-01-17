function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string !== "") {
    return reverseString(string.substr(1)) + string.charAt(0)
  } else {
    return ""
  }
}

function isPalindrome() {

}
