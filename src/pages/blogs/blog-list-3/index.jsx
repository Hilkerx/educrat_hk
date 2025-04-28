import React from 'react';

const Blog3 = () => {
  const blogPosts = [
    { id: 1, title: 'Como aprender React de forma eficaz', excerpt: 'Dicas para estudar React e se tornar um expert em pouco tempo...' },
    { id: 2, title: '10 erros comuns de iniciantes em JavaScript', excerpt: 'Evite os erros mais comuns ao programar em JavaScript...' },
    // Adicione mais posts conforme necessário
  ];

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-item">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={`/blog-single/${post.id}`}>Leia mais</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog3;
