function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    // Write your code here
    let sumApp = 0
    let sumOrg = 0
    
    apples.forEach((val) => {
        const newVal = val + a
        if(newVal<= t && newVal>= s) {
            sumApp += 1
        }
    })
    
    oranges.forEach((val) => {
        const newVal = b + val
        if(newVal<= t && newVal>= s) {
            sumOrg += 1
        }
    })
    
    console.log(sumApp)
    console.log(sumOrg)
}