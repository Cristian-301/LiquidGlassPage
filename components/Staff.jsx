'use client'

import cristinaC from '@/public/assets/staff/cristina-capitani.webp';
import ClaudioB from '@/public/assets/staff/claudio-boso.webp';
import SamuelB from '@/public/assets/staff/samuel-boso.webp';
import MattiaB from '@/public/assets/staff/mattia-boso.webp';
import BusinessManager from '../components/BusinessManager';
import Image from 'next/image';

  
  export default function Staff() {
    return (
        <>
        <div className='mx-auto py-20 container'>
            <div className='flex justify-center items-center z-40'>
                <div className="mx-auto">
                    <div className="me-auto max-w-2xl text-start">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-50 sm:text-4xl">Direzione</h2>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
                    >
                        <li 
                        data-aos="fade-in" data-aos-duration="1500" 
                        >
                            <Image width={100} height={100} className="mx-auto h-24 w-24 rounded-full" src={ClaudioB} alt="Claudio Boso"/>
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-neutral-200">Claudio Boso</h3>
                            <p className="text-sm leading-6 text-neutral-400">Presidente</p>
                        </li>
                        <li 
                        data-aos="fade-in" data-aos-duration="1500" 
                        >
                            <Image width={100} height={100} className="mx-auto h-24 w-24 rounded-full" src={cristinaC} alt="Cristina Capitani"/>
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-neutral-200">Cristina Capitani</h3>
                            <p className="text-sm leading-6 text-neutral-400">Amministratore Unico</p>
                        </li>
                        <li 
                        data-aos="fade-in" data-aos-duration="1500" 
                        >
                            <Image width={100} height={100} className="mx-auto h-24 w-24 rounded-full" src={SamuelB} alt="Samuel Boso"/>
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-neutral-200">Samuel Boso</h3>
                            <p className="text-sm leading-6 text-neutral-400"></p>
                        </li>
                        <li 
                        data-aos="fade-in" data-aos-duration="1500" 
                        >
                            <Image width={100} height={100} className="mx-auto h-24 w-24 rounded-full" src={MattiaB} alt="Mattia Boso"/>
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-neutral-200">Mattia Boso</h3>
                            <p className="text-sm leading-6 text-neutral-400"></p>
                        </li>
                    </ul>
                    <div className="me-auto max-w-2xl text-start mt-20">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-50 sm:text-4xl">Business Managers</h2>
                    </div>
                    <BusinessManager/>
                </div>
            </div>
        </div>
        </>
    )
  }
  