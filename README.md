# E-commerce-Web Project

**Student Name**: Bhumit Jayantilal Prajapati  
**Student Number**: 8981644
**Date**: 2024/07/19

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js with Express, [cloudinary for store Image]  
**Database**: Sql Server

### Project Setup

# E-commerce Web Application

## Overview
This project is a simple e-commerce web application built using Node.js, Express, React, and SQL Server. It includes functionalities such as displaying products, adding products to the cart, checkout process, and an admin dashboard for managing products.

## Prerequisites
To run this project, you will need the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 21.7.3 or later)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)

## Setup Instructions

### 1. Clone the Repository
1. Open your terminal.
2. Run the following command to clone the repository:
    ```bash
    git clone https://github.com/BhumitPrajapati/E-commerce-Web.git
    cd e-commerce-web
    ```

### 2. Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```
    
3. Ensure SQL Server is running and accessible.

#### Import the Database
To set up the database on another machine:
1. Ensure you have the `.bak` file from the export process.
2. Open SQL Server Management Studio (SSMS).
3. Connect to your SQL Server instance.
4. Right-click on the `Databases` folder and select `Restore Database...`.
5. In the `Restore Database` dialog, select `Device` and click the `...` button to browse for the `.bak` file.
6. Add the `.bak` file and click `OK`.
7. Ensure the destination database name is correct and click `OK` to start the restore process.

#### Create a SQL Server User for Authentication
1. Open SQL Server Management Studio (SSMS).
2. Connect to your SQL Server instance.
3. Run the following SQL commands to create a new SQL Server user:
    ```sql
    CREATE LOGIN your_sql_server_username WITH PASSWORD = 'your_sql_server_password';
    CREATE USER your_sql_server_username FOR LOGIN your_sql_server_username;
    ALTER SERVER ROLE sysadmin ADD MEMBER your_sql_server_username;
    ```

 4. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```env
    
    PORT=3030
    DB_HOST=your-sql-server-host
    DB_USER=your-sql-server-username
    DB_PASS=your-sql-server-password
    DB_NAME=your-database-name
    ```
    
5. Start the backend server:
    ```bash
    npm start
    ```

### 3. Frontend Setup
1. Open a new terminal window and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```


## Running the Application
1. Ensure both backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:3000` to access the application.



### Database Schema Design

## Products

`ProductId`:            INT         
`ProductName`:          VARCHAR     
`ProductPrice`:         DECIMAL     
`ProductImage`:         VARCHAR     
`ProductQuntity`:       INT         
`ProductDescription`:   TEXT        
`ProductCategoryId`:    INT         
`CreatedAt`:            TIMESTAMP   
`DeletedAt`:            TIMESTAMP   
`ModifiedAt`:           TIMESTAMP   

## ShoppingCart

`CartId`:              INT         
`UserId`:              INT         
`ProductId`:           INT         
`Quntity`:             INT         
`CreatedAt`:           TIMESTAMP


## Order

`OrderId`:             INT         
`UserId`:              INT         
`ProductId`:           INT         
`Quntity`:             INT         
`CreatedAt`:           TIMESTAMP   
`ModifiedAt`:          TIMESTAMP   

## OrderDetails

`Id`:                  INT      
`OrderId`:             INT      
`UserId`:              INT      
`ProductId`:           INT      
`Total`:               DECIMAL  
`PaymentId`:           INT      
`CreatedAt`:           TIMESTAMP

## PaymentDetails

`PaymentId`:            INT      
`OrderId`:              INT      
`UserId`:               INT      
`ProductId`:            INT      
`Total`:                DECIMAL  
`Status`:               VARCHAR  
`CreatedAt`:            TIMESTAMP

## UserDetails

`UserId`              INT       
`Address`             VARCHAR   
`City`                VARCHAR   
`PostalCode`          VARCHAR   
`Country`             VARCHAR   
`Mobile`              VARCHAR   
`MobileCountryCode`   VARCHAR   
`Email`               VARCHAR   
`CreatedAt`           TIMESTAMP 

## User

