import React from 'react'

class Sine extends React.Component {
    constructor(props) {
        super(props)
        
        this.x = 1
        this.state = {
            top: 30,
            ys: [],
            intervalId: null
        }
    }

    componentDidMount() {
        console.log(this.calc())
        var period = 40;
        var count = period * 3;
        var dx = (2*Math.PI / period);
        var amplitude = 20;
        var intervalId = setInterval(() => {
        this.setState({ ys: this.calc(dx, amplitude, count) });
        },25)
        this.setState({intervalId});
    }
    
    componentWillUnmount() {
     clearInterval(this.state.intervalId)
    }

    calc(dx, amplitude, count) {
        var ys = [];
        for (var i = 0; i <=count; i++){
          ys.push(Math.sin(this.x) * amplitude)
          this.x += dx
        }
        return ys;
    }

    render() {
        return (
            <div class='display' >
                {this.state.ys.map((y, i) => {
                    return (
                        <div key={i} class='pixel' style={{top: y + this.state.top + 'vh', left: 50 + (i*10) + 'px'}} >

                        </div>
                    )
                })}
            </div>
        )
      }
}

export default Sine
