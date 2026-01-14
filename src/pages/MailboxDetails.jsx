import { useParams } from 'react-router-dom'

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams()

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>
  }

  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  )

  return (
    <main>

      <h2>Mailbox {selectedBox._id}</h2>
      <p>Owner: {selectedBox.boxOwner}</p>
      <p>Size: {selectedBox.boxSize}</p>

      <h3>Letters</h3>

      {selectedLetters.length === 0 ? (
        <p>No letters yet.</p>
      ) : (
        selectedLetters.map((letter, idx) => (
          <div key={idx}>
            <p>
              <strong>To:</strong> {letter.recipient}
            </p>
            <p>{letter.message}</p>
          </div>
        ))
      )}
    </main>
  )
}

export default MailboxDetails
