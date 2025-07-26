function plusMinus(arr: number[]): void {
    // Write your code here
    let numPos = 0
    let numNeg = 0
    let zero = 0
    const lengthArr = arr.length
    
    arr.forEach((num: number) => {
        if (num === 0) {
            zero += 1
            return
        }
        
        if(num > 0) {
            numPos += 1
        } else {
            numNeg += 1
        }
    })
   
    console.log((numPos/lengthArr).toFixed(6))
    console.log((numNeg/lengthArr).toFixed(6)) 
    console.log((zero/lengthArr).toFixed(6))
}