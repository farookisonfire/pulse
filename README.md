# pulse

## Development
* Install MongoDB.
```bash
$ brew install mongodb
```

* After downloading Mongo.
```bash
$ mkdir -p /data/db
$ sudo chown -R `id -un` /data/db
$ # Enter your password
```
* Run the Mongo daemon to start the Mongo server, with `mongod`.

* With the Mongo daemon running in one terminal, run the Mongo shell in another, with `mongo`.

* In the Mongo shell, create the db.
```bash
> use ohs
```

* Install dependencies.
```bash
$ npm install
```

* Start the project.
```bash
$ npm start
```

* Once project has been built, and served, navigate to `localhost:3030` in your browser.
