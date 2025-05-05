import React from 'react';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: 'DAY 1: CITY TOUR',
      title: ' Fort Santiago, Luneta Park & MOA',
      image: 'placeholder1.jpg',
      link: '/post/1',
    },
    {
      id: 2,
      category: 'Day 2: SUBIC',
      title: '• SBMA Seaport Dept (traffic management system), Law enforcement dept',
      image: 'placeholder2.jpg',
      link: '/post/2',
    },
    {
      id: 3,
      category: 'Day 3:  QUEZON',
      title: 'Museo ni Manuel Q., National Museum',
      image: 'placeholder3.jpg',
      link: '/post/3',
    },
    {
      id: 4,
      category: 'Day 4: QUEZON',
      title: 'Bangko Sentral ng Pilipinas, Hytec Power Inc',
      image: 'placeholder4.jpg',
      link: '/post/4',
    },
    {
      id: 5,
      category: 'Day 5: QUEZON',
      title: 'LRT - Line 2, Traffic Engineeribg Center (MMDA)',
      image: 'placeholder5.jpg',
      link: '/post/5',
    },
    {
      id: 6,
      category: 'Day 6: BAGUIO',
      title: 'Bell Church, PMA, Mines View',
      image: 'placeholder6.jpg',
      link: '/post/6',
    },
    
  ];

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>TOUR BLOG</h1>
        {/* You might have navigation here */}
      </header>
      <div className="blog-post-grid">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post-card">
            
            <div className="card-content">
              <span className="post-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href={post.link} className="read-more-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;