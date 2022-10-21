import { AppBar, Breadcrumb, Card } from 'components'

import './styles.css'

const Home = () => (
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
        <div className='col-lg-12'>
          <Card />
        </div>
      </div>
    </div>
  </div>
)

export default Home
