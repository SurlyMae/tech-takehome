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
:3000/api/expenses

# post
:3000/api/expenses
body: {name, amount}

# delete
:3000/api/expenses
body: {name}
```

<br>
<br>
<hr>
<br>
<br>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
