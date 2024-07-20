# E-commerce-Web Project

**Student Name**: Bhumit Jayantilal Prajapati  
**Student Number**: 8981644
**Date**: 2024/07/19

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js with Express  
**Database**: Sql Server

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized Node.js project with Express and connected to SqlServer.

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
