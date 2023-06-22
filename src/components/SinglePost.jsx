import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const URL = `https://api-rest-post-diegocandido.herokuapp.com`;

function SinglePost() {
  const [singlePost, setSinglePost] = useState({});
  const { index } = useParams();
  useEffect(() => {
    fetch(`${URL}/postagem/${index}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setSinglePost(json);
      })
      .catch((error) => {});
  }, [index]);
  return (
    <>
      <h1>Single Post</h1>
      {/*image tag with URL for external image*/}
      <img
        style={{ width: "300px" }}
        src={`${URL}${singlePost.thumbImage}`}
        alt={singlePost.title}
      />
      <h4>{singlePost.title}</h4>
      <p>{singlePost.description}</p>
    </>
  );
}

export default SinglePost;
