import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  return (
    <div style={{marginBottom: 10}}>
      filter
      <input type="text" onChange={(event) => props.setFilter(event.target.value)} />
    </div>
  )
}

export default connect(
  null,
  { setFilter }
)(Filter)