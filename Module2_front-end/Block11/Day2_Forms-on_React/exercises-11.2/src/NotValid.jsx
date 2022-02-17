import React from "react";

class NotValid extends React.Component {
  render() {
    const { formError } = this.props
    return (
      <section>
        {
          Object.keys(formError)
            .filter((error) => formError[error].length !== 0)
            .map((field, index) => (
            <p key={index}>
              {field}: {formError[field]};
            </p>
          ))
        }
      </section>      
    )
  }
}

export default NotValid;