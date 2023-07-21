import React, { useState,  } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const avatar = localStorage.getItem("profilePic");


  const postsRef = collection(db, 'testing');

  const MAX_CHARACTER_LIMIT = 280;

  const sendTweet = async (e) => {
    e.preventDefault();

    if (tweetMessage.length === 0 && tweetImage.length === 0) {
      // Neither tweet message nor image is provided
      return;
    }

    await addDoc(postsRef, {
      displayName: localStorage.getItem('name'),
      username: 'testuser',
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar: localStorage.getItem("profilePic"),
      timestamp: serverTimestamp()
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={avatar}/>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            minLength="1"
            maxLength={MAX_CHARACTER_LIMIT}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
          disabled={!tweetMessage && !tweetImage}
          disableRipple
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
