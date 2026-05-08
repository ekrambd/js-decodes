//5. Check if Two Strings Are Equal

var checkEqual = function(str1,str2){
    if(str1.length != str2.length) return false;
    for(let i = 0; i < str1.length; i++)
    {
        if(str1[i] !== str2[i]) return false;
    }
    return true;    
};

console.log(checkEqual("hello","hello"));
console.log(checkEqual("hello","Hello"));