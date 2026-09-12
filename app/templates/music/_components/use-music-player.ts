"use client";

import { useEffect, useState } from "react";
import { TRACKS, type Track } from "../_data/music";

export const useMusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);
  const [progress, setProgress] = useState(28);
  const [volume, setVolumeState] = useState(72);
  const [previousVolume, setPreviousVolume] = useState(72);
  const currentTrack = TRACKS[currentTrackIndex];
  const isMuted = volume === 0;

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const timer = window.setInterval(
      () => setProgress((value) => (value >= 100 ? 0 : value + 1)),
      1800
    );

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const selectTrack = (track: Track) => {
    const index = TRACKS.findIndex((item) => item.title === track.title);

    if (index === -1) {
      return;
    }

    setCurrentTrackIndex(index);
    setProgress(0);
    setIsPlaying(true);
  };

  const moveTrack = (direction: -1 | 1) => {
    setCurrentTrackIndex(
      (index) => (index + direction + TRACKS.length) % TRACKS.length
    );
    setProgress(0);
    setIsPlaying(true);
  };

  const setVolume = (value: number) => {
    setVolumeState(value);

    if (value > 0) {
      setPreviousVolume(value);
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolumeState(previousVolume);
      return;
    }

    setPreviousVolume(volume);
    setVolumeState(0);
  };

  const toggleFavorite = () => {
    setIsFavorite((favorite) => !favorite);
  };

  const togglePlaying = () => {
    setIsPlaying((playing) => !playing);
  };

  return {
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
  };
};
