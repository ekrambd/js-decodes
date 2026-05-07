//4. Find the Length of a string ( Without length )

var len = function(str){
    let count = 0;
    for(char of str){
        count++;
    }
    return count;
};

console.log(len("javascript"))