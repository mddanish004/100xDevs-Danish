function isAnagram(str1, str2) {
    let charArray = str1.split('');
    let charArray2 = str2.split('');
    charArray.sort();
    charArray2.sort();
    if(charArray.join('') === charArray2.join('')){
   
        return true;
    } else{
        return false;}
    
}

var ans=isAnagram("listen", "silent");
console.log(ans);


