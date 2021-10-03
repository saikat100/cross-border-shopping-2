import {
    selectCountry,
    changeCurrency,
    increaseStep,
    decreaseStep,
    addPdUrl,
    addProduct
} from '../types/types'

const initialState = {
    country: {},
    currency: '',
    step: 1,
    productInfo: {}
};


const productInfoReducer = (state = initialState, action) => {
    const prevState = { ...state };
    switch (action.type) {
        case selectCountry:
            prevState.country = action.payload;
            return prevState;

        case changeCurrency:
            prevState.currency = action.payload;
            return prevState;

        case increaseStep:
            prevState.step += 1;
            return prevState;


        case decreaseStep:
            prevState.step -= 1;
            return prevState;

        case addPdUrl:
            prevState.productInfo['pdUrl'] = action.payload;
            return prevState;

        case addProduct:
            prevState.productInfo = action.payload;
            return prevState;


        default:
            return state;
    }
};

export default productInfoReducer;