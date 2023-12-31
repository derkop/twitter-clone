import React from "react";
import "./Widgets.css";
import {
  // TwitterTimelineEmbed,
  TwitterShareButton
  // TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterShareButton/>
      </div>

      <footer className="footer">
      <div className="footer-links">
        <div className="top-links">
          <a href="https://twitter.com/en/tos" rel="noreferrer" target="_blank">Terms of Service</a>&nbsp;&nbsp;
          <a href="https://twitter.com/privacy" rel="noreferrer" target="_blank">Privacy Policy</a>&nbsp;&nbsp;
          <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" rel="noreferrer" target="_blank">Cookie Policy</a>
        </div>
        <div className="bottom-links">
          <a href="https://help.twitter.com/en/resources/accessibility" rel="noreferrer" target="_blank">Accessibility</a>&nbsp;&nbsp;
          <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html" rel="noreferrer" target="_blank">Ads Info</a>
        </div>
      </div>
    </footer>

      <p className="footer-info">
        &copy; 2023 Twitter, Inc.
      </p>
    </div>
  );
}

export default Widgets;