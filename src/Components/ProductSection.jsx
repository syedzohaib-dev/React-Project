import React from 'react'
import ProductCard from './productCard'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

export default function ProductSection(props) {
    return (
        <>
            <div className="container">
                <h2 className='text-center my-5'>{props.sectionTitel} <BsArrowUpRightCircleFill color="blue"/></h2>
                <div className="row">
                    <ProductCard brandName="bonanza" collectionName="summer" categoryName="female" />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>

        </>
    )
}
