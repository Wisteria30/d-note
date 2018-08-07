import React from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function Note() {
  return (
    <div>
      <Editor
        // editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        // onEditorStateChange={this.onEditorStateChange}
        toolbar={{
          options: ['link', 'colorPicker', 'fontSize', 'inline'],
          inline: {
            options: ['bold', 'underline', 'strikethrough'],
          },
        }}
      />
    </div>
  );
}
