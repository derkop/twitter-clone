// TweetBox.js
import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { setDocId } from './globals.js';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const postsRef = collection(db, 'posts');

  const MAX_CHARACTER_LIMIT = 280;

  const sendTweet = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(postsRef, {
      displayName: 'Derrick Ko',
      username: 'derrick.ko',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://i.imgur.com/FfoL3nU.jpg',
      timestamp: '5h'
    });

    const newDocId = docRef.id; // Retrieve the document ID
    setDocId(newDocId); // Update the docId value in globals.js

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
        {tweetMessage.length > MAX_CHARACTER_LIMIT && (
          <p className="tweetBox__error">
            Exceeded character limit of {MAX_CHARACTER_LIMIT}
          </p>
        )}

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
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
