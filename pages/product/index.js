import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Products = () => {
  const router = useRouter()
  console.log(router)
  const handleClick = () => {
    alert('Order placed Successfully')
    router.push('/')
    // also use replace to remove history 
    // router.replace('/')
  }
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
      <hr />
      <button onClick={handleClick} className='btn btn-primary'>Buy Products</button>
    </div>
  )
}

export default Products
