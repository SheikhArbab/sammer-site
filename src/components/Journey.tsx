
import { journey } from '@/constants/index'
import CountUp from 'react-countup';

const Journey = () => {
  return (
    <section>

      <div className="container mx-auto px-4 pt-20">
        <h1 className='font-bold text-TDarkBlue md:text-6xl text-3xl text-center capitalize'>a Journey of 5 <span className='text-Tblue'>years</span></h1>

        <ul className='flex flex-wrap items-center md:justify-between justify-center pt-20 px-10 gap-4 '>
          {journey.length > 0 && journey.map((v, i) => <li key={i} className='flex flex-col items-center justify-center gap-3 w-40'>
            <span className='text-Tblue text-4xl'><v.Icon /></span>
            <h1 className='text-4xl font-semibold text-TDarkBlue'><CountUp start={0} end={v.count} duration={4} />{v.plus && '+'}</h1>
            <p className='text-xs text-gray-500 capitalize'>{v.p}</p>
          </li>)}
        </ul>

      </div>

    </section>
  )
}

export default Journey