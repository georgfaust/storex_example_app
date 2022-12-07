# Storex Example App

```
$ mix deps.get
assets/vanilla$ npm i
```

There are vanilla and solid examples (select an app in `config/config.exs`).

For vanilla:

```
assets/vanilla$ ./node_modules/.bin/esbuild app.js --outfile=www/main.js --bundle
```

For solid:

```
assets/solid$ node build.js
```

Then run the server:

```
$ mix run --no-halt
```
