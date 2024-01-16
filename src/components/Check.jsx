
export default function Check(props) {

    return (<>
        <div className="flex flex-row w-full lg:w-1/2" data-aos="fade-left">
            <div className="flex justify-center items-center w-8 h-8 bg-slate-900 rounded-full shadow border border-indigo-950">
                <img className="w-3.5 h-3.5" src="../public/check.png" />
            </div>
            <div className="mx-5">
                <h3 className="text-amber-400 text-xl font-normal capitalize leading-[3rem]">{props.h3}</h3>
            </div>
        </div>
    </>)
}