// data: 
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContribution: number;
    totalInterestEarned: number;
};

function calculateInvestment(data: InvestmentData): InvestmentResult[] {

} // => result[]

function printResults(results) {
    //print (output) the result data
}

const results = calculateInvestment(...)

print(results);