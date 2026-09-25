This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/_page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically
optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.

## Tables:

- products: id(text), name(text), price(numeric(10, 2)), image(text), description(text)
- orders

## DB instruction

- 1 step:
  run docker app
- 2 step:

```bash
docker run --name nextjs-pg-container \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=nextjs-app \
  -p 5433:5432 \
  -d postgres
```

- 3 step: install DBeaver(or pg Admin)
- 4 step: open DBeaver and click Connect to a database, choose PostgreSQL
- 5 step: Host: localhost, Database: nextjs-app, Port: 5433, Username: user, Password: secret, => click button Test
  connection
  => after successful test press finish
- 6 step: right-click on the nextjs-app, open sql editor and run this code => run script button:

```sql
CREATE TABLE public.products (
	id text NOT NULL,
	"name" text NULL,
	price numeric(10, 2) NULL,
	image text NULL,
	description text NULL,
	CONSTRAINT products_pkey PRIMARY KEY (id)
);
```

- 7 step: for test add data in table => run this code:

```sql
INSERT INTO products (id, name, price, image, description)
VALUES ('p1', 'body-scrub', 3000.40, '/images/products/body-scrub.jpg', 'Body scrub gently exfoliates and renews the 
skin layer...')
```

- 8 step: run the project:
  ```npm run dev```

## admins(staff) table

- Create table 

```sql
CREATE TABLE public.staff_users (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	login text NOT NULL,
	password text NOT NULL,
	role TEXT NOT NULL
        CHECK (role IN ('admin', 'manager')),
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT NOW()
);
```
- Create table - staff sessions 
```sql
CREATE TABLE public.staff_sessions (
	token_hash text PRIMARY KEY,
	user_id BIGINT NOT NULL REFERENCES staff_users(id) ON DELETE CASCADE,
	expires_at timestamptz NOT NULL,
    created_at timestamptz NOT NULL DEFAULT NOW()
);
```
- password with pgcrypto
```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
```

```sql
INSERT INTO staff_users (login, password, role)
values (
    'admin',
    crypt('admin', gen_salt('bf')),
    'admin'
)
```

```sql
INSERT INTO staff_users (login, password, role, is_active)
values (
    'admin2',
    crypt('admin2', gen_salt('bf')),
    'admin',
    false
)
```

```sql
INSERT INTO staff_users (login, password, role)
values (
    'manager',
    crypt('manager', gen_salt('bf')),
    'manager'
)
```

```sql
INSERT INTO staff_users (login, password, role, is_active)
values (
    'manager2',
    crypt('manager2', gen_salt('bf')),
    'manager',
    false
)
```

```sql
INSERT INTO products (id, name, price, image, description)
values ('p2','whey', 2500,'/images/products/whey.jpg','Whey protein supports muscle growth and recovery daily...'),
       ('p3','spray', 3000, '/images/products/spray.jpg', 'Spray ensures light and even application every time...'),
       ('p4','shower-gel',1500,'/images/products/shower-gel.jpg','Shower gel delicately cleanses and softens the skin...'),
       ('p5', 'body-lotion', 2500, '/images/products/body-lotion.jpg', 'Body lotion deeply moisturizes and nourishes the skin...'),
       ('p6', 'facial-peeling', 4000, '/images/products/facial-peeling.jpg', 'Facial peeling gently removes dead skin cells each use...')
```

```sql
ALTER TABLE staff_users ADD CONSTRAINT unique_login  UNIQUE (login);
```

- local - add `.env.local` with database_url:
- `DATABASE_URL=postgresql://`userName`:`password`@localhost:5433/`dbName

```sql
ALTER TABLE staff_users
DROP CONSTRAINT staff_users_role_check
```

```sql
ALTER TABLE staff_users
ADD CONSTRAINT staff_users_role_check
CHECK (role IN ('admin', 'manager', 'intern'))
```

