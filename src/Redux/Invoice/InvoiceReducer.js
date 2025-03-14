import {RECEIVE_INVOICE_ERROR, RECEIVE_INVOICE_RESPONSE, SEND_INVOICE_REQUEST} from "./InvoiceType";

const init = {
    loading:false,
    data:{},
    error:''
}
const InvoiceReducer = (state=init , action) => {
    switch (action.type) {
        case SEND_INVOICE_REQUEST:
            return {...state , loading: true}
        case RECEIVE_INVOICE_RESPONSE:
            return {loading: false, data: action.payload , error: ''}
        case RECEIVE_INVOICE_ERROR:
            return {loading: false, data: {},error: action.payload}
        default:
            return state;
    }
}

export default InvoiceReducer;