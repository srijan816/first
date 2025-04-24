import React, { useState } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Neural Networks in Enterprise Applications',
      excerpt: 'How advanced neural networks are transforming business operations and decision-making processes.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'technology',
      featured: true,
      author: 'Dr. Sarah Chen',
      date: 'April 18, 2024',
      slug: 'future-neural-networks-enterprise'
    },
    {
      id: 2,
      title: 'Quantum Computing: The Next Frontier in AI Development',
      excerpt: 'Exploring how quantum computing is set to revolutionize artificial intelligence capabilities.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'research',
      featured: false,
      author: 'Prof. Michael Tanner',
      date: 'April 12, 2024',
      slug: 'quantum-computing-ai-development'
    },
    {
      id: 3,
      title: 'How AI is Transforming Healthcare Diagnostics',
      excerpt: 'A deep dive into the revolutionary impact of AI on medical diagnostics and patient care.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'applications',
      featured: false,
      author: 'Dr. Emily Rodriguez',
      date: 'April 5, 2024',
      slug: 'ai-transforming-healthcare-diagnostics'
    },
    {
      id: 4,
      title: 'Meet 4 AI Researchers Who Are Reshaping the Field',
      excerpt: 'Profiles of four pioneering researchers whose work is defining the future of artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'company',
      featured: false,
      author: 'Alex Thompson',
      date: 'March 28, 2024',
      slug: 'ai-researchers-reshaping-field'
    },
    {
      id: 5,
      title: '5 Smart Strategies for Implementing AI in Your Business',
      excerpt: 'Practical approaches to successfully integrate AI solutions into your business operations.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'applications',
      featured: false,
      author: 'Jennifer Wu',
      date: 'March 21, 2024',
      slug: 'strategies-implementing-ai-business'
    },
    {
      id: 6,
      title: 'GenαAI Spotlight: Learning From Your Data',
      excerpt: 'How our adaptive learning algorithms help you extract maximum value from your existing data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'product',
      featured: false,
      author: 'David Park',
      date: 'March 15, 2024',
      slug: 'genai-spotlight-learning-from-data'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'research', name: 'Research' },
    { id: 'applications', name: 'Applications' },
    { id: 'company', name: 'Company' },
    { id: 'product', name: 'Product' }
  ];

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || activeCategory !== 'all');

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Blog</h2>

        <div className="blog-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {activeCategory === 'all' && featuredPost && (
          <div className="featured-post">
            <div className="featured-post-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
            </div>
            <div className="featured-post-content">
              <span className="post-category">{categories.find(c => c.id === featuredPost.category)?.name}</span>
              <h3 className="post-title">{featuredPost.title}</h3>
              <p className="post-excerpt">{featuredPost.excerpt}</p>
              <div className="post-meta">
                <span className="post-author">{featuredPost.author}</span>
                <span className="post-date">{featuredPost.date}</span>
              </div>
              <Link to={`/blog/${featuredPost.slug}`} className="read-more">Read Article</Link>
            </div>
          </div>
        )}

        <div className="blog-grid">
          {regularPosts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-content">
                <span className="post-category">{categories.find(c => c.id === post.category)?.name}</span>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span className="post-author">{post.author}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="read-more">Read Article</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-newsletter">
          <div className="newsletter-content">
            <h3>Stay Updated with AI Insights</h3>
            <p>Subscribe to our newsletter to receive the latest articles, research findings, and company updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
