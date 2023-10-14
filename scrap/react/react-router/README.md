TODO

  SERVER
<<<<<<< HEAD
   - implement endpoint to remove card from database
=======
>>>>>>> 37e0409 (implemented redux to limit database activities)
   - add in error handling into all endpoints
  
  CLIENT
  * update card list page to include a button to remove cards from the list
<<<<<<< HEAD
=======
  * add functionality to remove card from store when deleted
>>>>>>> 37e0409 (implemented redux to limit database activities)
  - add client side error handling for the db fetches
  - do something with the home page and todo page - these should be new react concepts

BUGS

<<<<<<< HEAD
  1. Esika card screen doesn't work
      - now that we are replacing " " with "_" it looks to be messing with her name.
      - need to validate and see if other cards are messing up as well.
    
  2. Each time the code is saved while the app is open, the cards get re-added to the store.
  
  3. Once in the focused card screen, if you click on the breadcrumb of that card id, it will go to the 404 page.
      - goes to /<card_id> rather than /cards/<card_id>
  
  4. If you try to go to /cards/<card_id> for one that doeesn't exist, the error is not caught by the route error functionality
  
  5. Once in the focused card screen, if you refresh the page the card not page will show
      - the route error handling does work correctly here
      - think it's because the page loads before the state is finished loading?
  
  6. Card list becomes misaligned when card titles has more than 1 line of text
  7. Dual sided cards currently break search logic
=======
  1. Each time the code is saved while the app is open, the cards get re-added to the store.
  
  2. Once in the focused card screen, if you click on the breadcrumb of that card id, it will go to the 404 page.
      - goes to /<card_id> rather than /cards/<card_id>
  
  3. If you try to go to /cards/<card_id> for one that doeesn't exist, the error is not caught by the route error functionality
  
  4. Once in the focused card screen, if you refresh the page the card not page will show
      - the route error handling does work correctly here
      - think it's because the page loads before the state is finished loading?
  
  5. Card list becomes misaligned when card titles has more than 1 line of text
  6. Dual sided cards currently break search logic
>>>>>>> 37e0409 (implemented redux to limit database activities)
