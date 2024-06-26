import investmentLogo from '../assets/investment-calculator-logo.png';

export const Header = () => {
    return (
        <header id="header">
            <img src={investmentLogo} className="App-logo" alt="logo" />
            <h1> Investment Calculator</h1>
        </header>

    );
}