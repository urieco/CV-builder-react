import { EditForm } from "./EditForm"
import InfoDisplay from "./InfoDisplay"

export default function WorkInfoDisplay 
  ({ 
    company, 
    position, 
    task, 
    dateFrom, 
    dateTo, 
    id, 
    deleteWorkplace, 
    saveToTemp}) 
{
  const array = [
    { key: 'position', position },
    { key: 'task', task },
    { key: 'dateFrom', dateFrom },
    { key: 'dateTo', dateTo }
  ]

  const onDelete = (e) => {
    e.stopPropagation()
    deleteWorkplace(id)
  }

  return (
    <div 
      className='workInfo' 
      data-id={id}
    >
      <h4 className='company'>
        {company ? company : 
        <EditForm
          preValue=''
          id='company'
          inputType='text'
          saveToTemp={saveToTemp}
        />}
        <button 
          className='deleteWorkplace'
          onClick={onDelete}
        > 
          X 
        </button>
      </h4>
      {array.map((item) => {
        if (item[item.key]) {
          return (
            <InfoDisplay
            id={item.key}
            value={item[item.key]}
            saveToTemp={saveToTemp}
          />
          )
        } else {
          return (
            <EditForm
              preValue=''
              id={item.key}
              inputType={item.key.slice(0,4)==='date' ? 'date' : 'text'}
              saveToTemp={saveToTemp}
            />
          )
        }
      })}
    </div>
  )
}