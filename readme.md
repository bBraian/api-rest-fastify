Projeto desenvolvido durante o curso de NodeJS da @Rocketseat

# Conceitos trabalhados
- Typescript
- Fastify
- EsLint
- Knex - SQL query builder
- Zod validator
- cookies

# RF
- User must can create a new transaction;
- User must can get the total value of his account;
- User must can list all transactions;
- User must can view a single transaction;

# RN
- The transaction can be of type credit that sums to the total value or debit that substracts the total value;
- It must be possible to identify the user between transactions;
- The user can only see transactions that he created;

# Routes
| Type   | Path       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/transactions` | Get all transactions |
| `GET` | `/transactions/{id}` | Get one transaction by id |
| `GET` | `/transactions/summary` | Get the summary of all transactions |
| `POST` | `/transactions` | Insert transaction |

Run the project

1. Coppy this repository
2. run 'npm install' to install the project's dependencys
3. run 'npm run knex -- migrate:latest' to run the migrations
4. run 'npm run dev' to run the server