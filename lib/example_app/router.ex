defmodule ExampleApp.Router do
  use Plug.Router
  use PlugSocket

  plug(Plug.Static, from: "assets/www", at: "/")

  socket("/storex", Storex.Socket.Handler)

  plug(:match)
  plug(:dispatch)

  get "/" do
    send_file(conn, 200, "assets/www/index.html")
  end
end
