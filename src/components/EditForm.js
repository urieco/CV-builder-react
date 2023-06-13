import { useState } from 'react'
import InfoDisplay from './InfoDisplay'

let temp = Object.create(null)

function EditForm
  ({ preValue, id, inputType, saveToTemp }) {
  const [value, setValue] = useState(preValue)
  const [isEditing, setEditing] = useState(true)

  const idName = id.charAt(0).toUpperCase() + id.slice(1)

  if (isEditing) {
    return (
      <form
        className='editForm'
      >
        <label htmlFor='editInput'>
          {idName}:
          <input
            id={id}
            className='editInput'
            name='editInput'
            type={inputType}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Update information'
          />
        </label>
        <button
          className="doneEditBtn"
          onClick={(e) => {
            e.stopPropagation()
            Object.assign(temp, { [id]: value })
            saveToTemp()
            setEditing(false)
          }}
        >
          &#10003;
        </button>
      </form>
    )
  } else {
    if (id === 'company') {
      return <h4 className='company'>{value}</h4>
    } else {
      return <InfoDisplay
        id={id}
        value={value}
        saveToTemp={saveToTemp}
      />
    }
  }
}

export { EditForm, temp }