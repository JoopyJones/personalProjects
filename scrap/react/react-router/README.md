TODO

  SERVER
   - implement endpoint to remove card from database
   - add in error handling into all endpoints
  
  CLIENT
  * update card list page to include a button to remove cards from the list
  - add client side error handling for the db fetches
  - do something with the home page and todo page - these should be new react concepts

BUGS

  1. When adding a new card and going back to the cards screen, the href for the new card isn't set to anything
      - this is because the link is dependent on the mongodb entry id, and since we don't query the database again, we don't have this value
      - solution: change the route parameter to be the card name, not the mongodb entry id
  
  2. Once in the focused card screen, if you click on the breadcrumb of that card id, it will go to the 404 page.
      - goes to /<card_id> rather than /cards/<card_id>
  
  3. If you try to go to /cards/<card_id> for one that doeesn't exist, the error is not caught by the route error functionality
  
  4. Once in the focused card screen, if you refresh the page the card not page will show
      - the route error handling does work correctly here
      - think it's because the page loads before the state is finished loading?
  
  5. Card list becomes misaligned when card titles has more than 1 line of text
  6. Dual sided cards currently break search logic
