// components/YouTubeSection.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: {
      medium: { url: string };
    };
  };
}

const YouTubeSection: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelId = 'YOUR_CHANNEL_ID'; // Replace with your YouTube channel ID
        const apiKey = 'YOUR_API_KEY'; // Replace with your YouTube Data API key
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos', error);
      }
    };
    
    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Latest Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-auto rounded" />
              <h3 className="text-lg font-semibold mt-2">{video.snippet.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSection;
