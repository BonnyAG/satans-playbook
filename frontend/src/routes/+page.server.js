//routes/quotes/+page.js
export const load = async ({ fetch }) => {
  const result = await fetch('http://localhost:1337/api/cards?pagination[limit]=100&populate=*&sort[0]=title');
    const data = await result.json();
    return {
        cards: data.data
    }
}
