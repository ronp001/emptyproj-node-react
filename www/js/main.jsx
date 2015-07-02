var Main = React.createClass({
    render: function() {
        return(
            <div>
                hello, world!
            </div>
        );
    }
});

React.render(
    <Main />,
    document.getElementById("main-container")
  );
