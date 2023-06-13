import { useState } from 'react'
import {EditForm} from './EditForm'

export default function InfoDisplay({ id, value, saveToTemp }) {
  const [isEditing, setEditing] = useState(false)

  if (!value) setEditing(true)

  const idName = id.charAt(0).toUpperCase() + id.slice(1)

  const inputTypeCheck = (id) => {
    let type

    if (id.slice(0,4) === 'date') type = 'date'
    else if (id === 'phone' || id === 'email') type = id
    else type = 'text'
    return type
  }

  const inputType = inputTypeCheck(id)

  if (id === 'phone') 
    value = value.slice(0,3) + ' ' + value.slice(3,6) + ' ' + value.slice(6)

  return (
    <>
      {isEditing ? 
        <EditForm
          preValue={value} 
          id={id}
          inputType={inputType}
          saveToTemp={saveToTemp}
        /> :
        <div className='info'>
          {id !== 'company' ?
            <div className={id}>{idName}: 
              <span> {value}</span>
            </div>
            : <h5 className={id}>{value}</h5>
          }
          <button
            className="editBtn"
            onClick={() => setEditing(true)}
          >
            &#9998;
          </button>
        </div>}
    </>
  )
}
