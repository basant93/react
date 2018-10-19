import React, {Component, PureComponent} from 'react';
class RenderList extends PureComponent{

    constructor(props){
        super(props);
        console.log("[RenderList.js]  constructor loaded ....");
        this.state = {
            propsState : [],
            counter : 0
        }

    }

    componentWillMount(){
        console.log("[RenderList.js]  component will mount ....");
    }
    componentDidMount(){
        console.log("[RenderList.js]  component did mount ....");
    }

    componentWillReceiveProps(nextProps){
        console.log("[RenderList.js]  component will receive props ....");
        console.log("[RenderList.js]  component will receive props : ole props....", this.props);
        console.log("[RenderList.js]  component will receive props : new props....  ",this.nextProps );

    }

    componentWillUpdate(nextProps,NextState){
        console.log("[RenderList.js]  component will update ....");
        console.log("[RenderList.js]  component will update : old props : ", this.props);
        console.log("[RenderList.js]  component will update : new props : ", this.nextProps);
        console.log("[RenderList.js]  component will update : old state  : ", this.state);
        console.log("[RenderList.js]  component will update : new state : ", this.NextState);

    }

    // shouldComponentUpdate(nextProps,NextState){
    //     console.log("[RenderList.js]  component should update ....");
    //     console.log("[RenderList.js]  component should update : old props : ", this.props);
    //     console.log("[RenderList.js]  component should update : new props : ", this.nextProps);
    //     console.log("[RenderList.js]  component should update : old state  : ", this.state);
    //     console.log("[RenderList.js]  component should update : new state : ", this.NextState);

    //     console.log("[RenderList.js]  counter  : old val : ", this.props.counter);
    //     console.log("[RenderList.js]  counter : new val : ", this.nextProps.counter);

    //     return !(JSON.stringify(this.state) != JSON.stringify(this.NextState))
    //     //return true;
    // }

    componentDidUpdate(){
        console.log("[RenderList.js]  component did update ....");
    }

    incrementCounter(){
        let temp = this.state.counter +1;
        this.setState({counter : temp});

       // console.log("counter value : ". this.state.counter);
    }

    decrementCounter(){
        let temp = this.state.counter -1;
        this.setState({counter : temp});
        //console.log("counter value : ". this.state.counter);
    }


    render(){
        console.log("[RenderList.js]  render executed ....");

        return(
            <div>
                <h1> The country name is {this.props.country}</h1>
            <ul>
                {this.props.list.map((el, indx) =><li key={indx} 
                onClick={this.props.deleteList.bind(this.props.that, indx)}> 
                {el.name}</li>)}
                <div>
                <div onClick={this.incrementCounter.bind(this)}  > increase counter</div>
                <div onClick={this.decrementCounter.bind(this)} >decrease counter</div>
            </div>
            </ul>
            
            </div>
        );
    }

}

export default RenderList;