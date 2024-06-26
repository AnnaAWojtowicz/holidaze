import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function NumberOfGuests({ guests }) {
    const iconsToShowMaxGuests = guests > 5 ? 5 : guests;
    return (
        <div className="maximumGuests">
            <div>Max. {guests} guests</div>
            <div>
                {Array.from({ length: iconsToShowMaxGuests }).map((_, i) => (
                    <i key={i} className="bi bi-person-arms-up"></i>
                ))}
                {guests > 5 &&
                    <i className="bi bi-plus"></i>
                }
            </div>
        </div>
    );
}

export default NumberOfGuests;