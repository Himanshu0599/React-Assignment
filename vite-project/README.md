# Description
  This is a React & Redux application that:

- 1. Fetches and displays posts from the JSONPlaceholder API.
- 2. Implements search functionality with dynamic filtering.
- 3. Includes pagination with navigation buttons.
- 4. Displays post details on a separate page.
- 5. Uses Redux Toolkit for efficient global state management.
- 6. Styled with custom CSS for a clean and modern look.

# Features
  - 1. Post Listing
       1. Displays a list of posts with pagination.
       2. Pagination shows 6 posts per page with navigation buttons.
  - 2. Search Functionality
       1. Allows filtering posts by title.
       2. Displays total posts and filtered count dynamically.
  - 3. Post Details
       1. Displays detailed information for each post.
       2. Includes a back button for navigation.
  - 4. Redux State Management
       1. Uses Redux Toolkit for efficient state handling.
  - 5. Responsive Design
       1. Styled with custom CSS to ensure responsiveness and visual appeal.

# Technologies Used

  - Frontend: React, Redux Toolki
  - API: JSONPlaceholder
  - Styling: Custom CSS
  - Routing: React Router DOM

#  Installation and Setup
 
1. Clone the repository: git clone https://github.com/Himanshu0599/React-Assignment.git
2. Navigate into the project directory: cd vite-project
3. Install dependencies: npm install
4. Start the development server: npm run dev


#  API Details
 
- Base URL: https://jsonplaceholder.typicode.com
- Endpoints Used:
   1. /posts → Fetches all posts.
   2. /posts/:id → Fetches a single post by ID.