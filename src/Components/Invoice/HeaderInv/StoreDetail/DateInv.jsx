import moment from 'moment-jalaali';

const DateInv = () => {

    return (
        <div className="DateInv">
            <div className="StDetailElement">
                <div className="StDetailElF">
                    تاریخ چاپ :
                </div>
                <div className="StDetailElS">
                    {moment().format('jYYYY/jM/jD HH:mm')}
                </div>
            </div>
            <div className="StDetailElement">
                <div className="StDetailElF">
                    شناسه سفارش :
                </div>
                <div className="StDetailElS">
                    {Math.floor(Math.random() * 1000000000)}
                </div>
            </div>
        </div>
    )
}

export default DateInv;