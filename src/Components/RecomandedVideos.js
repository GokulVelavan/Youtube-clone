import React from "react";
import "./RecomandedVideos.css";
import VideoCard from "./VideoCard";

function RecomandedVideos() {
  return (
    <div className="recamandedvideos">
      <h2>Recommended</h2>
      <div className="recamandedvideos_videos">
        <VideoCard
          title="Learn  With Me"
          views="5.5M Views"
          timestamp="10days ago"
          channelimg="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg"
        />
        <VideoCard
          title="Watch my Vlog"
          views="3.2M Views"
          timestamp="7days ago"
          channelimg="https://yt3.ggpht.com/ytc/AAUvwnj_OsxYzRXY1VXj9WzlWQwamQTYdqthTX057RRPWA=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Irfans View"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsXUI9VO-UhVbfGfG8D3JmgQm_bj9Ukz9mw&usqp=CAU"
        />
        <VideoCard
          title="+2 FREE PERIOD"
          views="10M Views"
          timestamp="5days ago"
          channelimg="https://yt3.ggpht.com/ytc/AAUvwnjipJKbPXIbI0KeW_o49gCuiHLaJZVdHrPn1WWeBw=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Karriku"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr40IKw60U7oFUwsjPiPc7eejpsWYHfGftAQ&usqp=CAU"
        />
        <VideoCard
          title="Movies About Writers"
          views="1M Views"
          timestamp="17days ago"
          channelimg="https://yt3.ggpht.com/ytc/AAUvwnjPySgh99m1ok1gmeAKyKr5pRxers50-x2LoUO7vQ=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Missed Movies"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAW9CpuJXIBN_IHj3WwChL1D9moSbcP4qRyQ&usqp=CAU"
        />

        <VideoCard
          title="WEB DEV in 10 Minutes"
          views="2M Views"
          timestamp="10days ago"
          channelimg="https://yt3.ggpht.com/ytc/AAUvwnj0RZ4V5xQUonkbHHFEMa50ZIcQ5uCz0PEA-VU5naY=s68-c-k-c0x00ffffff-no-rj"
          channel="Sonny Sangha"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5bvUJEmvSYVuSiKpHrZYHfBDkul2GOVCZQ&usqp=CAU"
        />

        <VideoCard
          title="+2 FREE PERIOD"
          views="10M Views"
          timestamp="5days ago"
          channelimg="https://yt3.ggpht.com/ytc/AAUvwnjipJKbPXIbI0KeW_o49gCuiHLaJZVdHrPn1WWeBw=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Karriku"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr40IKw60U7oFUwsjPiPc7eejpsWYHfGftAQ&usqp=CAU"
        />
        <VideoCard
          title="Movies About Writers"
          views="1M Views"
          timestamp="17days ago"
          channelimg="https://yt3.ggpht.com/ytc/AAUvwnjPySgh99m1ok1gmeAKyKr5pRxers50-x2LoUO7vQ=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Missed Movies"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAW9CpuJXIBN_IHj3WwChL1D9moSbcP4qRyQ&usqp=CAU"
        />
        <VideoCard
          title="Watch my Vlog"
          views="3.2M Views"
          timestamp="7days ago"
          channelimg="https://yt3.ggpht.com/ytc/AAUvwnj_OsxYzRXY1VXj9WzlWQwamQTYdqthTX057RRPWA=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Irfans View"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsXUI9VO-UhVbfGfG8D3JmgQm_bj9Ukz9mw&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default RecomandedVideos;
