defmodule SimplePlugStatic.MixProject do
  use Mix.Project

  def project do
    [
      app: :example_app,
      version: "0.1.0",
      elixir: "~> 1.14",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger],
      mod: {ExampleApp.Application, []}
    ]
  end

  defp deps do
    [
      {:plug_cowboy, "~> 2.6"},
      {:plug_socket, "~> 0.1.0"},
      {:storex, "~> 0.2.3"},
      {:jason, "~> 1.3"},
      {:uuid, "~> 1.1"}
    ]
  end
end
