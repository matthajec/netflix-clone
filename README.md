# React Netflix Clone

## Description
This is a netflix clone built with react. It uses Firebase for authentication and to store data. There's a landing page, a sign in/sign up page, and a browse page.

It was a tutorial from [scrimba](scrimba.com), however due to Scrimba's interactive nature most of the work was done as challenges and I improved on the tutorial (more about that below)
 
## Framework(s)/Package(s)
* ReactJS
* PropTypes
* Styled Components
* React Router DOM
* Fuse.js (fuzzy search)

## How I improved on the tutorial
* Added PropTypes
* Various minor styling improvements, such as impoving contrast by darkening backgrounds with CSS and stopping elements that change font sizes on hover from shifting other elements.
* Made the HTML slightly more semantic
* Added some animations
* Improving accessibility, adding alts to all images and labels or aria-labels to all inputs.
* Created Firebase security rules to only allow reads from authenticated users and writes from the site admin (me)
* Added a 404 page
* Added the ability to sign in anonymously
* Made the name on the 'Who's Watching?' page match the first name chosen at sign up
* Replaced the sign in button link on the sign in page with a sign up button link
* Made the CTA "GET STARTED" functional
* Made the scroll position return to 0 on page change


## What I learned
* Firebase Auth and Firestore
* The basics of Common Expression Language and security rules
* React Portals
* Using custom hooks as a way to send queries
* To use context more often (lots of times I tried to avoid using context except for large, application wide data, but I realize that it can be an imporant tool for smaller things, esspecially when creating modular components)
* Ways the think more dynamically, creating things in such a way that they can be more easily customized and reused with the same code
* Passing state through react-router-dom
* Pattern of creating components that return null but run some function

## Challenge(s)
* Locking down the database. By default all writes were blocked and all reads were allowed, this isn't what you want from something like Netflix. To fix it I watched a video on Firebase Security Rules and then a video on Common Expression Language, this allowed me to come up with my security rules. 

    This (below) says for all documents allow a read operation if the ```request.auth != null```, blocking unauthenticated users from accessing data. It then says to allow write operations if the ```request.auth.uid == 'my uuid here'```, only allowing operations from me, since that is my UID.


        service cloud.firestore {
          match /databases/{database}/documents {
            match /{document=**} {
              allow read: if request.auth != null;
              allow write: if request.auth.uid == 'my uuid here';
            }
          }
        }


* Making the homepage CTA input animation. On Netflix, upon clicking an input field on the homepage the placeholder moves up and out of the way to allow the user to type. This is something that wasn't in the tutorial but that I wanted to implement. My solution was to wrap the input and label in a div with ```position: absolute```, and have the label and input be ```position: relative```. This then allowed me to manipulate the label and input however I wanted. I set the input to required and had a conditional that checked for focus or validity (validity is gained when there is a value within the input) and moved the label if true. 

* Getting the data from ```/public/```. In the tutorial the application was setup so that the images and video folders were in the root of the application. I copied this and it didn't work. I determined that the ```/public/``` folder would be this 'root' since that's where the application "starts" (```index.html```)

* Using hooks inside arrow function compound components. I was having an issue where a component like this would throw an error:

        Component.CompoundComponent = () => {
          const [ myValue ] = useState('hello world!')
          return <h1>{myValue}</h1>
        }

  I ended up figuring out that in order to use hooks inside of a component like this I needed to declare it as a normal function component, like so:

        Component.CompoundComponent = function ComponentCompoundComponent() {
          const [ myValue ] = useState('hello world!')
          return <h1>{myValue}</h1>
        }

  I still have no clue why this is. I tried googling the issue and searching stackoverflow and I couldn't find anything about it. I tested it with all other variables being the same exept for being called as arrow function or a normal function and I still got errors. To solve this issue I converted any component using any hook to a normal function.

* Adding the ability to sign in anonymously. I did this by enabling the "Anonymous" sign in method in the firebase console then adding a second button which calls the firebase method for signing in anonymously. I changed the profile selection page to give a generic name in this case, since there would be no name.
