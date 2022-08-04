## Quick Start

```bash
$ npm i
$ docker-compose up dev-db
$ npx prisma db push
$ npx prisma db seed
$ npx prisma studio
$ npm run dev
```

## Detailed Start

### Install dependencies

```bash
$ npm i
```

### Get your local database up and running:

The repo provides a dockerized image of postgres.  
Start your docker daemon before running:

```bash
$ docker-compose up dev-db
```

If you don't want to use docker and have your own local postgres instance, you can use that instead.  
If you do this, you'll need to change the postgres url to point to your local database.  
It is the DATABASE_URL variable in the `.env` file.

### Connect ORM to db

```bash
# sync the database and prisma schema
$ npx prisma db push

# add some initial test data
$ npx prisma db seed

# view your db at localhost:5555
$ npx prisma studio
```

### Run the server:

```bash
 $ npm run dev
```

### API calls:

```bash
# get
localhost:3000/api/expenses

# post
localhost:3000/api/expenses
body: {name, amount}

# delete
localhost:3000/api/expenses
body: {name}
```

## Learn more

- [Next.js](https://nextjs.org/) (React Framework)
- [Prisma](https://prisma.io) (Node & TypeScript ORM)
