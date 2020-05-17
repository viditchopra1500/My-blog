import CKEditor from "react-ckeditor-component";
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import './createThreads.css'
import axios from './axios-threads';
import { Button } from "@material-ui/core";



class createThreads extends Component {
      state = {
            content: 'content',
            title:''
        }
    
    onChange=(evt)=>{
      // console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      // console.log(newContent);
      this.setState({
          content: newContent
      })
    }
    submit=()=>{
      const obj={title:this.state.title,content:this.state.content};
      axios.post('/threads.json',obj).then(res=>{             //posting data to firebase
        alert('Your post is successfully posted')
        this.setState({title:'',content:''})
      }).catch((e)=>{
        console.log('error occured',e);
      })
    }
    handleChange=(event)=> {
      // console.log(this.state.title);
      this.setState({title:event.target.value}) 
   }
    render() {
        return (
          <div className="editorContainer">
          <div className="textfield">
          <TextField id="outlined-basic" label='Title' variant="outlined" value={this.state.title} onChange={this.handleChange} />
          </div>
            <CKEditor 
              activeClass="p10" 
              content={this.state.content} 
              events={{
                "blur": this.onBlur,
                "afterPaste": this.afterPaste,
                "change": this.onChange
              }}
             />
              <div className="submit">
             <Button  type="button" class="btn btn-outline-primary" onClick={this.submit}>Submit</Button>
             </div>
             </div>
        )
    }
}

export default createThreads;