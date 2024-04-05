## Tracking NextJS course

- Coding along with this [playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI) on youtube to understand Nextjs better.
- Using this to keep track of my progress on this course. 


### Chapter 3
#### Files explained
- Package.json to keep track of dependencies and scripts 
- Config files (x.config) to configure X e.g., tailwind.config.ts
- next-env.d.ts is not a concern of this course, however, it is used to track typescript declarations 

#### Folders explained
- .next folder - is the folder that is created on "build" and is the folder that is served - is not a concern in dev environment
- node_modules - usually is installed on "npm install" but gets created "internally" when using create next app command
- public - folder used to store all assests
- src 
    - app - all the main .ts or .js file of the app is stored here. 
        - layout.ts is the UI that will be shared with all the pages in the app
        - page.tsx is the current home page that is served at localhost:3000/


- NextJS app runs in this flow npm run dev(package.json) -> RootLayout function (layout.tsx) -> Children inside the RootLayout function -> Home function (page.tsx)


### Chapter 4 
- Server Components
    1. Components that are used for completing backend tasks such as fetching data from an API or Reading files. 
    2. CANNOT use React hooks or handle user interactions
    3. In NextJS, all components are by default **Server components**
- Client Components 
    1. Components that are used for React hooks or handling user interactions
    2. In NextJS, need to add "use client" at the top of the component file to make the component a  **Client component**

### Chapter 5 - Routing
- Deleted everything inside src
- created app folder
- app folder + page.tsx is what serves a page at localhost:3000 (homepage)
- layout.tsx gets created on next build
- In NextJS, every folder is a URL path as long as all the 3 conventions of routing are matched
    - All routes must be placed in the **app** folder
    - All the folders must have a page.tsx file
    - Every folder is a Path segments in the browser URL
- 404 page not found is automatically handled by NextJS     