function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    // Write your code here
    
    if(v1 > v2) {
        let dist = x2 - x1
        let sped = v1 - v2
        if((dist % sped) == 0 && sped >= 0 && dist>=0) {
            return "YES"
        } else {
            return "NO"
        }
    } else if (v2 > v1) {
        let dist = x1 - x2
        let sped = v2 - v1
        if((dist % sped) == 0 && sped >= 0 && dist>=0) {
            console.log(dist, sped, dist % sped)
            return "YES"
        } else {
            return "NO"
        }
    } else {
        if(x1 == x2) {
            return "YES"
        } else {
            return "NO"
        }
    }
}