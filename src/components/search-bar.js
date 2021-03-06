import  React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {searchText: "", placeHolder: "Tapez votre recherche...",intervalBeforeRequest:1000,lockRequest:false}
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 input-group">
                     <input  className="form-control input-lg"  type="text" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={this.handleClick.bind(this)}>GO</button>
                    </span>
                </div>
            </div>
        )

    }
    handleChange(ev){
        this.setState({searchText : ev.target.value})
        if(!this.state.lockRequest){
            this.setState({lockRequest:true});
            setTimeout(function(){this.search();
            }.bind(this),this.state.intervalBeforeRequest)
        }

    }
    search(){
        this.props.callback(this.state.searchText);
        this.setState({lockRequest:false})
    }
    handleClick(){
           this.search();
    }



}
export default SearchBar;