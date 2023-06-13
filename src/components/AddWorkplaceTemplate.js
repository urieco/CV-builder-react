import uniqid from 'uniqid'
import WorkInfoDisplay from './WorkInfoDisplay'

export default function AddWorkplaceTemplate({ saveToTemp }) {

  const workAt = {

  }

  const array = Object.keys(workAt).map((key) => key !== 'id')

  array.map((item) => {
    return (
      <WorkInfoDisplay
        id={item}
        preValue={workAt[item]}
        saveToTemp={saveToTemp}
      />
    )
  })
 
}