import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import RepeatIcon from '@mui/icons-material/Repeat';

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, timestamp }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  {username} · {timestamp}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img className="post__image" src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon className="comment__Icon" fontSize="small" />
            <RepeatIcon className="retweet__Icon" fontSize="small" />
            <FavoriteBorderIcon className="likes__Icon" fontSize="small" />
            <PublishIcon className="share__Icon" fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
