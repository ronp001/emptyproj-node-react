var Main = React.createClass({
    render: function() {
        return(
            <div>
                This is an instance of the &lt;Main&gt; class (content is "{this.props.children}")
            </div>
        );
    }
});

React.render(
    <Main>
      some text &nbsp;
      <span style={{border: 1 + 'px solid blue'}}>and a span</span>
    </Main>,
    document.getElementById("main-container")
  );
