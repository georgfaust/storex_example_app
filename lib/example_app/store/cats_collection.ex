defmodule ExampleApp.Store.CatsCollection do
  use Storex.Store

  def init(_, _) do
    []
  end

  def mutation("add", [text], _, _, state) do
    new_state = [%{text: String.upcase(text), id: text} | state]

    dbg(new_state)
    {:noreply, new_state}
  end


end
