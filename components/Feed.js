import React, {useState} from 'react';
import { FormControl, Image, Form, Card } from 'react-bootstrap';
import Styles from '../styles/Feed.module.css'
import { FaPhotoVideo} from 'react-icons/fa'
import {MdOndemandVideo} from 'react-icons/md'
import {BsCalendarEventFill} from 'react-icons/bs'
import Post from './Post';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    }
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide text-gray-500">
          {isReadMore ? "...see more" : " show less"}
        </span>
      </p>
    )
  }




const Feed = () => {

    const content = (
        <div className='text-xs lg:text-base'>
            <p className='font-light'>Hi All,</p>
                <p>
                    <ReadMore>
                        Glad to announce that I have been selected for the internation championship in 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id cursus nisl. 
                        Aenean non nisi quis lacus faucibus aliquam. Nulla facilisi. Vestibulum feugiat 
                        eget lorem sit amet faucibus. Vivamus dolor lacus, suscipit vel tortor vel, finibus venenatis 
                        dolor. Sed blandit, ligula ut tempus pellentesque, quam tortor laoreet risus, nec tempor nunc 
                        augue accumsan turpis. Mauris porttitor eros hendrerit vestibulum ultricies. Etiam laoreet blandit 
                        interdum.
                    </ReadMore>
                </p>
        </div>
    )

    const moreContent = (
        <div>
            <p className='font-light text-xs lg:text-base'>Lucky to have won!</p>
            <Image src='./partyyy.jpg' className='h-60 lg:h-96 w-full mb-3' />
        </div>
    )

    return(
        <div className='flex flex-col items-start'>
            <Card className='mt-5 w-11/12'>
                <Card.Body>
                    <div className='flex p-2'>
                        <Image src='./rf21.jpg' alt='rf21' width={70} height={50} roundedCircle />
                        <div className='flex flex-col'>
                        <Form>
                            <FormControl placeholder='Start a conversation' className={`mt-1 ml-2 ${Styles.Input}`} />
                        </Form>
                        <div className='flex ml-4 lg:ml-16  mt-2 text-xs'>
                                <FaPhotoVideo size={20} className='w-1/12 lg:w-auto' color='#D4AF37' /> <span className='ml-1 text-xs'>Photos</span>
                                <MdOndemandVideo className='w-1/12 lg:w-auto ml-1 lg:ml-6 xl:ml-16' size={20} color='#D4AF37' /> <span className='ml-1 text-xs'>Videos</span>
                                <BsCalendarEventFill className='w-1/12 lg:w-auto ml-1 lg:ml-6 xl:ml-16' size={20} color='#D4AF37' /> <span className='ml-1 text-xs '>Events</span>
                        </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Post content  = {content} likes = {1345} liker = {'You'} comments = {100} shares = {65}/>
            <Post content={moreContent} likes = {1344} liker = {'Saurabh Malhotra'} comments = {100} shares = {65} />
            <Post content={moreContent} likes = {1344} liker = {'Saurabh Malhotra'} comments = {100} shares = {65} />
        </div>
    )
}

export default Feed;
