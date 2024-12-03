// Modal.js
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ setClose, title, children }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-fit">
                <div className="flex justify-end items-center p-4 border-b">
                    <button className="text-gray-600 hover:text-gray-800" onClick={setClose}>
                        &times;
                    </button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );

    //
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;