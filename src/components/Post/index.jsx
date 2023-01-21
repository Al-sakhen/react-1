import { StyledPost } from "./Post.styles";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineComment,
  AiOutlineGlobal,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsFillEmojiAngryFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
const Post = ({ data }) => {
  const { userName, userImage, image, postStatus, body } = data;
  return (
    <StyledPost>
      <div className="postHeader">
        <img src={userImage} alt="" />
        <div>
          <h5>{userName}</h5>
          <p>
            today at 19:33 <AiOutlineGlobal />{" "}
          </p>
        </div>
      </div>
      <div className="postBody">
        <p>
          {body} <br />
          Found it at{" "}
          <a href="https://www.facebook.com" target="_blank">
            www.facebook.com
          </a>
        </p>
        <a href="#">See Trnaslation</a>
        <img src={image} alt="" />
      </div>
      <div className="postButtons">
        <div className="interaction">
          {postStatus == "liked" ? <AiFillLike /> : ""}
          {postStatus == "angry" ? <BsFillEmojiAngryFill /> : ""}
          {postStatus == "loved" ? <FcLike /> : ""}
          {postStatus == "disliked" ? <AiFillDislike /> : ""}
        </div>
        <div className="comment">
          <AiOutlineComment />
        </div>
        <div className="share">
          <AiOutlineShareAlt />
        </div>
      </div>
    </StyledPost>
  );
};

export default Post;
