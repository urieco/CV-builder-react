import { Component } from 'react'
import uniqid from 'uniqid'
import InfoDisplay from './InfoDisplay'
import { temp } from './EditForm'
import WorkInfoDisplay from './WorkInfoDisplay'
import { template } from './template'
import AboutMe from './AboutMe'

export default class CVWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = template
    this.tempData = Object.create(null)

    this.addWorkplace = this.addWorkplace.bind(this)
    this.deleteWorkplace = this.deleteWorkplace.bind(this)
    this.submitChange = this.submitChange.bind(this)
    this.saveToTemp = this.saveToTemp.bind(this)

  }

  addWorkplace(e) {
    e.stopPropagation()
    const newWorkplace = {
      company: '',
      position: '',
      task: '',
      dateFrom: '',
      dateTo: '',
      id: uniqid()
    }

    this.setState({
      workAt: this.state.workAt.concat(newWorkplace)
    })
  }

  deleteWorkplace(id) {
    this.setState({
      workAt: this.state.workAt.filter((workplace) => workplace.id !== id)
    })
  }

  saveToTemp() {
    if (temp.isWork) {
      const targetWorkplace = this.state.workAt
        .filter((workplace) => workplace.id === temp.dataId)
      const targetIndex = this.state.workAt.indexOf(targetWorkplace[0])
      const assginedObj = {
        [temp.keyName]: temp.value
      }
      Object.assign(this.tempData, { workAt: this.state.workAt })
      Object.assign(this.tempData.workAt[targetIndex], assginedObj)

    } else Object.assign(this.tempData, { [temp.keyName]: temp.value })
    this.setState({ warning: true })
  }

  submitChange() {
    this.setState(this.tempData)
    this.setState({ warning: false })
    this.tempData = Object.create(null)
  }

  render() {
    const { name, workAt, description, warning } = this.state
    const keys = Object.keys(this.state).filter(key => key !== 'warning' 
      && key !== 'description')

    return (
      <div className='CVWrapper'>
        <form className='CVWrapperForm' onSubmit={(e) => {
          e.preventDefault()
          this.submitChange()
        }}>
          <h1 className='title'>{name ? name + "'s Resume" : ''}</h1>
          <h3 className='category'>Personal Information</h3>
          {
            keys.filter(key => key !== 'workAt').map((key) => {
              const keyValue = this.state[`${key}`]
              return (
                <InfoDisplay
                  id={key}
                  value={keyValue}
                  saveToTemp={this.saveToTemp}
                />
              )
            })
          }

          <h3 className='category'>
            Work Experience
            <button
              className='addWorkplace'
              onClick={this.addWorkplace}
            >
              +
            </button>
          </h3>
          {
            workAt.map(workplace => {
              const { company, position, task, dateFrom, dateTo, id }
                = workplace
              return (
                <>
                  <WorkInfoDisplay
                    company={company}
                    position={position}
                    task={task}
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    id={id}
                    deleteWorkplace={this.deleteWorkplace}
                    saveToTemp={this.saveToTemp}
                  />
                </>
              )
            })
          }

          <button className='submitBtn'>
            Submit
          </button>
          {warning ?
            <span id='warning'> (Some changes haven't been submitted) </span>
            : <></>
          }
        </form>
        <AboutMe 
          description={description}
          saveToTemp={this.saveToTemp}  
        />
      </div>
    )
  }
}