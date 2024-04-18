
import { contactInfo } from '@/constants/index' 
import { Link } from 'react-router-dom'


const ContactInfo = () => <section className="py-20 bg-gray-100">

    <div className="container px-4 mx-auto">

        <h1 className="capitalize text-xl text-TDarkBlue md:text-5xl text-center font-bold">keep touch with us</h1>

        <iframe
            className='w-full border-0 grayscale my-20'
            src={contactInfo.map}
            height={450}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="flex flex-wrap w-full h-fit items-center">

            <div className="flex-1 p-10 h-full">

                <ul className="flex flex-col gap-3"> 
                    
                    <li><Link className="flex items-center gap-2 text-xs md:text-xl hover:text-TDarkBlue duration-300 transition-all" to={'mailto:'+contactInfo.email.url}><contactInfo.email.Icon/>{contactInfo.email.url}</Link></li>

                    <li><Link className="flex items-center gap-2 text-xs md:text-xl hover:text-TDarkBlue duration-300 transition-all" to={'tel:'+contactInfo.number.url.toString()}><contactInfo.number.Icon/>{contactInfo.number.url}</Link></li>
 

                    <li><Link className="flex items-center gap-2 text-xs md:text-xl hover:text-TDarkBlue duration-300 transition-all" to={'mailto:'+contactInfo.query.url}><contactInfo.query.Icon/>{contactInfo.query.url}</Link></li>

                    <li><Link className="flex items-center gap-2 text-xs md:text-xl hover:text-TDarkBlue duration-300 transition-all" to={'mailto:'+contactInfo.career.url}><contactInfo.career.Icon/>{contactInfo.career.url}</Link></li>

                    <li><Link className="flex items-center gap-2 text-xs md:text-xl hover:text-TDarkBlue duration-300 transition-all" to={'mailto:'+contactInfo.address.url}><contactInfo.address.Icon/>{contactInfo.address.url}</Link></li>


                </ul>

            </div>

 

            <figure
                className="w-96 h-96 relative">
                <img
                    className="top-0 left-0 object-contain w-full h-full"
                    src={contactInfo.img}
                    alt="contact"
                    />
            </figure>

        </div>

    </div>


</section>

export default ContactInfo