import '../App.css';
import ComponentHeaderHome from '../components/ComponentHeaderHome';
import Check from '../components/Check';
import React, { useState, useEffect } from 'react';
import { getHeroSection } from '../cms-functions/cms-to-hero';
import YellowButton from '../components/YellowButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const [heroSection, setHeroSection] = useState({});
    const navigate = useNavigate();
    const navigateToPrice = () => {
        navigate('/price');
    };


    useEffect(() => {
        getHeroSection('Home').then(setHeroSection).catch(console.error);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease',
            once: false,
        });
    });



    return (<>

        <div className='w-[100vw] min-h-screen flex flex-col'>
            <div className='w-full  flex justify-center bg-gray-950'
                style={{ backgroundImage: "url('Lines 1.png')" }}>
                <div className=' w-4/5'>
                    <div className='flex flex-col lg:flex-row items-center h-[700px] lg:h-[450px] w-full '>
                        <div className='flex flex-col w-full lg:w-1/2 '>
                            <div className='text-left text-white text-4xl font-bold capitalize leading-10'>
                                <div className='my-2'>
                                    <span>{heroSection.desc1}</span><br />
                                    <span className="text-amber-400 ">{heroSection.desc2}</span><br />
                                    <span>{heroSection.desc3}</span>
                                </div>
                                <h4 className='text-lg font-normal'>{heroSection.desc4}</h4>

                            </div>

                            <div className="flex items-center justify-between w-60 h-12 bg-amber-400 rounded  pl-3 my-3">
                                <h4>{heroSection.button}</h4>
                                <button className=" flex justify-center items-center w-20 h-10 bg-gray-950 rounded m-1"
                                        onClick={navigateToPrice}>
                                    <YellowButton />
                                </button>
                            </div>

                        </div>
                        <div className='flex col-span-1 w-full lg:w-1/2 h-full  justify-end'>
                            <img className=' h-full' src="../public/home_header.png" alt="" />
                        </div>
                    </div>
                    <div className='max-w-full my-8'>
                        <div className=' flex flex-row justify-between overflow-scroll '>
                            <ComponentHeaderHome
                                Titel='Visual Studio'
                                p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                srcLogo='../public/visual_studio.png' />

                            <ComponentHeaderHome
                                Titel='Sqlite'
                                p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                srcLogo='../public/jquary.png' />

                            <ComponentHeaderHome
                                Titel='C-Sharp'
                                p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                srcLogo='../public/C-sharp.png' />

                            <ComponentHeaderHome
                                Titel='.NET'
                                p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                srcLogo='../public/dot_net.png' />

                            <ComponentHeaderHome
                                Titel='NuGet'
                                p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                srcLogo='../public/nu_get.png' />

                            <ComponentHeaderHome
                                Titel='MvvmCross'
                                p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                srcLogo='../public/MvvmCross.png' />
                        </div>

                    </div>

                </div>
            </div>
            <div className='w-full  flex justify-center bg-slate-950'
                style={{ backgroundImage: "url('little-witch-folded-notes 1.png')" }}>
                <div className=' w-4/5'>
                    <div className='lg:flex-row flex-col w-full h-[900] lg:h-[550px] flex my-3'>
                        <div className="flex justify-center items-center lg:w-1/2 sm:w-full h-full">
                            <div className=" w-full h-full text-white text-4xl text-left font-bold capitalize leading-10">
                                <div className=' flex w-full h-1/3  items-end pb-6 mb-3'>
                                    <span className=''>Make your <span className='text-amber-400'>personalized
                                        learning</span> journey</span>
                                </div>

                                <div className=' flex flex-row flex-wrap w-full h-2/3'>
                                    <div className=' flex flex-col lg:w-1/2 w-full h-1/2 py-2 pr-5' data-aos="fade-down-right">
                                        <div><span className='text-amber-400'>1</span>.</div>
                                        <h2 className=' text-amber-400 text-2xl my-1'>Create Account</h2>
                                        <p className=' text-base font-normal'>At first create your accont at our website.</p>
                                    </div>

                                    <div className=' flex flex-col lg:w-1/2 w-full h-1/2 py-2 pr-5' data-aos="fade-down-left" data-aos-delay="300">
                                        <div><span className='text-amber-400'>2</span>.</div>
                                        <h2 className=' text-amber-400 text-2xl my-1'>Select Course</h2>
                                        <p className=' text-base font-normal'>Then select your preffered course from our bucket.</p>
                                    </div>

                                    <div className=' flex flex-col lg:w-1/2 w-full h-1/2 py-2 pr-5' data-aos="fade-down-right">
                                        <div><span className='text-amber-400'>3</span>.</div>
                                        <h2 className=' text-amber-400 text-2xl my-1'>Learn your skill</h2>
                                        <p className=' text-base font-normal'>Learn yiur skill from thr best learning materials</p>
                                    </div>

                                    <div className=' flex flex-col lg:w-1/2 w-full h-1/2 py-2 pr-5' data-aos="fade-down-left" data-aos-delay="300">
                                        <div><span className='text-amber-400'>4</span>.</div>
                                        <h2 className=' text-amber-400 text-2xl my-1'>Make success story</h2>
                                        <p className=' text-base font-normal'>After learning the skill make steps to success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:w-1/2 w-full h-full flex-col p-1">
                            <div className=' flex w-full h-[30%] items-end text-white'>
                                <h6>The learning platform will vary depending on the software used.
                                    but it will usually consist of a central online platform </h6>
                            </div>
                            <div className=' flex w-full h-[70%] mt-5'>
                                <div className=' w-full h-[90%]'>
                                    <iframe className='w-full h-full rounded-xl border-2 border-amber-400'
                                        src="https://www.youtube.com/embed/Ef2dqtKoIns?si=5GZGcpQMdIFnObB1&controls=0"
                                        title="YouTube video player" frameorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                    </iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


        <div className='w-full flex-col  flex justify-center'>
            <article className='w-full flex justify-center  bg-gray-950 '>
                <div className=' w-4/5'>
                    <div className='flex lg:flex-row flex-col w-full h-[900] lg:h-[550px] '>
                        <div className="flex lg:w-1/2 w-full items-center ">

                            <div className='relative flex justify-center items-center bg-indigo-950 w-[70%] h-[70%] rounded-2xl px-3' data-aos="fade-up-right" data-aos-delay="150">
                                <img className=' w-[6/7] h-[6/7] object-cover' src="../public/Ellipse 2.png" alt="" />
                                <img className=' w-[70%] h-[115%] absolute bottom-0  left-9 z-[2] ' src="../public/man.png" alt="" />
                                <img className=' w-40 h-20 absolute top-8  left-[82%] z-[2]' src="../public/Rounded Rectangle.png" alt="" />
                                <img className=' w-40 h-20 absolute top-32  left-[82%] z-[2]' src="../public/Rounded Rectangle1.png" alt="" />

                            </div>
                        </div>
                        <div className="flex items-center lg:w-1/2 w-full">
                            <div className=' flex flex-col w-full h-[70%] pt-6 text-white text-4xl font-bold capitalize leading-10 '>
                                <h1 className='mb-6'>
                                    <span>Why we</span>
                                    <span className='text-amber-400'> learn<br />from </span>
                                    <span>Colman<span className='text-amber-400'>Dev</span>Club</span>
                                </h1>
                                <p className=' text-base font-normal capitalize leading-relaxed mb-4'>ColmanDevClub is a global training provider based acros the UK that
                                    specialises in development, a developers club training students for their
                                    job as full stack developers. our menors are coming from the industry to
                                    help us do it. the managares are currently students
                                </p>
                                <div className="flex flex-col flex-wrap w-full my-7 ">
                                    <div className='flex flex-col lg:flex-row w-full'>
                                        <Check h3='World Class' />
                                        <Check h3='Flexible' />
                                    </div>
                                    <div className='flex flex-col lg:flex-row w-full my-3'>
                                        <Check h3='Affordable' />
                                        <Check h3='Job relevant' />
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>

                </div>

            </article>


        </div>
    </>)
}




