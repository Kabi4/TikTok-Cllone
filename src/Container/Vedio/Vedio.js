import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Vedio.css';

class Vedio extends Component {
    constructor(props){
        super(props);
        this.vedioRef = React.createRef();
    }
    state = {
        playing: false
    }

    setPlay = ()=>{
        if(this.state.playing){
            this.vedioRef.current.pause();
            this.setState({playing: !this.state.playing});
        }else{
            this.vedioRef.current.play();
            this.setState({playing: !this.state.playing});
        }
    }

    render() {
        return (
            <div className="vedio">
                <iframe title={this.props.src} loop ref={this.vedioRef} onClick={this.setPlay} className="vedio_player" src={this.props.src} ></iframe>
                {/* <video
                    onClick={this.setPlay}
                    ref={this.vedioRef}
                    loop
                    src={this.props.src}
                    className="vedio_player" >
                </video> */}
                <Sidebar likes={this.props.likes} shares={this.props.shares}  messages={this.props.messages}  />
                <Footer channel={this.props.channel} description={this.props.description}  song={this.props.song} />
            </div>
        )
    }
};

export default Vedio;