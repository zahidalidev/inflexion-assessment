import { Button, TextField } from 'components'

import './styles.css'

const Form = ({ handleSubmit, fields, handleChange }) => (
  <form onSubmit={handleSubmit} className='form'>
    {fields.map((field, index) => (
      <TextField key={field.placeholder} field={field} index={index} handleChange={handleChange} />
    ))}
    <Button />
  </form>
)

export default Form
