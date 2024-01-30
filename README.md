# CSUN-RCV Demo UI

This repository contains a React project serving as a demo website for the California State University Northridge, Real-Time Computer Vision system.

## Setup

1. Ensure you have [Yarn](https://yarnpkg.com/) installed.
2. Clone this repository.
3. Run `yarn install` to install dependencies.
4. Modify the API URLs in `src/api.js` to match your environment.

## Deployment

The app is set up to deploy automatically to GitHub Pages using the provided workflow. To enable deployment, add `ACTIONS_DEPLOY_ACCESS_TOKEN` to your GitHub repository secrets.

## Features

- Utilizes the React HLS player [React HLS Player](https://www.npmjs.com/package/react-hls-player).
- Displays live data using [Chart.js](https://www.npmjs.com/package/chart.js).

## License

This project is licensed under the MIT License. See the LICENSE file for details.
