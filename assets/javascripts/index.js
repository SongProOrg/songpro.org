import React from 'react';
import ReactDOM from 'react-dom';
import SongProEditor from 'songpro-editor-component';

function renderEditor(id) {
  const el = document.getElementById(id);
  ReactDOM.render(<SongProEditor />, el);
}

export default {
  renderEditor
}
