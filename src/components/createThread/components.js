import CKEditor from "react-ckeditor-component";
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import './createThreads.css'
class createThreads extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: 'content',
        }
    }

    updateContent=(newContent)=> {
        this.setState({
            content: newContent
        })
    }
    
    onChange=(evt)=>{
      // console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      console.log(newContent);
      this.setState({
        content: newContent
      })
    }
    
    onBlur=(evt)=>{
      console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste=(evt)=>{
      console.log("afterPaste event called with event info: ", evt);
    }

    render() {
        return (
          <div className="editorContainer">
          <div className="textfield">
          <TextField id="outlined-basic" label="Title" variant="outlined" />
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
             </div>
        )
    }
}

export default createThreads;