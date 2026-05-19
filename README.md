# React User Directory

A simple React application that fetches users from an API and provides live search filtering functionality.

Live Demo:
react-user-directory-orpin.vercel.app


## Features

- Fetch users from external API
- Loading state handling
- Error state handling
- Empty search result handling
- Live search filtering
- Dynamic UI rendering
- Responsive card-based layout

## Technologies Used

- React
- Vite
- JavaScript
- CSS

## API Used

https://jsonplaceholder.typicode.com/users

## What I Learned

This project helped me practice and understand:

- useEffect lifecycle
- Fetching API data in React
- State management with useState
- Controlled inputs
- Derived state and filtering logic
- Conditional rendering
- Render flow and re-rendering
- Handling loading, error, and empty UI states

## Project Flow

```txt
Initial Render
↓
useEffect Runs
↓
Fetch Users
↓
Store Data in State
↓
Re-render Component
↓
Filter Users Based on Search Input
↓
Render Filtered Users
```

## Installation

```bash
npm install
npm run dev
```

## Future Improvements

- Component separation
- Search by email or username
- Better responsive design
- Debounced search
- Dark mode