import React from 'react'
import { FiX } from 'react-icons/fi'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Modal, Input, ModalOverlay, ModalContent, Select, Spinner } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import * as axios from 'axios'
import { URL } from '../../../types/Url'
import { IReturnType } from '../../../types/ReturnType';

const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('This field is required.'),
    firstname: yup.string().required('This field is required'),
    lastname: yup.string().required('This field is required'),
    password: yup.string().required('This field is required').min(10, 'Minimium of 10 alpha-numeric characters'),
    role: yup.number().required('this field is required'),
})

export default function AddAdminModal(props: {showModal: boolean, closeModal: Function}) {
    const { showModal, closeModal } = props;
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            role: 1,
        },
        validationSchema,
        onSubmit: () => null
    })
    const Mutation = useMutation(async(values: any) => {
        const request = await axios.default.post(`${URL}/admin/create`, values, {headers: {'content-type': 'application/json'}});
        return  request.data as IReturnType;
    });

    React.useEffect(() => {
        if (Mutation.status === 'loading') {
            return;
        }
        if (Mutation.status === 'error') {
            clearFields();
            Mutation.reset();
            alert(Mutation.error['response'].data.errorMessage);
        } else if (Mutation.status === 'success') {
            clearFields();
            alert(Mutation.data.successMessage);
        }
    });

    const submit = async() => {
        if (!formik.dirty) {
            alert("you have to flll the form to continue");
        } else if (!formik.isValid) {
            alert("Please fill in the form correctlt")
        } else {
            Mutation.mutate(formik.values);
        }
    }

    const clearFields = () => {
        formik.resetForm();
        closeModal();
    }

    return (
        <Modal isOpen={showModal} closeOnEsc={false} closeOnOverlayClick={false} isCentered={true} size="xl" motionPreset="scale" onClose={clearFields}>
            <ModalOverlay />
            <ModalContent className="p-6 rounded-md">
                <div className="w-full flex justify-end"><FiX size={24} color="black" onClick={() => closeModal()} /></div>
                <h1 className="font-Rubik-Bold font-bold text-lg mt-4">Create User</h1>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">First name</p>
                        <Input type="text" name="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('firstname', true, true)}  variant="filled" className="mt-3" />
                        {
                            formik.touched.firstname && formik.errors.firstname && (
                                <p className="mt-1 text-red-500 text-xs">{formik.errors.firstname}</p>
                            )
                        }
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">Last name</p>
                        <Input type="text" name="lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('lastname', true, true)} variant="filled" className="mt-3" />
                        {
                            formik.touched.lastname && formik.errors.lastname && (
                                <p className="mt-1 text-red-500 text-xs">{formik.errors.lastname}</p>
                            )
                        }
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Email</p>
                        <Input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('email', true, true)} variant="filled" className="mt-3" />
                        {
                            formik.touched.email && formik.errors.email && (
                                <p className="mt-1 text-red-500 text-xs">{formik.errors.email}</p>
                            )
                        }
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">Password</p>
                        <Input type="text" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('password', true, true)} variant="filled" className="mt-3" />
                        {
                            formik.touched.password && formik.errors.password && (
                                <p className="mt-1 text-red-500 text-xs">{formik.errors.password}</p>
                            )
                        }
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Role</p>
                        <Select variant="filled" name="role" value={formik.values.role} onChange={(e) => {
                            console.log(e.target.value);
                            formik.setFieldValue('role', e.target.value, true);
                        }} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('role', true, true)} className="mt-3">
                            <option value={1}>Super Admin</option>
                            <option value={2}>Admin</option>
                        </Select>
                    </div>

                    <div className="flex justify-end flex-1">
                        <button 
                        disabled={Mutation.isLoading}
                        onClick={() => submit()} className="px-4 rounded bg-green-500 text-white w-24 text-xs h-10 mt-8">{
                            Mutation.isLoading ? <Spinner color="white" size="md" /> :
                            'Submit'
                        }</button>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    )
}
