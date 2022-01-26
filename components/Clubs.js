import React from 'react'
import { Card, Image } from 'react-bootstrap'

const Clubs = () => {
    return(
        <Card className='p-2 mt-6 w-9/12'>
            <h6 className='font-bold'>Your groups and clubs</h6>
            <Card.Body>
                <div className='flex flex-row text-sm'>
                    <div>
                        <Image src={'./partyyy.jpg'} width={20} height={25} alt='party' />
                    </div>
                    <div className='ml-2'>
                        <h6 className='font-semibold text-sm'>Maharashtra debating club</h6>
                    </div>
                </div>
                <div className='flex flex-row text-sm mt-2 items-center'>
                    <div>
                        <Image src={'./partyyy.jpg'} width={20} height={25} alt='party' />
                    </div>
                    <div className='ml-2'>
                        <h6 className='font-semibold  text-xs lg:text-sm'>The journalists!</h6>
                    </div>
                </div>
                <div className='flex flex-row text-sm items-center mt-2'>
                    <div>
                        <Image src={'./partyyy.jpg'} width={20} height={25} alt='party' />
                    </div>
                    <div className='ml-2'>
                        <h6 className='font-semibold  text-xs lg:text-sm'>Cricket club of India</h6>
                    </div>
                </div>
                <div className='flex flex-row text-sm items-center mt-2'>
                    <div>
                        <Image src={'./partyyy.jpg'} width={20} height={25} alt='party' />
                    </div>
                    <div className='ml-2'>
                        <h6 className='font-semibold  text-xs lg:text-sm'>St. Micheal&apos;s high school, Patna</h6>
                    </div>
                </div>
                <div className='mt-2 border-2 border-blue-400 rounded-3xl text-center'>
                    <button className='font-semibold text-blue-400 px-2 text-xs'>Discover more groups & clubs</button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Clubs
