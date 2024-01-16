import React from 'react';
import YellowButton from './YellowButton';
import { useNavigate } from 'react-router-dom';

function HeroSection(props) {

    const navigate = useNavigate();

    const navigateToPrice = () => {
        navigate('/price');
    };

    return (<>
        <div className='w-[100vw] h-[550px] flex justify-center'
            style={{ backgroundImage: "url('../public/Lines 1.png')" }}>
            <div className=' w-4/5'>
                <div className='flex items-center h-[450px] w-full flex-col lg:flex-row'>
                    <div className=' w-2/3'>
                        <div className='text-left text-white text-4xl font-bold capitalize leading-10'>
                            <div className='my-2'>
                                <span className="">{props.firstTxt}</span><br />
                                <span className="text-amber-400 ">{props.yellowTxt}</span><br />
                                <span>{props.lastTxt}</span><br />
                            </div>
                            <h4 className='text-lg font-normal'>{props.smallTxt}</h4>
                        </div>
                        <div style={{ marginTop: '70px' }} onClick={navigateToPrice}>
                            <YellowButton txt={props.buttonTxt}  />
                        </div>
                    </div>
                    <div className='w-1/3 flex'>

                        <img className='w-[426px] h-[424px]' src="../public/developer_with_tags.png" alt="Working Developer" title='click on me' style={{ marginTop: '210px' }} />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default HeroSection;