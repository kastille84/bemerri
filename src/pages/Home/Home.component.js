import React, {Component} from 'react';

import './Home.styles.scss';
import Form from '../../components/form/Form.component';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <h1>Merry Url</h1>
        <Form />
      </div>
    )
  }
}

export default Home;