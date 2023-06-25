import React from 'react'

export default function ProductCard(props) {
    return (
        <div className="col-md-3 ">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded mt-4 text-center">
                <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww&w=1000&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.brandName}</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis molestiae consequuntur repellendus officiis voluptatum.
                    </p>
                    <a href="#" className="btn btn-dark">
                        buy now
                    </a>
                </div>
            </div>

        </div>
    )
}
