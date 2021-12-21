type Note = {
  title: string
  content: string
  complete: boolean
  archived: boolean
}

type AddNote = (title: string, content: string) => void
type CloseNote = (selectedNote: Note) => void
type ToggleNote = (selectedNote: Note) => void
