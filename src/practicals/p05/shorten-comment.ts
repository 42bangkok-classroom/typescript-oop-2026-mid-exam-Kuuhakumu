const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string) {
  // Write your code below
  const words = comment.split(' ')
  const filteredWords = words.filter(word => word.length > 5);
  const final = filteredWords.join(" ")
  return final
}