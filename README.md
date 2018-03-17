# dnd-race-informer

> A Vue.js project

## Install Vue-CLI
`npm install -g vue-cli`

## Bootstrap the Application
* Create a new app using the webpack template.
* `vue init webpack your-project`
* Now `cd` into the project you just made when you ran the `vue init` command.

## Install Dependancies
`npm install`

## Serve with hot reload at localhost:8080
`npm run dev`

## Set Up API Request
** If you run into CORS issues, make sure to include the 'www' at the beginning of your API request

## Set Up Form
* Use the data coming in from the D&D API to provide the race names associated with each checkbox.
* Create a submit button that is disabled until the user choose 2 races.

## Populate information from API request into a table
* Using the `.get` and `.all` methods, bring data from the D&D API request into a table.
* Use a `v-if` command to look for data in your 'result1' and 'result1' arrays. This will keep the table hidden until the user clicks on the 'Compare' button.

## Build for production with minification
* Then `npm run build`
** If deploying to Github make sure to change the 'dist' folder to 'docs' in the 'build' area of the 'index.js' file.
** You will also need to delete the '/' out of the 'assetsPublicPath'.



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# dnd-informer
