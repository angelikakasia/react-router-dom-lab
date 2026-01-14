import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LetterForm = ({ mailboxes, addLetter }) => {
  const [formData, setFormData] = useState({
    mailboxId: '',
    recipient: '',
    message: '',
  })

  const navigate = useNavigate()

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addLetter({
      ...formData,
      mailboxId: Number(formData.mailboxId),
    })
    navigate(`/mailboxes/${formData.mailboxId}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mailbox:
        <select
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
          required
        >
          <option value="">Select a mailbox</option>
          {mailboxes.map((box) => (
            <option key={box._id} value={box._id}>
              Mailbox {box._id}
            </option>
          ))}
        </select>
      </label>

      <label>
        Recipient:
        <input
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Send Letter</button>
    </form>
  )
}

export default LetterForm
