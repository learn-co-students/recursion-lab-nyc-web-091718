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

function isPalindrome(string) {
  let str = string.toLowerCase()
  let c1 = str.charAt(0)
  let c2 = str.charAt(str.length - 1)

  if (str.length < 2) {
    return true
  }

  if (c1 === c2) {
    return isPalindrome((str.substr(1, str.length - 2)))
  }

  return false
}
