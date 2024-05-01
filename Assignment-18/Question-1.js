// Return a new array with the elements doubled using the callback

var arr
const oldArray = (callback) => {
    arr = [1, 2, 3, 4, 5]
    console.log(arr);
    callback()
}

const newArray = () => {
    const doubledArray = arr.map(element => element*2)
    console.log(doubledArray);
}
    
oldArray(newArray)