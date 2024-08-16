const taxCalculator = () => {
    let sum = 90.50;
    let percentage = 18;
    let tax = sum * (percentage / 100);
    let total = sum + tax;
    console.log(`
        sum before tax:${sum}
        tax percentage:${percentage}%
        tax     : ${tax.toFixed(2)}
        Total : ${total.toFixed(2)}
        `)
};

taxCalculator();