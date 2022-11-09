let QuestionsArray=[
    {
        Question:"4+2=",
        option1:"2",
        option2:"4",
        option3:"6",
        option4:"8",
        correctAnswer:'3' //Correct Option
    },
    {
        Question:"4-2=",
        option1:"2",
        option2:"4",
        option3:"6",
        option4:"8",
        correctAnswer:'1'
    },
    {
        Question:"8/2=",
        option1:"2",
        option2:"4",
        option3:"6",
        option4:"8",
        correctAnswer:'2'
    },
    {
        Question:"4x2=",
        option1:"2",
        option2:"4",
        option3:"6",
        option4:"8",
        correctAnswer:'4'
    }
];
let correctQuestion=0;
for (let index = 0; index < QuestionsArray.length; index++) {
    //console.log(QuestionsArray[index])
    console.log(`\nQuestion No ${index+1} : ${QuestionsArray[index].Question}`)
    console.log(`\n\tOption 1 : ${QuestionsArray[index].option1}`)
    console.log(`\tOption 2 : ${QuestionsArray[index].option2}`)
    console.log(`\tOption 3 : ${QuestionsArray[index].option3}`)
    console.log(`\tOption 4 : ${QuestionsArray[index].option4}`)
    let opt=prompt("Enter Your Option Number")
    if(opt==QuestionsArray[index].correctAnswer){
        correctQuestion++
    }
}
let percentage=(correctQuestion/QuestionsArray.length)*100;
console.log(`\nCorrect Answers ${correctQuestion}/${QuestionsArray.length}, You Got ${percentage}%.`);
