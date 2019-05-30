NEXTSTEPS
=========

# Backlog

## Easy
 - Display event building's Score in a prominent way (red/yello/green)
   - score is calculated from efficiency as basically a sigmoid function from like 0 (red) to 3 (green)
 - Add Culture Bonus to supply calculations in playstyle config
   - just have a percent input
 - Event Building Sorting/Filters on the top of the page
   - sort by efficiency, filter by supply/population/mana/culture, filter by score, filter by collections (below)
 - Add Manufactories <-- lots of effort but very little thinking
 - Display the "breakdown" of effective area
 - Start importing and using icons from the game
 - Collections: in the side bar, add a "collection" item with a "+ add collection" sub item; navigating
   to a collection gives you a subset of the event buildings, those which have been added to that collection
   - Then: collection manager in the event building card
   - the tabs can just be the event-buildings route with the collection filter pre-set
 - Redesign the Event Building Card

## Hard
 - Scrape residence/workshop data to reduce data entry
   - Then: User selects a chapter, and this sets the residence/workshop level by default
   - Then: Event buildings display a prediction of when they will become obsolete
     - current score, and then a second score for "next chapter" and a third score for "next next chapter" etc...
     - maybe "roadmap"?
   - can just be a script that I run from the CLI to import data as JSON
 - Scrape Ancient Wonders data to reduce data entry
   - if I have done the previous task, this becomes much easier
 - Set Buildings
   - First thought: tab bar across the top with "+ set building" that gives you a modal menu of 
     the known set buildings.
     - each tab has a + fab which lets you add one of the set pieces
     - set pieces are like event buildings, but the efficiency is calculated for the whole group
   - Maybe Scrape these too?
     - then we can add the "link" counter
 - Import City from Elvenarchitext (Investigate)
   - this is a long-term goal, but I should prototype something to identify the hard parts
   - how to get the user's town
   - how to parse the weird Inno names
 - Ability to have multiple "towns" 
   - a "login" dropdown on the top-right where you can select your town and "+ town"
   - this way a player can + town and compare
   - route/filters/redux etc should all be persisted across changes so that a player can set filters
     and then toggle between towns to compare realities
 - Evolving Buildings??? these can just be event buildings...

# Event Building Card
 - Needs a paper mock up including:
 - Score badge
 - Culture/Population/Supply/Mana icons
 - Obsolescence Prediction
 - Collection Management tool (add to existing collections)
 - Effective Area breakdown

# Elvenarchitect Import
 - Import everything from Elvenarchitect and populate the redux store automatically
 - It should warn the user that it will overwrite everything

# Customize Event Building Info
 - display grayed out mana/pop/supply/culture icons
 - when the user clicks one, it colors and a field for that stat is added to the card
 - this way the user can easily see (and filter by) which of the stats are included in a building
 - if a symbol is gray, then regardless of whether the event in the store has a value for population,
   by example, it will not include population in the calculation of effective area.

# Data
 - [] scrape residence/workshop stats by race/level

# Workshop Efficiency
 - [x] fields for workshop stats
 - [x] add supplies field for event buildings
 - [x] include supplies in efficiency calculation

# Create/Edit Event Buildings
 - [x] render efficiency of culture/pop building
 - [x] a reducer that has many event buildings
 - [x] a plus button that adds a new event building
 - [x] a component to render an editable event building
 - [x] a component to render the efficiency score etc...