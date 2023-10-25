import React from "react";
import BlogItem from "./BlogItem";
import "./styles.css";

const BlogList = ({ blogs }) =>(
    <div className="home-bloglist">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key = {blog.id} />
      ))}
    </div>
  );

export default BlogList;
