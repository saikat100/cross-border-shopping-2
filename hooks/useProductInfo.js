import React from "react";


const useProductInfo = () => {
 
    const [inputValue, setInputValue] = React.useState({});
    const [currency, setCurrency] = React.useState({});
    
    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        const prevValue = {...inputValue};

        prevValue[name] = value;
        setInputValue(prevValue);

        if(name === 'currency'){
            if(value === 'CNY'){
                setCurrency({CNY: 6.47});
            }
            if(value === 'INR'){
                setCurrency({INR: 74.30});
            }
            if(value === 'BDT'){
                setCurrency({BDT: 86.06});
            }
            if(value === 'GBP'){
                setCurrency({GBP: 0.74});
            }
            if(value === 'USD'){
                setCurrency({GBP: 1.00});
            }
            if(value === 'AED'){
                setCurrency({AED: 3.67});
            }
            if(value === 'MYR'){
                setCurrency({MYR: 4.19});
            }
        }
    }

    return {
        handleInput,
        inputValue,
        currency
    }
}

export default useProductInfo;
