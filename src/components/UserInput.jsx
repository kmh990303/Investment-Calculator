export default function UserInput({ onChange, userInput }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
                    <input
                        type="number"
                        id="initial-investment"
                        value={userInput.initialInvestment}
                        required
                        onChange={(event) =>
                            onChange('initialInvestment', event.target.value)
                        } />
                </p>
                <p>
                    <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
                    <input
                        type="number"
                        id="annual-investment"
                        value={userInput.annualInvestment}
                        required
                        onChange={(event) =>
                            onChange('annualInvestment', event.target.value)
                        } />
                </p>

            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected return">EXPECTED RETURN</label>
                    <input
                        type="number"
                        id="expected return"
                        value={userInput.expectedReturn}
                        required
                        onChange={(event) =>
                            onChange('expectedReturn', event.target.value)
                        } />
                </p>
                <p>
                    <label htmlFor="return">Duration</label>
                    <input
                        type="number"
                        id="return"
                        value={userInput.duration}
                        required
                        onChange={(event) =>
                            onChange('duration', event.target.value)
                        } />
                </p>
            </div>
        </div>
    )
}

