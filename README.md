# DocTalk — Doctor Appointment Platform

DocTalk is a React-based doctor appointment platform that allows users to explore doctors, view detailed profiles, book appointments, manage bookings, and read basic React development concepts through the blog section.

## Live Project

> Add your deployed project URL here.

## GitHub Repository

> Add your GitHub repository URL here.

---

## Features

* Browse available doctors by specialty and experience
* View detailed doctor profiles
* Book doctor appointments
* View and cancel booked appointments
* Prevent duplicate bookings for the same doctor
* Store booking information using browser `localStorage`
* Responsive navigation with React Router
* React concept blog section
* Doctor data loaded from JSON files
* Error page for invalid routes
* Responsive UI using Tailwind CSS and DaisyUI

---

## Pages

| Page               | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| **Home**           | Displays the banner and available doctors                   |
| **Doctor Details** | Shows individual doctor information and appointment options |
| **My Bookings**    | Displays booked appointments and allows cancellation        |
| **Blogs**          | Presents basic React concepts and explanations              |
| **Contact Us**     | Contact information section                                 |
| **Error Page**     | Handles invalid routes                                      |

The application's routes include `/`, `/my-bookings`, `/blogs`, `/contactUs`, and `/doctorDetails/:registrationNumber`.

---

## Technology Stack

### Frontend

* React 19
* Vite
* React Router
* Tailwind CSS
* DaisyUI
* React Icons

### Data & Browser Storage

* JSON data files
* Browser `localStorage`

### Development Tools

* ESLint
* Vite
* npm

The project's package configuration includes React 19, React Router 7, Tailwind CSS 4, DaisyUI, Firebase, React Icons, and Vite.

---

## Project Structure

```text
react-warrior/
│
├── public/
│   ├── doctorsData.json
│   └── more_react_questions.json
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Banner/
│   │   ├── Footer/
│   │   └── Header/
│   │
│   ├── pages/
│   │   ├── Blogs/
│   │   ├── ContactUs/
│   │   ├── Doctor/
│   │   ├── DoctorDetails/
│   │   ├── Doctors/
│   │   ├── ErrorPage/
│   │   ├── Home/
│   │   ├── MyBookings/
│   │   └── Root/
│   │
│   ├── Routes/
│   │   └── Routes.jsx
│   │
│   ├── utility/
│   │   └── addToDB.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Appointment Booking

Appointments are managed on the client side using browser `localStorage`.

When a user books a doctor, the doctor's registration number is stored in the `bookingList` localStorage entry. Duplicate registrations are prevented, and users can remove a booking from the same storage.

### Booking Flow

```text
Doctor List
     ↓
Doctor Details
     ↓
Book Appointment
     ↓
Save Registration Number
     ↓
localStorage
     ↓
My Bookings
     ↓
Cancel Appointment
```

---

## Doctor Data

Doctor information is maintained in `public/doctorsData.json`.

Each doctor record contains:

* Name
* Education
* Specialty
* Experience
* Registration Number
* Profile Image

The project currently includes doctor records covering specialties such as Internal Medicine, Orthopedics, Pediatrics, Cardiology, Gynecology, Dermatology, ENT, Neurosurgery, Psychiatry, Urology, Ophthalmology, and Oncology.

---

## React Learning Blog

The Blogs section loads React questions from `public/more_react_questions.json`.

Topics currently include:

* `useState`
* `useEffect`
* Custom Hooks
* Controlled vs. Uncontrolled Components
* `useFormStatus()`

The blog data is loaded through React Router's `useLoaderData()`.

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd react-warrior
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local Vite development URL shown in your terminal.

---

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint to check the project code.

These scripts are defined in the project's `package.json`.

---

## Routing

React Router is used for client-side navigation.

```text
/                           → Home
/my-bookings                → My Bookings
/blogs                      → React Blogs
/contactUs                  → Contact Us
/doctorDetails/:registrationNumber
                            → Doctor Details
```

The application uses `createBrowserRouter` and `RouterProvider` for routing.

---

## Data Flow

```text
JSON Data
   │
   ├── doctorsData.json
   │        ↓
   │     React Router Loader
   │        ↓
   │     Home / Doctors
   │        ↓
   │     Doctor Details
   │
   └── more_react_questions.json
            ↓
        React Router Loader
            ↓
          Blogs
```

---

## Styling

## The project uses **Tailwind CSS** together with **DaisyUI** for styling and UI components. Tailwind and DaisyUI are configured through the project's CSS and Vite configuration.

## Learning Objectives

This project demonstrates practical use of:

* React functional components
* React Hooks
* `useState`
* `useEffect`
* React Router
* Route loaders
* `useLoaderData`
* Dynamic routes
* Component-based architecture
* Conditional rendering
* Array methods such as `map()` and `filter()`
* Browser `localStorage`
* Tailwind CSS
* DaisyUI
* Responsive layouts

---

## Future Improvements

Possible improvements for future versions include:

* Doctor search and filtering
* Authentication
* Backend API integration
* Database-based appointment management
* Real appointment time slots
* Online payment integration
* Doctor availability management
* Improved form validation
* User dashboard
* Admin dashboard

---

## Author

**Mariam Farzana**

Frontend Developer | React | JavaScript | TypeScript | Node.js

### Connect

* GitHub: `https://github.com/Mariam091990`

---

## License

This project is developed for learning and portfolio purposes.
