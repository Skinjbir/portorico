import React, { useState } from 'react';
import './BlogPosts.css';
import avatarImage from '../../../assets/redaPDP.jpeg';

const BlogPosts = ({ showPosts }) => {
  const [posts, setPosts] = useState([
    {
      id: 2,
      author: "Mohammed-Reda",
      avatar: avatarImage,
      date: "April 15, 2025",
      content: "First Post, Hello !",
      image: null,
      likes: 18,
      comments: 7,
      shares: 2,
      isLiked: false,
      isBookmarked: false
    },
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleBookmark = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isBookmarked: !post.isBookmarked
        };
      }
      return post;
    }));
  };

  if (!showPosts) return null;

  return (
    <section className="blog-feed">
      <h1>My Social Feed</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.avatar} alt={post.author} className="avatar" />
              <div className="post-author">
                <strong>{post.author}</strong>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
            
            <div className="post-content">
              <p>{post.content}</p>
              {post.image && (
                <div className="post-image-container">
                  <img src={post.image} alt="Post visual" className="post-image" />
                </div>
              )}
            </div>
            
            <div className="post-stats">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments</span>
              <span>{post.shares} shares</span>
            </div>
            
            <div className="post-actions">
              <button 
                onClick={() => handleLike(post.id)}
                className={post.isLiked ? 'liked' : ''}
              >
                {post.isLiked ? '❤️ Liked' : '🤍 Like'}
              </button>
              <button>💬 Comment</button>
              <button>🔄 Share</button>
              <button 
                onClick={() => handleBookmark(post.id)}
                className={post.isBookmarked ? 'bookmarked' : ''}
              >
                {post.isBookmarked ? '🔖 Bookmarked' : '📌 Bookmark'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;