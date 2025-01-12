import React from 'react';

const About = () => {
    return (
        <div>
            <div className='w-full flex flex-row justify-center items-center'>
                <img src='/assets/1.jpg' className='w-full px-4   object-fill max-h-96' />
                <h1 className='absolute md:text-4xl text-lg bg-black opacity-60 w-full text-center py-0 md:py-1 text-white font-semibold '>About Ecommerce</h1>
            </div>
        </div>
    );
};

export default About;