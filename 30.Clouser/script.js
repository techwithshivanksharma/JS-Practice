function outerFunction(){

    let count =0;


    function increment(){
    count++;
    console.log("Count is: ",count);
    }
    function decrement(){
    count--;
    console.log("Count is: ",count);
    }

    return [increment,decrement];
};

const setCount = outerFunction();
const [increment, decrement] = setCount;

increment();
increment();
decrement();