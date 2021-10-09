// ===>>> 1. CHECKS IF ALL LETTERS IN A STRING ARE UNIQUE
function isUnique(string) {
  string = string.toLowerCase();
  for(let i = 0; i < string.length; i++) {
    // Get current character from string
    let letter = string[i];
    // Check its first index against its last
    if(string.indexOf(letter) !== string.lastIndexOf(letter)) return false;
  }
  return true;
}
// isUnique("Aear")


// ===>>> 2. CHECKS IF 2 STRINGS ARE PERMUTATIONS OF EACH OTHER
function isPermutation(stringOne, stringTwo) {
  let copy1 = stringOne.toLowerCase(), copy2 = stringTwo.toLowerCase();
  
  // Check if strings are of same length
  if(copy1.length !== copy2.length) return false;
  
  for(let i = 0; i < copy1.length; i++) {
    let copy1Letter = copy1[i], copy2Letter = copy2[i];
    if(copy2.indexOf(copy1Letter) < 0 || copy1.indexOf(copy2Letter) < 0) {
      return false;
    }
  }
  return true;
}
// isPermutation("aaact", "caaat");


// ===>>> 3. REPLACES SPACES WITH %20
function urlifyString(string) {
  return string.trim().split(" ").join("%20");
}
// urlifyString("Mr Niger D ")


// ===>>> 4. CHECKS IF A STRING IS A PERMUTATION OF A PALINDROME
function checkPalindromPerm(inputString) {
  let palindrome = "";
  for(let i = inputString.length - 1; i > 0; i--) {
    palindrome = palindrome + inputString[i];
  }
 
  if(palindrome !== inputString) return false;
}
// checkPalindromPerm("Tact Coa");


// ===>>> 5. CHECKS IF STRINGS ARE ONE OR ZERO EDIT AWAY FROM BEING SAME
// "pale", "ple"
function checkEdits(string1, string2) {
  // if strings are exact same, zero edit.
  if(string1 === string2) return true;
  
  // if length difference is more than 1, more than 1 edit.
  let lenOfString1 = string1.length, lenOfString2 = string2.length;
  if((lenOfString1 - lenOfString2) > 1 || (lenOfString2 - lenOfString1) > 1) {
    return false;
  } else {
    let editsRequired = 0;
    let arrOfString1 = string1.split('');
    
    for(let i = 0; i < arrOfString1.length; i++) {
      let string1Char = arrOfString1[i];
      // Check if characters at index match for both strings
      if(string1Char !== string2.charAt(i)) {
        // Check if character matches the next, to spot out omission
        if(arrOfString1[i+1] === string2.charAt(i)) {
          arrOfString1.splice(i, 1)
          editsRequired++;
        } else {
          editsRequired++;
        }
      }
    }
    return editsRequired === 1;
  }
}
// checkEdits("pale", "ple");
// checkEdits("pales", "pale");
// checkEdits("pale", "bale");
// checkEdits("pale", "bake");


// ===>>> 6. COMPRESSES STRINGS
function compressString(string) {
  let first = string[0], outputKey = [first], outputValue = [1], status = "";
      
  for(let i = 1; i < string.length; i++) {
    // Get current element, and previous element
    let current = string[i], prev = string[i - 1];
    
    // If current matches previous
    if(current === prev) {
      // Get last index of current in the keys array
      let index = outputKey.lastIndexOf(current);
      
      status = "changed";
      outputValue[index] += 1;
    } else {
      outputKey = [...outputKey, current];
      outputValue = [...outputValue, 1]; 
    }
  }
  
  if(!status) {
    return string;
  } else {
    let output = "";
    for(let i = 0; i < outputKey.length; i++) {
      output = output + outputKey[i] + outputValue[i];
    }
    return output;
  }
}
// compressString("aabcccccaaa");
// compressString("abbbacccradddabra");