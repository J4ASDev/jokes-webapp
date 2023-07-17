export default function checkViewsAndParseToNumber(input: number): number {
  return isNaN(input) ? 0 : Number(input)
}
