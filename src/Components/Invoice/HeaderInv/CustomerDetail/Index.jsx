import moment from "moment-jalaali";

const CustomerDetail = () => {
    return (
        <div className="CustomerDetail">
            <div className="StDetailElement">
                <div className="StDetailElF">
                    گیرنده :
                </div>
                <div className="StDetailElS">
                    مرکزی - اراک
                </div>
            </div>
            <div className="StDetailElement">
                <div className="StDetailElF">
                    نام کامل :
                </div>
                <div className="StDetailElS">
                    علیرضا راستگردانی
                </div>
            </div>
            <div className="StDetailElement">
                <div className="StDetailElF">
                    کد پستی :
                </div>
                <div className="StDetailElS">
                    3813691853
                </div>
            </div>
            <div className="StDetailElement">
                <div className="StDetailElF">
                    تلفن :
                </div>
                <div className="StDetailElS">
                    09352568516
                </div>
            </div>
            <div className="StDetailElement">
                <div className="StDetailElF">
                    تاریخ سفارش :
                </div>
                <div className="StDetailElS">
                    {moment().format('jYYYY-jM-jD HH:mm:ss')}
                </div>
            </div>
        </div>
    )
}

export default CustomerDetail;