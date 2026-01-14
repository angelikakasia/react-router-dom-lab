import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import NavBar from './components/NavBar'
import MailboxList from './pages/MailboxList'
import MailboxDetails from './pages/MailboxDetails'
import MailboxForm from './pages/MailboxForm'
import LetterForm from './components/LetterForm/LetterForm'

const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter])
  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />

        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />

        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />

        <Route
          path="/new-letter"
          element={
            <LetterForm
              mailboxes={mailboxes}
              addLetter={addLetter}
            />
          }
        />

        <Route
          path="/mailboxes/:mailboxId"
          element={
            <MailboxDetails
              mailboxes={mailboxes}
              letters={letters}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
