let expect = require("chai").expect;

//Arrange
function isPalindrome(str) {
    let strReversed = "";
    
    for (var i = str.length - 1; i >= 0; i--) {
    strReversed += str[i];
    }

    if (strReversed == str) {
        return "palindrome";
    } else {
        return "not a palindrome";
    }
}


//Test

//Palindromes
describe("The following test-cases should reslove to palindromes:", function() {
    it('should return "palindrome"', function() {
        expect(isPalindrome("ava")).to.equal("palindrome");
    });
    it('should return "palindrome"', function() {
        expect(isPalindrome("a")).to.equal("palindrome");
    });
    it('should return "palindrome"', function() {
        expect(isPalindrome("aa")).to.equal("palindrome");
    });
    it('should return "palindrome"', function() {
        expect(isPalindrome("afa")).to.equal("palindrome");
    });
    it('should return "palindrome"', function() {
        expect(isPalindrome("acca")).to.equal("palindrome");
    });
    it('should return "palindrome"', function() {
        expect(isPalindrome("acdca")).to.equal("palindrome");
    });
});

//Non palindromes
describe("The following test-cases should not resolve to a palindrome:", function() {
    it('should return "not a palindrome"', function() {
    expect(isPalindrome("sad")).to.equal("not a palindrome");
    });
    it('should return "not a palindrome"', function() {
        expect(isPalindrome("as")).to.equal("not a palindrome");
    });
    it('should return "not a palindrome"', function() {
        expect(isPalindrome("aaas")).to.equal("not a palindrome");
    });
    it('should return "not a palindrome"', function() {
        expect(isPalindrome("aabb")).to.equal("not a palindrome");
    });
    it('should return "not a palindrome"', function() {
        expect(isPalindrome("add")).to.equal("not a palindrome");
    });
    it('should return "not a palindrome"', function() {
        expect(isPalindrome("sdk")).to.equal("not a palindrome");
    });
    it('should return "not a palindrome"', function() {
        expect(isPalindrome("aacc")).to.equal("not a palindrome");
    });
})




