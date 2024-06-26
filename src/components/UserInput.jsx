//Add State 
export const UserInput = ({onChange, userInput}) => {
    


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                <label htmlFor="initial-investment">Initial investment</label>
                <input type="number" id="initial-investment" name="initial-investment" placeholder="Enter initial investment" value={userInput.initialInvestment} onChange={(e) => onChange("initialInvestment", e.target.value)} />
                </p>

                <p>
                <label htmlFor="annual-investment">Annual investment</label>
                <input type="number" id="annual-investment" name="annual-investment" placeholder="Enter annual investment" value={userInput.annualInvestment} onChange={(e) => onChange("annualInvestment", e.target.value)} />
                </p>
                
                <p>
                <label htmlFor="expected-return">Expected return</label>
                <input type="number" id="expected-return" name="expected-return" placeholder="Enter expected return" value={userInput.expectedReturn} onChange={(e) => onChange("expectedReturn", e.target.value)} />
                </p>

                <p>
                <label htmlFor="duration">Duration</label>
                <input type="number" id="duration" name="duration" placeholder="Enter duration" value={userInput.duration} onChange={(e) => onChange("duration", e.target.value)} />
                </p>
            </div>
        </section>
    );
};
