import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div>
      <Link href='/product/1'>
        <h1>Product 1</h1>
      </Link>
      <Link href='/product/2'>
        <h1>Product 2</h1>
      </Link>
      <Link href='/product/3' replace>
        <h1>Product 3 -- (with Replace)</h1>
      </Link>
      <Link href='/product/4'>
        <h1>Product 4</h1>
      </Link>
    </div>
  )
}

export default Products
