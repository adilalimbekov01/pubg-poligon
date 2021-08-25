import React from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css"
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm" style={{margin:'20px auto'}}>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form style={{display:'flex', flexWrap:'wrap', marginTop:'20px', backgroundColor:'inherit'}}>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{height:'30px', borderRadius:"10px", fontSize:"18px"}}
          />
          <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          style={{height:'30px', borderRadius:"10px", fontSize:"18px"}}
        />
        <input
        type="tel"
        name="expiry"
        placeholder="MM/YY"
        onChange={this.handleInputChange}
        onFocus={this.handleInputFocus}
        style={{height:'30px', borderRadius:"10px", fontSize:"18px"}}
      />
      <input
      type="tel"
      name="cvc"
      placeholder="CVC"
      onChange={this.handleInputChange}
      onFocus={this.handleInputFocus}
      style={{height:'30px', borderRadius:"10px", fontSize:"18px"}}
    />
        </form>
      </div>
    );
  }
}