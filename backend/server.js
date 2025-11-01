const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Enable CORS để frontend có thể gọi API
app.use(cors());
app.use(express.json());

// Hardcoded blog data
const blogs = [
  {
    id: 1,
    slug: 'getting-started-with-nodejs',
    title: 'Getting Started with Node.js',
    author: 'John Doe',
    date: '2024-10-15',
    excerpt: 'Learn the basics of Node.js and how to build your first server-side application.',
    content: 'Node.js is a powerful JavaScript runtime built on Chrome\'s V8 engine. It allows developers to use JavaScript for server-side programming. In this comprehensive guide, we\'ll explore the fundamentals of Node.js, including its event-driven architecture, non-blocking I/O model, and how to create your first application. We\'ll cover setting up your development environment, understanding modules, and building a simple HTTP server.',
    tags: ['nodejs', 'javascript', 'backend'],
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800'
  },
  {
    id: 2,
    slug: 'express-routing-guide',
    title: 'Express.js Routing Guide',
    author: 'Jane Smith',
    date: '2024-10-20',
    excerpt: 'Master routing in Express.js with this comprehensive guide.',
    content: 'Express.js is a minimal and flexible Node.js web application framework. Routing is one of its core features, allowing you to define how your application responds to client requests. In this guide, we\'ll dive deep into route methods, route paths, route parameters, and route handlers. You\'ll learn how to create RESTful APIs, handle different HTTP methods, and implement middleware for route-specific logic.',
    tags: ['express', 'routing', 'api'],
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800'
  },
  {
    id: 3,
    slug: 'understanding-async-await',
    title: 'Understanding Async/Await in JavaScript',
    author: 'Mike Johnson',
    date: '2024-10-25',
    excerpt: 'A deep dive into asynchronous programming with async/await.',
    content: 'Asynchronous programming is essential in JavaScript, especially when dealing with operations like API calls, file reading, or database queries. The async/await syntax, introduced in ES2017, provides a cleaner way to work with Promises. This article will explain how async/await works under the hood, common patterns and best practices, error handling strategies, and how to avoid common pitfalls like race conditions and unhandled promise rejections.',
    tags: ['javascript', 'async', 'promises'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800'
  },
  {
    id: 4,
    slug: 'rest-api-best-practices',
    title: 'REST API Best Practices',
    author: 'Sarah Williams',
    date: '2024-10-28',
    excerpt: 'Learn how to design and implement robust REST APIs.',
    content: 'Building a well-designed REST API is crucial for creating maintainable and scalable applications. This guide covers essential best practices including proper use of HTTP methods (GET, POST, PUT, DELETE), status codes, URL structure, versioning strategies, authentication and authorization, rate limiting, and documentation. We\'ll also discuss common mistakes to avoid and how to make your API developer-friendly.',
    tags: ['rest', 'api', 'webdev'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800'
  },
  {
    id: 5,
    slug: 'mongodb-nodejs-integration',
    title: 'MongoDB and Node.js Integration',
    author: 'David Chen',
    date: '2024-11-01',
    excerpt: 'Connect your Node.js application to MongoDB database.',
    content: 'MongoDB is a popular NoSQL database that pairs perfectly with Node.js applications. In this tutorial, you\'ll learn how to set up MongoDB, connect it to your Node.js app using Mongoose or the native MongoDB driver, perform CRUD operations, design schemas, handle relationships between documents, and implement data validation. We\'ll also cover indexing strategies for optimal performance and best practices for production deployments.',
    tags: ['mongodb', 'database', 'nodejs'],
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800'
  }
];

// API 1: Get all blogs (list)
app.get('/api/blogs', (req, res) => {
  // Trả về danh sách blog (không bao gồm content đầy đủ)
  const blogList = blogs.map(blog => ({
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    author: blog.author,
    date: blog.date,
    excerpt: blog.excerpt,
    tags: blog.tags,
    imageUrl: blog.imageUrl
  }));
  
  res.json({
    success: true,
    data: blogList,
    count: blogList.length
  });
});

// API 2: Get blog details by ID or slug
app.get('/api/blogs/:identifier', (req, res) => {
  const { identifier } = req.params;
  
  // Tìm blog theo ID hoặc slug
  const blog = blogs.find(b => 
    b.id === parseInt(identifier) || b.slug === identifier
  );
  
  if (!blog) {
    return res.status(404).json({
      success: false,
      message: 'Blog not found'
    });
  }
  
  res.json({
    success: true,
    data: blog
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Blog API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Blog Backend API running on http://localhost:${PORT}`);
  console.log(`📝 Endpoints:`);
  console.log(`   GET /api/blogs - Get all blogs`);
  console.log(`   GET /api/blogs/:id - Get blog by ID or slug`);
  console.log(`   GET /api/health - Health check`);
});
