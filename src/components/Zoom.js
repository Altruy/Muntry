import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { requestAPI } from '../actions';
import Iframe from 'react-iframe';

const joinLink = "http://localhost:9999/meeting.html?name=VHVydS1UZXN0aW5n&mn=7828886629&email=&pwd=198744&role=0&lang=en-US&signature=NUpCNGhudzFSMEtjYnJIUE00SjJYdy43ODI4ODg2NjI5LjE1OTk2NzcxNTExNzIuMC4zUGFCSnBCUktwZ0Z5amh4R2JOTWFpNjM4NFA5MElSbGNCVDFjTUlHaVQ0PQ&china=0&apiKey=5JB4hnw1R0KcbrHPM4J2Xw"

const mapStateToProps = (state)=>{
    console.log(state)
    return {
      apiResponse:state.resolve.apiResponse
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
        onRequest:(url)=>requestAPI(dispatch,url)
    }
  }
  



class Zoom extends Component{
    render(){
        return(
        <div id={'zoomBox'}>
                  <Iframe url={joinLink}
                          width="50%vh"
                          height="500px"
                          id="myId"
                          className="myClassname"
                          display="initial"
                          position="relative"
                          allow="microphone; camera"
                          />
                    
               </div>
        )
    }



}

export default connect(mapStateToProps,mapDispatchToProps)(Zoom);

