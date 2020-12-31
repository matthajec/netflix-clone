# React Todo App

## Description
This is a netflix clone built on top of react. It uses Firebase for authentication and to store data. There's a landing page, a sign in/sign up page, and a browse page.

## Framework(s)/Package(s)
* ReactJS
* PropTypes
* Styled Components
* [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)

## How I improved on the tutorial
* Added PropTypes
* Added the option to sign in with Google
* Added reCaptcha


## Challenge(s)
The biggest challenge I had was implementing the drag and drop feature. The solution was to just learn more about the package I was using for the dropdown (react-beautiful-dnd) by reading the documentation, looking at examples, and going through their quick start guide. After doing that it was relatively easy to implement.

Another challenge was themes. At first I was going to use props, but I ended up going with context instead because if the app were to be expanded it might not be efficient to pass props down the entire tree. I had trouble getting the context to work, so I went back to the react documentation on createContext and useContext to get it working.
