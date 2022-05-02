# MS Portfolio Site
Hello! Thank you for checking out my project. The purpose of this project is to showcase my ability in making a totally responsive web page while using current frontend practices. 
As a result, if you choose to view the site, you will recognize core website features such as a hambuger menu, a toggle for dark mode, and a carousel. The site is also  
responsive if you'd like to view my progress on your mobile device. 
You can view my project here : https://ms-portfolio-site.netlify.app/

## Components
Inside this folder is where most of the work is stored. I usually try to keep all of my work in one folder. As a result, the app component only renders a single component called
Content.

### Content
Content is the parent component of all of the components in the component folder. It is also where ThemeContext is imported in order to give each component access to the 'light' and
'dark' theme state variables. 

### Nav
The nav bar contains links to each section of this project, a hamburger menu, and a dark mode toggle switch. The dark toggle only effects the Nav bar because I need to restructure the css in the future so, that will involve changing how the 'light' and 'dark' themes are distributed throughout the app. I want to research a more efficient way of distributing 
this light and dark functionality throughout my app without the process being tedious. As a result, the dark mode functionality with be locked to the navbar.

### Intro
This compnent is the first page that you will see. It contains a small introduction about myself and contians a link to both my resume and my github.

### Switch
This component handles the changing between the light and dark modes of the app. 

### Projects
This section list the projects that I am currently working on and advises the user to check out my github for future projects. 


### Menu
This component holds the functionality of the hamburger menu icon. 

### Contact
This component contains a contact form that allows any user to send myself an e-mail. This component also holds some API keys in order to connect to my email for me to recieve a 
message. 

## Additional Packages
Here I'll list any additional packages that were pivotal in the creation of this app. There are some packages that remain unused only because I utilized other methods to attain 
the same effect.

### SASS
SASS is mainly used to construct the SCSS files in each component folder. 

### Email-js
This component allows me to connect with EmailJS's server in order to allow for email messages to be sent directly from my site to my email address.

## Credit 
Mantine.dev provided me with useful colors in order to construct my dark theme. 

## Conclusion
Thank you for veiwing my react resume portfolio. I hope that we can work together on future projects!