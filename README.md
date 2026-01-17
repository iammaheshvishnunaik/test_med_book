# Medical Appointment Booking Application1

This is a **Medical Appointment Booking Application** built with **React**. The application provides features for patients and doctors, including signing up, logging in, booking appointments, and writing reviews. The UI design follows accessibility standards and is based on a Figma prototype.

---

## 🎨 Design Overview

The application design is based on a **Figma prototype** with the following considerations:

### Color Scheme
- **Primary color:** `#F89898`
- **Secondary color:** `#55f786`

### Accessibility Features
- High contrast between text and background
- Clear visual indicators for hover and active states
- Proper spacing and alignment for readability
- Responsive layouts for desktop and mobile

---

## 🖥️ Website Layout Components

### 1. Navigation Bar
- **Frame:** The navigation bar is a frame visible on all routes.
- **Links:** Appointments, Reviews, Sign-up, Login.
- **Design Tips:**
  - Top horizontal navigation menu
  - Height: 40-80px for readability
  - Component spacing: 10-20px
  - Hover/active state indicators for links

### 2. Sign-Up Form
- **Frame:** Separate frame for Sign-Up
- **Fields:**
  - Role (dropdown: Doctor, Patient, Admin)
  - Name (text)
  - Email (text)
  - Password (text)
- **Design Tips:**
  - Short and simple labels
  - High-contrast colors for accessibility
  - Proper spacing and alignment
  - Visual cues and placeholders
  - Form validation and error messages

### 3. Login Form
- **Frame:** Separate frame for Login
- **Fields:**
  - Email
  - Password
- **Design Tips:**
  - Show password requirements
  - Option to toggle password visibility
  - Form validation for all fields
  - Defined margins for layout consistency

### 4. Appointment Booking
- **Frame:** Separate frame for Appointment Booking
- **Layouts:**
  1. **Search Doctor**
     - Search box with autocomplete for doctor names and specialties
  2. **Doctor Card**
     - Doctor profile picture
     - Name, Specialty, Experience, Rating
     - Booking button for appointment submission
- **Design Tips:**
  - Clear separation between search and doctor listing
  - Consistent card sizes and spacing

### 5. Reviews
- **Frame:** Separate frame for Reviews
- **Components:**
  - Display user reviews and ratings
  - Doctor name and specialty
  - Feedback button
  - Column to indicate if patient has written a review
  - Review form:
    - Patient name
    - Text input for feedback
    - Optional star rating or images
- **Design Tips:**
  - Maintain spacing and alignment for readability
  - Use visual hierarchy to emphasize reviews

---

## ⚛️ Technology Stack
- **Frontend:** React
- **Styling:** CSS Modules / Styled Components
- **State Management:** React Context or Redux (optional)
- **Routing:** React Router
- **Form Handling:** Formik or React Hook Form (for validation)
- **Icons & Assets:** Figma exports or SVGs
- **Version Control:** Git & GitHub

---

## 📦 Project Structure
/src
/components
Navbar.jsx
SignUpForm.jsx
LoginForm.jsx
AppointmentBooking.jsx
DoctorCard.jsx
Reviews.jsx
/pages
Home.jsx
SignUp.jsx
Login.jsx
Appointments.jsx
ReviewsPage.jsx
/assets
/images
/icons
/styles
global.css
variables.css