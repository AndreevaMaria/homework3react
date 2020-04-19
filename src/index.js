import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Hello from './Hello.js';
import Footer from './Footer.js';
import './style.css';


class Container extends React.Component {
  constructor() {
    super();
    this.state = { 
      pageTitle: 'Personal page',
      title: "React",
      name: 'Alison Wood',
      phone: "+01 555 757 28 12",
      email: 'alison_w@gmail.com'
    }
  }

  render() { 
    return <div>
        <Header page={this.state.pageTitle}/>
        <Hello title={this.state.title}/>
        <table class="personal">
          Проверьте внесенные данные:
          <table-body>
            <tr>
              <td>Ваше имя:</td> 
              <td class='inp'>{this.state.name}</td> 
            </tr>
            <tr>
              <td>Ваш телефон:</td> 
              <td class='inp'>{this.state.phone}</td> 
            </tr>
            <tr>
              <td>Ваша электронная почта:</td> 
              <td class='inp'>{this.state.email}</td> 
            </tr>
          </table-body>
        </table> 
      <Footer/>
    </div>
  };
}

ReactDOM.render(<Container />, document.getElementById('root'));
