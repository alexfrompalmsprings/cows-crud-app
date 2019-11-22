import React from 'react'

class CowForm extends React.Component{
  constructor(props) {
    super(props);
    this.initialState = {
      cowName:'',
      cowDescription:'',
    }
    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postCow(this.state)
    this.setState(this.initialState)
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.cowName}
          name="cowName"
          placeholder='enter cow name'
        />

        <textarea
          onChange={this.handleChange}
          type="text"
          value={this.state.cowDescription}
          name="cowDescription"
          placeholder='details about your cow'
        />

        <button type='submit'>
          submit
        </button>
      </form>
    )
  }

}

export default CowForm;

