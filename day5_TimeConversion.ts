function timeConversion(s: string): string {
    // Write your code here
    const splitS = s.split(":")
    let hours = Number(splitS[0])
    let minutes = splitS[1]
    let seconds = String(splitS[2])
    let hoursS = ''
    
    if(seconds.endsWith('PM')) {
        if(hours == 12) {
            hours = 12
        } else {
            hours = hours+12
        }
        return `${hours}:${minutes}:${seconds.substring(0,2)}`
    } else {
        if(hours == 12) {
            hours -= 12
        }
        if(hours < 10) {
        hoursS = `0${hours}`
        } else {
            hoursS = `${hours}`
        }
        return `${hoursS}:${minutes}:${seconds.substring(0,2)}`
    }
}