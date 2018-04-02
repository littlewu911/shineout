import { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Field extends PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    if (value && value.nativeEvent) {
      // eslint-disable-next-line
      value = value.target.value
    }

    this.props.onChange(value)
  }

  render() {
    const { children, value, error } = this.props
    return children({ value, error, onChange: this.handleChange })
  }
}

Field.propTypes = {
  children: PropTypes.func.isRequired,
  error: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
}

export default Field
