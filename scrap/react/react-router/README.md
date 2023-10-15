TODO

  SERVER
  
  CLIENT
  * update card list page to include a button to remove cards from the list
  - do something with the home page and todo page - these should be new react concepts

BUGS
  1. Dual sided cards currently break search logic
  2. If you try to go to /cards/<card_id> for one that doeesn't exist, the error is not caught by the route error functionality
      - currently have the manual error disabled, currently will show blank card page
      - solution: implement JSX to be shown instead of hoping route error will catch it
  
  3. Card list becomes misaligned when card titles has more than 1 line of text
