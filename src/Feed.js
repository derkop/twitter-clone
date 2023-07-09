import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      
    <TweetBox/>

    <Post 
    displayName="Derrick Ko"
    username="derrick.ko"
    verified={true}
    text= "HIII KIMMY"
    />

    </div>
  );
}

export default Feed;