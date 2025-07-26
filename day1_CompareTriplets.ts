function compareTriplets(a: number[], b: number[]): number[] {
    console.log(a, b)
    let aSum = 0;
    let bSum = 0;
    
    for (let i = 0; i < 3; i++) {
        if(a[i] > b[i]) {
            aSum += 1
        } else if (a[i] < b[i]) {
            bSum += 1
        } else {
            continue
        }
    }
    
    return [aSum, bSum]

}