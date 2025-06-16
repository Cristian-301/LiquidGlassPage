'use client'

import React from 'react';
import DefaultButton from './DefaultButton'
import Image from 'next/image';

function MinimalSection({ orientation, background, title, description, href, imageUrl, titleClass, descriptionClass, darkButton, strength, lerp, imgOpacity, firstButtonText, buttonClass1, buttonClass2, secondButton, secondButtonText, href2 }) {

const createMarkup = (htmlContent) => {
    return {__html: htmlContent};
};

  return (
    <>
    {orientation === 'left' ? (
        <>
            <section>
                <div className='mx-auto'>
                    <div className='h-lvh flex justify-center items-center'>
                        <div className={`${imgOpacity} h-screen hidden sm:block sm:w-2/5 z-0 relative `}>
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    fill
                                    className=" object-cover"
                                />
                            </div>  
                        <div className={`h-screen w-full sm:w-3/5 ${background} flex justify-center items-center p-4 z-20`}>
                            <div className='flex flex-col justify-center items-start text-left w-full sm:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto'>
                                <div className={`lg:text-5xl md:text-5xl font-semibold mb-2 ${titleClass} text-balance`} data-aos="fade-up" data-aos-duration="900">{title}</div>
                                <div data-aos="fade-zoom-in" data-aos-duration="1000" className={` text-lg mb-4 ${descriptionClass} text-balance`} >{description}</div>
                                <DefaultButton text={firstButtonText || 'Scopri di più'} link={href} dark={darkButton} buttonClass={buttonClass1} />
                                {secondButton && <DefaultButton text={secondButtonText || 'Scopri di più'} link={href2} dark={darkButton} buttonClass={buttonClass2} />}
                            </div>
                        </div>   
                    </div>
                </div>
            </section>  
        </>
    ) : (
        <>
            <section>
                <div className='mx-auto'>
                    <div className='h-lvh flex justify-center items-center'>
                        <div className={`h-screen w-full sm:w-3/5 ${background} flex justify-center items-center p-4 z-20`}>
                            <div className='text-left w-full sm:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto'>
                                <div className={`lg:text-5xl md:text-5xl font-semibold mb-2 ${titleClass} text-balance`} data-aos="fade-up" data-aos-duration="900">{title}</div>
                                <div data-aos="fade-zoom-in" data-aos-duration="1000" className={` text-lg mb-4 ${descriptionClass} text-balance`} >{description}</div>
                                <DefaultButton text={firstButtonText || 'Scopri di più'} link={href} dark={darkButton} buttonClass={buttonClass1} />
                                {secondButton && <DefaultButton text={secondButtonText || 'Scopri di più'} link={href2} dark={darkButton} buttonClass={buttonClass2} />}
                            </div>
                        </div>  
                        <div className={`${imgOpacity} h-screen hidden sm:block sm:w-2/5 z-0 relative `}>
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className=" object-cover"
                            />
                        </div>  
                    </div>
                </div>
            </section>
        </>
    )}
    </>
  );
}

export default MinimalSection;


