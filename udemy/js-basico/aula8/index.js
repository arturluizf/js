let varA = 'A'
let varB = 'B'
let varC = 'C'

/* const varATemp = varA
varA = varB;
varB = varC;
varC = varATemp;
*/ 

// outro modo mais recente de fazer

[varA, varB, varC] = [varB , varC, varA]

console.log(varA, varB, varC);