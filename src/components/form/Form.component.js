import React, {Component} from 'react';

import './Form.style.scss';

class Form extends Component {

  state = {
    url: "",
    customUrl: ""
  }

  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    let shortUrlObj = {
      originalUrl: this.state.customUrl.length >0? `https://merry.com/${this.state.customUrl}`: this.state.url,
      tinyUrl: `https://merry.com/${this.makeTinyUrl()}`,
      created_at:Math.round(new Date().getTime()/1000),
      visited_date: null
    }
    
    //store it in local storage
    let urlArray = JSON.parse(localStorage.getItem("urlArray"));
    urlArray.push(shortUrlObj);
    localStorage.setItem('urlArray', JSON.stringify(urlArray))

    //clear out the form
    this.setState({"url": "", "customUrl":""});
  }

  makeTinyUrl = (url) => {
    if(this.state.customUrl.length === 0) {
      return Math.random().toString(36).replace('0.', '');
    } else {
      return this.state.customUrl;
    }
  }

  handleChangeUrl = (event) => {
    let value = event.target.value;
    this.setState({url: value})
  }
  handleChangeCustomUrl = (event) => {
    let value = event.target.value;
    this.setState({customUrl: value})
  }

  render() {
    return (
      <div className="form-container">
        <form 
          className="form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Enter a long URL to make more merry (short)</label>
            <input 
              name="url"
              type="text"
              value={this.state.url}
              onChange={this.handleChangeUrl}
            />
          </div>
          <button type="submit">Make Tiny</button>

          <hr />
          <p>Custom alias (optional):</p>
          <p>
          <span>http://merry.com/</span>
          <span>
          <input 
            type="text"
            name="customUrl"
            value={this.state.customUrl}
            onChange={this.handleChangeCustomUrl}
          />
          </span></p>
        </form>
      </div>
    )
  }
}

export default Form;