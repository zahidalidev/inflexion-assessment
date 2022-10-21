import './styles.css'

const Card = () => (
  <div className='card border-light mb-3' style={{ maxWidth: '20rem' }}>
    <div className='card-header'>Header</div>
    <div className='card-body'>
      <h4 className='card-title'>Light card title</h4>
      <p className='card-text'>
        Some quick example text to build on the card title and make up the bulk of the card content.
      </p>
    </div>
  </div>
)

export default Card
