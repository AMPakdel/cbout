sudo kill -9 `sudo lsof -t -i:6000`

## Config PostgreSQL for TypeOrm

### Step 1
install npm package 'pg' for postgresql non-blocking client services:

```sh
    npm install pg
```

### Step 2

add postgress config variables to .env file

```env
    TYPEORM_CONNECTION=postgres
    TYPEORM_HOST=127.0.0.1
    TYPEORM_PORT=5432
    TYPEORM_USERNAME=cipherland
    TYPEORM_PASSWORD=mysecretpassword
    TYPEORM_DATABASE=cypherland
```

