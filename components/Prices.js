class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          { this.props.data.bpi[this.state.currency].code == 'USD' ? <li>{this.props.data.bpi['USD'].code} Nih</li> : <li>Ra Mudeng</li>}
          <li className="list-group-item">Bitcoin rate for {this.props.data.bpi[this.state.currency].description} : 
          <span className="badge badge-primary">{this.props.data.bpi[this.state.currency].code}</span> 
          <strong>{this.props.data.bpi[this.state.currency].rate}</strong>
        </li>
        </ul>
        <br/>
        <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="IDR">IDR</option>
        </select>
      </div>
    );
  }
}

export default Prices;