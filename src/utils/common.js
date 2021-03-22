export const getDuration = (duration) => {
  return {
    hour: Math.trunc(duration / 60),
    minutes: duration % 60,
    seconds: (duration * 60) % 60
  };
};
