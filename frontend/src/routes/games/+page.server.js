//routes/games/+page.js
export const load = async ({ fetch }) => {
  const result = await fetch('http://localhost:1337/api/games');
  const data = await result.json();

  return {
    games: data.data,
  }
}