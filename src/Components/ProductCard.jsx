import React, { useState, useEffect } from 'react';
import './ProductCard.css';
// import ProductCard from "./ProductCard";

export default function ProductCard(props) {
    // console.log(props.data)

    // const [data, setData] = useState([])
    // const [filter, setFilter] = useState(data);
    // const [loading, setLoading] = useState(false);
    // let componentsMounted = true;

    // useEffect(() => {
    //     const getProductCard = async () => { // Add the = operator here
    //         setLoading(true);
    //         const response = await fetch('https://fakestoreapi.com/products');
    //         if (componentsMounted) {
    //             setData(await response.clone().json());
    //             setFilter(await response.json());
    //             setLoading(false);
    //             console.log(filter)

    //         }

    //     }
    //     getProductCard()
    // }, []);




    // const [count, setCount] = useState(0)
    // const increaseVal = () => setCount(count + 1)
    // const decreaseVal = () => setCount(count - 1)

    return (


        // <div className="col-md-3 ">
        //     <div className="card shadow p-3 mb-5 bg-body-tertiary rounded mt-4 text-center">
        //         <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww&w=1000&q=80" className="card-img-top" alt="..." />
        //         <div className="card-body">
        //             <h5 className="card-title">toto</h5>
        //             <p className="card-text">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis molestiae consequuntur repellendus officiis voluptatum.
        //             </p>
        //             <a href="#" className="btn btn-dark">
        //                 buy now
        //             </a>
        //         </div>
        //         <div className="btn-group mx-5 align-items-center">

        //             <button type="button" className="btn btn-dark" onClick={decreaseVal}>-</button>
        //             <span className="mx-4"> {count}</span>
        //             <button type="button" className="btn btn-dark" onClick={increaseVal}>+</button>

        //         </div>
        //     </div>
        <>



            {/* col-12 col-sm-12 col-md-6 col-lg-4 */}


            {/* <div className="col-md-3 mb-5">
                <div className="card ">
                    <img
                        className="card-img"
                        src="https://roshgallery.pk/wp-content/uploads/2022/01/IMG-20200409-WA0047-1.jpg"
                        alt="T-shirts"
                    />
                    <div className="card-img-overlay d-flex justify-content-end">
                        <a href="#" className="card-link text-danger like">
                            <i className="fas fa-heart" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{props.data.name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted text-success">{props.data.phone}</h6>
                        <p className="card-text">
                            The Vans All-Weather MTE Collection features footwear and apparel
                            designed to withstand the elements whilst still looking cool.
                        </p>
                        <div className="price text-success">
                            <h3>$22</h3>
                        </div>
                        <div className="buy d-flex justify-content-between align-items-center">

                            <a href="#" className="btn btn-danger mt-3">
                                <i className="fas fa-shopping-cart" /> Buy Now
                            </a>

                            <a href="#" className="btn btn-danger mt-3">
                                <i className="fas fa-shopping-cart" /> Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}









        </>








    )
}
