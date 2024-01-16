import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";
import Directions from "../components/Directions";
import "../App.css";
import React, { useState, useEffect } from 'react';
import { getContactInfo } from '../cms-functions/cms-to-ourContactInfo';
import { getHeroSection } from '../cms-functions/cms-to-hero';

export default function ContactUs() {
    const [contact, setContact] = useState({});
    const [heroSection, setHeroSection] = useState({});

    useEffect(() => {
        getContactInfo().then(setContact).catch(console.error);
    }, []);

    useEffect(() => {
        getHeroSection('ContactUs').then(setHeroSection).catch(console.error);
    }, []);

    return (<>
        <HeroSection 
                firstTxt={heroSection.desc1}
                yellowTxt={heroSection.desc2} 
                lastTxt={heroSection.desc3}
                smallTxt={heroSection.desc4}
                buttonTxt={heroSection.button} />

        <div className='w-[100vw] flex justify-center'
            style={{ backgroundImage: "url('little-witch-folded-notes 1.png')", }}>
            <div className=" w-4/5 flex flex-col">
                <div className='flex items-center  w-full flex-col lg:flex-row'>
                    <div className=' lg:w-1/2 w-full'>
                        <div className='text-left text-white text-4xl font-bold capitalize leading-10'>
                            <div className='my-5'>
                                <span className="">Get in</span>
                                <span className="text-amber-400 "> Touch</span>
                            </div>
                            <h4 className='text-lg font-normal my-10'>Let's talk about your website or projects.
                               <br /> Send us a message, and we will bein touch <br />within one business day.</h4>
                            <div className="text-[14px] font-normal my-1">
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Phone</h3>
                                <p>{contact.phone1}<br />{contact.phone2}<br />{contact.phone3}</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Email</h3>
                                <p>{contact.email} <br />{contact.email} <br />{contact.email}</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Bnei Brakq Office</h3>
                                <p>{contact.address1}</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Jerusalem Office</h3>
                                <p>{contact.address2}</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Haifa Office</h3>
                                <p>{contact.address3}</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full flex'>
                        <div className="w-full h-[833px] flex justify-center bg-slate-900 rounded-[10px] border border-indigo-950">
                            <div className="w-[90%]">
                                <h3 className="text-[28px] font-bold text-amber-400 my-5 mr-5">Send A Message</h3>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="">
                    <Directions/>
                </div>
            </div>
        </div>

    </>)
}

