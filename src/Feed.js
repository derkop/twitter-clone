import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import { collection, onSnapshot} from "firebase/firestore"; 


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db,"posts"), (snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          timestamp={post.timestamp}
        />
      ))}

        {/* <Post 
          displayName="Derrick Ko"
          username="derrick.ko"
          verified={true}
          text= "HIII KIMMY"
          avatar="https://i.imgur.com/TOQO1Bz.jpg"
          image="https://media4.giphy.com/media/LpoT1DojgcyW9QrCil/giphy.gif?cid=ecf05e47rl9pr66asj9rvoew4cqp5u16v6egowrl6e7gtmg3&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          timestamp="5min"
        /> */}
    </div>
  );
}

export default Feed;
