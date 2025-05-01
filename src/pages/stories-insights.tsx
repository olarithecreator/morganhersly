import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

interface Post {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

interface RSSResponse {
  status: string;
  feed: any;
  items: Array<{
    title: string;
    link: string;
    description: string;
    pubDate: string;
  }>;
}

const StoriesInsights = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      // Array of possible Substack feed URLs to try
      const feedUrls = [
        'https://morganhersly.substack.com/feed',
        'https://substack.com/@morganhersly/rss',
        'https://morganhersly.substack.com/rss'
      ];

      let lastError = null;

      for (const feedUrl of feedUrls) {
        try {
          console.log(`Attempting to fetch from: ${feedUrl}`);
          
          // Use RSS2JSON API with proper URL encoding
          const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
          
          console.log('RSS2JSON URL:', rss2jsonUrl);
          
          const response = await axios.get<RSSResponse>(rss2jsonUrl);
          console.log('Response status:', response.data.status);
          console.log('Items found:', response.data.items?.length || 0);
          
          if (response.data.status === 'ok' && response.data.items && response.data.items.length > 0) {
            console.log('Successfully fetched posts');
            setPosts(response.data.items);
            setError(null);
            setLoading(false);
            return; // Exit on successful fetch
          } else {
            console.log('Feed returned no items');
            lastError = new Error('No posts found in the feed');
          }
        } catch (err) {
          console.error(`Error fetching from ${feedUrl}:`, err);
          lastError = err;
          // Continue to next URL
        }
      }

      // If we get here, all URLs failed
      console.error('All feed URLs failed');
      setError('Unable to fetch blog posts. Please check if the Substack URL is correct or try again later.');
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Function to format the date in a clean way
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 bg-white">
        <div className="max-w-[800px] mx-auto flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{error}</p>
            <p className="text-sm text-red-500 mt-2">
              If this issue persists, please verify the Substack URL or contact support.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-white">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl font-light mb-16 text-black tracking-tight">Stories & Insights</h1>
        
        <div className="space-y-12">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="pb-12 border-b border-gray-100 last:border-b-0"
              style={{
                opacity: 0,
                animation: 'fadeInUp 0.6s forwards',
                animationDelay: `${index * 150}ms`
              }}
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h2 className="text-2xl font-light text-black mb-4 group-hover:text-gray-600 transition-colors duration-300">
                  {post.title}
                </h2>
              </a>
              <p className="text-gray-600 mb-4 leading-relaxed text-base font-light">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-400 font-light">
                  {formatDate(post.pubDate)}
                </time>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-gray-600 font-light text-sm transition-colors group"
                >
                  Read More
                  <svg
                    className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
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