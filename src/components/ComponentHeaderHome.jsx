import React from "react"

export default function ComponentHeaderHome(props) {

    return (<>
        <div className="min-w-[208px] h-60 relative text-white mr-5 z-[1]">
            <div className="w-full h-full left-0 top-0 bg-slate-950 rounded-lg border border-indigo-950" />
            <img className="w-5 h-3.5 left-[176px] top-[214px] absolute" src="../public/arrow_home.png" />
            <div className="left-[9px] top-[107px] absolute text-center text-amber-400 text-lg font-normal capitalize leading-relaxed">{props.Titel}</div>
            <div className="w-48 h-20 left-[9px] top-[136px] absolute  text-sm font-normal capitalize leading-tight">{props.p}</div>
            <div className="w-14 h-14 left-[9px] top-[25px] absolute bg-slate-900 rounded-full" />
            <img className="w-6 h-6 left-[24px] top-[40px] absolute" src={props.srcLogo} />
        </div>
    </>)
}