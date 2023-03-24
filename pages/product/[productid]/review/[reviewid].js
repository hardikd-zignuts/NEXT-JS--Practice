import { useRouter } from 'next/router'
import React from 'react'

const Review = () => {
    const router = useRouter()
    const { productid, reviewid } = router.query
    return (
        <div>
            <h2>Review {reviewid} of product {productid}</h2>
        </div>
    )
}

export default Review
