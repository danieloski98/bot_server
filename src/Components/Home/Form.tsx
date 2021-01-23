import React from 'react'
import { InputGroup, InputLeftElement, InputRightElement, Input} from '@chakra-ui/react'
import Lock from '../../assets/icons/Lock'
import Envelope from '../../assets/icons/Envelope'
import Eye from '../../assets/icons/Eye'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup';
import useMakeRequest from '../../Hooks/useMakeRequest'
import Loader from '../globals/Loader'
import useDetails from '../../Hooks/useAdminDetails';
import { IAdmintype } from '../../types/Admin'

export const IconsHolder = (props) => <div className="flex items-center h-full ">{props.children}</div>;

// validation schema
const validationSchema = yup.object({
    email: yup.string().email('Invalid Email').required('this field is required'),
    password: yup.string().required('Your password is required').min(10, 'A minimium of 10 alpha-numeric characters.')
});

export default function Form() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const history = useHistory();
    const { makeRequest } = useMakeRequest();
    const { setToken, setFirstname, setLastname, setEmail, setRole, setId } = useDetails();

    const formik = useFormik({
        initialValues: {email: '', password: ''},
        onSubmit: () => null,
        validationSchema,
    })


    const closeModal = () => {
        setLoading(false);
    }

    async function request() {
        if (!formik.dirty) {
            alert('You have to fill the form to continue');
        }else if (!formik.isValid) {
            alert('Please fillin the form correctly.')
        }else {
            // make the request
            setLoading(true);
            const data = await makeRequest('/admin/login', formik.values, {method: 'POST'});
            console.log(data);
            setLoading(false);
            switch(data.statusCode) {
                case 200: {
                    alert(data.successMessage);
                    const token = data.data['token'];
                    const user = data.data['user'] as IAdmintype;
                    setId(user.id);
                    setToken(token);
                    setEmail(user.email);
                    setRole(user.role);
                    setFirstname(user.firstname);
                    setLastname(user.lastname);

                    // save it to sessionStorage
                    sessionStorage.setItem('id', user.id);
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('email', user.email);
                    sessionStorage.setItem('firstname', user.firstname);
                    sessionStorage.setItem('lastname', user.lastname);
                    sessionStorage.setItem('role', user.role.toString());
                    history.push('/dashboard');
                    break;
                }
                case 400: {
                    alert(data.errorMessage);
                    break;
                }
                case 500: {
                    alert(data.errorMessage);
                    break;
                }
            }
        }
    }

    return (
        <div>
            <Loader loading={loading} onClose={closeModal} message={`${formik.values.email} Loggin in...`} />
            <h1 className="font-Rubik_Bold text-xl">Welcome Back</h1>
            <p className="font-Rubik_Medium text-xs">Please sign in to access your account</p>

            <div className="flex flex-col mt-3">
                <p className="font-Rubik_Medium text-sm">Email</p>
                <InputGroup>
                    <InputLeftElement
                        children={<IconsHolder><Envelope /></IconsHolder>}
                    ></InputLeftElement>
                    <Input type="email" variant="filled" name="email" value={formik.values.email} onChange={formik.handleChange} onFocus={() => formik.setFieldTouched('email', true, true)} onBlur={formik.handleBlur} />
                </InputGroup>
                {
                    formik.touched.email && formik.errors.email && (
                        <p className="mt-1 text-red-500 font-Rubik_Regular text-xs">{formik.errors.email}</p>
                    )
                }
            </div>

            <div className="flex flex-col mt-3">
                <p className="font-Rubik_Medium text-sm">Password</p>
                <InputGroup>
                    <InputLeftElement
                        children={<IconsHolder><Lock /></IconsHolder>}
                    ></InputLeftElement>
                    <Input type={showPassword ? 'text': 'password'} variant="filled" name="password" value={formik.values.password} onChange={formik.handleChange} onFocus={() => formik.setFieldTouched('password', true, true)} onBlur={formik.handleBlur}  />
                    <InputRightElement
                        children={<IconsHolder><Eye className="cursor-pointer" onClick={() => setShowPassword(prev => !prev)}/></IconsHolder>}
                    ></InputRightElement>
                </InputGroup>
                {
                    formik.touched.password && formik.errors.password && (
                        <p className="mt-1 text-red-500 font-Rubik_Regular text-xs">{formik.errors.password}</p>
                    )
                }
            </div>

            <p 
            onClick={() => history.push('/forgotpassword')}
            className="text-right font-Rubik_Medium text-sm text-green-700 mt-4 cursor-pointer">Forgot Password</p>

            <button 
            onClick={request}
            className="w-full h-12 mt-4 font-Rubik_Regular text-sm rounded text-white bg-green-700">Login</button>
        </div>
    )
}
