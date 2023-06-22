import React from "react";
import { Link } from "react-router-dom";
import style from "./PostCard.module.css";

function PostCard({ post, index, URL }) {
  return (
    <div className={style.card}>
      <div className={style.imageArea}>
        <img
          style={{ width: "300px" }}
          src={`${URL}${post.thumbImage}`}
          alt=""
        />
      </div>
      <div className={style.textArea} key={`index_${index}`} id={index}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <button>
          <Link to={`/post/${index}`}>Leia mais</Link>
        </button>
      </div>
    </div>
  );
}

export default PostCard;
