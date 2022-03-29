import React from 'react';
import { connect } from 'react-redux';

class Posts extends React.Component {
  render() {
    const { posts, errorMessage, isLoading } = this.props;
    return (
      <section>
        {isLoading && <p> Loading...</p>}
        {errorMessage.message && !posts && <p>{errorMessage.message}</p>}
        {!errorMessage.message && posts && (
          posts.map(({ data }) => (
            <p key={ data.id }>{data.title}</p>
          ))
        )}
        {!errorMessage.message && posts.length === 0 && !isLoading && (
          <p>Select a subreddit</p>
        )}
      </section>
      
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.apiReducer.response,
  errorMessage: state.apiReducer.error,
  isLoading: state.apiReducer.isLoading,
})

export default connect(mapStateToProps)(Posts);
