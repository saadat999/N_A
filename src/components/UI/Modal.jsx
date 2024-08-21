


import React, { useState } from 'react'
import { Button, Modal as AntModal } from 'antd';
import { Link } from 'react-router-dom';
const Modal = () => {


    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

    const showModal = () => {
        setIsModalOpen(true); // Открыть модалку
    };

    const handleOk = () => {
        setIsModalOpen(false); // Закрыть модалку
    };

    const handleCancel = () => {
        setIsModalOpen(false); // Закрыть модалку при отмене
    };



    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const showModal = () => {
    //     setIsModalOpen(true);
    // };
    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };
    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };


    return (
        <div className="container">
            {/* Link вызывает модальное окно */}
            <Link to="/cart" onClick={showModal}>
                Open Modal
            </Link>

            {/* Модальное окно */}
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
        // <div className='container'>
        //     <Button  style={{
        //         color: '#FFFFFF',
        //         fontSize: 16,

        //     }} type="success" onClick={showModal}>
        //         Open Modal
        //     </Button>
        //     <AntModal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        //         <p>Some contents...</p>
        //         <p>Some contents...</p>
        //         <p>Some contents...</p>
        //     </AntModal>
        // </div>
    )
}

export default Modal