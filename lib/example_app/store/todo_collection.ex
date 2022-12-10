defmodule ExampleApp.Store.TodoCollection do
  use Storex.Store

  def init(_, _) do
    []
  end

  def mutation("add", [text], _, _, state) do
    id = UUID.uuid1()
    new_state = state ++ [%{text: text, id: id, completed: false}]

    dbg(new_state)
    {:noreply, new_state}
  end

  def mutation("toggle", [id], _, _, state) do
    new_state =
      Enum.map(state, fn
        %{id: ^id, completed: completed} = todo -> %{todo | completed: !completed}
        todo -> todo
      end)

    dbg(new_state)
    {:noreply, new_state}
  end
end
