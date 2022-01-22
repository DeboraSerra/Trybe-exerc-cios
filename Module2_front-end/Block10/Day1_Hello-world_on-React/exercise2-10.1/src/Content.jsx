import React from "react";

const contents = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Learned'
  },
  {
    conteudo: 'Components Composition',
    bloco: 11,
    status: 'Learning',
  },
  {
    conteudo: 'State composition',
    bloco: 12,
    status: 'Will learn'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Will learn'
  },
];

class Contents extends React.Component {
  render() {
    return (
      <section className="contents">
          {contents.map((content) => {
            return (
              <section key={content.conteudo} className="card">
                <h4>The content is: {content.conteudo}</h4>
                <p>Status: {content.status}</p>
                <p>Block: {content.bloco}</p>
              </section>
            )
          })}
      </section>
      
    )
  }
}

export default Contents;