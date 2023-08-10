//routes/about/+page.js
export const load = async ({ fetch }) => {
  const result = await fetch('http://localhost:1337/api/about?populate[0]=team&populate[1]=team.profile_image');
  const data = await result.json();

  return {
    page: data.data.attributes,
  }
}