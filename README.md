Netflix Cloneeee - CONNECT 4

👋 Hi, I’m @Justingrant94
👀 I’m interested in music, all things media, automation, cycling and cocktails.
💞️ I’m looking to collaborate on any music related projects
📫 How to reach me justingrant373@gmail.com


**Built With:
**

1.React
2.Tailwind
3.CSS
4.Next.JS
5.Prisma
6.MongoDB
7.NextAuth
8.ercel


I created a React component called Login. It's a login form where I can input my email address and password to authenticate. Here's what I did:

1. I imported necessary modules and components from react, styled-components, and other custom components.
2. I defined myself as a functional component named Login.
3.  I initialised state variables using the useState hook to manage form input values (my email and password).
4. I defined a function named handleLogIn which gets invoked when I click the login button. This function tries to authenticate me using the signInWithEmailAndPassword function provided by Firebase.
5. I used the onAuthStateChanged function from Firebase to check if I'm already logged in. If I am, I redirect myself to the home page using the navigate function from react-router-dom.
6. I rendered JSX elements including a background image, header, form inputs for my email and password, and a login button.
7. My appearance is styled using CSS-in-JS with styled-components.
8. Overall, I represent the UI for a login page in a React application, integrated with Firebase authentication.

 I wanted to also emulate the copy of Netflix that if the user isn't a member of Netflix they would have to sign up which i think i emulated quite well.

<img width="1472" alt="Screenshot 2024-04-02 at 18 03 07" src="https://github.com/justingrant94/Netflix-Clone/assets/73545574/6fd39cf3-f2f1-4b07-a1b3-5ef971c214ab">


<img width="832" alt="Screenshot 2024-04-02 at 17 33 33" src="https://github.com/justingrant94/Netflix-Clone/assets/73545574/f2c6f381-350e-4df8-afe1-c1eac1be7a8e">


**Process:**


Importing Modules and Components: I begin by importing the necessary modules and components that I'll need to create the login form. This includes modules like React and styled-components, as well as custom components like BackgroundImage and Header.

Defining State and Functions: Inside my component body, I set up my state using the useState hook. This allows me to keep track of the values entered into the email and password fields of the login form. Additionally, I define a function called handleLogIn, which will be executed when the user clicks the login button. This function attempts to authenticate the user using the provided email and password.

Authentication and Navigation: I use Firebase's authentication functionality to check if the user is already logged in using the onAuthStateChanged function. If the user is logged in, I redirect them to the home page using the navigate function from react-router-dom.

Rendering JSX Elements: In my render function, I create JSX elements to represent the structure and content of the login form. This includes a background image, a header, input fields for the email and password, and a login button. These elements are arranged using flexbox styling to ensure proper layout.

Styling: Lastly, I style the appearance of my components using CSS-in-JS with styled-components. This allows me to define styles directly within my JavaScript code, making it easier to maintain and customize the appearance of my login form.

Overall, I handle the entire process of rendering the login form, managing user input and state, authenticating the user, and handling navigation based on the authentication status.


<img width="538" alt="Screenshot 2024-04-02 at 17 42 28" src="https://github.com/justingrant94/Netflix-Clone/assets/73545574/f101ca33-c51f-42e9-8b93-b046e09d28f4">


**Deployment**

Link: https://netflix-clone-gray-eta.vercel.app/login

works well but seems to have issues opening up in Google Chrome.


**Key Takeaways:**

1. I think the login feature doesn't work exactly how I would love for it to but I am happy with the final as it showed me i would be able to emulate existing sites.
