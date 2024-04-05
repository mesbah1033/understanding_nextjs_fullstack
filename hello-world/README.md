## Tracking NextJS course

- Coding along with this [playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI) on youtube to understand Nextjs better.
- Using this to keep track of my progress on this course. 


### Files explained
- Package.json to keep track of dependencies and scripts 
- Config files (x.config) to configure X e.g., tailwind.config.ts
- next-env.d.ts is not a concern of this course, however, it is used to track typescript declarations 

### Folders explained
- .next folder - is the folder that is created on "build" and is the folder that is served - is not a concern in dev environment
- node_modules - usually is installed on "npm install" but gets created "internally" when using create next app command
- public - folder used to store all assests
- src 
    - app - all the main .ts or .js file of the app is stored here. 
        - layout.ts is the UI that will be shared with all the pages in the app
        - page.tsx is the current home page that is served at localhost:3000/


- NextJS app runs in this flow npm run dev(package.json) -> RootLayout function (layout.tsx) -> Children inside the RootLayout function -> Home function (page.tsx)