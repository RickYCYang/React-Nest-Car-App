# Car App
- Frontend: React, Redux Toolkit, Styled-Component, Tailwind, Graphql(Apollo Client)
- Backend: Nestjs, TypeORM, Graphql
- Database: MySQL
- Author's tutorial video [https://www.youtube.com/watch?v=4ELH8CT4J0A&ab_channel=CoderOne]

## Use docker to create MySQL database

docker image: mysql

`docker run --name mysql -d -p 127.0.0.1:3306:3306 -e MYSQL_ROOT_PASSWORD=pass -e MYSQL_DATABASE=yourcar -e MYSQL_USER=test -e MYSQL_PASSWORD=pass mysql`

1. Create docker container by image mysql
2. Run in port 3306,
3. Set account "root" 's password = pass
4. Create account test and password = pass
5. Create a database = yourcar

`docker exec -i -t mysql bash`

Enter docker container mysql

## MySQL Available Scripts

`mysql -u root -p`

Enter mysql database by user root

`USE database_name;`

Change database to database_name

`CREATE DATABASE database_name`;

Create a new database database_name

If you want to connect to database by Workbench, you need to run the following sql

`CREATE USER 'test'@'172.17.0.1' IDENTIFIED BY 'pass';`

`GRANT ALL PRIVILEGES ON *.* TO 'test'@'172.17.0.1' WITH GRANT OPTION;`

`flush privileges;`

`ALTER USER 'test'@'172.17.0.1' IDENTIFIED WITH mysql_native_password BY 'pass';`



`CREATE DATABASE database_name`;

## Frontend Available Scripts

In the project directory (cd to react-car-app), you can run:

`yarn run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Backend Available Scripts

`yarn start:dev`

To setup the nestjs server in developing mode

`yarn start:prod`

To setup the nestjs server in production mode

Which DB connection would be used depends on what mode it is, the configuration file is in
nestjs-car-app/ormconfig.json

## GraphQL Available Scripts

Open Graphql Playground
http://localhost:9000/graphql [http://localhost:9000/graphql]

### Query Cars. 

`
  query car{  
    cars {  
      id,  
      name,  
      mileage,  
      gearType,  
      gas,  
      thumbnailUrl,  
      monthlyPrice,  
      dailyPrice  
    }   
  }  
`

### Add New Car

`
  mutation {
    addNewCar (
      newCarData: {
        name: "Audi S3 Car",
        monthlyPrice: 1600,
        dailyPrice: 70,
        gearType: "Auto",
        gas: "Petrol",
        mileage: "10k",
        thumbnailUrl: "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg"
      }
    ) 
    {
      id,
      name,
      mileage,
      thumbnailUrl
    }
  }
`
