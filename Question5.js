{/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'

*/}

//write a function for the removeDuplicateWords
function removeDuplicateWords(){

    //write a string to an array
    let str = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
   
   //use split to split the string into an array
    let arr = str.split(' ')

    //asign a new array to the array
    let newArr = []

    //use the for loop to iterate through the array
    for(let i = 0; i < arr.length; i++){

    //use the indexOf method to check if an element is in the array
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
}
    }
    //join the array back to a string
    return newArr.join(' ')
}

console.log(removeDuplicateWords())