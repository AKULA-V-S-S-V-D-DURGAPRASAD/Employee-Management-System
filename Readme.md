# Reactjs-Spring-Boot-Full-Stack-App

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
7. [Contributing](#contributing)

## Project Overview
The **Reactjs-Spring-Boot-Full-Stack-App** is a full-stack web application that utilizes React.js for the front-end and Spring Boot for the back-end, providing a robust platform for managing employee data through CRUD (Create, Read, Update, Delete) operations. This project serves as an excellent example of how to integrate a modern JavaScript framework with a powerful Java-based back-end, showcasing best practices in software development.

### Features
- **User-Friendly Interface**: The React front-end offers an intuitive user interface for managing employee records.
- **RESTful API**: The Spring Boot back-end exposes a RESTful API that handles requests from the front-end.
- **Data Persistence**: Employee data is stored in a database, allowing for persistent storage across sessions.
- **Error Handling**: Custom exceptions are implemented to handle resource not found scenarios gracefully.


## Tech Stack
- **Front-End**: 
  - React.js
  - JavaScript (ES6+)
  - CSS

- **Back-End**:
  - Spring Boot
  - Java
  - Maven

- **Database**: 
  - MySQL Database

# Requirements
To run this project, ensure you have the following installed on your machine:
- **Node.js** (v14 or higher) and npm (Node Package Manager)
- **Java Development Kit (JDK)** (v21 or higher)
- **Apache Maven** (for managing Java dependencies)
- A text editor or IDE (e.g., Visual Studio Code for React, IntelliJ IDEA or Eclipse for Spring Boot)


# React Frontend

## Overview
This is the front-end part of the Reactjs-Spring-Boot-Full-Stack-App. It is built using React.js and provides a user-friendly interface for managing employee records.

## Features
- Create, Read, Update, and Delete employee records.
- Responsive design for better user experience.

## Installation
1. Navigate to the `react-frontend` directory:
2. Install dependencies:

## Running the Application
To start the React application, run:
The application will be available at `http://localhost:3000`.
- cd ../react-frontend
- npm install
- npm start


## Technologies Used
- React.js
- Axios (for API calls)
- React Router (for routing)


# Spring Boot Backend

## Overview
This is the back-end part of the rameshmf-reactjs-spring-boot-crud-full-stack-app. It is built using Spring Boot and provides a RESTful API for managing employee data.

## Features
- RESTful API endpoints for CRUD operations on employee records.
- Exception handling for better error management.

## Installation
1. Navigate to the `springboot-backend` directory:

2. Build the Project:
- cd springboot-backend
 - Run this ommand to get the files in the Directory 
 - You can build the project and download the necessary dependencies using Maven. Run the following command:
This command compiles the code, runs tests, and packages the application into a JAR file.

3. Configure Application Properties:
- mvnw clean install
 - Run the above command
- Open `src/main/resources/application.properties` and configure your database settings and any other necessary properties. For example:

## Running the Application
To start the Spring Boot application, run:
The API will be available at `http://localhost:8080`.

## Technologies Used
- Spring Boot
- Java
- Maven
This will start your application on `http://localhost:8080`.

4. **Run the Application**:
- To start the Spring Boot application, run:

5. **Access MySQL Database Console (Optional)**:
```SQL
- spring.datasource.url=jdbc:mysql://localhost:3306/employee_management(your database name)
- spring.datasource.username=your_username
- spring.datasource.password=your_password
- spring.jpa.hibernate.ddl-auto=update
- spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
```


6. **Test API Endpoints**:
- Use tools like Postman or curl to test your RESTful API endpoints. For example, you can test the GET request for retrieving employee records at:
  ```
  GET http://localhost:8080/api/employees
  ```

7. **Check Logs for Errors**:
- Monitor the console output for any errors during startup or while accessing endpoints. If there are issues, check your configuration and code for potential problems.

## Technologies Used
- Spring Boot
- Java 21
- Maven
- PostMan(API Testing)
- MySQL Database


<h3>Project Progress</h3>


New
Backend Implementation: <progress value="100" max="100"></progress> 100%  
Frontend Development: <progress value="100" max="100"></progress> 100%  
API Integration: <progress value="100" max="100"></progress> 100%  
Database Setup: <progress value="100" max="100"></progress> 100%  

## Contact

For further questions or contributions, feel free to reach out or submit a pull request. We appreciate your feedback!

E-Mail -- akuladurgaprasad5@gmail.com

Mobile -- +91-8143600826

