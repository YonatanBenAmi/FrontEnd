import React, { useState } from "react";

function Directions() {
    return (<>
        <div className="flex flex-col w-full h-96 my-16">

            <div className='text-left text-white text-3xl font-bold capitalize leading-[50px]'>
                <div className='my-2'>
                    <span className="">Google Maps</span>
                    <span className="text-amber-400 "> Directions</span>
                </div>
            </div>
            <div className='w-full h-[300px] flex justify-center rounded-[30px]'
                style={{ backgroundImage: "url('map 1.png')", }}></div>
        </div>


    </>)
}
export default Directions;

