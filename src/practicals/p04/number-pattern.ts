// Write your code below
let input1 = Number(process.argv[2]);
for (let i = 1; i <= input1; i++){
    console.log('')
        for (let j = 1; j <= input1; j++){
            console.log(j<=input1-i?"  ":j," ")
        }
}