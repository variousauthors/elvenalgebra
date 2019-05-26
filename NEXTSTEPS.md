NEXTSTEPS
=========

# Customize Event Building Info
 - display grayed out mana/pop/supply/culture icons
 - when the user clicks one, it colors and a field for that stat is added to the card
 - this way the user can easily see (and filter by) which of the stats are included in a building
 - if a symbol is gray, then regardless of whether the event in the store has a value for population,
   by example, it will not include population in the calculation of effective area.

# Styled Components

Use the ThemeProvider from styled-components, and pass in the MuiTheme.
Then we can use styled components and still have access to the MuiTheme

# Data
 - [] scrape residence/workshop stats by race/level

# Layout
 - [] make it prettier

# Workshop Efficiency
 - [] fields for workshop stats
 - [] add supplies field for event buildings
 - [] include supplies in efficiency calculation

# Create/Edit Event Buildings
 - [x] render efficiency of culture/pop building
 - [x] a reducer that has many event buildings
 - [x] a plus button that adds a new event building
 - [x] a component to render an editable event building
 - [x] a component to render the efficiency score etc...