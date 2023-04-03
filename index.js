const express = require('express')
const app = express();
app.listen(3000, () => {
    console.log({
        firstAnswer: getFirstAnswerResult(),
        secondAnswer: arrayAlgorithm(10, 9),
        thirdAnswer: "Inizio dal task con il quale mi sento più confidente per chiuderlo nel minor tempo possibile, in questo modo avrò maggior tempo per svolgere il task dove mi sento meno sicuro",
        fourthAnswer: "La scelta dello stack tecnologico in relazione al fatto di dover minimizzare i tempi di sviluppo e i costi è fondamentale, per cui io opterei per uno stack con il quale i membri del team si sentono piu confidenti, in questo caso se il team è composto solo da me utilizzerei angular per il frontend e nestjs per il backend visto che sono i framework che conosco meglio, come database sceglerei postgres per lo stesso motivo. Nel caso si dovesse avere piu tempo a disposizione, dedicherei del tempo per la ricerca, magari si scopre una tecnologia che fitta meglio le proprie esigenze.",
    });
});
const getFirstAnswerResult = () => {
    return getNumbers().map(n => {
        return multipleCheck(n);
    });
}
const getNumbers = () => {
    return ([...Array(100).keys()].map(x => ++x));
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
const arrayAlgorithm = (n, k) => {
    const firstArray = [...Array(n).keys()].map(el => {
        return Math.random();
    });
    const secondArray = [...Array(k).keys()].map(el => {
        return Math.random();
    });
    const result = secondArray.map(el => {
       return {
            key: el,
            value: firstArray.filter(sel => sel < el).length
        };
    });
    return {
        firstArray,
        secondArray,
        result: JSON.stringify(result, null, 4)
    }
}