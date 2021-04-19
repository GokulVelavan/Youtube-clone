import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";
function Video({ image, title, channel, views, timestamp, channelimg }) {
  return (
    <div className="videocard">
      <img className="videocard_thumbnail" src={image} alt="" />

      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelimg} />

        <div className="videocard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}*{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
