function simpleArraySum(ar: number[]): number {
    // Write your code here
    let total = 0;
    ar.forEach((value: number) => {
        total += value;
    });
    return total
}
