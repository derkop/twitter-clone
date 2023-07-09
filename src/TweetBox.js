import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (  
    <div className="tweetBox">
        <form> 
            <div className='tweetBox__input'>
                <Avatar src="https://i.imgur.com/FfoL3nU.jpg"></Avatar>
                <input placeholder="What's happening?" type="text"></input>
            </div>
            <Button className='tweetBox__tweetButton' disableRipple>Tweet</Button>
        </form>
    </div>
    )
}

export default TweetBox