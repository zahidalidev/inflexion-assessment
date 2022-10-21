import './styles.css'

const Card = ({
  school: {
    name, street, city, state, zip, website,
  },
}) => (
  <div className='card border-light mb-3 mr-5 mt-4 col-md-4'>
    <div className='card-header'>{name}</div>
    <div className='card-body'>
      <p className='card-text'>
        <strong>Adress:</strong> {street}, {city}, {state}
      </p>
      <p className='card-text'><strong>Zip Code: </strong>{zip}</p>
      <a href={website} className='card-text'>
        Website
      </a>
    </div>
  </div>
)

export default Card
