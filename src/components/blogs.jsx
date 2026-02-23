import React from 'react';
import '../styles/blogs.css';

const posts = [
  {
    title: 'TreeHacks Experience',
    description: 'some reflections on building, learning, and meeting people at TreeHacks.',
    link: 'https://medium.com/@arijichakma33/treehacks-experience-ee687156f70a',
    date: '2026',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*C3eZTEFarp86yow_WRnvGQ.jpeg',
  },
];

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs-header">
        <h1>
          writing <span aria-hidden>✏️</span>
        </h1>
        <p className="blogs-subtitle">a few posts from medium</p>
      </div>
      <div className="blogs-grid">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card-link"
          >
            <article className="blog-card">
              <div className="blog-image" aria-hidden>
                <img src={post.image} alt="" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">{post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="blog-link">
                  <span aria-hidden>↗️</span>
                  <span>read on medium</span>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

