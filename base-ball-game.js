var calPoints = function(operations) {
    let stack = [];
    for(let i=0; i<operations.length; i++){
        if(operations[i] === "+"){
            stack.push(stack.at(-1)+stack.at(-2))
        } else if (operations[i] === "C"){
            stack.pop()
        } else if(operations[i] === "D"){
            stack.push(2* stack.at(-1))
        } else {
            stack.push(Number(operations[i]))
        }
    }
    const sum = stack.reduce(add, 0); 

    function add(accumulator, a) {
      return accumulator + a;
    }
    return sum
};

console.log(calPoints(["5","2","C","D","+"]))
