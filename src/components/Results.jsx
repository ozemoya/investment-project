import { calculateInvestmentResults, formatter } from "../util/investment";
export const Results = ({input}) => {
    const resultData = calculateInvestmentResults(input);

    console.log(resultData);
    
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Value at end of year</th>
                    <th>Annual investment</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((data) => {
                    const investedCapital = data.valueEndOfYear - data.interest;
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.annualInvestment)}</td>
                            <td>{formatter.format(investedCapital)}</td> 
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
