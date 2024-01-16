import React from "react";

export default function Benefits(props) {
    return (<>
                <div>
                    <div className="text-amber-400 m-3 w-64 min-w-64">
                        <span className="text-4xl font-black tracking-wide leading-[72px]">
                            {props.num}
                            <span className="text-white">.</span>
                        </span>
                        <br/>
                        <span className="text-xl font-semibold normal-nums tracking-wide capitalize leading-[157%]">
                            {props.title}
                        </span>
                        <br/>
                        <span className="text-white capitalize">
                            {props.text}
                        </span>
                    </div>
                </div>
</>)
}