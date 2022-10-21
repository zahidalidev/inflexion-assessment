import './styles.css'

const TextField = ({
  field: { placeholder, value, error }, handleChange, index,
}) => (
  <div>
    <input
      className='text-field'
      required
      type='text'
      onChange={(e) => handleChange(index, e.target.value)}
      placeholder={placeholder}
      value={value}
    />
    {error && <p className='error'>{error}</p>}
  </div>
)

export default TextField
