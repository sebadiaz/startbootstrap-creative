ReactDOM.render(
  React.createElement('h1', null, 'Hello, worlddddddddddddddddddddddd!'),
  document.getElementById('example')
);

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('example')
);
