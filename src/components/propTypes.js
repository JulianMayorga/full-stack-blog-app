import React from 'react';

export const post = React.PropTypes.shape({
  _id: React.PropTypes.string,
  date: React.PropTypes.string,
  __v: React.PropTypes.number,
  editorState: React.PropTypes.shape({
    blocks: React.PropTypes.array,
    entityMap: React.PropTypes.object
  })
});
