import React, { useState, useEffect } from "react";
import moment from "moment";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "testing"), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          const timestamp = doc.data().timestamp.seconds; // Extract seconds value
          const formattedTimestamp = formatTimestamp(timestamp);
          return {
            id: doc.id,
            ...doc.data(),
            timestamp: formattedTimestamp
          };
        })
      );
    });

    const handleScroll = (event) => {
      const feedElement = document.querySelector(".feed");
      const deltaY = event.deltaY;

      if (feedElement && deltaY !== 0) {
        event.preventDefault();
        feedElement.scrollTop += deltaY;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      unsubscribe();
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const formatTimestamp = (timestamp) => {
    const now = moment();
    const tweetTime = moment.unix(timestamp);
    const diffInSeconds = now.diff(tweetTime, 'seconds');
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds}s`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes}m`;
    } else if (diffInSeconds < 86400) {
      const diffInHours = Math.floor(diffInSeconds / 3600);
      return `${diffInHours}h`;
    } else if (diffInSeconds < 604800) {
      const diffInDays = Math.floor(diffInSeconds / 86400);
      return `${diffInDays}d`;
    } else if (diffInSeconds < 31536000) {
      const diffInWeeks = Math.floor(diffInSeconds / 604800);
      return `${diffInWeeks}w`;
    } else {
      const diffInYears = Math.floor(diffInSeconds / 31536000);
      return `${diffInYears}y`;
    }
  };  

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            timestamp={post.timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
