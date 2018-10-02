import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import TagsInput from 'react-tagsinput';

//import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

@observer
export default class ToDoTags extends React.Component {
   constructor() {
    super()
    this.state = {tags: [], tag: ''}
  }

  handleChange(tags) {
    this.setState({tags})
  }

  handleChangeInput(tag) {
    this.setState({tag})
  }


  render() {
    return (
      <TagsInput
        
        value={this.state.tags}
        onChange={this.handleChange}
        inputValue={this.state.tag}
        onChangeInput={this.handleChangeInput}
        onlyUnique={true}

      />
    )
  }
}