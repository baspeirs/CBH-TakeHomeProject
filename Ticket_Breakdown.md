# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

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