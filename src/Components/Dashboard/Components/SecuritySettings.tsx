import React from 'react'
import { Input, Spinner } from '@chakra-ui/react'
import {useFormik} from 'formik';
import * as yup from 'yup';
import * as axios from 'axios';
import { useMutation } from 'react-query';
import useDetails from '../../../Hooks/useAdminDetails';
import {URL} from '../../../types/Url';

const validationSchema = yup.object({
    oldPassword: yup.string().min(10, 'Minimium of 10 alphanumeric characters'),
    newPassword: yup.string().min(10, 'Minimium of 10 alphanumeric characters'),
    confirmPassword: yup.string().min(10, 'Minimium of 10 alphanumeric characters'),
})

export default function SecuritySettings() {
    const {id} = useDetails();
    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: () => {},
    })

    const Mutation = useMutation(async(values: any) => {
        const request = await axios.default.put(`${URL}/admin/updatepassword/${id}`, values);
        return request.data;
    })

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
        }
    });

    const submit = () => {
        if (!formik.isValid) {
            alert('Please filling the form correctly');
        } else if (formik.values.newPassword !== formik.values.confirmPassword) {
            alert('Passwords do not match');
        }else {
            Mutation.mutate(formik.values);
        }
    }

    return (
        <div className="w-full h-full flex flex-col">
             <div className="w-full flex mt-10">
                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">Old Password</p>
                    <Input type="password" variant="filled" name="oldPassword" value={formik.values.oldPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('oldpassword', true, true)} />
                    {formik.touched.oldPassword && formik.errors.oldPassword && (
                        <p className="text-xs text-red-500">{formik.errors.oldPassword}</p>
                    )}
                </div>

                <div className="w-10"></div>

                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">New Password</p>
                    <Input type="password" variant="filled" name="newPassword" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('newpassword', true, true)} />
                    {formik.touched.newPassword && formik.errors.newPassword && (
                        <p className="text-xs text-red-500">{formik.errors.newPassword}</p>
                    )}
                </div>
            </div>

            <div className="w-2/4 flex mt-10 pr-6">
                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">Confrim Password</p>
                    <Input type="password" variant="filled" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('confirmpassword', true, true)} />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <p className="text-xs text-red-500">{formik.errors.confirmPassword}</p>
                    )}
                </div>
            </div>

            <div className="w-full flex justify-end mt-10">
                <button disabled={Mutation.isLoading} onClick={submit} className="w-32 h-12 rounded bg-green-500 text-white text-xs font-Rubik-Regular">
                    {Mutation.isLoading ? <Spinner color="white" size="md" /> : 'Update'}
                </button>
            </div>
        </div>
    )
}
