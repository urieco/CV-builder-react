import { Component } from 'react'
import uniqid from 'uniqid'
import InfoDisplay from './InfoDisplay'
import { temp } from './EditForm'
import WorkInfoDisplay from './WorkInfoDisplay'
import { template } from './template'

export default class CVWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = template
    this.submitChange = this.submitChange.bind(this)
    this.saveToTemp = this.saveToTemp.bind(this)
    this.tempData = Object.create(null)   
  }

  saveToTemp () {
    Object.assign(this.tempData, temp)
    this.setState({warning: true})
  }

  submitChange () {
    this.setState(this.tempData)
    this.setState({warning: false})
  }

  render() {
    const { name, workAt, warning } = this.state
    const keys = Object.keys(this.state).filter(key => key !== 'warning')

    return (
      <form className='CVWrapper' onSubmit={(e) => {
        e.preventDefault()
        this.submitChange()
        console.log(this.state)
      }}>
        <h1>{name ? name + "'s Resume" : ''}</h1>
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
            return (
              <div className='workplace'>
                <WorkInfoDisplay
                  company={workplace.company}
                  position={workplace.position}
                  task={workplace.task}
                  dateFrom={workplace.dateFrom}
                  dateTo={workplace.dateTo}
                  saveToTemp={this.saveToTemp}
                />
              </div>
            )
          })
        }

        <button className='SubmitBtn'>
          Submit
         </button>
         {warning ? 
        <span id='warning'> (Some changes haven't been submitted) </span>
        : <></>
        }
      </form>
    )
  }
}