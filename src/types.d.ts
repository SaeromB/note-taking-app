type Note = {
  title: string
  content: string
  complete: boolean
}

type AddNoteTitle = (title: string, content: string) => void
type AddNoteContent = (content: string) => void
type CloseNote = (selectedNote: Note) => void
type ToggleNote = (selectedNote: Note) => void
