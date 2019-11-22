import React from "react"
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cows: [],
      name: "",
      description: "",
      topDescription: ""
    }
    this.fetchCows = this.fetchCows.bind(this);
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

 componentDidMount(){
    this.fetchCows()
  }






  render(){
    if(this.state.loading){
      return null;
    }
    return(
      <div>
        {this.state.cows.length && this.state.cows.map((cow, idx) => (
          <div key={idx}>
              <p> name: {cow.cowName}</p>
          </div>
        ))}

      </div>
    )
  }



}




export default App;
