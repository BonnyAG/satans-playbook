//routes/cards/id/+page.js
export const load = async ({ fetch, params }) => {
  /* GET Card with id
    `populate=*` -> includes all related fields to the Cards component (like references)
  */
  const result = await fetch(`http://localhost:1337/api/cards/${params.id}?populate=*`);
    const data = await result.json();
    return {
        card: data.data
    }
}
