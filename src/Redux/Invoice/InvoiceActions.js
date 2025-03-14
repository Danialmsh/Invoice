import {RECEIVE_INVOICE_ERROR, RECEIVE_INVOICE_RESPONSE, SEND_INVOICE_REQUEST} from "./InvoiceType";
import axios from "axios";

const sendInvoiceRequest = ()=>{
    return {
        type: SEND_INVOICE_REQUEST,
    }
}
const receiveInvoiceResponse = (data)=>{
    return {
        type: RECEIVE_INVOICE_RESPONSE,
        payload: data
    }
}
const receiveInvoiceError = (data)=>{
    return {
        type: RECEIVE_INVOICE_ERROR,
        payload: data
    }
}
const getInvoiceInfo = (query) => {
    return dispatch => {
        dispatch(sendInvoiceRequest());
        axios.get(`https://example.com/invoice`)
            .then(res=>{
                dispatch(receiveInvoiceResponse(res.data));
            }).catch(error=>{
            dispatch(receiveInvoiceError(error.data));
        })
    }

}
export default getInvoiceInfo;