const fs = require('fs');

function readInputFile(filePath) {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);

}

function convertToDecimal(base, value) {
    return parseInt(value, base);
}

function computeConstantC(data) {
    const roots = data.keys;
    const n = roots.n;
    const k = roots.k;

    const yValues = [];
  

    for (let i = 1; i <= n; i++) {
        const entry = data[i.toString()];
        if (entry) {
            const base = parseInt(entry.base);
            const value = entry.value;
            const decimalValue = convertToDecimal(base, value);
            yValues.push(decimalValue);
        }
    }
  

    const constantC = yValues.reduce((acc, curr) => acc + curr, 0);
  
    console.log(`The computed constant C is: ${constantC}`);
}

const inputData = readInputFile('input.json');
computeConstantC(inputData);
