import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <li className={styles.posts}>
          <Link to="/posts">POSTAGENS</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
