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


### Chapter 6 - Dynamic Routing
- Folders nested in a folder can have their own paths 
- Esessentially each folder NAME in the **app** is a URL path as long as it has a page.tsx


### Chapter 7 - Dynamic Routes
- any [folder] in a square bracket is a dynamic route meaning if folder name is [id] and your url is hello.com/32 then the number 32 gets passed in the id param from the url path. 
- the page.tsx inside a [folder] can therefore be access with any number and that number can be displayed in the page.tsx as it gets passed down the route as a prop. 
- The above 2 logic together gives us the system of dynamic routes where you can have any number of routes e.g., hello.com/product/72 this URL would contain the details of the product "72".
- some typescript fixes were also made here (i don't understand typescript that well so will keep it for later)


### Chapter 8 - Nested Dynamic Routes
- lets say you need to show a **specific Review** for a specific Product then you do use nested dynamic routes
    - products > [productId] > reviews > [reviewId] > page.tsx
- lets say you need to show **all Reviews** for a specific Product then you do use nested dynamic routes
    - products > [productId] > reviews > page.tsx
- lets say you need to show a **specific Product** 
    - products > [productId] > page.tsx