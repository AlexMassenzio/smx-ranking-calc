/**
 * Calculates the amount of ranking a player will recieve for submitting a score.
 *
 * @param score The final score earned for the song played.
 * @param difficulty The numeric difficulty the song was played on.
 * @returns The amount of ranking earned for the given score and difficulty.
 *
 * @example Find the ranking for 90,000 points earned on a level 20 chart.
 * ```ts
 * const score = 90000;
 * const difficulty = 20;
 * const rankingPoints = getRanking(score, difficulty); // 36000
 * ```
 */
export function getRanking(score: number, difficulty: number): number {
  return Math.floor((score * Math.pow(difficulty, 2)) / 1000);
}
