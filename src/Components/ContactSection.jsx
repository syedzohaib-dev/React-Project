import React from 'react'
import UserForm from './UserForm'

export default function ContactSection() {
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-1'>Contact us</h2>
            <h5 className="text-center mb-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, explicabo!</h5>
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-1.jpg" alt="" srcset="" />
                </div>
                <div className="col-md-6"><UserForm /></div>
            </div>
        </div>
    )
}
