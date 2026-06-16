# Posts Manager

**Posts Manager** is a React SPA developed for seamless CRUD operations, content sorting, and secure routing. The project demonstrates skills with the modern React stack: hooks, routing, state management, server interaction, and creating reusable UI components and a component library.

## Live Demo

- **Deployment:** [https://gary217.github.io/react-posts-manager/](https://gary217.github.io/react-posts-manager/)

## Key Features

- **Post Display**: Fetch posts from a server (JSONPlaceholder) using Axios and display them in a list.
- **Search and Sorting**: Filter posts by title and sort them by different criteria.
- **Create and Delete Posts**: Use modals to add new posts and delete existing ones.
- **Post Details**: Open a post page by ID and load its comments.
- **Pagination**: Split posts into pages for easier navigation.
- **Authorization**: Basic client-side authorization using `useContext` for global user state.
- **Routing**: SPA using React Router with separate pages and dynamic routes (`About`, `Posts`, `Error`, `Login`, `PostIdPage`).
- **Error Handling**: Display messages for 404 errors or server fetch errors.
- **Loader and Loading Indicators**: Visual feedback when data is being loaded.
- **Reusable UI Components**: Modals, buttons, inputs, and Loader components.
- **Performance Optimization**: Use `useMemo` for memoization and caching.

## Technologies Used

- React (functional and class components)
- React Hooks (`useState`, `useEffect`, `useContext`, custom hooks)
- React Router (`BrowserRouter`, `Routes`, `Route`, `Navigate`, `useParams`, `useNavigate`)
- Axios for API requests
- CSS Modules for styling
- SPA approach without page reloads

## Development Tools

- **Vite** — fast React build tool and development server
- **Prettier** — code formatter for consistent code style

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Gary217/react-posts-manager.git
   ```
2. Navigate to the project folder:
   ```bash
   cd .\react-posts-manager\
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Build the project for production:
   ```bash
   npm run build
   ```
6. Preview the production build locally:
   ```bash
   npm run preview
   ```
7. Deploy directly to GitHub Pages:
   ```bash
   npm run deploy
   ```
