import StDetail from "./StDetail";
import StLogo from "./StLogo";
import DateInv from "./DateInv";
import StAddress from "./StAddress";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

const StoreDetail = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);


    return (
        <div className="StoreDetail">
            <div className="StoreDetailTop">
                <StDetail data={data} />
                <StLogo/>
                <DateInv />
            </div>
            <div className="StoreDetailBottom">
                <StAddress data={data}/>
            </div>
        </div>
    );
};

export default StoreDetail;
