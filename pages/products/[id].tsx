import React from 'react'
import { useRouter } from 'next/router'


type Props = {}

const ProductDeatail = (props: Props) => {
    const router =  useRouter();
    const id = router.query.id
  return (
    <div>ProductDeatail id : {id}</div>
  )
}

export default ProductDeatail