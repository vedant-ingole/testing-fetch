/* eslint-disable @next/next/no-img-element */
import React from 'react'
import commerce from '../../lib/commerce'
import Link from 'next/link'

const ProductPage = ({ product }) => {
    return (
        <div>
            
            <button>
                <Link href="/">Home</Link>
            </button>
            <br />

            <img src={product.media.source} alt="image" style={{height:'50vh'}} />
            <h3>{product.name}</h3>
            <h5>{product.price.formatted_with_symbol}</h5>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
    )
}

export default ProductPage


export async function getServerSideProps({ params }) {

    const { permalink } = params
    const product = await commerce.products.retrieve(permalink, {
        type: 'permalink',
    })

    return{
        props: {
            product,
          },
    }
} 

