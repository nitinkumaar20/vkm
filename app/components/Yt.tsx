"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa"; // For play button icon

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
  const [topVideo, setTopVideo] = useState<Video | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelId = ""; // Example: Google Developers Channel ID
        const apiKey = ""; // Example: Dummy API key (replace with your own valid API key)
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
        );

        const filteredVideos = response.data.items.filter(
          (video: Video) => video.id.videoId // Filter out items that are not actual videos (e.g., channel info)
        );
        setVideos(filteredVideos);
        // Set the first video as the top video initially
        if (filteredVideos.length > 0) {
          setTopVideo(filteredVideos[0]);
        }
      } catch (error) {
        console.error("Error fetching videos", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="max-w-[1200px] 2xl:max-w-[1440px] md:mx-auto" id="sermons">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6 mx-3">Latest Sermons</h2>

        {/* Display the selected top video */}
        {topVideo && (
          <div className="mb-8 mx-3">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${topVideo.id.videoId}`}
              width="100%"
              height="400px"
              controls={true}
              playing={true} // This ensures the video starts playing immediately
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{topVideo.snippet.title}</h3>
          </div>
        )}

        {/* Grid of 2 columns for the rest of the videos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-3 mx-3">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="relative group video-card cursor-pointer"
              onClick={() => setTopVideo(video)} // When clicked, update the top video
            >
              {/* Video thumbnail with hover effect */}
              <div className="relative">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="rounded-lg w-full h-auto"
                />
                {/* Hover effect: show play button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
              {/* Video title (no hover effect here) */}
              <h3 className="text-lg font-semibold mt-2">{video.snippet.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection;
