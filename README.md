# Getting Started with Five Day Weather

The project was built by boilderplate: Create React App
The UI approach includes: 
- A Text box: for typing the location where display weather data
- Weather forecast horizontal list : display data weather values in 3 days (I tried to call in the params API 5 days but it had just returned 3 insted of 5. Maybe my account is free limited version)
The UX:
- The loading: for waiting while fetching data
- Avoid multitasking when typing keyword search. The API will be started when the uses stop typing their keyword. The timout waiting is 300 milliseconds
- The message for case: wrong keywork/no matching location found or empty input already built.

# Overall technical
The approach code pattern is stateless component. I used to includes below technical:
- React Hooks,
- createContext/useContext
- useReducer
- useState
- useEffect 
Instead of 
- React Class Component
- state/props,
- Redux 
- And a part of lifecycle React 
technicals

# Fetching API data from:
Source: https://api.weatherapi.com
Direct link: https://api.weatherapi.com/v1/forecast.json?key={account_api_key}&q=${query}&days={number}
Technical: Axios NPM package 
# Avoid muiltitasking while typing search input
Approach technical: setTimeout and clearTimeout

### GIT source: https://github.com/anhntinterview/five-day-weather-forecast.git
### Deploy web app on: https://nab-interview.herokuapp.com/

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## `yarn serve`

To test code run on server before true deployment to the Internet

### Testing
Jest and Enzyme

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
