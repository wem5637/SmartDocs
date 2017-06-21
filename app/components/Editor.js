import React from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js'

class MyEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()}
    this.onChange = (editorState) => {
    	this.setState({editorState})
    }
    this.onChange=this.onChange.bind(this)
    this.onClick=this.onClick.bind(this)
  }

  onClick(){

  	    console.log(this.state.editorState)
  }




  render() {

    return (
      <div id='content'>
        <h1 onClick={this.onClick}>Draft.js Editor</h1>
        <div className='editor'>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            
          />
        </div>
      </div>
    )
  }
}

export default MyEditor;
