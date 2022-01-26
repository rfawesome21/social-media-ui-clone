import React from 'react';
import { Card } from 'react-bootstrap';
import Actions from './Actions';
import Info from './Info';

const Post = ({content, liker, likes, comments, shares}) => {
    return(
        <div className='flex flex-col mt-3 w-11/12'>
            <Card>
                <Card.Body>
                    <Info />
                    <div>
                        {content}
                    </div>
                    <Actions liker = {liker} likes = {likes} comments = {comments} shares = {shares}  />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post;
