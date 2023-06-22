import { useEffect, useState } from "react";
import PostCard from "./PostCard";
const URL = `https://api-rest-post-diegocandido.herokuapp.com`;

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${URL}/postagens`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPosts(json);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <h1>TODAS AS POSTAGENS</h1>
      {posts.map((post, index) => {
        return (
          <div key={`key_${index}`} className="cardContainer">
            <PostCard post={post} index={index} URL={URL} />
          </div>
        );
      })}
    </>
  );
}

export default AllPosts;
