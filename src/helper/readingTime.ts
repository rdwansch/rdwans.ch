export default function readingTime(text: string): number {
  const wordsPerMinute = 200; // Average case.

  const textLength = text.split(' ').length; // Split by words

  return Math.ceil(textLength / wordsPerMinute);
}