`UserId`:              INT      
`UserName`:            VARCHAR  
`Password`:            VARCHAR  
`FirstName`:           VARCHAR  
`LastName`:            VARCHAR  
`IsAdmin`:             BOOLEAN  
`CreatedAt`:           TIMESTAMP
`ModifiedAt`:          TIMESTAMP


## Manual Test Cases

### 1. Display Products
**Test Case ID**: TC001  
**Description**: Verify that products are displayed on the main page.  
**Steps**:
1. Navigate to the main page of the e-commerce website.
2. Check if the list of products is displayed.
3. Verify that each product shows its name, description, price, and image.

**Expected Result**: Products should be displayed with all details.

### 2. Product Details Page
**Test Case ID**: TC002  
**Description**: Verify that clicking on a product shows the product details page.  
**Steps**:
1. Click on any product from the main page.
2. Check if the product details page is displayed.
3. Verify that the product details page shows the product's name, description, price, and image.

**Expected Result**: Product details page should display all relevant information.

### 3. Add Product to Cart
**Test Case ID**: TC003  
**Description**: Verify that a product can be added to the shopping cart.  
**Steps**:
1. Navigate to a product's details page.
2. Click on the "Add to Cart" button.
3. Check if the product is added to the shopping cart.
4. Verify that the cart icon shows the correct count of items.

**Expected Result**: Product should be added to the cart and the cart icon should update.

### 4. View Shopping Cart
**Test Case ID**: TC004  
**Description**: Verify that the shopping cart can be viewed.  
**Steps**:
1. Click on the shopping cart icon.
2. Check if the shopping cart is displayed.
3. Verify that the shopping cart shows the list of added products, their quantity, and total price.

**Expected Result**: Shopping cart should display all added products with correct details.

### 5. Remove Product from Cart
**Test Case ID**: TC005  
**Description**: Verify that a product can be removed from the shopping cart.  
**Steps**:
1. Open the shopping cart.
2. Click on the "Remove" button for any product.
3. Check if the product is removed from the cart.
4. Verify that the cart icon updates the count of items.

**Expected Result**: Product should be removed from the cart and the cart icon should update.

### 6. Checkout Process
**Test Case ID**: TC006  
**Description**: Verify the checkout process.  
**Steps**:
1. Open the shopping cart.
2. Click on the "Checkout" button.
3. Fill in the required details (e.g., payment information, shipping address).
4. Submit the order.
5. Check if the order is placed successfully and a confirmation message is displayed.

**Expected Result**: Order should be placed successfully and a confirmation message should be shown.

### 7. Admin Login
**Test Case ID**: TC007  
**Description**: Verify the admin login functionality.  
**Steps**:
1. Navigate to the admin login page.
2. Enter valid admin credentials.
3. Click on the "Login" button.
4. Check if the admin dashboard is displayed.

**Expected Result**: Admin should be able to log in and see the dashboard.

### 8. Add New Product (Admin)
**Test Case ID**: TC008  
**Description**: Verify that an admin can add a new product.  
**Steps**:
1. Log in as admin.
2. Navigate to the "Add Product" page.
3. Fill in the product details (e.g., name, description, price, image).
4. Click on the "Add" button.
5. Check if the product is added and displayed on the main page.

**Expected Result**: Admin should be able to add a new product, and it should be displayed on the main page.

### 9. Edit Product (Admin)
**Test Case ID**: TC009  
**Description**: Verify that an admin can edit a product.  
**Steps**:
1. Log in as admin.
2. Navigate to the admin dashboard.
3. Click on the "Edit" button for any product.
4. Modify the product details.
5. Click on the "Save" button.
6. Check if the product details are updated.

**Expected Result**: Admin should be able to edit a product, and the changes should be reflected on the main page.

### 10. Delete Product (Admin)
**Test Case ID**: TC010  
**Description**: Verify that an admin can delete a product.  
**Steps**:
1. Log in as admin.
2. Navigate to the admin dashboard.
3. Click on the "Delete" button for any product.
4. Confirm the deletion in the popup.
5. Check if the product is removed from the main page.

**Expected Result**: Admin should be able to delete a product, and it should be removed from the main page.
