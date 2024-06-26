defmodule ExampleApp.Router do
  @app Application.compile_env(:example_app, :app) |> dbg

  use Plug.Router
  use PlugSocket

  plug(Plug.Static, from: "assets/#{@app}/www", at: "/")
  plug Storex.Plug, path: "/storex"

  plug(:match)
  plug(:dispatch)

  get "/" do
    send_file(conn, 200, "assets/#{@app}/www/index.html")
  end
end
