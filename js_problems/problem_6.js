//6. Count words

var countWord = function(str){
    let count = 1;
    for(let i = 0; i < str.length; i++)
    {
        if(str[i] === " ") count++;
    }
    return count;        
};

console.log(countWord("I Love JavaScript"));