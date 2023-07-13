import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import moment from 'moment';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const postsRef = collection(db, 'testing');

  const MAX_CHARACTER_LIMIT = 280;

  const sendTweet = async (e) => {
    e.preventDefault();

    await addDoc(postsRef, {
      displayName: 'Derrick Ko',
      username: 'derrick.ko',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://i.imgur.com/FfoL3nU.jpg',
      timestamp: serverTimestamp()
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.imgur.com/FfoL3nU.jpg" />
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
          disabled={tweetMessage.length === 0 || tweetMessage.length > MAX_CHARACTER_LIMIT}
          disableRipple
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
