import React from 'react'
import "../../components/Testinomials/Testinomial.css"
const ReviewStars = ({ isCheck }) => {
    return (
        <div className="star">
            {
                (isCheck)
                    ? <i style={{ color: "#f2b633" }} class="ri-star-fill"></i>
                    : <i style={{ color: "#f4f4f4" }} class="ri-star-fill"></i>
            }
        </div>
    )
}

export default ReviewStars
