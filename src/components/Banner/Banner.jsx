import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className="bg-[#F8FAFC] ">
            <div className="hero  mt-20">
                <div className="hero-content flex-col lg:flex-row items-center justify-center">

                    <div className='flex flex-col items-center justify-center '>
                        <h1 className="text-5xl font-bold mt-4">Friends to keep close in your life</h1>
                        <p className="py-6 text-center">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                            relationships that matter most.
                        </p>
                        <button className="btn bg-[#3E6356] text-white hover:bg-[#6ec2a5]"><AiOutlinePlus />Add A Friend</button>
                    </div>
                </div>
            </div>
            <div className="w-10/12 mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 p-10 border-b-2 border-[#EEEFF0]">
                <div className="bg-white border rounded-md text-center p-4">
                    <h2 className='font-bold'>10</h2>
                    <p>Total Friends</p>
                </div>
                <div className="bg-white border rounded-md text-center p-4">
                    <h2 className='font-bold'>3</h2>
                    <p>On Track</p>
                </div>
                <div className="bg-white border rounded-md text-center p-4">
                    <h2 className='font-bold'>6</h2>
                    <p>Need Attention</p>
                </div>
                <div className="bg-white border rounded-md text-center p-4 ">
                    <h2 className='font-bold'>12</h2>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;

