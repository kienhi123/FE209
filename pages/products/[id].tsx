import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
type ProductProps = {
  product:any,
}
const ProductDeatail = ({product}: ProductProps )  => {
   if(!product) return null
  return (
    <div>ProductDeatail id : {product.name} 
     </div>
  )
}
// export const getStaticPaths:GetStaticPaths = async ()=>{
//   const data = await (await fetch(`http://localhost:3001/products`)).json();
//   const paths = data.map((item:{id:any})=>{
//      return {params :{id:item.id}}
//   })
//   return {    
//     paths,
//     fallback:false
//   }
// }
// export const getStaticProps : GetStaticProps<ProductProps> = async (
//   context :GetStaticPropsContext
//   )=>{
//   console.log('GET statics props');
//   console.log('context',context.params?.id);

//   const data = await (await fetch(`http://localhost:3001/products/${context.params?.id}`)).json()
//   if(!data){
//     return{
//       notFound:true
//     }
//   }
//   return {
//     props:{
//       product:data
//     },
//   };
// };

export const getServerSideProps : GetServerSideProps = async (context:GetServerSidePropsContext)=>{
  context.res.setHeader(
    'Cache-Control',
    's-maxage=5, stale-while-revalidate'
  )
 const data = await (await fetch(`http://localhost:3001/products/${context.params?.id}`)).json()
 return {
  props:{
    product:data
  }
 }
}




export default ProductDeatail

// Static Site Generation => Render ra các file html có sẵn
// Server Side rendering => server trả về dữ liệu khi user truy cap
// Client Side rendering => giống react
// Icremental Static Generation => 
// cache dữ liệu, khi truy cập vào 1 page không có thì sẽ chờ thời gian tạo page mới