"use client";

import { MusicNowPlaying } from "./music-now-playing";
import { MusicPlayerExtras } from "./music-player-extras";
import { MusicTransport } from "./music-transport";
import { useMusicPlayer } from "./use-music-player";

export const MusicControls = () => {
  const {
    currentTrack,
    isFavorite,
    isMuted,
    isPlaying,
    moveTrack,
    progress,
    selectTrack,
    setProgress,
    setVolume,
    toggleFavorite,
    toggleMute,
    togglePlaying,
    volume,
  } = useMusicPlayer();

  return (
    <footer className="shrink-0 border-t bg-background/96 px-4 py-3 backdrop-blur-sm">
      <div className="grid items-center gap-3 lg:grid-cols-[minmax(12rem,1fr)_minmax(20rem,1.5fr)_minmax(12rem,1fr)]">
        <MusicNowPlaying
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          track={currentTrack}
        />
        <MusicTransport
          isPlaying={isPlaying}
          onMoveTrack={moveTrack}
          onProgressChange={setProgress}
          onTogglePlaying={togglePlaying}
          progress={progress}
          track={currentTrack}
        />
        <MusicPlayerExtras
          isMuted={isMuted}
          onToggleMute={toggleMute}
          onTrackSelect={selectTrack}
          onVolumeChange={setVolume}
          track={currentTrack}
          volume={volume}
        />
      </div>
    </footer>
  );
};
