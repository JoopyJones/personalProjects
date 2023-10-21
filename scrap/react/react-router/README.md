TODO

  SERVER
  
  CLIENT
  * implement functionality to hover over card image to show 2nd face card
    - for card-search, random-card, and card pages
  - do something with the home page and todo page - these should be new react concepts

BUGS
  1. If you try to go to /cards/<card_id> for one that doeesn't exist, the error is not caught by the route error functionality
    - currently have the manual error disabled, currently will show blank card page
    - solution: implement JSX to be shown instead of hoping route error will catch it
