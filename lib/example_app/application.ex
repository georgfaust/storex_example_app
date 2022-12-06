defmodule ExampleApp.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      {
        Plug.Cowboy,
        scheme: :http,
        plug: ExampleApp.Router,
        options: [
          dispatch: PlugSocket.plug_cowboy_dispatch(ExampleApp.Router)
        ]
      }
    ]

    opts = [strategy: :one_for_one, name: ExampleApp.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
