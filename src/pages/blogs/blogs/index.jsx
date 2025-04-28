import React from 'react';

const BlogSingle = ({ match }) => {
  const postId = match.params.id; // Obter o ID do post via URL (pode ser passado via Route)
  
  // Exemplo de post
  const post = {
    title: 'Como aprender React de forma eficaz',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed enim ante. Curabitur euismod nulla nec libero fringilla scelerisque.',
    author: 'Jane Doe',
    date: '14 de abril de 2025',
  };

  return (
    <div className="blog-single-container">
      <h1>{post.title}</h1>
      <p><em>Publicado por {post.author} em {post.date}</em></p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogSingle;
