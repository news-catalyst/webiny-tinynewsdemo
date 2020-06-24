# tinynewsdemo

A tiny news site built on webiny with bulma styling.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This readme is a work in progress and will be updated as we make progress. For now, the site is a basic react app with [bulma themes](https://jenil.github.io/bulmaswatch/) as an add-on (we're using the `Journal` theme for now).

## Setup

You'll need to create a `.env` file in the root of your repo's top-level directory. It should contain the following environment variables that will let this react app interact with webiny APIs:

```
REACT_APP_GRAPHQL_URL="<webiny url that ends with ->/cms/read/production"
REACT_APP_ACCESS_TOKEN="<access token needs to be created in webiny admin app>"
```

The graphql url is output after you deploy your webiny API, but confusingly it's not called that ;) Instead it's called the "Content Delivery API" and should end in "/cms/read/production".

The access token needs to be created in your webiny admin app, which you should have started up after deploying the API:

```
cd apps/admin
yarn start
```

Once the admin app is running, find the "Access Tokens" menu item on the left (scroll down). From there, create a new access token *making sure to click the Production checkbox*. Copy and paste the generated value into your `.env` file.

After you've setup the `.env` you should be able to start this react app by running:

```
yarn start
```

## GraphQL Playground

Note: I had some trouble getting my graphql playground, which is a GUI explorer for graphql that runs in your browser, to work. Here's how I ended up fixing it:

1. Open the graphql playground; the hostname should be the same as your "REACT_APP_GRAPHQL_URL" above, only it ends with "/graphql" instead
2. Open the "HTTP Headers" panel at the bottom
3. Be sure to have your access token from the previous "Setup" section
4. Paste the following into the "HTTP Headers" panel:
```
{
  "Authorization": "<YOUR ACCESS TOKEN GOES HERE>"
}
```
5. Make sure to paste your access token in between the quotes above.

Once you do that, you should be able to work with the graphql playground. 

This tool is pretty cool and lets you explore the data live - check out that "DOCS" tab on the right, the data is ... self-documenting.

For instance, after I made a content model called "Basic Article" and added an example article to the cms, I had documentation for a query called `getBasicArticle`.

The query panel also has contextual help - as long as you're between curly braces, you can hit ctrl-space and get a menu showing available terms.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
