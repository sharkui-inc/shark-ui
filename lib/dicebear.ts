const wavesTones = {
  amber: { backgroundColor: "faf6e0", waveColor: "ca8a04" },
  blue: { backgroundColor: "e8f1fb", waveColor: "2b6cb0" },
  "green-dark": { backgroundColor: "eef4e6", waveColor: "1a6b5c" },
  orange: { backgroundColor: "faf0e4", waveColor: "ea580c" },
  purple: { backgroundColor: "f3e8fb", waveColor: "7c3aed" },
  rose: { backgroundColor: "f8e8ee", waveColor: "e11d48" },
} as const;

type WavesTone = keyof typeof wavesTones;

export const createWavesAvatar = (seed: string, tone: WavesTone) => {
  const { backgroundColor, waveColor } = wavesTones[tone];

  const params = new URLSearchParams({
    backgroundColor,
    scale: "1.2",
    seed,
    waveColor,
  });

  return `https://api.dicebear.com/10.x/waves/svg?${params}`;
};
