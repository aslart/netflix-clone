import {
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
  PlayArrow,
  Add,
} from '@mui/icons-material';
import './listitem.scss';
import { useState } from 'react';

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQb7ImGAMftXIGZsU-nkFuYXPTMo_JGn8c7QL-02gucQblDB_s7cq9KfchYXgpLTqs8gKMWBJVRqyygbck_uHBa1CMJOQtl8QMpJPtAfq8ertry6Ds2xnCLJTnu9gVCL7NUDU0nAQumDaDYTiBgiGTkeeRqo.jpg?r=581" />
      {isHovered && (
        <>
          <video
            src={trailer}
            autoPlay={true}
            loop
          />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbDownAltOutlined className="icon" />
              <ThumbUpAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">16+</span>
              <span>1999</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              explicabo accusantium ipsum quaerat, ut voluptates a sed aliquam
              exercit
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
