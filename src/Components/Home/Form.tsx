import React from 'react'
import { InputGroup, InputLeftElement, InputRightElement, Input} from '@chakra-ui/react'
import Lock from '../../assets/icons/Lock'
import Envelope from '../../assets/icons/Envelope'
import Eye from '../../assets/icons/Eye'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup';

export const IconsHolder = (props) => <div className="flex items-center h-full ">{props.children}</div>;

// validation schema
const validationSchema = yup.object({
    email: yup.string().email('Invalid Email').required('this field is required'),
    password: yup.string().required('Your password is required').min(10, 'A minimium of 10 alpha-numeric characters.')
});

export default function Form() {
    const [showPassword, setShowPassword] = React.useState(false);
    const history = useHistory();

    const formik = useFormik({
        initialValues: {email: '', password: ''},
        onSubmit: () => null,
        validationSchema,
    })

    return (
        <div>
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
            onClick={() => alert(JSON.stringify(formik.values))}
            className="w-full h-12 mt-4 font-Rubik_Regular text-sm rounded text-white bg-green-700">Login</button>
        </div>
    )
}
