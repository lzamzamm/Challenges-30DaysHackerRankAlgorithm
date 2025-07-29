function gradingStudents(grades: number[]): number[] {
    // Write your code here
    console.log(grades)
    let result:any = []
    
    grades.forEach((val) => {
        if (val < 38) {
            result.push(val)
            return
        }
        
        let multiple5 = val / 5
        let numRound = Math.floor(multiple5)
        let nextMultiple = (numRound + 1) * 5
        
        if(nextMultiple - val < 3) {
            result.push(nextMultiple)
        } else {
            result.push(val)
        }
    })
    
    return result
}