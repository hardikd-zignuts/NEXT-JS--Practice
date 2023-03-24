import { useRouter } from 'next/router'
import React from 'react'

const Product = () => {
    const router = useRouter()
    const productid = router.query.productid
    return (
        <div>
            <h2> Product Details for {productid}</h2>
        </div>
    )
}

export default Product
