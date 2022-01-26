import React from 'react';
import { Card } from 'react-bootstrap';
import Opportunities from './Opportunities';

const News = () => {
    return(
        <div className='flex flex-col items-center mr-auto mt-5'>
            <Card className='p-2'>
                <Card.Body>
                        <h6 className='font-bold'>Peers in news</h6>
                        
                    <div className='flex flex-col font-light'>
                        <h6 className='font-normal text-xs lg:text-base'>Bhubaneshwar boy wins national debating league</h6>
                        <div className='flex flex-row justify-start font-light'>
                            <h6 className='font-light text-xs lg:text-sm'>4d ago</h6>
                            <h6 className='ml-2 font-light text-xs lg:text-sm'> 26,466 readers</h6>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='font-normal text-xs lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet malesuada elit, id consequat diam.</h6>
                        <div className='flex flex-row justify-start '>
                            <h6 className='font-light text-xs lg:text-sm'>4d ago</h6>
                            <h6 className='ml-2 font-light text-xs lg:text-sm'> 26,466 readers</h6>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='font-normal text-xs lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet malesuada elit, id consequat diam.</h6>
                        <div className='flex flex-row justify-start'>
                            <h6 className='font-light text-xs lg:text-sm'>4d ago</h6>
                            <h6 className='ml-2 font-light text-xs lg:text-sm'> 26,466 readers</h6>
                        </div>
                    </div><div className='flex flex-col'>
                        <h6 className='font-normal text-xs lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet malesuada elit, id consequat diam.</h6>
                        <div className='flex flex-row justify-start'>
                            <h6 className='font-light text-xs lg:text-sm'>4d ago</h6>
                            <h6 className='ml-2 font-light text-xs lg:text-sm'> 26,466 readers</h6>
                        </div>
                    </div>
                </Card.Body>
                <div className='mt-2 border-2 border-blue-400 rounded-3xl text-center'>
                    <button className='font-semibold text-blue-400 px-2 text-xs'>Click for more news</button>
                </div>
            </Card>
            <Opportunities />
        </div>
    )
}

export default News;
