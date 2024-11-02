import React, { useState } from "react";
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      content: "This is my first post!",
      image: "https://via.placeholder.com/600x400",
      tags: ["fun", "firstpost"],
      category: "Watercolor",
      comments: [
        { id: 1, user: "Jane Smith", content: "Great post!" },
        { id: 2, user: "Alice Johnson", content: "Thanks for sharing!" },
        { id: 3, user: "Bob Brown", content: "Nice!" },
        { id: 4, user: "Charlie Davis", content: "Awesome!" },
        { id: 5, user: "Emily Clark", content: "Love it!" },
      ],
    },
    {
      id: 2,
      user: "Alice Johnson",
      content: "Hello everyone!",
      image: "https://via.placeholder.com/600x400",
      tags: ["hello", "everyone"],
      category: "Sculpture",
      comments: [],
    },
  ]);

  const [newPost, setNewPost] = useState({
    content: "",
    image: "",
    tags: "",
    category: "",
  });
  const [newComment, setNewComment] = useState("");
  const [activePostId, setActivePostId] = useState(null);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [isPostFormVisible, setIsPostFormVisible] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");

  const currentUser = "Current User";
  const HARDCODED_USER_ID = "672568bd438271a8542e28c9";

  const categories = [
    "Sculpture",
    "Watercolor",
    "Digital Art",
    "Photography",
    "Mixed Media",
    "Other",
  ];

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (
      newPost.content.trim() === "" ||
      newPost.image.trim() === "" ||
      newPost.category.trim() === ""
    )
      return;

    try {
      const postData = {
        user: HARDCODED_USER_ID,
        text: newPost.content,
        image: {
          url: newPost.image,
          name: "image" // You might want to extract the filename from the URL or let users input it
        },
        tags: newPost.tags.split(",").map((tag) => tag.trim()),
        category: newPost.category
      };

      const response = await axios.post('http://localhost:5050/db/posts/', postData);

      if (response.data) {
        // Add new post to local state
        const newPostData = {
          id: posts.length + 1,
          user: currentUser,
          content: newPost.content,
          image: newPost.image,
          tags: newPost.tags.split(",").map((tag) => tag.trim()),
          category: newPost.category,
          comments: [],
        };
        
        setPosts([newPostData, ...posts]);
        setNewPost({ content: "", image: "", tags: "", category: "" });
        setIsPostFormVisible(false);
      }
    } catch (error) {
      console.error('Error creating post:', error);
      // You might want to add error handling UI here
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (postId) => {
    if (newComment.trim() === "") return;

    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: post.comments.length + 1,
              user: currentUser,
              content: newComment,
            },
          ],
        };
      }
      return post;
    });

    setPosts(updatedPosts);
    setNewComment("");
    setActivePostId(null);
  };

  const toggleExpandComments = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredPosts = posts.filter(
    (post) => categoryFilter === "" || post.category === categoryFilter
  );

  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Your Feed</h1>
          <button
            onClick={() => setIsPostFormVisible(!isPostFormVisible)}
            className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            <span className="mr-2 text-lg font-medium">Create Post</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </button>
        </div>
        {isPostFormVisible && (
          <form
            onSubmit={handlePostSubmit}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Create a New Post
            </h2>
            <textarea
              name="content"
              value={newPost.content}
              onChange={handlePostChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What's on your mind?"
              rows="3"
            />
            <input
              type="url"
              name="image"
              value={newPost.image}
              onChange={handlePostChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
            />
            {newPost.image && (
              <img
                src={newPost.image}
                alt="Preview"
                className="w-20 h-20 object-cover rounded"
              />
            )}
            <input
              type="text"
              name="tags"
              value={newPost.tags}
              onChange={handlePostChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tags (comma separated)"
            />
            <select
              name="category"
              value={newPost.category}
              onChange={handlePostChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Post
              </button>
            </div>
          </form>
        )}
        <div className="mb-4">
          <select
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Filter by Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* Rest of the JSX remains the same */}
        {filteredPosts.map((post) => (
          // ... existing post rendering code
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <div className="p-4 flex items-center">
              <img
                src={`https://i.pravatar.cc/150?img=${post.id}`}
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {post.user}
                </h2>
                <p className="text-sm text-gray-500">Posted 2 hours ago</p>
              </div>
            </div>
            <img src={post.image} alt="Post" className="w-full h-auto" />
            <div className="p-4">
              <p className="text-gray-800 mb-1">{post.content}</p>
              <p className="text-sm text-gray-500 mb-1">{post.category}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                {post.comments
                  .slice(
                    0,
                    expandedPostId === post.id ? post.comments.length : 1
                  )
                  .map((comment) => (
                    <div key={comment.id} className="bg-gray-100 p-2 rounded">
                      <p className="text-sm font-semibold text-gray-700">
                        {comment.user}
                      </p>
                      <p className="text-sm text-gray-600">{comment.content}</p>
                    </div>
                  ))}
                {post.comments.length > 3 && (
                  <button
                    onClick={() => toggleExpandComments(post.id)}
                    className="text-blue-500 hover:underline"
                  >
                    {expandedPostId === post.id
                      ? "Show less"
                      : `Show more (${post.comments.length - 3} more)`}
                  </button>
                )}
              </div>
              {activePostId === post.id && (
                <div className="mt-4">
                  <input
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a comment"
                  />
                  <button
                    onClick={() => handleCommentSubmit(post.id)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              )}
              <button
                onClick={() => setActivePostId(post.id)}
                className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                {activePostId === post.id ? "Cancel" : "Comment"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;