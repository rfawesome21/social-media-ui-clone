import React from 'react';
import { Image } from 'react-bootstrap';

const Info = () => {
    return(
        <div className='flex flex-row p-2'>
            <Image src='./rn21.jpg' alt='rf21' width={70} height={50} roundedCircle />
            <div className='flex flex-col ml-2 text-xs lg:text-sm'>
                <div className='font-bold'>
                    Lorem Ipsum
                </div>
                <div className='font-light'>
                    Management Consultant || Mentor || IIT Delhi
                </div><div className='font-light'>
                    3d ago
                </div>
            </div>
        </div>
    )
};

export default Info;
