import React, { useState } from "react";
import YellowButton from "./YellowButton";
import { SiteClient } from 'datocms-client';

const client = new SiteClient(import.meta.env.VITE_TOKEN2);


function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const record = await client.items.create({
                itemType: 'fqN6Cg0rRGmc1MlsmsAeyg',
                fname: formData.firstName,
                lname: formData.lastName,
                email: formData.emailAddress,
                phone: formData.phoneNumber,
                message: formData.message,
            });

            console.log('Record created:', record);

            setFormData({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                emailAddress: "",
                message: "",
            });

        } catch (error) {
            console.error('Error sending data to DatoCMS', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className="flex-col">
                <div className="flex flex-row gap-3 ">

                    <div className="flex flex-col w-1/2 ">
                        <label className="w-full text-white text-xl font-light capitalize leading-[34px]">

                            <div className="">
                                <h1>First Name:</h1>
                            </div>
                            <div className="">
                                <input className="w-full h-[55px] pl-5 bg-slate-950 rounded-[10px] border border-indigo-950"
                                    type="text"
                                    name="firstName"
                                    placeholder="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>

                        </label>
                    </div>

                    <div className="flex flex-col w-1/2">
                        <label className="w-full text-white text-xl font-light capitalize leading-[34px]">

                            <div className="">
                                <h1>Last Name:</h1>
                            </div>
                            <div className="">
                                <input className="w-full h-[55px] pl-5 bg-slate-950 rounded-[10px] border border-indigo-950"
                                    type="text"
                                    name="lastName"
                                    placeholder="Type Your Last Name"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>

                        </label>
                    </div>

                </div>

                <div className="mt-7">
                    <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                        Email:
                        <input className="w-full h-[55px] pl-5 flex justify-center bg-slate-950 rounded-[10px] border border-indigo-950"
                            type="email"
                            name="emailAddress"
                            placeholder="Type Your Email"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="mt-7">
                    <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                        Phone Number:
                        <input className="w-full h-[55px] pl-5 flex justify-center bg-slate-950 rounded-[10px] border border-indigo-950"
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter Your Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="mt-7">
                    <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                        Message:
                        <textarea className="w-full h-[121px] pl-5 pt-3 bg-slate-950 rounded-[10px] border border-indigo-950"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="mt-7">
                    <YellowButton txt="Send" />
                </div>

            </div>
        </form>
    );
};


export default ContactForm;
