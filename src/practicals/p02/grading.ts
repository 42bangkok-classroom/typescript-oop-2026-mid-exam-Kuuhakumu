// Write your code
let score = Number(process.argv[2]);
if(Number.isNaN(score)){
    console.log('Invalid input')
}
else if(typeof score === 'number'){
    if(score < 0){
        console.log('Invalid input')
    }
    else if(score <= 49){
        console.log('F');
    }
    else if(score <= 59){
        console.log('D');
    }
    else if(score <= 69){
        console.log('C');
    }
    else if(score <= 79){
        console.log('B')
    }
    else if(score > 79){
        console.log('A')
    }
    else if(score >100){
        console.log('Invalid input')
    }
}