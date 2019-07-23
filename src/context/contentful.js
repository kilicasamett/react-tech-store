import * as contentful from "contentful";

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  //space: process.env.REACT_APP_SPACE_ID,
  space:'6h63ayf3bbx3',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken:"PTUdLWQR7V_FojViRduG4FPKLYU0W22FQ1cVOz33UEM"
  //accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
