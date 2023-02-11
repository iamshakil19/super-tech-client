import React from 'react';

const HomeProductCard = ({recent}) => {
    return (
        <div>
            <h1 className={`
          ${recent ? "text-red-500" : "text-blue-500"}`}>This is home product card</h1>
        </div>
    );
};

export default HomeProductCard;