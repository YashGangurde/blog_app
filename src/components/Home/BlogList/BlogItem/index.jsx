import React from "react";
import "./styles.css";
import Chip from "../../../common/Chip";
import { Link } from "react-router-dom";

const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover
  },
}) => (
    <div className="blogItem">
      <img src={cover} alt="cover" className="cover"/>
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>

      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="author"/>
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>

        <Link className='blogItem-link' to={`/blog/${id}`}>
          Read more
        </Link>
      </footer>
    </div>
  );


export default BlogItem;
