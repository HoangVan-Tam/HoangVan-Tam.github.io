import React from 'react'
import Header from '../Components/Header'
import bacgroundImageUrl from '../assets/CHHTOUR.jpg'
import { about_OurPeople, about_Sliders, about_WhoWeAre, about_WhatWeDo } from '../constants/constants'
import Section from '../Components/Section'
import Carousel from '../Components/Carousel'
import Button from '../Components/Button'

const About = () => {
    return (
        <>
            <Header bacgroundImageUrl={bacgroundImageUrl}></Header>
            <Section id='whatwedo' className='bg-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-n-9 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>What we do</h2>
                        <div className='mt-10 md:hidden'>
                            <img src={about_WhatWeDo.part_1.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                        </div>
                        <div>
                            {about_WhatWeDo.part_1.content.map((item) => {
                                return (
                                    <p key={item.id} className='text-center mt-10 text-n-9'>{item.text}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img src={about_WhatWeDo.part_1.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-20'>
                    <div className='h-52 md:h-auto'>
                        <img src={about_WhatWeDo.part_2.imgUrl_2} alt="" className='rounded-md h-full w-full object-cover object-center' />
                    </div>
                    <div className='flex flex-col justify-evenly'>
                        <p className='text-center mt-10 text-n-9'>{about_WhatWeDo.part_2.content}</p>
                        <div className='my-10 h-52 md:order-2 md:h-72'>
                            <img src={about_WhatWeDo.part_2.imgUrl_1} alt="" className='rounded-md h-full w-full object-cover object-center' />
                        </div>
                        <div className='text-center md:order-1 md:mt-10'>
                            <Button href={about_WhatWeDo.part_2.btnLink}>
                                {about_WhatWeDo.part_2.btnText}
                            </Button>
                        </div>

                    </div>
                </div>
            </Section>
            <Section id='whoweare'>
                <div className='md:grid md:grid-cols-2 gap-x-10'>
                    <div className='py-10'>
                        <h2 className='text-color-1 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>Who we are</h2>
                        <div>
                            {about_WhoWeAre.content.map((item) => {
                                return (
                                    <p key={item.id} className='text-center mt-10 text-white'>{item.text}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='h-52 md:h-auto mt-10 md:mt-0'>
                        <img src={about_WhoWeAre.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                    </div>
                </div>
            </Section>
            <Section id='ourpeople'>
                <div>
                    <h2 className='text-color-1 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>Our People</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 xl:gap-x-10'>
                        {about_OurPeople.map((item) => {
                            return (
                                <div key={item.id} className='shadow-lg shadow-color-2 hover:shadow-color-1 h-min md:h-auto mt-10 md:mb-0 md:mt-0 rounded-md bg-white text-n-9'>
                                    <div className='h-64 md:h-auto'>
                                        <img src={about_WhoWeAre.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                                    </div>
                                    <div className='p-5'>
                                        <p className='text-xl'>{item.name}</p>
                                        <p className='mt-3 text-lg'>{item.title}</p>
                                        <div className='mt-3'>
                                            {item.profiles.map((subItem) => {
                                                return (
                                                    <p className='mt-1 text-sm' key={subItem.id}>{subItem.text}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Section>
            <Section className='bg-white'>
                <Carousel>
                    {about_Sliders.map((item) => {
                        return (
                            <div key={item.id} className='min-w-full px-8 md:px-0 flex h-full'>
                                <p className='flex items-center justify-center text-center leading-10 text-balance md:text-base md:leading-loose lg:text-xl lg:leading-loose max-w-4xl m-auto text-n-9'>{item.text}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </Section>
        </>

    )
}

export default About