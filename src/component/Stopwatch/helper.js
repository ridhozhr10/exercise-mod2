export const formatStopwatch = (second) => {
  let m = Math.floor(second / 60);
  let s = second % 60;
  m = m > 9 ? `${m}` : `0${m}`;
  s = s > 9 ? `${s}` : `0${s}`;
  return `${m}:${s}`;
};
