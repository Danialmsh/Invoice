import { useState } from "react";
import MyModal from "./MyModal";

const Table = () => {
    const [modalShow, setModalShow] = useState(false);
    const [Rows, setRows] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleEditClick = (row) => {
        setSelectedRow(row);
        setModalShow(true);
    };

    const handleSetInvoice = (e) => {
        e.preventDefault();
        console.log("ثبت فاکتور", Rows);
    };

    return (
        <>
            {/* دکمه‌های بالا */}
            <div className="ButtonsFirst">
                <button type="button" className="button" onClick={() => setModalShow(true)}>
                    <span className="button__text">اضافه کردن محصول</span>
                    <span className="button__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round"
                             strokeLinecap="round" stroke="currentcolor" fill="none" className="svg">
                            <line y2="19" y1="5" x2="12" x1="12"></line>
                            <line y2="12" y1="12" x2="19" x1="5"></line>
                        </svg>
                    </span>
                </button>
                <button className="bt" id="bt" onClick={handleSetInvoice}>
                    <span className="msg" id="msg"></span>
                    ثبت کردن فاکتور
                </button>
            </div>

            {/* جدول محصولات */}
            {Rows.length > 0 && (
                <div className="containerTable">
                    <ul className="responsive-tableDani">
                        <li className="table-header">
                            <div className="colDani colDani-1">ردیف</div>
                            <div className="colDani colDani-2">شناسه</div>
                            <div className="colDani colDani-3">نام محصول</div>
                            <div className="colDani colDani-4">تعداد</div>
                            <div className="colDani colDani-5">قیمت</div>
                            <div className="colDani colDani-6">قیمت کل</div>
                            <div className="colDani colDani-7">تغییرات</div>
                        </li>
                        {Rows.map((row) => (
                            <li className="table-row" key={row.id}>
                                <div className="colDani colDani-1" data-label="ردیف">{row.id}</div>
                                <div className="colDani colDani-2" data-label="شناسه">{row.ProductId}</div>
                                <div className="colDani colDani-3" data-label="نام محصول">{row.name}</div>
                                <div className="colDani colDani-4" data-label="تعداد">{row.Quantity}</div>
                                <div className="colDani colDani-5" data-label="قیمت">{`${row.Price} تومان `}</div>
                                <div className="colDani colDani-6" data-label="قیمت کل">{`${row.Prices} تومان `}</div>
                                <div className="colDani colDani-7" data-label="تغییرات">
                                    {/* دکمه ویرایش */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightblue"
                                         className="bi bi-pencil" viewBox="0 0 16 16"
                                         onClick={() => handleEditClick(row)}
                                         style={{ cursor: "pointer" }}>
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                    </svg>
                                    {/* دکمه حذف */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                         className="bi bi-trash3" viewBox="0 0 16 16"
                                         onClick={() => setRows(Rows.filter(r => r.id !== row.id))}
                                         style={{ cursor: "pointer" }}>
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1z"/>
                                    </svg>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {modalShow && (
                <MyModal
                    Rows={Rows}
                    setRows={setRows}
                    show={modalShow}
                    onHide={() => {
                        setModalShow(false);
                        setSelectedRow(null);
                    }}
                    selectedRow={selectedRow}
                />
            )}
        </>
    );
};

export default Table;
