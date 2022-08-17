# Getting Started with Create React App

To get started with TSP, you will need to download the necessary files.
So to start you need to first change the directory where you are currently are until you cd into TSP-main, which is located under the TSP-main-final folder/directory. In which case you start in the TSP-final directory/folder. Then you cd TSP-main-final and then cd TSP-main
to get to the source code where will you run the application.

Afterwards you will need to enter npm install --force in the terminal
to install the necessary dependencies and files for your node_module so
that our react application will run appropiately once you run it to your local host.

Then this is optional but not needed, you can enter npm audit fix or npm audit fix --force in the terminal to fix some of the vulnerabilities after setting up the node modules.

Once you have the node modules set up, make your terminal a split terminal inside an IDE like VSCode where we built and practice our application.
The terminal that is already in the TSP-main directory can stay the way it is for now but for the other terminal, you will need to cd TSP-main-final then cd TSP-main then cd backend to the backend directory so that you can run the backend code for the site to utilize in order to display the cashback rates and stores that it contains.

So once you have the other terminal in the backend directory thats within the TSP-main directory, run the command, python scraperv2.py. Then afterwards on the other terminal which should still be in the TSP-main directory, run npm start and wait for several seconds before it loads up the site in your local host.

Then the page will display start the test, click on that and after a few seconds you will be introduced to the main page of our site and it display 4 popular stores for you to view the cashback rates along with a header containing a logo, search bar and home button icon.

If you click on the boxes containing the best cashback rates for that particular store along with the name of the store, the site will redirect you to the corresponding rates page where it will display the cashback rates offered by many reward platforms such as Ibotta along with a bar chart. Inside these rate pages you can choose to click on any of the rate boxes that these reward platforms offer and it will redirect you to the corresponding reward platform site that offers these cashback rates.

If you happen to click on the logo or home button icon, it will redirct you to the main page of the website.

If you happen to click on the search bar in the main page of rates page it will redirect you to the search navigational page where you can search any stores that exists in our website which will display the stores accordingly to your input and if the store does not exists, it displays a non redirectable box that says like "this store does not exist, please enter again".

This is the general instructions to set up, compile and execute our application.
