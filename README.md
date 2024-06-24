# BHC App ~ By LabRats
The Botswana Housing Corporation (BHC) is seeking to procure a user-friendly and efficient mobile application through a hackathon procurement method. This hackathon will provide an opportunity for tech enthusiasts and developers to collaborate and create innovative solutions for BHC's mobile application needs.

![others](https://github.com/GovanDBT/BHC-App/assets/62579660/a29b26e3-5246-4358-bf22-8f74a9baa699)


## How To Run The App
1. Clone or download a zip file of the project on your device
2. Make sure that in your device you have the latest version of Node installed. Visit link here to download 👉 https://nodejs.org/en
3. Make sure you have the Client Expo app installed on your phone to run the app (download from playstore)
4. Open the folder you just downloaded or cloned and open a terminal window in that folder (hold shift then right-click and open in terminal)
5. In the terminal (make sure the path leads to the folder the project) type the following commands to install the app's dependencies
```
npm i 
```
6. After installation the dependencies (ignore the warning and deprecation) run the app
```
npx expo start
```
A QR code will appear on the terminal which you will scan using the Client Expo app on your phone to run the app (make sure that your PC and Phone are connected to the same network).

A video about how to run the BHC app will be included below:

A link to where to download the BHC app will be included below:


## Project Summary
### The issue we are hoping to solve
Technology is constantly evolving, and so are customer demands and expectations. To meet customer expectations and attract more potential customers, Botswana Housing Corporation (BHC) is enhancing its digital platforms to improve customer service. The development of a mobile app aims to offer 24/7 easy access to the Corporation’s products and services. This app will enhance customer experience by providing a convenient and user-friendly platform for accessing BHC services.

### Our idea
Our idea for the mobile app is to create a comprehensive solution that allows users to interact with BHC products and services seamlessly. The app will enable users to:
* Create an Account and Login: Secure user account registration and management.
* Property Information: Find detailed information about their properties.
* Make Payments: Securely make payments for rent, service charges, or property purchases.
* Maintenance Reports: Report and follow up on maintenance faults.
* View Available Properties: Browse properties for sale or rent offered by BHC.
* Apply for a House: Submit applications for houses available for sale or rental.
* General Inquiries: Make general inquiries and get information about BHC’s services and products.
* Notifications: Receive notifications about their account, property updates, and news related to BHC.
* News and Developments: Stay updated with the latest news and developments related to BHC.

### How Our Idea Helps
Our solution addresses the need for a streamlined, user-friendly platform that enhances the customer experience by providing:
* **Convenience:** 24/7 access to essential services and information.
* **Efficiency:** Quick and easy processes for making payments, reporting maintenance issues, and applying for properties.
* **Engagement:** Improved communication between BHC and its customers through notifications and updates.
* **Accessibility:** An inclusive platform that supports both Android and iOS devices, ensuring broad user reach.

### Technologies Used
* Firebase: For backend services, including user authentication, real-time database, and cloud storage.
* MongoDB: For storing user and property data efficiently and securely.
* Expo: For building and deploying the React Native application, ensuring support for both Android and iOS platforms.
* React Native: For developing a responsive and high-performance mobile app.

### Architecture of the Project
The architecture of the BHC SmartHome app is designed to ensure scalability, security, and efficiency. It includes the following components:
1. Frontend (React Native + Expo):
  * User Interface: Intuitive and user-friendly UI designed with React Native.
  * Navigation: Smooth and seamless navigation using React Navigation.
  * State Management: Efficient state management using Redux or Context API.

2. Backend (Firebase + MongoDB):
  * Authentication: Secure user authentication and account management using Firebase Authentication.
  * Database: Real-time data storage and retrieval using Firebase Firestore and MongoDB for structured data management.
  * Cloud Functions: Serverless functions using Firebase Cloud Functions for handling backend logic and processing.

3. Integration:
  * APIs: RESTful APIs for communication between the frontend and backend services.
  * Push Notifications: Firebase Cloud Messaging for sending real-time notifications to users.
