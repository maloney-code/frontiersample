# Sample App For Frontier

Implemented the app via the template in about 30 min.
Implemented a responsive version took about 50 min

The responsive version uses bootrstrap cards.  If time allowed I would use a customized version of bootstrap to do this where I would override variables in _variables.scss.  I would then import the variables file and only the scss resources required for the features I would need to fit the Frontier style guidlines.  I chose this route because the utilities of bootstrap are highly customizable.  Using webpack to bundle resources also improves performance and browser compatibility.  I used React from the presentation but if there was more time I could control the server I would add a swagger wrapper for the api.  This would make it work nicely with azure service management and aid in domain driven design with microservices.

<br>

## Requires the most resent LTS version of NodeJs Installed

<br>

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs dependencies from npm

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/template](http://localhost:3000/template) to view it in the browser.
Open [http://localhost:3000/responsive](http://localhost:3000/responsive) to view the responsive version in the browser.  Note: this version does not support grouping by status due to time constraints

The page will reload if you make edits.\
You will also see any lint errors in the console.
