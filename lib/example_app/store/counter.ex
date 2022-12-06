defmodule ExampleApp.Store.Counter do
  use Storex.Store

  def init(_, _), do: %{counter: 1}
  def mutation("inc", _, _, _, state), do: {:noreply, %{state | counter: state.counter + 1}}
  def mutation("dec", _, _, _, state), do: {:noreply, %{state | counter: state.counter - 1}}
  def mutation("set", [number], _, _, state), do: {:noreply, %{state | counter: number}}
end
