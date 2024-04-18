
import { serviceCards } from "@/constants"
import { Link, useParams } from "react-router-dom";  




const DropDown = () => {

    const pathname = useParams();

    console.log(pathname);
    

    const path: string[] = [""];

console.log();


    return (<div className="rounded-md fixed group-hover:h-[80dvh] w-0 bg-gray-100 shadow-md group-hover:p-8 translate-y-6 z-[200] overflow-hidden duration-300 transition-all h-0 group-hover:w-[80dvw] left-1/2 -translate-x-1/2" >

        <div className="w-full h-full overflow-y-auto flex flex-wrap">
            {
                serviceCards.length > 0 && serviceCards.flatMap((v, i) => <div key={i} className="w-[20rem]">
                    <h1 className="font-bold text-2xl capitalize mb-4 text-TDarkBlue">{v.heading}</h1>



                    <ul className="flex flex-wrap gap-6 items-center justify-between">
                        {v.services.length > 0 && v.services.map((v, index) => (<li key={index}
                         className={`${path.includes(`service/${v.url}`) ? 'text-Tblue' : 'text-gray-800'}  cursor-pointer capitalize w-full transition-all duration-300 hover:text-Tblue`}>
                            <Link to={path.includes('service') ? v.url : `service/${v.url}`}>{v.title}</Link>
                        </li>))}
                    </ul>
                </div>)
            }
        </div>

    </div>)
}

export default DropDown