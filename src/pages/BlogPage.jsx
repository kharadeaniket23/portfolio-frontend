import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://portfolio-backend-pdgu.onrender.com/api/blogs");
      setBlogs(res.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">My Blogs</h1>

        {loading ? (
          <p className="text-gray-600">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-gray-600">No blogs available right now.</p>
        ) : (
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700">
                  {blog.content.length > 250
                    ? blog.content.slice(0, 250) + "..."
                    : blog.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
