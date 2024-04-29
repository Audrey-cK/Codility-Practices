{/*

Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

*/}

 function isPalindrome(x) {
    //making strings into integers
    const str = x.toString();

    //iterating over a string fro both sides going to the middle
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
   
   //if the loop finds a character that is not the same, it means that the string is not a palindrome, then return false
        if (str[i] !== str[j]) {
        return false;
    }
}

//if the loop is finished, it means that the string is a palindrome,then return true
return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(330));
