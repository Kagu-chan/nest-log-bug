# Setup

1) npm install

# Reproduction

1) npm run start:dev
2) open new terminal
3)
```
curl --location --request GET 'localhost:3000/profile' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "maria",
    "password": "guess"
}'
```
4) User is not provided

# Where it works
* Add `RolesGuard` in `src/app.controller.ts#L8`
* Remove providers in `src/roles/roles.module.ts`
```
curl --location --request GET 'localhost:3000/profile' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "maria",
    "password": "guess"
}'
```