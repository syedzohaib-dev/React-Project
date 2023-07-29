import React, { useContext, useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

import { GlobalContext } from '../context/login/Context'
/* import { reducer } from '../login/Reducer'; */

const initialState = {
  name: '',
  fatherName: '',
  age: '',
  address: '',
  city: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
  choices: [],
};

const formReducer = (formState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...formState, [action.payload.name]: action.payload.value };
    case 'TOGGLE_CHOICE':
      const choices = formState.choices.includes(action.payload.choice)
        ? formState.choices.filter((s) => s !== action.payload.choice)
        : [...formState.choices, action.payload.choice];
      return { ...formState, choices };
    default:
      return formState;
  }
};

export default function SignUp() {
  const [formState, formDispatch] = useReducer(formReducer, initialState);
  const { dispatch } = useContext(GlobalContext);

  const handleChange = (e) => {
    formDispatch({
      type: 'UPDATE_FIELD',
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleChoiceChange = (e) => {
    formDispatch({
      type: 'TOGGLE_CHOICE',
      payload: {
        choice: e.target.value,
      },
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!formState.name) {
      errors.name = 'Name is required';
    }
    if (!formState.fatherName) {
      errors.fatherName = 'Father Name is required';
    }
    if (!formState.email) {
      errors.email = 'Email is required';
    }
    if (!formState.age) {
      errors.age = 'Age is required';
    }
    if (!formState.city) {
      errors.city = 'City is required';
    }
    if (!formState.password) {
      errors.password = 'Password is required';
    }
    if (formState.password !== formState.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (formState.choices.length === 0) {
      errors.choices = 'Please select at least one choice';
    }

    if (Object.keys(errors).length > 0) {
      formDispatch({
        type: 'UPDATE_FIELD',
        payload: { name: 'errors', value: errors },
      });
    } else {
      dispatch({
        type: 'SIGNUP_USER',
        payload: formState.user, // Pass the entire formState as the payload
      });

      console.log('Form Data:', formState);
      Swal.fire('Success!', 'Account registered successfully!', 'success');
    }
  };

  return (
    <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      <div
        className="mb-3 square border border-warning rounded-9 p-4 w-50"
        style={{ marginTop: '40px', marginBottom: '40px' }}
      >
        <h4 className="mb-3 text-center text-warning">Registration Form</h4>
        <Form onSubmit={handleFormSubmit} className="p-4 rounded" style={{ background: 'linear-gradient(to bottom right, #212121, #ffc107)' }}>
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="formBasicName">
                <Form.Label className='text-light'>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder=""
                  value={formState.name}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.name}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                  className="input-field"
                />
                {formState.errors.name && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.name}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicFatherName">
                <Form.Label className='text-light'>Father Name</Form.Label>
                <Form.Control
                  name="fatherName"
                  type="text"
                  placeholder=""
                  value={formState.fatherName}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.fatherName}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                  className="input-field"
                />
                {formState.errors.fatherName && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.fatherName}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="formBasicEmail">
                <Form.Label className='text-light'>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder=""
                  value={formState.email}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.email}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                  className="input-field"
                />
                {formState.errors.email && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.email}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicAge">
                <Form.Label className='text-light'>Age</Form.Label>
                <Form.Control
                  name="age"
                  type="number"
                  placeholder=""
                  value={formState.age}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.age}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                  className="input-field"
                />
                {formState.errors.age && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.age}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="formBasicAddress">
                <Form.Label className='text-light'>Address</Form.Label>
                <Form.Control
                  name="address"
                  type="text"
                  placeholder=""
                  value={formState.address}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.address}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                  className="input-field"
                />
                {formState.errors.address && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.address}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicCity">
                <Form.Label className='text-light'>City</Form.Label>
                <Form.Control
                  name="city"
                  type="text"
                  placeholder=""
                  value={formState.city}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.city}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                  className="input-field"
                />
                {formState.errors.city && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.city}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="formBasicPassword">
                <Form.Label className='text-light'>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder=""
                  value={formState.password}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.password}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                  className="input-field"
                />
                {formState.errors.password && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.password}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label className='text-light'>Confirm Password</Form.Label>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder=""
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.confirmPassword}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                  className="input-field"
                />
                {formState.errors.confirmPassword && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.confirmPassword}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <h6 className='mb-3 text-light'>What are you interested in?</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gadgets"
                  value="GADGETS"
                  checked={formState.choices.includes('GADGETS')}
                  onChange={handleChoiceChange}
                />
                <label className="text-light form-check-label" htmlFor="gadgets">
                  Gadgets
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="accessories"
                  value="ACCESSORIES"
                  checked={formState.choices.includes('ACCESSORIES')}
                  onChange={handleChoiceChange}

                />
                <label className="text-light form-check-label" htmlFor="accessories">
                  Accessories
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="fragrances"
                  value="FRAGRANCES"
                  checked={formState.choices.includes('FRAGRANCES')}
                  onChange={handleChoiceChange}

                />
                <label className="text-light form-check-label" htmlFor="fragrances">
                  Fragrances
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="dresses"
                  value="DRESSES"
                  checked={formState.choices.includes('DRESSES')}
                  onChange={handleChoiceChange}
                />
                <label className="text-light form-check-label" htmlFor="dresses">
                  Dresses
                </label>
              </div>
              {formState.errors.choices && (
                <div className="text-danger">{formState.errors.choices}</div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button className="btn btn-dark btn-gradient-light text-warning" variant="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
