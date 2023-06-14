import { useState } from 'react'
import { EditForm } from './EditForm'

export default function InfoDisplay({ id, value, saveToTemp }) {
  const [isEditing, setEditing] = useState(false)

  const idName = id.charAt(0).toUpperCase() + id.slice(1)

  const inputTypeCheck = (id) => {
    let type

    if (id.slice(0, 4) === 'date') type = 'date'
    else if (id === 'phone' || id === 'email') type = id
    else type = 'text'
    return type
  }

  const inputType = inputTypeCheck(id)

  if (id === 'phone')
    value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6)

  if (isEditing) {
    return (
      <EditForm
        preValue={value}
        id={id}
        inputType={inputType}
        saveToTemp={saveToTemp}
      />
    )
  } else {
    if (id === 'company' || id ==='description') {
      return (
        <div className='info'>
          <h4 className={id}>{value}</h4>
        </div>
      )
    } else {
      return (
        <div className='info'>
          <div className={id}>{idName}:
            <span> {value}</span>
          </div>
          <button
            className="editBtn"
            onClick={() => setEditing(true)}
          >
            &#9998;
          </button>
        </div>
      )
    }
  }
}
