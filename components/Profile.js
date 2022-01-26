import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Clubs from './Clubs';

const Profile = () => {
    return(
        <div className='flex flex-col items-center w-9/12'>
            <Card className='mt-5 w-9/12'>
                <Image src={'./rf21.jpg'} alt='Roger federer' roundedCircle height={400} width={400} className='p-5'/>
                <Card.Body>
                    <div className='text-center'>
                        <h6 className='font-bold  text-xs lg:text-base'>Pratik Gangwal</h6>
                    </div>
                    <div className='flex flex-col flex-wrap text-center'>
                        <h6 className='font-light  text-xs lg:text-sm'>School President || Aspiring Lawyer || 11th Grader || FIFA god</h6>
                    </div>
                </Card.Body>
            </Card>
            <Card className='w-9/12 p-2'>
                <table>
                    <tbody className='text-left font-semibold text-sm p-2'>
                        <tr className=''>
                            <td className=' text-xs lg:text-base'>Number of followers</td>
                            <td className='text-blue-500  text-xs lg:text-sm'>3.4k</td>
                        </tr>
                        <tr>
                            <td className=' text-xs lg:text-base'>Profile Views This Month</td>
                            <td className='text-blue-500  text-xs lg:text-sm'>13.4k</td>
                        </tr>
                        <tr>
                            <td className=' text-xs lg:text-base'>Post views this month</td>
                            <td className='text-blue-500  text-xs lg:text-sm'>113.4k</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <Clubs />
        </div>
    )
};

export default Profile;
