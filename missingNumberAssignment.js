const array=[1,2,3,5,7,9,11,12,13,15,16,17,19,20,21,23,25];
let missing_index=[];
let missing_Values=[];
let updatedArray=[];
for (let index = 0; index < array.length; index++)
{
    const element1 = array[index];
    const element2 = array[index+1];
    if(element1===(element2-1))
    {
        updatedArray.push(array[index])
    }
    else
    {
        updatedArray.push(array[index],array[index]+1)
        missing_index.push(updatedArray.length-1)
        missing_Values.push(array[index]+1)
    }
}
missing_index.pop()
updatedArray.pop()
missing_Values.pop()

console.log("New Array is : ", updatedArray);
console.log("Missing Index : ", missing_index);
console.log("Missing Values : ", missing_Values);