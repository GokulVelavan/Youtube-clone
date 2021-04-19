import React from "react";
import "./VideoRow.css";
function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videorow">
      <img src={image} />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="headline">
          {channel}*
          <span className="row_subs">
            <span className="subs">{subs}</span> subscribers
            {views} views *{timestamp}
          </span>
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
