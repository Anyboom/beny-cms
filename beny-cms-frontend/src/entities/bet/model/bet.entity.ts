export type BetEntity = {
  homeTeam: string;
  guestTeam: string;
  competition: string;
  startedAt: string;
  forecast: string;
  coefficient: string;
  status: "win" | "lose" | "pending" | "return";
};
