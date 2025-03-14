import { configureStore } from '@reduxjs/toolkit'
import InvoiceReducer from "./Invoice/InvoiceReducer";



const store = configureStore({ reducer: InvoiceReducer })

export default store;