import { Component } from 'react'
import CVWrapper from './components/CVWrapper'
import './App.scss'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <CVWrapper />
      </div>
    )
  }
}