import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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
