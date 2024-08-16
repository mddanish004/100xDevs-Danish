function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  return str === str.split('').reverse().join('');
}

str="Madam";

console.log(palindrome(str)); 