import React from 'react';
import { Card, Image } from 'react-bootstrap';

const Opportunities = () => {
  return(
      <div className='flex flex-col mt-2'>
          <Card className='p-2'>
            <Card.Body>
                <h6 className='font-bold'>Top Opportunities for you</h6>
                <div className='flex flex-col text-blue-500 items-center justify-center'>
                    <div className='flex items-center'>
                        <Image src='./partyyy.jpg' alt='party' width={50} />
                        <h6 className='ml-2  text-xs lg:text-base'>National Debating League by Camp Yellow</h6>
                    </div>
                    <div className='flex mt-2 items-center'>
                        <Image src='./partyyy.jpg' alt='party'  width={50}/>
                        <h6 className='ml-2  text-xs lg:text-base'>National Debating League by Camp Yellow</h6>
                    </div>
                    <div className='flex mt-2 items-center'>
                        <Image src='./partyyy.jpg' alt='party' width={50}/>
                        <h6 className='ml-2  text-xs lg:text-base'>National Debating League by Camp Yellow</h6>
                    </div>
                    <div className='flex mt-2 items-center'>
                        <Image src='./partyyy.jpg' alt='party' width={50} />
                        <h6 className='ml-2  text-xs lg:text-base'>National Debating League by Camp Yellow</h6>
                    </div>
                </div>
            </Card.Body>
            <div className='mt-2 border-2 border-blue-400 rounded-3xl text-center'>
                    <button className='font-semibold text-blue-400 px-2 text-xs'>Click for more Opportunities</button>
            </div>
          </Card>
      </div>
  )
};

export default Opportunities;
