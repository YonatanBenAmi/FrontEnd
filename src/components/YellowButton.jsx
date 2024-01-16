

export default function YellowButton(props) {


    return (<>
        <div className="flex items-center justify-between w-60 h-12 bg-amber-400 rounded  pl-3 my-3">
            <h4> {props.txt} </h4>
            <button
                className=" flex justify-center items-center w-20 h-10 bg-gray-950 transform-gpu transition-transform duration-300 active:scale-90 rounded m-1" >
                <img className='w-5 h-3.5' src="../public/arrow_home.png" alt="yellow arrow" />
            </button>
        </div>
    </>)
}


