### Hakai Institute / Sentinels of Change
### Crab Life Cycle Walk

# Authors
Gaurav Kochar
Joshua Krauchi
Mazin Marwan
Mo Baydoun
Pariya Kasaeian
Sean Clayton

# Tech Stack
Created with React, Tailwind CSS, and the OpenLayers map API.

# How to Run
1. Go to the root directory in a command line interface.
2. Run `npm i --force` to install packages.
3. Run `npm start` to open the application in your browser, on localhost:3000.

# Folder structure
./public          - Holds regular standard site data such as the index.html file.
./src             - Holds all React components, data, and images.
./src/components  - Holds general-purpose React components that can be used across multiple pages.
./src/context     - Holds the React context component for data that is shared among multiple components.
./src/data        - Holds data about the badge map pins and the trivia questions.
./src/images      - Holds all the images used in the application.
./src/pages       - Holds all the bespoke components used in the application.
./src/styles      - Holds styling that affects the whole application.
./App.tsx         - Renders every individual page and routes the application's pages.
./index.tsx       - Renders the App component and attaches itself to the DOM.

### HOW TO CHANGE DATA

# Changing badge position
To change the coordinate location of each one of the badges, navigate to:
./src/data
Open the file "pinData.tsx".
There is an array of type PinData[] which holds data about each badge,
including the latitude/longitude location of that badge.
Change these numbers to fit your needs.

# Changing trivia questions
To change what questions can show in the trivia portion of the app, navigate to:
./src/data
Open the file "quizData.js".
The questions are in JSON format. Just follow the current format and add/edit questions as needed.
