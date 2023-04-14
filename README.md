# REST Countries API - Nextjs version

This is 3rd version of the rest countries API with Nextjs, you could see the previous 2 versions:

- [rest-countries-api-ts](https://github.com/victoriacheng15/rest-countries-api-ts#readme)
- [fem-rest-countries-api](https://github.com/victoriacheng15/fem-rest-countries-api#readme)

The previous 2 versions were built using TypeScript and JavaScript respectively, with React, and Tailwind CSS being used in both cases. The state management in the TypeScript version was handled through the use of React Hooks such as `useContext`, `useReducer` and `useMemo`.

The current version, on the other hand, is built using `Nextjs` and `Redux Toolkit Query`. Additionally, the current version included a couple of new features and improvements that were not present in the previous versions.

In terms of functionality, all three versions share the same core features: a search box for users to search for specific countries and a dropdown menu that enables them to filter countries based on regions. Users can also click on a country to view more detailed information about it.

**New features/improvement**

- Users now can search countries based on the text and region
- Implement skeleton layout to minimize layout shifts while fetching the API
- A clear search button to reset the search box, region and cards per page limit (to 9)
- A small window to display country cards, allows users to click the load more button to view more countries if available without or minimize the need to scroll up

The user should be able to:

- [x] Display a list of all countries fetched from the API on the homepage, along with a `Load More` button to load more countries if available
- [x] Provide a dropdown menu to filter countries by region, and a search box to search countries by text
- [x] Include a `Clear Search` button to clear the search results and display all countries again
- [x] Allow users to click on a country card to view more detailed information about the country on a separate page
- [x] Enable users to navigate to the bordering countries of a selected country on the detail page
- [x] Provide a toggle switch to switch between light and dark color schemes for the user interface

[View the site live here](https://rest-countries-api-next-redux.vercel.app/)

## Tech stack:

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white) ![Nextjs](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Redux](https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white) ![Testing Library](https://img.shields.io/badge/Testing%20Library-E33332.svg?style=for-the-badge&logo=Testing-Library&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white)

## Screenshots/GIFs

<details close>
<summary>Overall and theme toggle demo</summary>

https://user-images.githubusercontent.com/35031228/231864856-f6c2476b-4691-4f74-ad55-6d58efe44afe.mp4

</details>

<hr />

<details close>
<summary>Search countries by search box and/or region</summary>

https://user-images.githubusercontent.com/35031228/231864854-55977c0b-c2e9-42f7-a55b-c02e623096e2.mp4

</details>

<hr />

<details close>
<summary>Load More and Clear Search button</summary>

https://user-images.githubusercontent.com/35031228/231864848-0a229fba-21d6-4b42-9611-44dd0d703e8e.mp4

</details>

<hr />

## Installation

```bash
git clone git@github.com:victoriacheng15/rest-countries-api-next.git
```

```bash
cd rest-countries-api-next
```

```bash
npm install
# or your preference of package manager
```

```bash
npm run dev
```

## What I learned

**Nextjs - app directory**

The app directory in Nextjs is a directory that contains all the files that are necessary to configure and run your app. I think one of the advantages of using the app directory is that it allows you to organize your routes and nested routes more intuitively.

**Redux Toolkit Query**

RTK Query is a tool that is similar to RTK, but with the added benefit of completely managing the data fetching process, eliminating the need to write `useEffect` hooks. One feature that I find particularly useful is that RTKQ allows you to provide a base URL and define multiple endpoints to fetch specific information required by the application.

In my project, I gave the base URL to RTKQ and added two different endpoints. The first endpoint was used to fetch all countries, while the second endpoint was used to fetch a single country based on its code. This simplified the code and eliminated the need to write async/await functions within the `useEffect` block.

### Continued development

The app directory in Next.js is currently in an experimental phase, meaning that it is not yet considered a stable feature. As a result, there may still be changes made to this feature before it becomes stable. Therefore, I am keeping an eye out for any potential changes that could affect my application's functionality. Once the feature is stable, it should be safe to use without any major concerns about breakages.

## Author

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/victoriacheng15/) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/viktoriacheng15)
