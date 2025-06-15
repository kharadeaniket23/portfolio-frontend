import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-pdgu.onrender.com/api/blogs")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-8 text-gray-600">Loading blogs...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Latest Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-gray-500">No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded shadow p-4 mb-4">
            <h3 className="text-2xl font-semibold text-blue-600 mb-1">
              {blog.title}
            </h3>
            <p className="text-gray-700">{blog.content}</p>
            <p className="text-sm text-gray-400 mt-2">
              Posted on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
