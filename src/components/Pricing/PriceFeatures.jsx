import React from 'react'

const PriceFeatures = ({ isCheck, desc }) => {
    return (
        <div className='price-feat'>
            {
                (isCheck) ? <i class="ri-checkbox-circle-line"></i> : <i class="ri-checkbox-blank-circle-line"></i>
            }
            <p>{desc}</p>
        </div>
    )
}

export default PriceFeatures
