import {useEffect} from "react";

const StDetail = (props) => {

    return (
        <div className="StDetail">
            <div className="StDetailElement">
                <div className="StDetailElF">
                    عنوان :
                </div>
                <div className="StDetailElS">
                     فروشگاه {props.data.title}
                </div>
            </div>
            <div className="StDetailElement">
                <div className="StDetailElF">
                    وبسایت :
                </div>
                <div className="StDetailElS">
                    <a href={props.data.title}>{props.data.title}</a>
                </div>
            </div>
            <div className="StDetailElement">
                <div className="StDetailElF">
                    ایمیل :
                </div>
                <div className="StDetailElS">
                    {props.data.title}@gmail.com
                </div>
            </div>
            <div className="StDetailElement">
                <div className="StDetailElF">
                    تلفن :
                </div>
                <div className="StDetailElS">
                    {props.data.title}
                </div>
            </div>
        </div>
    )
}

export default StDetail;