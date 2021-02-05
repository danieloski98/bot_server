import React from 'react'
import { FiCamera } from 'react-icons/fi'
import { Input, Spinner } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import useDetails from '../../../Hooks/useAdminDetails';
import { useMutation } from 'react-query';
import * as axios from 'axios'
import { URL } from '../../../types/Url'
import { IReturnType } from '../../../types/ReturnType';
import { IAdmintype } from '../../../types/Admin';


const validationSchema = yup.object({
    firstname: yup.string().min(3, 'minimium of 3 characters'),
    lastname: yup.string().min(3, 'minimium of 3 characters'),
});

export default function ProfileSettings() {
    const { email, firstname, lastname, id, setFirstname, setLastname } = useDetails();
    const Mutation = useMutation(async(values: {firstname: string, lastname: string}) => {
        const request = await axios.default.put(`${URL}/admin/${id}`, values, {headers: {'content-type': 'application/json'}});
        return  request.data as IReturnType;
    })

    const formik = useFormik({
        initialValues: {
            firstname,
            lastname,
        },
        onSubmit: () => null,
        validationSchema
    });


    React.useEffect(() => {
        if (Mutation.status === 'loading') {
            return;
        }
        if (Mutation.status === 'error') {
            Mutation.reset();
            alert(Mutation.error['response'].data.errorMessage);
        } else if (Mutation.status === 'success') {
            // update the details
            alert(Mutation.data.successMessage);
            makeRequest();
        }
    });

    const submit = () => {
        if (!formik.isValid) {
            alert('Please filling the form correctly.');
        }else {
            Mutation.mutate(formik.values);
        }
    }

    const makeRequest = async() => {
        try {
            const request = await fetch(`${URL}/admin/${id}`);
            const result = await request.json() as IReturnType;
            const data = result.data as IAdmintype;
            setFirstname(data.firstname);
            setLastname(data.lastname);
            sessionStorage.setItem('firstname', firstname);
            sessionStorage.setItem('lastname', lastname);
            Mutation.reset();
        } catch (error) {
            
        }
    }

    const getintials = (): string => {
        const first = firstname[0];
        const last = lastname[0];
        const initails = `${first}${last}`;
        return initails.toUpperCase();
    }

    return (
        <div className="w-full h-full flex flex-col">
            <div>
                <div className="w-20 h-20 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-300 cursor-pointer transition duration-500 ease-in-out hover:scale-125">
                    <p className="font-Rubik_Bold text-xl text-green-500">{getintials()}</p>
                </div>
            </div>

            <div className="w-full flex mt-10">
                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">First Name</p>
                    <Input variant="filled" name="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('firstname', true, true)} />
                </div>

                <div className="w-10"></div>

                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">Last Name</p>
                    <Input variant="filled" name="lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('lastname', true, true)} />
                </div>
            </div>

            <div className="w-2/4 flex mt-10 pr-6">
                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">Email</p>
                    <Input variant="filled" value={email} disabled={true} />
                    <p className="text-xs text-red-500">You cannot change this email Address</p>
                </div>
            </div>

            <div className="w-full flex justify-end mt-10">
                <button disabled={Mutation.isLoading} onClick={submit} className="w-32 h-12 rounded bg-green-500 text-white text-xs font-Rubik-Regular">
                    {Mutation.isLoading ? <Spinner color="white" size="md" /> : 'Update Profile'}
                </button>
            </div>
        </div>
    )
}
