# Hema-HBD-Wish App
This is especially for my friend birthday surprice.

## How to Run
- First clone the Repo.
- Next install the dependencies.
  ```$project/ npm install```
- Run the file
 ```$project/ npm start```

## Deploy Thuis in react-gh-pages
1.install the ```gh-pages```  package  as  a "dev-dependency" of the app.

``` sh
$ cd Hema-WISH_APP
4 npm install gh-pages --save-dev
```
2. Add some properties to the app's package.json file.
- At the top level, add a homepage property. Define it's value to be the string ```http://{username}.github.io/{repo-naame}.
-username: Github username.
- repo-name: The name of git hub repository name.
```json "homepage": "https://sreenadh2000.github.io/Hema-HBD-Wish",```
3. In the existing scripts property, add a ```predeploy``` property and a ```deploy``` property, each having the values show in below.
```json
"scripts":{
    //..
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
``