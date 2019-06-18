//Palindrome function to test
function isPalindrome(str) {
    let strReversed = "";
    
    for (var i = str.length - 1; i >= 0; i--) {
    strReversed += str[i];
    }

    if (strReverted == str) {
        return "palindrome";
    } else {
        return "not a palindrome";
    }
}

export default isPalindrome;