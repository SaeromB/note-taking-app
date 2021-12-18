type Note = {
  title: string
  content: string
  complete: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void
type AddTodo = (text: string) => void
type CloseNote = (selectedNote: Note) => void
