// const taxCalculator = (sum, percentage, currency, prefix) => {

//     let tax = sum * (percentage / 100);
//     let total = sum + tax;
//     if (prefix) {
//         console.log(`
//             sum before tax: ${currency} ${sum}
//             tax percentage: ${percentage}%
//             tax     :       ${currency} ${tax.toFixed(2)}
//             Total :         ${currency} ${total.toFixed(2)}
//             `)

//     }
//     else {
//         console.log(`
//             sum before tax:  ${sum}${currency}
//             tax percentage: ${percentage}%
//             tax     :        ${tax.toFixed(2)}${currency}
//             Total :          ${total.toFixed(2)}${currency}
//             `)
//     }

// };

// // €
// taxCalculator(99, 15, "rupees",false);


const formatter = (local,currency,value)=>{
    let formatterValue = new Intl.NumberFormat(local,{
        style:"currency",
        currency:currency,
    }).format(value);
    return formatterValue;
}

const taxCalculator = (sum, percentage,local,currency,) => {

        let tax = sum * (percentage / 100);
        let total = sum + tax;
        console.log(`
                    sum before tax: ${formatter(local,currency,sum)}
                    tax percentage: ${percentage}%
                    tax     :       ${formatter(local,currency,tax)}
                    Total :         ${formatter(local,currency,total)}
                    `)
    }

    taxCalculator(99, 15,"en-IN","INR");