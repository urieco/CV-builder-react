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
    saveToTemp }) {
  const array = [
    { key: 'company', company },
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
      {array.map((item) => {
        if (item[item.key]) {
          return (
            <>
              <InfoDisplay
                id={item.key}
                value={item[item.key]}
                saveToTemp={saveToTemp}
              />
              {item.key !== 'company' ?
                null
                :
                <button
                  className='deleteWorkplace'
                  onClick={onDelete}
                >
                  X
                </button>}
            </>

          )
        } else {
          return (
            <EditForm
              preValue=''
              id={item.key}
              inputType={item.key.slice(0, 4) === 'date' ? 'date' : 'text'}
              saveToTemp={saveToTemp}
            />
          )
        }
      })}
    </div>
  )
}