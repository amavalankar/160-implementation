# CS 160 Team 4: Designing Kinder Dining 

## Summary
Our goal was to create an app for UC Berkeley’s Basic Needs Center (BNC) to improve the food pantry distribution process. 
During contextual inquiry, we observed that the process of manually logging food inventory into the BNC’s database is inefficient and often results in inaccuracies in their system. 
Currently, the BNC does not offer a public view of their inventory. This is a recurring pain-point for BNC users, who may be looking for specific items and get frustrated when their desired items are not available during their pantry visits.

Our solution:
* Creating a connected BNC inventory and visitor interface to improve communication and queuing system.

* AI inventory entry system to automate inventory management allowing BNC team members to quickly and accurately log new food items into the inventory from invoices or pictures/videos

* Public view of the BNC’s food pantry displaying available items with descriptions, quantities, and other relevant information. This public view also supports language toggles and filters for common food allergens/dietary restrictions in order to increase transparency and accessibility of use.

## Running the React App

To run this project, you can open the project and run `npm install`, then `npm start` which will open the site on [http://localhost:3000](http://localhost:3000)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Functionality

Our project features an inventory management system which allows food items to be added along with their allergens, quantity, stock status, and images. We use Firebase to facilite the database and ReactJS for the front end interface.

Our scanning feature supports input of images with multiple food items to automate inventory entry. We have provided sample images under the `sample_images` folder.

Additional notes: 
* If there are missing module errors, delete the `node_modules` folder and re-run `npm install`.

* After choosing and uploading an image, it may be nessecary to wait a few additional seconds for the image to get properly uploaded to the firebase database before clicking "Save changes".


