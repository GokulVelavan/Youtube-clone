import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchpage">
      <div className="filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0x00ffffff-no-rj"
        channel="Clever Programer"
        verified
        subs="660k"
        noOfVideos={400}
        description="follow to get some awsome program videos"
      />

      <hr />
      <VideoRow
        views="1.4M"
        subs="855k"
        description="Learn the skills"
        timestamp="5 hours ago"
        channel="ben10"
        title="lets build clone"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="855k"
        description="Learn the skills"
        timestamp="5 hours ago"
        channel="ben10"
        title="lets build clone"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="855k"
        description="Learn the skills"
        timestamp="5 hours ago"
        channel="ben10"
        title="lets build clone"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="855k"
        description="Learn the skills"
        timestamp="5 hours ago"
        channel="ben10"
        title="lets build clone"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="855k"
        description="Learn the skills"
        timestamp="5 hours ago"
        channel="ben10"
        title="lets build clone"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="855k"
        description="Learn the skills"
        timestamp="5 hours ago"
        channel="ben10"
        title="lets build clone"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="855k"
        description="Learn the skills"
        timestamp="5 hours ago"
        channel="ben10"
        title="lets build clone"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="855k"
        description="Learn the skills"
        timestamp="5 hours ago"
        channel="ben10"
        title="lets build clone"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
