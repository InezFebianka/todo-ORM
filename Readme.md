Todo App

database : todoAppDB
table: Tasks

| Coloumn         | Constraint          | 
| --------------- |---------------------|
| id              | pk                  | 
| content         | varchar             | 
| status          | varchar             | 
| createdAt       | date                | 
| updatedAt       | date                | 


app endpoint:

| method          | Route           | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| GET             | /               | show all task include id, content, and status |
| GET             | /add            | show form to add task, input content          |
| POST            | /add            | submit task, redirect to /                    |
| GET             | /complete/:id   | update status to complete based on task id    |
| GET             | /uncomplete/:id | update status to uncomplete based on task id  |
| GET             | /delete/:id     | delete task based on params id                |
