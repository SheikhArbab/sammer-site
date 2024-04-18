 
import { FaLongArrowAltRight } from "react-icons/fa";
import { Services as Ser } from '@/types/index'
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface Pros {
    heading: string;
    description: string;
    bg: boolean;
    services: Ser[];
    btn?: string;
    url?: string;
}

const Services = ({ bg, description, heading, services, btn, url = '' }: Pros) => <section className={`${bg && 'bg-gray-100'} py-20 flex items-center justify-center flex-col`}>
    <div className={` container mx-auto px-4 flex flex-wrap items-center justify-between gap-8`}>
        <div className="capitalize md:w-[40%] w-full ">
            <h1 className="text-Tblue text-3xl font-bold">
                <span className="text-TDarkBlue">{heading.split(' ')[0]}</span> {heading.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-gray-600 mt-6">{description}</p>
        </div>
        <div className="flex items-center justify-center gap-6 flex-wrap md:w-[45%] w-full h-fit">
            {services.length > 0 && services.map((v, i) => <Link key={i} to={'/service/'+v.url}
                className="border border-gray-200 rounded-md flex items-center justify-between px-3 py-6 w-[17.4rem] duration-300 transition-all group hover:-translate-y-5 hover:border-Tblue hover:shadow-md shadow-Tblue gap-4">
                <div className="group-hover:text-Tblue duration-300 transition-all text-2xl"><v.Icon /></div><h1 className="uppercase duration-300 transition-all group-hover:text-Tblue text-xs ">{v.title}</h1> <span className="group-hover:text-Tblue duration-300 transition-all"><FaLongArrowAltRight /></span>
            </Link>)}
        </div>
    </div>
    {btn && <Link to={url}>
        <Button className="bg-Tblue hover:bg-TDarkBlue capitalize">
            {btn}
        </Button>
    </Link>}

</section>

export default Services;
