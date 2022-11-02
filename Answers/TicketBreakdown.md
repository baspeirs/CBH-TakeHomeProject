steps:
        ## front end form to add custom id to agent 
            - 1-3 days (if graphic designer is involved in project, they will need time to implement design)
        ## add custom id to database agent entries 
            - 5-7 days 
            - are we using an ORM? - no ORM will cause slower build
            - are we using SQL or NoSQL (such as MongoDB)? - SQL database will require extra work with adding new variable to entries
            - will the custom ID be required? - if custom ID is required, each entry will need to be updated / if not required, program can ad Database ID when custom ID is not available (null or empty)
        ## Update API to make modified Querry 
            - 2-3 days
            - cant be finished until both client side updates and database updates are completed 
        ## Unit testing - 1-3 days depending on bugs found in solution

        ## Total Time: 8-13 days (splitting front end and back end duties between 2-3 engineers to achieve fastest results)