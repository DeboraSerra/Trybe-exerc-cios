import React from 'react';
import { connect } from 'react-redux';
import { fetchApi, errorApi } from '../redux/actions';

class SelectSubreddit extends React.Component {
  constructor() {
    super();
    this.state = {
      endpoint: '',
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ endpoint: value });
    const { dispatch } = this.props;
    if (value) dispatch(fetchApi(value));
  }

  render() {
    return (
      <select name="endpoint" onChange={ this.handleChange }>
        <option value="">Select a subreddit</option>
        <option value="reactjs">React JS</option>
        <option value="frontend">Front-End</option>
      </select>
    )
  }
}

export default connect(null)(SelectSubreddit);
