function aVeryBigSum(ar: number[]): number {
    // Write your code here
    let sum = 0
    for(var val in ar) {
        var intVal: number = ar[val]
        sum += intVal
    }
    
    return sum
}