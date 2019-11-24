import React from "react"
import axios from "axios"

import CowForm from './CowForm.jsx'
import CowCard from './cowCard.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      loading: true,
      cows: [],
      name: "",
      description: "",
      topDescription: ""
    }
    this.fetchCows = this.fetchCows.bind(this);
    this.postCow = this.postCow.bind(this);

  }

  fetchCows(){
    axios.get("/api/cows")
    .then((res) => {
      console.log('fetch cows res.data ------>',res.data);
    if(res && res.data){
      this.setState({
        cows: [...this.state.cows, ...res.data],
        loading: false,
      })
    }
    })
    .catch(function(err){
      console.log('we have an error in the fetchCows', err);
    })
  }

  postCow(data){
    axios.post("/api/cow", data)
      .then((res) => {
        console.log('fetch cows res.data ------>',res.data);
        if(res && res.data){
          this.setState({
            cows: [...this.state.cows, res.data]
          })
        }
      })
      .catch(function(err){
        console.log('we have an error in the POST COW - APP.jsx', err);
      })
  }

 componentDidMount(){
    this.fetchCows()
  }






  render(){
    if(this.state.loading){
      return null;
    }
    return(
      <div>
        <CowForm postCow={this.postCow} />

        {this.state.cows.length && this.state.cows.map((cow, idx) => (
          <CowCard
            key={idx}
            cowName={cow.cowName}
            id={cow.cowId}
          />
        ))}

      </div>
    )
  }



}




export default App;
