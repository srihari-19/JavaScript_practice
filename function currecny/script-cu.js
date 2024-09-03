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


const formatter = (local, currency, value) => {
    let formatterValue = new Intl.NumberFormat(local, {
        style: "currency",
        currency: currency,
    }).format(value);
    return formatterValue;
}

//  for html output
const taxprint = (tableValue) => {
    const addTable = document.createElement("table");
    addTable.innerHTML = `
        <tr>
            <td>sum before tax</td>
            <td>${tableValue.sum}</td>
        </tr>
         <tr>
            <td> tax percentage</td>
            <td>${tableValue.percentage}</td>
        </tr>
        <tr>
            <td>rate of the tax</td>
            <td>${tableValue.tax}</td>
        </tr>
        <tr>
            <td>Total tax pluse amount </td>
            <td>${tableValue.total}</td>
        </tr>
    `;
    document.querySelector("main").append(addTable)
}

const taxCalculator = (sum, percentage, local, currency,callback) => {

    let tax = sum * (percentage / 100);
    let total = sum + tax;

    const tableValue = {
        sum     : formatter(local, currency, sum),
        percentage : percentage,
        tax : formatter(local, currency, tax),
        total : formatter(local, currency, total)
    }
    callback(tableValue);
}

taxCalculator(99, 15, "en-IN", "INR",taxprint );