import React from 'react';
import { Alert, Button } from "react-bootstrap";

// used https://react-bootstrap.netlify.app/docs/components/alerts/ as reference for alert

const Order = ({ show, setShow, alert }) => {
    if (!show) {
        return null;
    }

    return (
        <>
            <div className="center_alert">
                <Alert show={show} variant="light">
                    <Alert.Heading>Your Order Details</Alert.Heading>
                    <p>
                        {alert}<br />
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-dark">
                            Ok
                        </Button>
                    </div>
                </Alert>
            </div>
        </>

    );
};

export default Order;
