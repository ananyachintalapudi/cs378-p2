import React from 'react';

const Footer = ({ subtotal, clear }) => {
    return (
        <div className="row footer">
            <div className="col">
                <div className="h3">SUBTOTAL: ${subtotal}</div>
            </div>
            <div className="col">
                <button className="order_button"> Order
                </button>
            </div>
            <div className="col">
                <button className="cancel_button" onClick={clear}> Clear All
                </button>
            </div>
        </div>
    );
};

export default Footer;
