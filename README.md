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


**Products Schema (MongoDB)**

- `name`: String
- `description`: String
- `price`: Number
- `category`: String
- `stock`: Number
- `imageUrl`: String

**Users Schema (MongoDB)**

- `username`: String
- `password`: String
- `email`: String

