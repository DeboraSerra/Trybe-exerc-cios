# Day 19.3 - Managing Containers with Docker Compose

For the first exercise we were oriented to follow the guidelines below:
1. Create an HTML file.
2. Create a container to maintain a server `httpd:2.4` Apache and attach it to the port 4545.
3. Access the page in your browser;
4. Change some content in the HTML file and see the change in the browser;
5. Get the id to the container;
6. Get the `Mounts` through the property `Source` to show the volume in the container;
7. Stop the container;
8. Delete the container;
9. Check if the HTML file still in the folder you created;
10. Get the Image Id and delete it.

For the exercises 2 and 3 the guides are below:
Create a compose to build a `ghost blog`.
1. Use the version 3;
2. Create a service and use the image `ghost:1-alpine`;
3. Map the port 2368 to the port 2368;
4. Run the docker-compose and access the port to see if everything works fine.

In the docker-compose created before:
1. Create a new service using the image `mysql:5.7`;
2. Define a root password in the environment variable `MYSQL_ROOT_PASSWORD`;
3. Configure the ghost service to use the MySQL defining the variable `database__client` to `mysql`;
4. Define the name `ghost` to the variable `database__connection__database`
5. Point the connection to the MySQL in the variable `database__connection__host`;
6. To define a root user and a password (defined before), use the variables `database__connection__user` and `database__connection__password`;
7. Use the option `depends_on` pointing to the database;
8. Run the docker-compose and access the port again.
