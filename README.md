
# Courses Project

This is a **React-based** web application that displays a list of top courses from various categories. Users can filter the courses by category and interact with the courses by liking/unliking them. The design is built with **Tailwind CSS**, ensuring responsiveness and a modern look. The project also includes **toast notifications** for user feedback.

#Check the Project Here 
https://courses-sigma.vercel.app/

## Features

- **Category Filtering:** Users can filter courses based on different categories such as "Business," "Development," "Design," and more. A default "All" category shows all available courses.
- **Like/Unlike Courses:** Users can like and unlike courses by clicking on a heart icon. Liked courses will be visually represented with a filled heart, while unliked courses will show an empty heart.
- **Responsive Design:** The UI is built with Tailwind CSS to ensure it works seamlessly on different devices (mobile, tablet, desktop).
- **Toast Notifications:** Users will receive feedback when liking/unliking courses through toast notifications using `react-toastify`.
- **Dynamic Course Data:** Courses are dynamically fetched from an external API, allowing the list to be updated easily.

## Installation and Setup

### Prerequisites

- **Node.js** (version 14 or above)
- **npm** or **yarn**

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/courses-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd courses-project
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

## Project Structure

- **src/components/Navbar.js**: Displays the project title "Top Courses" in a styled navbar.
- **src/components/Filter.js**: Renders the category filter buttons. Each button corresponds to a course category and applies a filter when clicked.
- **src/components/Card.js**: Displays individual course cards with the course image, title, description, and like/unlike functionality.
- **src/components/Cards.js**: Manages and displays the list of courses based on the selected category.
- **src/data.js**: Contains static data like category filters and the API URL for fetching the courses.

### Directory Overview

```
src
│
├── components
│   ├── Navbar.js       # Navigation bar component
│   ├── Filter.js       # Course category filter component
│   ├── Cards.js        # Component for rendering multiple courses
│   ├── Card.js         # Single course card component
│
├── data.js             # Data for filters and API URL
│
├── App.js              # Main application component
├── index.js            # Entry point for React
└── ...
```

## API Integration

The course data is fetched from an external API hosted at:

```javascript
export const apiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses";
```

This API provides a collection of courses across multiple categories, each with details such as the course title, image, description, and unique ID.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: A library of icons for React.
- **React Toastify**: For toast notifications to provide user feedback.
- **API Integration**: Fetches course data from an external API.

## Future Improvements

- **Add Search Functionality**: Implement a search bar to allow users to search for specific courses.
- **Course Details Page**: Add a detailed view for each course with more information.
- **Persistent Liked Courses**: Store liked courses in localStorage so they persist across page reloads.
- **Loading State**: Display a loading spinner while fetching courses from the API.

## Screenshots


## License![Screenshot 2024-10-17 150000](https://github.com/user-attachments/assets/a23e2a28-f239-4905-abc3-38c72c57f2ea)



![Screenshot 2024-10-17 150025](https://github.com/user-attachments/assets/bd1a7d79-6e38-44c0-b5ba-1cfeb32e4b71)

![Screenshot 2024-10-17 150105](https://github.com/user-attachments/assets/409617e1-834a-45e4-a801-45cdbaf44302)

![Screenshot 2024-10-17 150039](https://github.com/user-attachments/assets/5f0da022-ae64-47d5-9b58-53239ada96e1)
![Screenshot 2024-10-17 150052](https://github.com/user-attachments/assets/886d6a73-47bd-486c-82cf-23036d6cc367)

![Screenshot 2024-10-17 150123](https://github.com/user-attachments/assets/85cd391a-89da-46bd-b58c-082a069f9012)

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).


