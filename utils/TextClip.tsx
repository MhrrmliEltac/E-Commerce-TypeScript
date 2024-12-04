const TextClip = (text: string) => {
  if (text.length < 22) return text;
  return text.substring(0, 22) + "...";
};

export default TextClip;
