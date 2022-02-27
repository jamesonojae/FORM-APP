import  * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  userName: Yup.string().required("user name is a required field"),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(10).required(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]),
  // termsConditions: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  dateOfBirth: Yup.string().required(),
  gender:  Yup.string().oneOf(["male", "female", "preferNotToSpecify"])
      .required(),
  phoneNumber: Yup.string().min(10).max(10).required(),
  address: Yup.string().min(10).required(),
});
