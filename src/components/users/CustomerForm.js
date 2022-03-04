import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {contactSchema} from '../utilities/models/signupSchema';
import axios from '../utilities/axios';
import Alert from 'react-bootstrap/Alert';

const CustomerForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const sendMessage = async (data) => {
    console.log(data);
    console.log(data);
    const res = await axios.post('/general/createContactUs', data);
    console.log(res.data);
    handleShowAlert();
    setShowAlert(true);
    reset()
  }

  const handleShowAlert = () => {
    return (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Your Message is Received, We Will Contact You Shortly
        </Alert>
    );
  };
  return (
      <>
        <div className="container">
          <div className="row align-items-center justify-content-center min-vh-100">
            <div className="col-md-6 col-lg-5 col-xl-8">
              <div className="card" >
                <div className="card-body">
                  <div className="pb-4 text-center">
                    <h3 className="mb-2 text-primary">Contact Us</h3>
                    <span>{showAlert && handleShowAlert()}</span>

                  </div>
                  <form onSubmit={handleSubmit(sendMessage)} >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="form-label text-primary">First Name</label>
                          <input type="text" name="userName" className="form-control"
                                 placeholder="Enter First Name" {...register("firstName")}
                          />
                          <div className="redText">{errors.firstName?.message}</div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="form-label text-primary">Last Name</label>
                          <input type="text" name="lastName" className="form-control"
                                 placeholder="Enter Last Name" {...register("lastName")}
                          />
                          <div className="redText">{errors.lastName?.message}</div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="form-label text-primary">Email address</label>
                          <input type="email" name="email" className="form-control" placeholder="email@gmail.com"
                                 {...register("email")}/>
                          <div className="redText">{errors.email?.message}</div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="form-label text-primary">Phone Number</label>
                          <input type="text" name="phoneNumber" className="form-control"
                                 placeholder="Enter Phone Number" {...register("phoneNumber")}
                          />
                          <div className="redText">{errors.phoneNumber?.message}</div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <label className="form-label text-primary">Subject</label>
                          <input type="text" name="subject" className="form-control"
                                 placeholder="Enter User Name" {...register("subject")}
                          />
                          <div className="redText">{errors.subject?.message}</div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <label className="form-label text-primary">Message</label>
                        <textarea className="form-control" name="userMessage" {...register("userMessage")} rows="5">

                        </textarea>
                        <div className="redText">{errors.userMessage?.message}</div>
                      </div>
                    </div>

                    <div className="py-2">
                      {/*<NavLink to="/continue-sign-up" className="btn btn-primary w-100">
                          Create account
                        </NavLink>*/}
                      <button className="btn btn-primary w-100" type="submit">Send Message</button>
                    </div>

                    {/*<div className="row">

                        <div className="col-sm-12 my-2">
                          <a className="btn btn-light w-100" href="#">
                                                        <span className="btn-inner-icon me-2"><i className="fab fa-google"/></span>
                            <span className="btn-inner-text">Google</span>
                          </a>
                        </div>
                      </div>*/}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default CustomerForm;
