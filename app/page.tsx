import React, { useState } from 'react';

const TradingForm = () => {
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [orderType, setOrderType] = useState('buy');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(`Order Type: ${orderType}, Amount: ${amount}, Price: ${price}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Trading Form</h1>
            <div>
                <label>
                    Order Type:
                    <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Amount:
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </label>
            </div>
            <button type="submit">Submit Order</button>
        </form>
    );
};

export default TradingForm;