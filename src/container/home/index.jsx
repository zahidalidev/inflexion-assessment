import { useState } from 'react'

import { AppBar, Breadcrumb, Card } from 'components'
import Form from 'components/Form'
import schools from 'utils/constants'
import { formValidate } from 'utils/helpers/validate'

import './styles.css'

const Home = () => {
  const [fields, setFields] = useState([
    {
      placeholder: 'Enter name',
      value: '',
      error: '',
    },
    {
      placeholder: 'Enter street',
      value: '',
      error: '',
    },
    {
      placeholder: 'Enter city',
      value: '',
      error: '',
    },
    {
      placeholder: 'Enter zip code',
      value: '',
      error: '',
    },
    {
      placeholder: 'Enter wedsite',
      value: '',
      error: '',
    },
  ])

  const handleChange = (index, value) => {
    const tempFields = [...fields]
    tempFields[index].value = value
    setFields(tempFields)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const tempFields = formValidate(fields)
    setFields(tempFields)
  }

  return (
    <div>
      <AppBar />
      <Breadcrumb />
      <div className='container header-container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Schools</h1>
            <p className='lead'>List of program participants</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 row'>
            {schools.map((school) => (
              <Card school={school} />
            ))}
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 row justify-content-center pt-4 mb-4'>
            <Form handleChange={handleChange} fields={fields} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
