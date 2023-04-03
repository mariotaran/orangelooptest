const express = require('express')
const app = express();
app.listen(3000, () => {
    //Use getResult.toString() to return result without brackets
    console.log(JSON.parse({
        firstAnswer: getFirstAnswerResult(),
        secondAnswer: "",
        thirdAnswer: "",
        fourthAnswer: "",
    }));
});
const getNumbers = () => {
    return ([...Array(100).keys()].map(x => ++x));
}
const getFirstAnswerResult = () => {
    return getNumbers().map(n => {
        return multipleCheck(n);
    });
}
const multipleCheck = (n) => {
    const isThreeMultiple = (n % 3) === 0 ? true : false;
    const isFiveMultiple = (n % 5) === 0 ? true : false;
    const threeAndFiveMultiple = isThreeMultiple === true && isFiveMultiple === true;
    if(threeAndFiveMultiple){
        return "FooBar"
    }else if(isThreeMultiple){
        return "Foo"
    }else if(isFiveMultiple){
        return "Bar"
    }else{
        return n;
    }
}

const workingArray = (n, k) => {

}