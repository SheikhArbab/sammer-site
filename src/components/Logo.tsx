 
import { companyName } from "@/constants/index"
import { Link } from "react-router-dom"

const Logo = ({ color }: { color: boolean }) => {

    const logo: string[] = companyName.split(' ')


    return (
        <Link to={'/'}>

            <figure
                className='flex items-center h-fit w-fit gap-1'>
                <img
                    alt={companyName}
                    width={50}
                    height={50}
                    className='object-contain'
                    src={'/white-logo.png'} />
                <figcaption
                    className={`${color ? 'text-Tblue' : 'text-white'} font-bold text-2xl `}>{logo[0]}{' '}<span className='text-primary text-white'>{logo[1]}</span>
                </figcaption>
            </figure>
        </Link>
    )
}

export default Logo