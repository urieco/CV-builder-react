import InfoDisplay from "./InfoDisplay"

export default function WorkInfoDisplay 
  ({ company, position, task, dateFrom, dateTo, saveToTemp}) 
{
  const array = [
    { key: 'position', position },
    { key: 'task', task },
    { key: 'dateFrom', dateFrom },
    { key: 'dateTo', dateTo }
  ]

  const onDelete = () => {
    document.querySelector('.workInfo').remove()
  }

  return (
    <div className="workInfo">
      <h4 className='company'>
        {company}
        <button 
          className='deleteWorkplace'
          onClick={onDelete}
        > 
          X 
        </button>
      </h4>
      {array.map(item => {
        return (
          <InfoDisplay
          id={item.key}
          value={item[`${item.key}`]}
          saveToTemp={saveToTemp}
        />
        )
      })}
    </div>
  )
}