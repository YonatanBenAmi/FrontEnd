
export default function EmployeeCard(props) {

    const socialIcons = props.showSocialIcons && (
        <div className="flex justify-around absolute bottom-3 left-1/2 transform -translate-x-1/2 space-x-2">
            <div className="flex justify-center items-center w-8 h-8 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950 mx-1">
                <img className="w-5 h-5" src="msg-4.png" alt="" />
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950 mx-1">
                <img className="w-5 h-5" src="msg-3.png" alt="" />
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950 mx-1">
                <img className="w-5 h-5" src="msg-2.png" alt="" />
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950 mx-1">
                <img className="w-5 h-5" src="msg-1.png" alt="" />
            </div>
        </div>
    );

    const customerDiscription = props.showCustomerDiscription && (
        <div className="text-center mt-2 overflow-y-auto max-h-[92px] rounded-md">
            <h6 className="bg-slate-900 text-amber-400 text-sm font-normal capitalize leading-4 px-2 py-1">{props.Descript}</h6>
        </div>
    )

    return (<>
        <div className="flex flex-col items-center pt-6 w-44 h-72 bg-slate-950 rounded-lg border border-amber-400 relative p-3">
            <div className="w-20 h-20">

                <div className="w-full h-full rounded-[50%] border-4 border-white">
                    <img className="w-full h-full rounded-[50%]" src={props.srcImg} alt="" />
                </div>
            </div>
            <div className="text-center mt-4 ">
                <h3 className="text-amber-400 text-xl leading-4  font-medium capitalize ">{props.Name}</h3>
                <h6 className="text-white text-sm font-normal capitalize leading-9">{props.Role}</h6>
                {customerDiscription}
            </div>

            <div className="w-4/5 flex justify-around absolute bottom-3">
                {socialIcons}
            </div>
        </div>
    </>)
}
