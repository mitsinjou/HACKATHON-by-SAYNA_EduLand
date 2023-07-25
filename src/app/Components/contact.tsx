import { useFormik } from 'formik'

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
            text: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return(
            <div className=' flex items-center justify-center w-[80%] h-[90vh]'>
                <form onSubmit={formik.handleSubmit} className='w-[634px] h-[466px] flex flex-col justify-center items-center'>
                    <p className="text-center text-black text-[32px] font-bold">Vous avez une requête à nous soumettre ?</p>
                    <p className="text-center text-black text-xl font-normal my-4">Remplissez le formulaire ci-dessous :</p>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        title="email"
                        placeholder="E-mail"
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
                        placeholder="Message"
                        className="w-[363px] my-2 h-[150px] indent-8 bg-zinc-300 rounded-[13px] shadow border border-black"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.text}
                    />
                    {formik.touched.text && formik.errors.text ? (
                            <div>{formik.errors.text}</div>
                    ) : null}
                    <button type="submit" className='w-[108px] h-10 bg-red-600 rounded-[5px] text-white text-lg font-semibold'>Soumettre</button>
                </form>
            </div>
    )
}