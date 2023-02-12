import React from 'react'
import Spot from "./Spot";

const Spots = ({ spots, onAnySpotClicked }) => {
    const onClick = id => {
        onAnySpotClicked(id)
    }
    return (
        <div className="row mb-5">
            {spots.map((spot, index) => (
                <Spot onSpotClicked={onClick} spot={spot} key={index} />
            ))}
        </div>
    )
}

export default Spots;
