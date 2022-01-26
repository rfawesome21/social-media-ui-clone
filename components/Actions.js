import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { IoMdShareAlt} from 'react-icons/io'
import {RiSendPlaneLine} from 'react-icons/ri'
import Styles from '../styles/Feed.module.css'
import { Form, FormControl, Image } from 'react-bootstrap';

const Actions = ({liker, likes, comments, shares}) => {
    return(
        <div className='flex flex-col'>
            <div className='flex justify-start text-xs lg:text-sm flex-row'>

                <AiFillLike size={20} color='#A020F0'/>  <span className='text-xs lg:text-sm'>{liker} and {likes} others like this</span>
                <div className='ml-auto'>
                <span className='lg:text-sm self-end text-xs'>{comments} comments</span>
                <span className='lg:text-sm ml-2 text-xs'>{shares} shares</span>
                </div>
                </div>
                <hr />
                <div className='flex justify-evenly text-xs lg:text-sm'>
                <div className='flex'>
                    <AiFillLike size={25} color='#A020F0' /><span className='ml-1'>Like</span>
                </div>
                <div className='flex'>
                    <FaComment size={25} color='#A020F0' className='' /><span className='ml-1'>Comment</span>
                </div>
                <div className='flex'>
                    <IoMdShareAlt size={25} color='#A020F0'className='' /><span className='ml-1'>Share</span>
                </div>
                <div className='flex'>
                    <RiSendPlaneLine size={25} color='#A020F0' className='' /><span className='ml-1'>Send</span>
                </div>
                </div>
                <div className='flex mt-4'>
                <Image src='./rf21.jpg' height={40} width={40} roundedCircle />
                <Form>
                    <FormControl
                    placeholder='Add a comment'
                    className={`ml-1 ${Styles.Input}`}
                    />
                </Form>
            </div>
        </div>
    )
};

export default Actions;
