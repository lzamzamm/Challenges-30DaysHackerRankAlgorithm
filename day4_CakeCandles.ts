function birthdayCakeCandles(candles: number[]): number {
    // Write your code here
    
    let sortedCandles = candles.sort((a,b) => b - a)
    
    let tallestCandleSum = 0
    let tallestCandle = sortedCandles[0]
    
    for(let i =0; i < sortedCandles.length; i++) {
        if(tallestCandle == sortedCandles[i]) {
            tallestCandleSum += 1
        }
    }
    
    return tallestCandleSum

}