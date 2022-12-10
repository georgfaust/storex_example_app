defmodule ExampleApp.Store.TodoList do
  use Storex.Store

  def init(_, _) do
    %{todos: []}
  end

  def mutation("add", [text], _, _, state) do
    # id = UUID.uuid1()
    # new_state = put_in(state, [:todos, id], %{text: text, id: id, completed: false})
    # new_state = update_in(state, [:todos], &[%{text: text, id: id, completed: false} | &1])
    new_state = update_in(state, [:todos], &[text | &1])

    dbg(new_state)
    {:noreply, new_state}
  end

  # def mutation("toggle", [id], _, _, state) do
  #   index = Enum.find_index(state.todos, &(&1.id == id))
  #   new_state = update_in(state, [:todos, Access.at(index), :completed], &(!&1))
  #   dbg(new_state)
  #   {:noreply, new_state}
  # end
end
