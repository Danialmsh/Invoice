import React from "react";
import Modal from 'react-bootstrap/Modal';
import FormikAdd from "./FormikAdd";

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.selectedRow ? "محصول خود را ویرایش کنید" : "محصول خود را اضافه کنید"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormikAdd {...props}/>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;