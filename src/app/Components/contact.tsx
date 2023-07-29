import React, {useState} from 'react';
import { useFormik } from 'formik'
import { Modal } from 'antd'
import { FaFaceSmileWink, FaFaceSmile } from "react-icons/fa6"

interface FormValues {
    email: string;
    text: string;
}

const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if(!values.text) {
        errors.text = 'Required';
    } 
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

export default function Contact(){
    const formik = useFormik({
        initialValues: {
            email: '',
            text: '',
        },
        validate,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            showModal();
        },
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(
            <div className=' flex items-center justify-center w-[80%] h-[90vh]'>
                <form onSubmit={formik.handleSubmit} className='w-[634px] h-[466px] flex flex-col justify-center items-center'>
                    <p className="text-center text-black text-[24px] lg:text-[32px] font-bold">DEMANDE DE DEVIS</p>
                    <p className="text-center text-black text-lg lg:text-xl font-normal my-4">Remplissez se formulaire pour nous soumèttre vos bésoins !</p>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        title="email"
                        placeholder="Votre email ici"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className='w-[363px] my-2 h-[47px] indent-8 bg-zinc-300 rounded-[10px] shadow border border-black'
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <input
                        id="text"
                        title="Message"
                        name="text"
                        type="text"
                        placeholder="Vos besoins"
                        className="w-[363px] my-2 h-[150px] indent-8 bg-zinc-300 rounded-[13px] shadow border border-black"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.text}
                    />
                    {formik.touched.text && formik.errors.text ? (
                            <div>{formik.errors.text}</div>
                    ) : null}
                    <button type="submit" className='w-[108px] hover:bg-orange-400 h-10 bg-red-600 rounded-[5px] text-white text-base lg:text-lg font-semibold'>Valider</button>
                    <Modal title="Reussi" className='text-center'  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p className='text-green-400 text-xl'>Nous avons bien réçu vos besoins!</p>
                        <p className='font-semibold'>Nous vous contacterons aprés traitement de votre dossier.</p>
                        <p className='font-semibold ms-[38%] flex items-center'> <FaFaceSmileWink className='text-green-400' /> A très bientot!!! <FaFaceSmile className='text-green-400' /> </p>
                    </Modal>
                </form>
            </div>
    )
}