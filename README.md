# follower analyzer


This is a simple follower analyzer that consumes github API.

[Github API Docs](https://docs.github.com/pt/rest/users/users#get-a-user)

```
[GET]    /users/{username}
```

Use the dotenv (`.env`) to configure your application environment. Use this as the example:

```SH
USER=mateusnssn
```
Run the `save` script to save the first data, and later, after enough time to gain or lose followers, run `analyze`.

```json
"scripts": {
    "start": "node .",
    "save": "node ./src/save.js",
    "analyze": "node ./src/check.js"
  }
```

Have fun 

