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


  // Quicksort implementation
  const quicksort = (arr) => {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].timestamp.seconds > pivot.timestamp.seconds) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "testing"), (snapshot) => {
      const sortedPosts = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((post) => post.timestamp !== null); // Exclude posts with null timestamp

      const sortedPostsByTimestamp = quicksort(sortedPosts);

      setPosts(sortedPostsByTimestamp);
    });

    // ### SCROLL ANYWHERE ON PAGE
    // Bugs: when moving from one area like Sidebar 
    // to feed while scroll there is lag

    const handleScroll = (event) => {
      const feedElement = document.querySelector(".feed");
      const deltaY = event.deltaY;

      if (feedElement && deltaY !== 0) {
        event.preventDefault();
        feedElement.scrollTop += deltaY;
      }
    };
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      unsubscribe();
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const formatTimestamp = (timestamp) => {
    const now = moment();
    const tweetTime = moment.unix(timestamp.seconds);
    const diffInSeconds = now.diff(tweetTime, "seconds");

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
            timestamp={formatTimestamp(post.timestamp)}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
