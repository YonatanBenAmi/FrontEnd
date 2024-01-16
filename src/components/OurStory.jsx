export default function OurStory(props) {

    return (<>

        <div className="flex justify-center items-center flex-col text-white hover:text-slate-950 min-w-[190px] mr-4 h-16 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950 p-2">
            <div className=" hover:text-slate-950 text-center text-base font-light capitalize leading-tight"><h4>{props.title}</h4></div>
            <div className="text-amber-400 "><h5>{props.year}</h5></div>
        </div>
    </>)
}