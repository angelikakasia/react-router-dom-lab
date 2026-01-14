import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailboxes</h2>

      <div>
        {mailboxes.map((mailbox) => (
          <Link
            key={mailbox._id}
            to={`/mailboxes/${mailbox._id}`}
          >
            <div className="mail-box">
              <h3>Mailbox {mailbox._id}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default MailboxList
