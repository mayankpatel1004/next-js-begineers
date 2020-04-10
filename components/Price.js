class Price extends React.Component {
    state = {
        currancy : "USD"
    }

    render() {
        
        let list = '';
        if(this.state.currancy === 'USD'){
            list = <li>
            Bitcoin Rate for {this.props.bpi.bpi.USD.description} : 
            <span className="badge badge-primary">{this.props.bpi.bpi.USD.code}</span>
            <strong>{this.props.bpi.bpi.USD.rate}</strong>
            </li>
        } else if(this.state.currancy === 'GBP'){
            list = <li>
            Bitcoin Rate for {this.props.bpi.bpi.GBP.description} : 
            <span className="badge badge-primary">{this.props.bpi.bpi.GBP.code}</span>
            <strong>{this.props.bpi.bpi.GBP.rate}</strong>
            </li>
        } else if(this.state.currancy === 'EUR'){
            list = <li>
            Bitcoin Rate for {this.props.bpi.bpi.EUR.description} : 
            <span className="badge badge-primary">{this.props.bpi.bpi.EUR.code}</span>
            <strong>{this.props.bpi.bpi.EUR.rate}</strong>
            </li>
        }

        return (
            <div>
                <ul>
                    {list}
                </ul>
                <select onChange={e => this.setState({currancy:e.target.value})} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        );
    }
}

export default Price;