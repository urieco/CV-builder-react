import { useState } from 'react'
import testAvatar from '../images/testAvatar.jpg'
import InfoDisplay from './InfoDisplay'
import { EditForm } from './EditForm'

export default function AboutMe({ description, saveToTemp }) {
  const [isEditing, setEditing] = useState(false)

  const displayImage = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      const preview = document.getElementById('preview')
      preview.src = reader.result
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <div className="aboutMe">
      <img
        id='preview'
        alt='Avatar'
        src={testAvatar}
      ></img>
      <form>
        <label
          htmlFor="insertPicture"
          className="insertPicture"
        >
          +
        </label>
        <input
          type='file'
          accept='image/*'
          onChange={displayImage}
          value=''
          name='insertPicture'
          id='insertPicture'
        />
      </form>
      <div className='descriptionContainer'>
        {isEditing ?
          <EditForm
              preValue=''
              id='description'
              inputType='text'
              saveToTemp={saveToTemp}
          />
          :
          <>
          <InfoDisplay
            id='description'
            value={description}
            saveToTemp={saveToTemp}
          />
          <button 
            className='editBtn'
            onClick={(e) => {
              e.stopPropagation()
              setEditing(true)
            }}
          >
            &#9998;
          </button>
        </>
        }

      </div>
    </div>
  )
}