import React, {useState} from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import {signUpSchema} from '../utilities/models/signupSchema';
import {useForm} from 'react-hook-form';
import './form.css';
import axios from '../utilities/axios';
import Alert from 'react-bootstrap/Alert';

const EmployeeForm = () => {
  const [showAlert, setShowAlert] = useState(false);


  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const createAccountDetails = async (data) => {
    console.log(data);
    const res = await axios.post('/employees/createWebEmployer', data);
    console.log(res.data);
    handleShowAlert();
    setShowAlert(true);
    reset();
  };
  const handleShowAlert = () => {
    return (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Congratulations! You have Registered Successfully
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
                    <h3 className="mb-2 text-primary">Create your account</h3>
                    <>{showAlert && handleShowAlert()}</>
                  </div>
                  <form onSubmit={handleSubmit(createAccountDetails)} >
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
                          <label className="form-label text-primary">Other Name</label>
                          <input type="text" name="otherName" className="form-control"
                                 placeholder="Enter User Name" {...register("otherName")}
                          />
                          {/*<div className="redText">{errors.otherName?.message}</div>*/}
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
                        <div>
                          <label htmlFor="name" className="form-label text-primary">Gender</label>
                          <select className="form-control" name="gender" {...register("gender")}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="preferNotToSpecify">Prefer not to specify</option>

                          </select>

                          <div className="redText">{errors.gender?.message}</div>
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
                        <label className="form-label text-primary">Address</label>
                        <textarea className="form-control" name="address" {...register("address")}>

                        </textarea>
                        <div className="redText">{errors.address?.message}</div>
                      </div>
                    </div>


                    <div className="form-group mb-3">
                      <label className="form-label text-primary">Password</label>
                      <div className="input-group">
                        <input name="password" className="form-control" placeholder="***********"
                               {...register("password")}/>

                      </div>
                      <div className="redText">{errors.password?.message}</div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label text-primary">Confirm Password</label>
                      <div className="input-group">
                        <input name="confirmPassword" className="form-control" placeholder="***********"
                               {...register("confirmPassword")}/>

                      </div>

                      <div className="redText">{errors.confirmPassword && "Password Mismatch"}</div>
                    </div>

                    <div className="py-2">
                      {/*<NavLink to="/continue-sign-up" className="btn btn-primary w-100">
                          Create account
                        </NavLink>*/}
                      <button className="btn btn-primary w-100" type="submit">Create account</button>
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

export default EmployeeForm;
