# CS465_fullstack
Full Stack Development with MEAN


## Architecture

### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

The template for the webpage we were given was all HTML based. We used Express to build the backbones of the front end application and then just used the views from the HTML template with Handlebars for the browser content. JavaScript was used in certain situations for the front end to add certain functionality via scripts and functions built in javascript and called in the html. The SPA utilized typescript and HTMLl files to define the components that were contained.


### Why did the backend use a NoSQL MongoDB database?

A NoSQL database provides the application with a simple and efficient data storage solution. Since the data that is being stored is fairly simple and the queries were straightforward, NoSQL is an effective option. MongoDB integrates seamlessly with the other libraries and frameworks of the MEAN stack.

## Functionality

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

Javascript is a language and JSON is a data type that is in the form of a document, similar to how the data is stored in the database. JSON is used as the data structure that holds the information that is retrieved from the backend and delivers it to the frontend.

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

An instance when I refactored the code is when I simplified the HTML for the Handlebars view files. I took the repeated sections of the header and footer and created a partials folder that allowed the individual files to call these sections. I also used a loop in the travel section to iterate over each trip pulled from the database since each trip had the same HTML attached to it. These steps simplified the files and increased the readability. The benefits that came from the reusable UI components on the SPA were based on the ability to create a more modular application. It split the page up into each section with each section having corresponding ts, html, and css files. This allowed the development process to focus on each piece at a time and helped with debugging any issues. If there was an issue with one piece, the whole program didn't need to be changed, just the affected piece.

## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

The methods for request and retrieval of information from the backend utilize api endpoints to signify what information should be gathered. The testing of these methods in this project were facilitated by Postman. The routing of these endpoints includes authorizaion methods which utilize an SHA256 token in order to verify and authenticate users. 


## Reflection

### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me discover new tools, libraries, and frameworks that aid in the development process. It is also the first class that I have taken that explains the end-to-end process of developing a web-based application. I think the skills that I have gained from this class that make me more marketable mainly revolve around testing and debugging. This class had a lot of content on the development side and it was a lot to take in, but the most valuable thing that I feel benefited me the most is troubleshooting. Since there was so much that went into this application, there was a lot of room for things to go wrong. This allowed me to grow my ability to debug and effectively review code, as well as my familiarity with the tools used to aid in this process such as Postman for API testing and DBeaver for database management.
