# Harmonic take-home test for Brendan

This repository has the code for the take-home test for Harmonic, where the task was to to develop a query builder

## To run

### Hosted

* Go to [this link](http://doordropping.com/harmonic_brendan/)

![image](https://user-images.githubusercontent.com/1231492/137209498-d5518c3a-91a3-43fa-a9b5-3c511e485cf3.png)

### Locally

* Clone this repository
* `cd harmonic_brendan`
* `npm install`
* `npm start`

## Usage

Click on `Show me all the companies...` to open a search box

## Code

### Modules

This application uses React, with the setup by Create React App.

It uses typescript, eslint, and prettier for static analysis.

It uses [grommet](https://grommet.io) and styled-components for the visuals.

### Architecture

#### Components

The top level component is `App` which contains `TakeHome` and this contains `SearchContainer`.

Within `SearchContainer` the rendering exists for the search box to create a query and the search result.

#### Hooks

There are hooks for a simple implementation of I18n, search, and getting the data from the server.

## Design Decisions

I decided to use [grommet](https://grommet.io) for the UI design system. I did not want to have to re-implement a Dropdown and some of the text and layout features from grommet were nice too. I also used `styled-components` to augment the styling. I have used this a lot in the past, and it is my favorite method of styling in React.

The architecture of the data fetching is that all of the company data is fetched when the page is loaded, then the query is used to manipulate that data in memory. This approach was chosen because company data probably doesn't change very often, and there is not a huge payload so the startup cost is not too high, and the compromise is that manipulating the data on the client is much faster than requesting it from the server for every query change.

## TODO
* Pagination of results
* Saving the query
* Manipulation functions for the query over the data
* Sortable columns
* Auto-suggestion for the third (operand) field
