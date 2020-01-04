import React, {Component} from 'react';

import './Admin.styles.scss';

class Admin extends Component {
  state = {
    urlArray:[]
  }

  componentDidMount() {
    this.setState({urlArray: JSON.parse(localStorage.getItem("urlArray"))})
  }

  handleExpired = () => {
    let urlArray = [...this.state.urlArray].filter(urlObj => {
      if (
        //not visited && less than a year
          (urlObj.visited_date === null && 
            //3162240000 represents 1 year
            ( Math.round(new Date().getTime()/1000) - urlObj.visited_date ) < 3162240000 )
          ||
        //visited  && less than a year
          (urlObj.visited_date !==null && 
          //3162240000 represents 1 year
          ( Math.round(new Date().getTime()/1000) - urlObj.visited_date ) < 3162240000 )
        ) {
        return true;
      }
    })

    //set localstorage
    localStorage.setItem("urlArray", JSON.stringify(urlArray))
    //update local state
    this.setState({urlArray: urlArray});
  }

  handleVisited = (originalUrl) => {
    let urlArray = JSON.parse(localStorage.getItem('urlArray'));
    urlArray.forEach( (urlObj,idx) => {
      if(urlObj.originalUrl === originalUrl) {
        urlArray[idx].visited_date = Math.round(new Date().getTime()/1000);
      }
    })
    localStorage.setItem("urlArray", JSON.stringify(urlArray));
  }

  determineList = () => {
    let {urlArray} = this.state;

    if(urlArray.length >0) {
      return urlArray.map((urlObj,idx) => {
        return (
          <p>
            <a 
              href={`${urlObj.originalUrl}`} 
              key={idx}
              onClick={()=>this.handleVisited(urlObj.originalUrl)}
              target="_blank"
              >{urlObj.tinyUrl}
            </a>
          </p>
        )
      })
    } else {
      return <p>No Urls added yet.</p>
    }
  }

  render() {
    return (
      <div className="home">
        <h1>Admin</h1>
        <h3>List of urls</h3>
        <button
          onClick={this.handleExpired}
        >Auto Expire</button>
        <div className="url-list">
          {this.determineList()}
        </div>
      </div>
    )
  }
}

export default Admin;