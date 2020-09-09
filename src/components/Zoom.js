import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { requestAPI } from '../actions';
import Iframe from 'react-iframe';

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
                  <Iframe url="https://www.youtube.com/watch?v=tHO2swsmtZM&t=1533s"
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