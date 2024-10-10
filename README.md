# Sahara Dust

Sahara Dust is a personal project aimed at exploring Next.js development while building a platform that provides information on Saharan dust events. The site focuses on presenting research, articles, and real-time data about Saharan dust's environmental and health impacts.

## Project Overview

This project is part of my learning journey with **Next.js** and **Postgres**, along with other modern web technologies. Sahara Dust features:

- **Post submission system**: Users can submit studies or articles.
- **Voting system**: Users can upvote studies to increase visibility.
- **Newsletter subscription**: Visitors can subscribe to receive updates via email.
- **Real-time data**: Future plans to integrate data tracking.

## Technologies Used

- **Frontend**: Next.js 14.2.3
- **Database**: PostgreSQL (hosted on Vercel)
- **Styling**: Tailwind CSS
- **Backend**: Node.js API routes
- **UI Components**: React with TypeScript, custom modals
- **State Management**: React's Context API
- **Tools**:
  - **React Spinners** for loading animations
  - **React Toastify** for notifications
  - **React Tooltip** for hover-based tooltips
  - **React Typed** for dynamic text

## Folder Structure

Here’s an overview of the main folders and their purposes:

- **app**:
  - `api/submit-link`: Handles user submissions of links or studies.
  - `api/subscribe`: Handles newsletter subscription requests.
  - `api/vote` & `api/unvote`: Manages the voting system.
- **components**:
  - `StudyModal.tsx`: Modal component for submitting or viewing studies.
  - `Vote.tsx`: Component to handle user votes on studies.
  - `utils/SmoothScroll.js`: Utility for smooth scrolling functionality.
