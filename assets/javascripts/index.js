import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SongPro} from "./song_pro/SongPro";

function renderEditor(id) {
  const el = document.getElementById(id);
  ReactDOM.render(<App />, el);
}

export default {
  renderEditor
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewHtml: '',
    };

    this.sourceChanged = this.sourceChanged.bind(this);
  }

  sourceChanged(event) {
    const song = SongPro.parse(event.target.value);
    this.setState({
      previewHtml: song.toHtml(),
    })
  }

  render () {
    return (
      <div className="app">
        <div className="editor">
          <textarea onChange={this.sourceChanged}/>
        </div>
        <div className="preview">
          { this.state.previewHtml }
        </div>
      </div>
    )
  }
}

