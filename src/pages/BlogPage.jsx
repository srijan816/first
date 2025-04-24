import React from 'react';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Navbar />
      <div className="blog-hero">
        <div className="container">
          <h1>Gen<span className="alpha-glow">α</span>AI Blog</h1>
          <p>Insights, research, and innovations in artificial intelligence</p>
        </div>
      </div>
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
