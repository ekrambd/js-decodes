//9. Find first non-repeating character in string

var findChar = function(str){
    let map = new Map();
    for(let i = 0; i < str.length; i++)
    {
        let count = map.get(str[i]);
        if(count == null){
            map.set(str[i],1);
        }else{
            map.set(str[i],count+1);
        }
    }
    for(let i = 0; i < str.length; i++)
    {
        let count = map.get(str[i]);
        if(count === 1) return str[i]; 
    }
    return null;        
};

console.log(findChar("javascript"));