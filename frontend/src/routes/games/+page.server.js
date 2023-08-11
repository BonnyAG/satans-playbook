//routes/games/+page.js
export const load = async ({ fetch }) => {
  const gamesResult = await fetch('http://localhost:1337/api/games');
  const gamesData = await gamesResult.json();

  const gamesPageResult = await fetch('http://localhost:1337/api/games-page');
  const pageData = await gamesPageResult.json();

  return {
    games: gamesData.data,
    page: pageData.data,
  }
}