// Blog data
const blogPosts = [
  {
    id: 1,
    title: "Mastering TypeScript: A Comprehensive Guide",
    date: "January 30, 2024",
    summary: "TypeScript adds strong typing to JavaScript, enhancing code quality and maintainability. Learn the key features and best practices.",
    link: "blog-post1.html",
    category: "TypeScript"
  },
  {
    id: 2,
    title: "Understanding REST APIs: Best Practices",
    date: "February 25, 2024",
    summary: "REST APIs are crucial for building scalable web services. Discover how they work and best practices for designing them.",
    link: "blog-post2.html",
    category: "Backend"
  },
  {
    id: 3,
    title: "Angular Performance Optimization Tips",
    date: "March 15, 2024",
    summary: "Optimize your Angular applications for maximum performance. Learn techniques to reduce bundle size and improve load times.",
    link: "blog-post3.html",
    category: "Frontend"
  },
  {
    id: 4,
    title: ".NET Core Dependency Injection Deep Dive",
    date: "April 10, 2024",
    summary: "Master dependency injection in .NET Core. Understand how to use DI containers effectively in your applications.",
    link: "blog-post4.html",
    category: ".NET"
  },
  {
    id: 5,
    title: "Azure Cloud Architecture Patterns",
    date: "May 5, 2024",
    summary: "Explore common Azure architecture patterns for building scalable and resilient cloud applications.",
    link: "blog-post5.html",
    category: "Azure"
  },
  {
    id: 6,
    title: "Unit Testing with xUnit in C#",
    date: "May 30, 2024",
    summary: "Learn how to write effective unit tests using xUnit framework in C#. Improve code quality and confidence.",
    link: "blog-post6.html",
    category: "Testing"
  },
  {
    id: 7,
    title: "CI/CD Pipeline with GitHub Actions",
    date: "June 20, 2024",
    summary: "Set up automated testing, building, and deployment pipelines using GitHub Actions.",
    link: "blog-post7.html",
    category: "DevOps"
  },
  {
    id: 8,
    title: "Entity Framework Core: Advanced Techniques",
    date: "July 15, 2024",
    summary: "Master advanced EF Core techniques for optimal database performance and maintainability.",
    link: "blog-post8.html",
    category: ".NET"
  },
  {
    id: 9,
    title: "Microservices Architecture: Design Patterns",
    date: "August 10, 2024",
    summary: "Understand microservices architecture patterns and how to design scalable distributed systems.",
    link: "blog-post9.html",
    category: "Architecture"
  },
  {
    id: 10,
    title: "React vs Angular: A Detailed Comparison",
    date: "September 5, 2024",
    summary: "Compare React and Angular frameworks. Understand pros and cons of each for different use cases.",
    link: "blog-post10.html",
    category: "Frontend"
  },
  {
    id: 11,
    title: "Docker Containerization Best Practices",
    date: "October 1, 2024",
    summary: "Learn Docker best practices for containerizing applications and managing deployments.",
    link: "blog-post11.html",
    category: "DevOps"
  },
  {
    id: 12,
    title: "Azure Blob Storage: Complete Guide",
    date: "October 25, 2024",
    summary: "Master Azure Blob Storage for managing large amounts of unstructured data efficiently.",
    link: "blog-post12.html",
    category: "Azure"
  },
  {
    id: 13,
    title: "SOLID Principles in C# Development",
    date: "November 15, 2024",
    summary: "Apply SOLID principles to write cleaner, more maintainable C# code.",
    link: "blog-post13.html",
    category: "Best Practices"
  },
  {
    id: 14,
    title: "Async/Await in C#: Complete Tutorial",
    date: "December 10, 2024",
    summary: "Master asynchronous programming in C# with async/await patterns and best practices.",
    link: "blog-post14.html",
    category: ".NET"
  },
  {
    id: 15,
    title: "Integrating AI with .NET Core Applications",
    date: "January 15, 2025",
    summary: "Explore how to integrate AI and machine learning capabilities into .NET Core applications using popular libraries and frameworks.",
    link: "blog-post15.html",
    category: "AI"
  },
  {
    id: 16,
    title: "ML.NET: Building Machine Learning Models in .NET",
    date: "January 18, 2025",
    summary: "Learn how to build, train, and deploy machine learning models using the ML.NET framework within your .NET applications.",
    link: "blog-post16.html",
    category: "Machine Learning"
  },
  {
    id: 17,
    title: "Natural Language Processing with .NET",
    date: "January 20, 2025",
    summary: "Master NLP techniques in .NET including sentiment analysis, named entity recognition, and text classification.",
    link: "blog-post17.html",
    category: "AI"
  },
  {
    id: 18,
    title: "Deep Learning with TensorFlow.NET",
    date: "January 22, 2025",
    summary: "Build deep learning models using TensorFlow.NET, including neural networks, CNNs, and RNNs.",
    link: "blog-post18.html",
    category: "Deep Learning"
  },
  {
    id: 19,
    title: "Computer Vision with .NET and OpenCV",
    date: "January 25, 2025",
    summary: "Implement computer vision solutions in .NET including image processing, object detection, and facial recognition.",
    link: "blog-post19.html",
    category: "AI"
  },
  {
    id: 20,
    title: "Azure Cognitive Services with .NET",
    date: "January 28, 2025",
    summary: "Leverage Azure Cognitive Services in your .NET applications for vision, speech, language, and decision-making tasks.",
    link: "blog-post20.html",
    category: "Azure"
  },
  {
    id: 21,
    title: "Building Intelligent Chatbots with .NET and AI",
    date: "February 1, 2025",
    summary: "Create intelligent chatbots using .NET and AI frameworks including Bot Framework SDK and LUIS for natural language understanding.",
    link: "blog-post21.html",
    category: "AI"
  },
  {
    id: 22,
    title: "Time Series Forecasting with ML.NET",
    date: "February 3, 2025",
    summary: "Master time series forecasting techniques using ML.NET for predicting trends and patterns in sequential data.",
    link: "blog-post22.html",
    category: "Machine Learning"
  },
  {
    id: 23,
    title: "Anomaly Detection in .NET Applications",
    date: "February 5, 2025",
    summary: "Implement anomaly detection algorithms in .NET for identifying unusual patterns and outliers in data.",
    link: "blog-post23.html",
    category: "Machine Learning"
  },
  {
    id: 24,
    title: "AI Model Deployment and Serving with .NET",
    date: "February 8, 2025",
    summary: "Learn deployment strategies and best practices for serving AI models in production using .NET and Azure.",
    link: "blog-post24.html",
    category: "AI"
  }
];

// Render blog posts
document.addEventListener('DOMContentLoaded', function() {
  const blogGrid = document.getElementById('blogGrid');
  
  if (blogGrid) {
    blogPosts.forEach(post => {
      const blogCard = document.createElement('article');
      blogCard.className = 'blog-card';
      blogCard.innerHTML = `
        <div class="blog-card-header">
          <h3>${post.title}</h3>
        </div>
        <div class="blog-card-content">
          <div class="blog-date">${post.date}</div>
          <p class="blog-summary">${post.summary}</p>
          <a href="${post.link}" class="blog-link">Read Article</a>
        </div>
      `;
      blogGrid.appendChild(blogCard);
    });
  }

  // Update year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
