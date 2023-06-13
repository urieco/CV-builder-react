import { useState } from 'react'
import InfoDisplay from './InfoDisplay'

let temp = Object.create(null)

function EditForm
  ({ preValue, id, inputType, saveToTemp }) {
  const [value, setValue] = useState(preValue)
  const [isEditing, setEditing] = useState(true)

  const idName = id.charAt(0).toUpperCase() + id.slice(1)

  const onDoneEdit = (e) => {
    e.stopPropagation()
    if (
      id !== 'company'
      && id !== 'position'
      && id !== 'task'
      && id !== 'dateFrom'
      && id !== 'dateTo'
    ) Object.assign(temp, {
      isWork: false,
      keyName: id,
      value: value
    })
    else {
      const targetElement = document.querySelector(`#${id}`)
      const parent = targetElement.parentNode.parentNode.parentNode
      const dataId = parent.getAttribute('data-id')
      const assignedObj = {
        isWork: true,
        keyName: id,
        value: value,
        dataId: dataId
      }
      Object.assign(temp, assignedObj)
    }
    saveToTemp()
    setEditing(false)
  }

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
          onClick={onDoneEdit}
        >
          &#10003;
        </button>
      </form>
    )
  } else {
    return <InfoDisplay
      id={id}
      value={value}
      saveToTemp={saveToTemp}
    />
  }
}

export { EditForm, temp }