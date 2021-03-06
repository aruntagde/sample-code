import { PRODUCT_LIST, ADD_TO_CART , CAROUSEl_DATA, SEARCH_TEXT , PRODUCT_SETTING, CLEAR_LIST_DATA, MY_ORDERS} from './types';

export const productListCall = (payload) => {

    return {
        type: PRODUCT_LIST,
        payload: payload
    }
}

export const addtoCartListCall = (payload) => {

    return {
        type: ADD_TO_CART,
        payload: payload
    }
}

// export const placeOrderCall = (payload) => {

//     return {
//         type: PLACE_ORDER,
//         payload: payload
//     }
// }

export const carouselDataCall = (payload) => {

    return {
        type: CAROUSEl_DATA,
        payload: payload
    }
}

export const searchTextValue = (payload) => {

    return {
        type: SEARCH_TEXT,
        payload: payload
    }
}

export const clearListData = (payload) => {

    return {
        type: CLEAR_LIST_DATA,
        payload: payload
    }
}

export const productSettings = (payload) => {

    return {
        type: PRODUCT_SETTING,
        payload: payload
    }
}

export const myOrdersCall = (payload) => {

    return {
        type: MY_ORDERS,
        payload: payload
    }
}
