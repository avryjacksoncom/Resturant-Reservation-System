import React from "react";
import { Helmet } from "react-helmet";

export default function robertoOrderPage() {
    return (
        <div className="container">
            <Helmet>
                <title>Reservations</title>
                <link rel="stylesheet" href="style.css" />
            </Helmet>
            <a href="index.html">Return to Menu</a>
            <h2>Order Page</h2>
        </div>
    );
}
