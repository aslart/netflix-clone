import './featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured(type) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select
            name="genre"
            id="genre"
          >
            <option>Genre</option>
            <option>Genre</option>
            <option>Genre</option>
            <option>Genre</option>
            <option>Genre</option>
            <option>Genre</option>
            <option>Genre</option>
          </select>
        </div>
      )}
      <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQb7ImGAMftXIGZsU-nkFuYXPTMo_JGn8c7QL-02gucQblDB_s7cq9KfchYXgpLTqs8gKMWBJVRqyygbck_uHBa1CMJOQtl8QMpJPtAfq8ertry6Ds2xnCLJTnu9gVCL7NUDU0nAQumDaDYTiBgiGTkeeRqo.jpg?r=581" />
      <div className="info">
        <img src="https://occ-0-32-999.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYCFgxNCH8PreUBhQg0mN4jYJdffhEikM8uYqpnnZmDZSaryoXmVdIEVo9myWlrHM2j8LnSK_1k1hu7yELn2nQm6-XlEl4q5QRvENudyRujZgtWsuqSAFA2j4YuPO2XsfcH0XMvtL31Mv_FuJD-jJkituxYL5TWzUNbqO5Z3G6RaBCHn4jsBng.png?r=820" />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quibusdam quos aut cupiditate asperiores temporibus nemo in harum
          voluptatem consequatur optio ipsa, minima veritatis sit nam debitis
          libero molestiae nulla!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon /> <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
