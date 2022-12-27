import React, { Component } from 'react'
import axios from 'axios';
import TvCard from '../../components/TvCard';

class Axios extends Component {
    state = { 
        showsUrl: "http://api.tvmaze.com/shows",
        shows: [],
        showDiv:true
    }
        
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        axios.get(this.state.showsUrl).then(result => {
            console.log(result)
            if(result.status==200){
            this.setState({ shows: result.data });
            console.log(result.data)
            }
            else
            console.log("error")
        })
    }
    MovieCallBack = (name) => {
        console.log(name)
    }
    render() { 
        if(this.state.shows.length)
        return ( 
        <div className='row'>
            {this.state.shows.length && 
            this.state.shows.map(show => 
            <div key={show.id} className='col-3 mt-4'>
            <TvCard name={show.name} summary={show.summary} image={show.image ? show.image.medium : "" } callbackFN = {this.MovieCallBack}/>
            </div>
            )
            
            }
        </div> 
        );
    }
}

export default Axios;
            // <div>
            //     <img src={show.image.medium} alt="Card image cap"/>
            //     <div >{show.name}</div>
            //     <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
            // </div>