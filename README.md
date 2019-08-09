# ReactJs Starter Kit

Basic starter kit to create an App using create-react-app and most of the best packges or tools for dates, fetching, tests, coverage, linting, formatting and more.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#Prerequisites)
- [VS Code Plugins](#vs-code-plugins)
- [Available Scripts](#project-setup)
- [File Structure](#file-structure)
- [Naming Conventions](#naming-conventions)
- [Resources](#resources)

## Getting Started

For a long time I researched a good starter point to learn or to start a project with ReactJS and basic plugins, best practices, conventions, file structure, and more, I found different pieces of what I was looking for so I decided to put them all together.

So basically, what you have here is a reactjs starter project created with `create-react-app` and essential configurations to start a clean and fast ReactJS App:

- Routing (ReactJs Router).
- Store Management (Redux).
- Unit testing (jest/enzyme).
- Lint and formatting (ESLint + Airbnb + Prettier).
- Date-fns (datetime library - functional approach https://date-fns.org/).
- Solid and recommended file structure (supports dumb and smart components).
- Configuration files by environment.
- Custom scripts.

So feel free to fork and enjoy it 😃.

Run `npm install` and then `npm start`.

## Prerequisites

NodeJS
https://nodejs.org/en/

## VS Code Plugins

My favorite IDE is VS Code so I included a list of basic plugins for ReactJS apps (if you use a different IDE I'm pretty sure there should be the same plugins for your IDE):

### Must

- ES7 React/Redux
- Jest
- ESLint
- Prettier
- EditorConfig for VS Code
- DotENV

### Optionals

- Auto Close Tag
- Auto Rename Tag
- Auto import - ES6
- Path Intellisense
- TODO Highlight
- vscode-styled-components

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run build` fails to minify

https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### `npm run lint`

Lints all the files inside `./src` and shows the result without fixing.

## File Structure

Folder structure is based on productivity and some personal preferences:

```text
src
├── App.css                 * Main app styles.
├── App.jsx                 * Main app component.
├── api                     * Abstractions for making API requests
├── assets                  * Assets that are imported into your components(images, custom svg, etc).
│   └── ...
├── components              * Components of the projects that are not the main views.
│   └── ui                  * Generic and reusable across the whole app. Presentational components eg. Buttons, Inputs, Checkboxes.
│   └── layout              * Unique and one time use components that will help with app structure.
│   └── <domain component>  * Belong to a specific domain. Reusable in different pages.
│   └── ...
├── plugins                 * Init and config plugins(moment, material-ui, adal, etc).
│   └── ...
├── index.jsx               * Entry point of the application.
├── services                * All the common services. e.g. Authentication, hubs, etc.
├── router                  * All the routes of your projects.
│   └── index.js
├── store                   * The Redux action types in action-type.js, reducers, selectors and main store in the subfolders.
│   ├── index.js
│   └── middlewares         * Store middlewares.
│   └── moduleA
│       └── action-types.js
├── styles                  * All common styles (Sass, css, styled-component).
├── utils                   * Functions (for tests, for regex value testing, constants or filters.)
│   └── ...
├── pages                   * Routed components that represents pages.
│   └── ...
└── .vscode                 * VS Code workspace settings to work with ESLint rules and formatting
                              (you can also lint or fix on save 😉).
```

**Some important root files**

```text
.
├── .editorconfig           * Coding styles (also by programming language).
├── .env                    * Environment variables (env.production, env.local, env.uat, etc).
├── .eslintrc.json          * ESLint configuration and rules.
├── .prettierrc             * Formatting Prettier options.
└── jsconfig.json           * JS compiler configurations (eg. set the root folder for roots when import files).
```

## Conventions

Here are a few important conventions:

### Naming

- `Component names` should always be `multi-word`, except for root “App” components. Use “UserCard” or “ProfileCard” instead of “Card” for example.
  Each component should be in its own file.
- `Components files` should be always `PascalCase` except for HOC's. Use “UserCard.jsx".
- `Components are named accordingly to it's relative path to components or src`. Given that, a component located at src/components/User/List.jsx would be named as UserList. A component located at src/screens/User/List would be named as ScreensUserList.
- `Components that are in a folder with same name, don’t repeat the name in the component`. Considering that, a component located at src/components/User/List/List.jsx would be named as UserList and NOT as UserListList.
- Components that are only `used once per page should begin with the prefix “The”`, to denote that there can be only one. For example for a navbar or a footer you should use “TheNavbar.jsx or “TheFooter.jsx.
- `High Order Components` (HOC) file and folder name in `lowerCamelCase`.
- `Always use full name` instead of abbreviation in the name of your components. For example don’t use “UDSettings”, use instead “UserDashboardSettings”.
- `Each page is a react class component` having some state. A `page component` uses other components to assemble the page like lego blocks.
- `Keep components shallow`. If a components has a lot of nested markup then the chances of reusing it decreases. Instead we should take advantage of composition. It saves us from prop drilling or having to reach out to context api.
- `Presentational components` are those who `don’t have internal state`. Their role is to show certain pieces of UI/Layout. They are provided data via props or context api.
- `Container components` are those which `deals with business logic`. They usually have some state and only render presentational components based on the logic.
- This way Presentational and Container components complete the puzzle together. By `dividing the responsibilities`, code becomes easier to maintain and debug.

### Organization / Best practices

- Use a `central export file` (Barrel export -> index.js) in the components directory. With this file we can just import all of our components into it and export them. This will allow us to import components into any file from the same place.
- `Presentational` and `Container components` are kept at `src/components`.
- `Group components` by module/feature.
- Keep `generic components` inside src/components/UI or src/components/layout.
- `Keep pages simple`, with minimum structure and code.
- Group pages accordingly to route definition. For a route /user/list we would have a page located at /src/pages/User/List.jsx.

## Resources

I got inspired by:

- https://medium.com/hackernoon/structuring-projects-and-naming-components-in-react-1261b6e18d76
- https://blog.usejournal.com/how-i-structure-my-react-apps-86e897054593
- https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb
- https://reactjs.org/docs/faq-structure.html#is-there-a-recommended-way-to-structure-react-projects
