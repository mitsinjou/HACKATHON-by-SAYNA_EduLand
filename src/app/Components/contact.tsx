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
            <div className='border border-green-400 w-[80%] h-[90vh]'>
                <form onSubmit={formik.handleSubmit}>
                    <p>Vous avez une requête à nous soumettre ?</p>
                    <p>Remplissez le formulaire ci-dessous :</p>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        title="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <input
                        id="text"
                        title="Message"
                        name="text"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.text}
                    />
                    {formik.touched.text && formik.errors.text ? (
                            <div>{formik.errors.text}</div>
                    ) : null}
                    <button type="submit">Soumettre</button>
                </form>
            </div>
    )
}