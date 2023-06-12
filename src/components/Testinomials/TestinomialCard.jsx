import React from 'react'
import ReviewStars from './ReviewStars'
import "../../components/Testinomials/Testinomial.css"
const TestinomialCard = ({ review, name, desc, is1star, is2star, is3Star, is4Star, is5Star }) => {
    return (
        <div className='testinomial-card' data-aos="fade-up" data-aos-duration="500">
            <div className="test-stars">
                <ReviewStars isCheck={is1star} />
                <ReviewStars isCheck={is2star} />
                <ReviewStars isCheck={is3Star} />
                <ReviewStars isCheck={is4Star} />
                <ReviewStars isCheck={is5Star} />
            </div>
            <p>
                {review}
            </p>
            <div className="testinomial-profile">
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default TestinomialCard
