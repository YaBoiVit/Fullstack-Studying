import React, { Component } from 'react'
import CardComponent from '../../components/CardComponent';
import ChangeName from '../../components/ChangeName';
import CubeComponent from '../../components/CubeComponent';
import FunctionComponent from '../../components/FunctionComponent';
import './Home.css'


class Home extends Component {
    // JS Start
    state = { 
        name:"vit",
        titles:['card a','card b','card c','card d','card e','card f'],
        desc:['description a','description b','description c','description d','description e','description f'],
    }

    constructor(props) {
        super(props);
    }
    cardclicked = (index) => {
    console.log(index,this.state.titles[index])
    }
    CubeClicked=(color)=>{
    console.log("color: ", color)
    }
    render() { 
        return ( 
            <div className='p-5'>
                <div className='row'>
                    <div className='col-3'>
                    <FunctionComponent cardclickedFn={this.cardclicked} title={this.state.titles[0]} desc={this.state.desc[0]} index='0'/>
                    </div>
                    <div className='col-3'>
                    <FunctionComponent cardclickedFn={this.cardclicked} title={this.state.titles[1]} desc={this.state.desc[1]} index='1'/>
                    </div>
                    <div className='col-3'>
                    <FunctionComponent cardclickedFn={this.cardclicked} title={this.state.titles[2]} desc={this.state.desc[2]} index='2'/>
                    </div>
                    <div className='col-3'>
                    <FunctionComponent cardclickedFn={this.cardclicked} title={this.state.titles[3]} desc={this.state.desc[3]} index='3'/>
                    </div>
                    <div className='col-3'>
                    <FunctionComponent cardclickedFn={this.cardclicked} title={this.state.titles[4]} desc={this.state.desc[4]} index='4'/>
                    </div>
                    <div className='col-3'>
                    <FunctionComponent cardclickedFn={this.cardclicked} title={this.state.titles[5]} desc={this.state.desc[5]} index='5'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                    <CubeComponent cubeclickedFn={this.CubeClicked} index='0'/>
                    </div>
                    <div className='col-3'>
                    <CubeComponent cubeclickedFn={this.CubeClicked} index='1'/>
                    </div>
                    <div className='col-3'>
                    <CubeComponent cubeclickedFn={this.CubeClicked} index='2'/>
                    </div>
                    <div className='col-3'>
                    <CubeComponent cubeclickedFn={this.CubeClicked} index='3'/>
                    </div>
                    <div className='col-3'>
                    <CubeComponent cubeclickedFn={this.CubeClicked} index='4'/>
                    </div>
                </div>
            </div>
        );
    }
} 
export default Home;