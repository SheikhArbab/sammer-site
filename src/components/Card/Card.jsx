import React from 'react'
import cs from './Card.module.css'
import infos from './Data'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <section
        id='services'
        className="flex w-full h-fit gap-12 items-center justify-around py-14 flex-col">


            <h1 className='text-5xl font-bold'>Simple monthly <span className='bg-blue-500 rounded-lg px-4 pb-4 text-white'>payments</span></h1>
            <p className='text-center mx-auto text-slate-700 md:w-[60%]'>All of our packages are subject to a discovery call with the team to identify if we can help you with your project, these prices are in GBP but we work with a global client base.</p>

            <div className="flex w-full h-full gap-5 items-center justify-around ">
                {
                    infos.map((info, i) => (
                        <div key={i} className={cs.myCard}>
                            <div className={cs.innerCard}>
                                <div className={cs.frontSide}>
                                    <p className={`${cs.title} text-4xl`}>{info.duration}</p>
                                    <p className={``}>{info.tagline}</p>
                                    <p>${info.price}</p>
                                </div>
                                <div className={cs.backSide}>
                                    <ul className='flex gap-4 items-start flex-col'>
                                        {
                                            info.services.map(i => (
                                                <li>{i}</li>
                                            ))
                                        }
                                    </ul>
                                    <Link className='w-[70%] glass py-3 rounded-md' to={'/'}>Try</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}

export default Card
