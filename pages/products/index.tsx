import { GetStaticPathsContext, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'

type ProductsProps = {
  products: any[];
}
// client
const ProductPage = ({ products }: ProductsProps) => {
  console.log('Product page client')
  console.log("products", products);
  if (!products) return null
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
      ))}
    </div>
  )
}
export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPathsContext) => {
  console.log('Getstatic props - server');
  const data = await (await fetch(`http://localhost:3001/products`)).json()
  console.log('data', data);
  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      products: data
    }
  };
}
export default ProductPage 