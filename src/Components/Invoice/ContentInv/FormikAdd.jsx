import { FastField, Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";

function FormikAdd({ Rows, setRows, onHide, selectedRow }) {
    const [initialValues, setInitialValues] = useState({
        name: "",
        Quantity: "",
        Price: "",
    });

    useEffect(() => {
        if (selectedRow) {
            setInitialValues({
                name: selectedRow.name || "",
                Quantity: selectedRow.Quantity || "",
                Price: selectedRow.Price || "",
            });
        } else {
            setInitialValues({
                name: "",
                Quantity: "",
                Price: "",
            });
        }
    }, [selectedRow]);

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
                if (selectedRow) {
                    // ویرایش سطر
                    setRows((prevRows) =>
                        prevRows.map((row) =>
                            row.id === selectedRow.id
                                ? {
                                    ...row,
                                    name: values.name,
                                    Quantity: Number(values.Quantity),
                                    Price: Number(values.Price),
                                    Prices: Number(values.Quantity) * Number(values.Price),
                                }
                                : row
                        )
                    );
                } else {

                    setRows((prevRows) => {
                        const maxId = prevRows.length > 0 ? Math.max(...prevRows.map((row) => row.id)) : 0;
                        const newRow = {
                            id: maxId + 1,
                            ProductId: Math.floor(Math.random() * 10000),
                            name: values.name,
                            Quantity: Number(values.Quantity),
                            Price: Number(values.Price),
                            Prices: Number(values.Quantity) * Number(values.Price),
                        };
                        return [...prevRows, newRow];
                    });
                }
                resetForm();
                onHide();
            }}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <FastField type="text" className="form-control" name="name" id="name" placeholder="محصول" />
                    <FastField type="number" className="form-control" name="Quantity" id="Quantity" placeholder="تعداد" />
                    <FastField type="number" className="form-control" name="Price" id="Price" placeholder="قیمت" />
                    <Button variant="primary" className="SetInvoice" type="submit">
                        {selectedRow ? "ویرایش محصول" : "ثبت محصول"}
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default FormikAdd;
