# Uber Authentication Users

Simple Authentication Endpoint for users 🎯

## API Reference

#### Ragister Users

```http
  POST /users/ragister
```

#### Body raw(json)

- 'fullname' (object) :
  - 'firstname' (string , required ) : Users First Name (Minimum 3 Characters).
  - 'lastname' (string , optional ) : Users Last Name (Minimum 3 Characters).
- 'email' (string , required ) : User Email (must be valid).
- 'password' (string , reqired ) : User Password (must be reqiuired 6 charcater long)

#### Response

- 'user' (object):
- 'fullname' (object) :
- 'firstname' (string , required ) : Users First Name (Minimum 3 Characters).
- 'lastname' (string , optional ) : Users Last Name (Minimum 3 Characters).
- 'email' (string , required ) : User Email (must be valid).
- 'password' (string , reqired ) : User Password (must be reqiuired 6 charcater long)
- 'token' (string): JWT Token

#### Login Users
