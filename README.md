# Storex Example Apps

- Vanilla + https://github.com/nerdslabs/storex examples.
- https://www.solidjs.com + https://github.com/nerdslabs/storex examples.

## Prerequisites

- node >= 18
- Elixir >= 1.14

## Getting Started

```
$ mix deps.get
```

There are vanilla and solid examples.
Select an app in `config/config.exs` and then:

```
assets/<selected-app>$ npm i
assets/<selected-app>$ sh ./build.sh
```

Then run the server:

```
$ mix run --no-halt
```

and open `http://localhost:4000/`
