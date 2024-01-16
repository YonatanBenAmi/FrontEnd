

export default function CostumerComments(props) {

    const combinedClass = `lg:w-1/3 w-full h-72 rounded-lg border border-white my-3 lg:mr-5 pt-9 pl-3 ${props.additionalClass}`;
    const h3Class = `text-amber-400  text-sm font-normal capitalize leading-none ${props.h3ClassName}`;
    return (<>

        <div className= {combinedClass}>
            <div>
                <h3 className= {h3Class}>{props.h3}</h3>
            </div>

            <div>
                <h1 className=" text-2xl font-bold capitalize leading-loose">{props.h1}</h1>
            </div>

            <div>
                <p className="  text-sm font-light capitalize leading-relaxed">{props.p}</p>
            </div>

            <div className="flex flex-row mt-5">
                <h3 className="  text-sm font-semibold capitalize leading-tight">View All</h3>
                <button className="ml-3">
                    <img className="w-4 h-3 " src={props.srcImg} alt="arrow" />
                </button>
            </div>
        </div>
    </>)
}