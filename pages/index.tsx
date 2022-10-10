import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import data from '../data';
import { PropsDataResume } from '../model/propsType';
const Template = dynamic(() => import('../components/Template'),{ssr: false});

const Home: NextPage = () => {
  // console.log(data);


  return (
    <div className='flex py-[10px] min-h-[100vh] items-center justify-center bg-[#e5e7eb]'>
      <div className='h-[95%] w-[95%] set'><Template template='resume1' data={data as PropsDataResume} /></div>
    </div>
  )
}

export default Home
