
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { careerFormValidation, careerFormInputs } from '@/constants/index';
import { CareerFormValues } from '@/types/index';
import { Button } from './ui/button';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const JobForm = () => {
    const [isLoading, setIsLoading] = useState(false); 

    const { handleChange, handleSubmit, handleBlur, touched, errors, values } = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            cv: ""
        },
        validationSchema: Yup.object(careerFormValidation),
        onSubmit: async (formValues) => {
            
            setIsLoading(true); 
            setTimeout(() => {
                
                setIsLoading(false)
                toast.success('Successfully Submit!');
            }, 1600);
            console.log(formValues);
        },
    });

    return (
        <section>
            <div className="container mx-auto px-4">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto"> 
                    {careerFormInputs.map((v, i) => (
                        <div key={i} className="relative z-0 w-full mb-5 group">
                            <v.field
                                placeholder={v.label}
                                type={v.type}
                                name={v.name}
                                id={v.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values[v.name as keyof CareerFormValues]}
                                className="block p-6 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-2 border-TDarkBlue  peer my-2"
                            />
                            {touched[v.name as keyof CareerFormValues] && errors[v.name as keyof CareerFormValues] && (
                                <div className="text-red-500 text-xs">{errors[v.name as keyof CareerFormValues]}</div>
                            )}
                        </div>
                    ))}
                    <Button  type="submit" className="bg-Tblue hover:bg-TDarkBlue capitalize w-full" disabled={isLoading}>
                        {isLoading ? 'Submitting' : 'Submit'}
                    </Button>
                </form>
            </div>
            <Toaster />
        </section>
    );
};

export default JobForm;
