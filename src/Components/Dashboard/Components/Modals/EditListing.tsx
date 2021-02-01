import React from 'react'
import { Spinner, Input, Modal, ModalContent, ModalOverlay, Select, InputGroup, InputLeftAddon  } from '@chakra-ui/react'
import { IListing } from '../../../../types/listings';
import { useMutation, useQuery, useQueries } from 'react-query';
import { makeRequest } from '../../Functions/GetListings';
import Empty  from '../../../assets/icons/notfound.svg';
import { FiX } from 'react-icons/fi';
import { IReturnType } from '../../../../types/ReturnType';
import { URL } from '../../../../types/Url'
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as axios from 'axios';


// validation schema
const validationSchema = yup.object({
    state: yup.string().required('This field is required'),
    address: yup.string().required('This field is required'),
    zip_code: yup.string().required('This field is required'),
    service_type: yup.string().required('This field is required'),
    email: yup.string().email('invalid email').required('This field is required'),
    phone: yup.string().required('This field is required'),
    website: yup.string(),
    business_name: yup.string().required('This field is required'),

})


const AddListingModal = (props: {showModal: boolean, closeModal: Function, item: IListing}) => {
    const { showModal, closeModal, item } = props;
    const [services, setServices] = React.useState([]);
    const [states, setStates] = React.useState([]);
    const [zipcodes, setZipcodes] = React.useState([]);

    // formik
    const formik = useFormik({
        initialValues: {
            state: item.state,
            address: item.address,
            zip_code: item.zip_code,
            service_type: item.service_type,
            email: item.email,
            phone: item.phone,
            website: item.website,
            business_name: item.business_name,
        },
        onSubmit: () => null,
        validationSchema
    });

    const Mutation = useMutation(async(listing: any) => {
        const request = await axios.default.put(`${URL}/listings/update/${item.id}`, listing, {headers: { 'content-type': 'application/json' }});
        return  request.data as IReturnType;
    })

    const query = useQueries([
        { queryKey: 'services', queryFn: async () => {
                const request = await fetch(`${URL}/servicetype`);
                const result = await request.json() as IReturnType;
                if (!request.ok) {
                    throw new Error('An error occured ');
                }
                return result;
            }
        },
        {
            queryKey: 'states', queryFn: async () => {
                const request = await fetch(`${URL}/states`);
                const result = await request.json() as IReturnType;
                if (!request.ok) {
                    throw new Error('An error occured ');
                }
                return result;
            }
        },
        {
            queryKey: 'zipcode', queryFn: async () => {
                const request = await fetch(`${URL}/zipcode`);
                const result = await request.json() as IReturnType;
                if (!request.ok) {
                    throw new Error('An error occured ');
                }
                return result;
            }
        },
    ])

    React.useEffect(() => {
        
        if (query[0].data !== undefined) {
            setServices([ ...query[0].data['data']])
        }
        if (query[1].data !== undefined) {
            setStates([...query[1].data['data']]);
        }
        if (query[2].data !== undefined) {
            setZipcodes([...query[2].data['data']]);
        }
        
    }, [query])

    React.useEffect(() => {
        if (Mutation.status === 'loading') {
            return;
        }
        if (Mutation.status === 'error') {
            clearFields();
            alert(Mutation.error['response'].data.errorMessage);
            Mutation.reset();
        } else if (Mutation.status === 'success') {
            clearFields();
            alert(Mutation.data.successMessage);
            Mutation.reset();
        }
    });

    const submit = async() => {
        if (!formik.dirty) {
            alert("you have to flll the form to continue");
        } else if (!formik.isValid) {
            alert("Please fill in the form correctly")
        } else {
            Mutation.mutate(formik.values);
        }
    }

    const clearFields = () => {
        formik.resetForm();
        closeModal();
    }

    return (
        <Modal isOpen={showModal} closeOnEsc={false} closeOnOverlayClick={false} isCentered={true} size="xl" motionPreset="scale" onClose={() => closeModal()}>
            <ModalOverlay />
            <ModalContent className="p-6 rounded-md">
                <div className="w-full flex justify-end"><FiX size={24} color="black" onClick={() => closeModal()} /></div>
                <h1 className="font-Rubik-Bold font-bold text-lg mt-4">Edit Listing By - {props.item.business_name}</h1>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Business name</p>
                        <Input type="text" name="business_name"  value={formik.values.business_name} onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_name', true, true)} variant="filled" className="mt-3" />
                        {formik.touched.business_name && formik.errors.business_name && (<p className="text-sm font-bold font-Rubik-Regular text-red-400">{formik.errors.business_name}</p>)}
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">State</p>
                        <Select variant="filled"  placeholder="States" className="mt-3" name="state"  value={formik.values.state} onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('state', true, true)}>
                            {
                                states.map((item, index) => (
                                    <option key={index} value={item['name']}>{item.name}</option>
                                ))
                            }
                        </Select>
                        {formik.touched.state && formik.errors.state && (<p className="text-sm font-bold font-Rubik-Regular text-red-400">{formik.errors.state}</p>)}
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Zipcode</p>

                        <Input type="text" name="zip_code"  value={formik.values.zip_code} onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('zip_code', true, true)} variant="filled" className="mt-3" />

                        {formik.touched.zip_code && formik.errors.zip_code && (<p className="text-sm font-bold font-Rubik-Regular text-red-400">{formik.errors.zip_code}</p>)}
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">Phone number</p>
                        <Input type="text" variant="filled" className="mt-3" name="phone"  value={formik.values.phone} onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('phone', true, true)} />
                        {formik.touched.phone && formik.errors.phone && (<p className="text-sm font-bold font-Rubik-Regular text-red-400">{formik.errors.phone}</p>)}
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Email Address</p>
                        <Input type="text" variant="filled" className="mt-3" name="email"  value={formik.values.email} onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('email', true, true)}/>
                        {formik.touched.email && formik.errors.email && (<p className="text-sm font-bold font-Rubik-Regular text-red-400">{formik.errors.email}</p>)}
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">Website</p>
                        <InputGroup className="mt-3">
                            <InputLeftAddon children={<p>www.</p>} />
                            <Input type="text" variant="filled" className="mt-0" name="website"  value={formik.values.website} onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('website', true, true)}/>
                            </InputGroup>
                        {formik.touched.website && formik.errors.website && (<p className="text-sm font-bold font-Rubik-Regular text-red-400">{formik.errors.website}</p>)}
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Service Type</p>
                        <Select variant="filled" placeholder="Service Type" className="mt-3" name="service_type"  value={formik.values.service_type} onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('service_type', true, true)}>
                            {
                                services.map((item, index) => (
                                    <option key={index} value={item['name']}>{item.name}</option>
                                ))
                            }
                        </Select>
                        {formik.touched.service_type && formik.errors.service_type && (<p className="text-sm font-bold font-Rubik-Regular text-red-400">{formik.errors.service_type}</p>)}
                    </div>

                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Address</p>
                        <Input type="text" variant="filled" className="mt-3" name="address"  value={formik.values.address} onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('address', true, true)}/>
                        {formik.touched.address && formik.errors.address && (<p className="text-sm font-bold font-Rubik-Regular text-red-400">{formik.errors.address}</p>)}
                    </div>

                   
                </div>

                <div className="flex justify-end flex-1 mt-6">
                        <button onClick={submit} className="px-4 rounded bg-green-500 text-white w-24 text-xs h-10 mt-8">
                            {
                                Mutation.status === 'loading' ?
                                <Spinner color="white" size='md' /> :
                                'Save'
                            }
                        </button>
                </div>

            </ModalContent>
        </Modal>
    )
}

export default AddListingModal;