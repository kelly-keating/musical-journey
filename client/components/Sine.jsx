import React from 'react'

class Sine extends React.Component {
    constructor(props) {
        super(props)
        
        this.x = 1
        this.state = {
            period: 40,
            amplitude: 30,
            wavelength: 3,
            top: 50,
            ys: [],
            intervalId: null
        }
    }

    componentWillUnmount() {
     clearInterval(this.state.intervalId)
    }

    componentDidMount() {
        var intervalId = setInterval(() => {
            var period = this.state.period
            var count = period * this.state.wavelength
            var dx = (2*Math.PI / period)
            this.setState({ ys: this.calc(dx, this.state.amplitude, count) })
        },25)

        this.setState({intervalId})
    }
    
    calc = (dx, amplitude, count) => {
        var ys = [];
        for (var i = 0; i <=count; i++){
          ys.push(Math.sin(this.x) * amplitude)
          this.x += dx
        }
        return ys;
    }

    getLeft = (num, p, w) => {
        return (100 * num) / ((p*w) + 1)
    }

    handleSlide = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div class='display' >
                {this.state.ys.map((y, i) => {
                    return (
                        <div key={i} className='pixel' style={{top: y + this.state.top + 'vh', left: this.getLeft(i, this.state.period, this.state.wavelength) + 'vw'}} />
                    )
                })}
                <div className="controls" >
                    <input name="amplitude" type="range" min="1" max="40" value={this.state.amplitude} onChange={this.handleSlide} step="1"/>
                    <input name="period" type="range" min="1" max="120" value={this.state.period} onChange={this.handleSlide} step="1"/> 
                    <input name="wavelength" type="range" min="0.5" max="10" value={this.state.wavelength} onChange={this.handleSlide} step="0.1"/>
                                       
                </div>
            </div>
        )
      }
}

export default Sine
