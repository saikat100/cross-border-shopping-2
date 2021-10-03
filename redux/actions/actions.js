import { addPdUrl, 
    addProduct, 
    changeCurrency, 
    decreaseStep, 
    increaseStep, 
    selectCountry 
} 
from "../types/types";



export const addCountry = (country) => {
    return (
        {
            type: selectCountry,
            payload: country
        }
    )
};

export const updateCurrency = (currency) => {
    return (
        {
            type: changeCurrency,
            payload: currency
        }
    )
};
export const updatePdUrl = url => {
    return (
        {
            type: addPdUrl,
            payload: url
        }
    )
}

export const updateStep = () => {
    return (
        {
            type: increaseStep,
        }
    )
};

export const backStep = () => {
    return (
        {
            type: decreaseStep,
        }
    )
};

export const addToCart = product => {
    return (
        {
            type: addProduct,
            payload: product
        }
    )
};