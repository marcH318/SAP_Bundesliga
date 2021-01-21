# SAP_Bundesliga

First of all, please note that this project is part of one of my exams at the FH Aachen – University of Applied Science.
So, I am definitely no expert and there might be better ways to implement some parts of this project ;) 

The application will give you the opportunity to enter match results of the Bundesliga. These results will affect the statistics of each team so you can see the full Bundesliga table. 
Therefore, the Bundesliga application can be divided in two parts. One will display the table of the Bundesliga and the other one makes it possible to enter the results of matches. For this the entries of the database with all teams playing in the Bundesliga are changed accordingly.

The implemented process looks like this: After a result is entered, it is created in the database table with all results. In the table fields like points, scored goals etc. of the teams which played the match will be changed. These changes then will be visible in the overall table.

A requirement of the project is that as a development environment the SAP Business Application Studio is used. If you need further help setting up the development environment you can find help here: https://github.com/ceedee666/erp_scp_end_2_end/blob/master/docs/rqk_overview.md
Both parts of the application are Fiori Applications. To store and work with the data a database and services are needed.
