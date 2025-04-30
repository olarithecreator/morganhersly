import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Parser } from 'rss-parser';
import { Loader2 } from 'lucide-react';

interface Post {
  title: string;
  link: string;
  content: string;
  pubDate: string;
}

const StoriesInsights = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Using a CORS proxy to fetch the RSS feed
        const response = await axios.get('https://api.allorigins.win/raw?url=https://morganhersly.substack.com/feed');
        const parser = new Parser();
        const feed = await parser.parseString(response.data);
        
        const formattedPosts = feed.items.map(item => ({
          title: item.title || '',
          link: item.link || '',
          content: item.content || '',
          pubDate: item.pubDate || '',
        }));

        setPosts(formattedPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Function to extract a preview from the content
  const getPreview = (content: string) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    const text = div.textContent || '';
    return text.slice(0, 200) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="max-w-[900px] mx-auto flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="max-w-[900px] mx-auto">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-3xl font-semibold mb-12 text-black">Stories & Insights</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 group"
              style={{
                opacity: 0,
                animation: 'fadeInUp 0.6s forwards',
                animationDelay: `${index * 150}ms`
              }}
            >
              <h2 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {getPreview(post.content)}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group-hover:translate-x-1 duration-300"
                >
                  Read Full Story
                  <svg
                    className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <time className="text-sm text-gray-400">
                  {new Date(post.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default StoriesInsights; 