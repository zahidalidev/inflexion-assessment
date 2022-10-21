import './styles.css'

const Breadcrumb = () => (
  <ol className='container breadcrumb'>
    <li>
      Home <span className='breadcrumb-trail'> » </span>
    </li>
    <li>
      Library <span className='breadcrumb-trail'> » </span>
    </li>
    <li>Data</li>
  </ol>
)

export default Breadcrumb
