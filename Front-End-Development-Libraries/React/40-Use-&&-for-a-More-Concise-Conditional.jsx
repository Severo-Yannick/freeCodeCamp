class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    const {display} = this.state

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {display && <h1>Displayed!</h1>}
       </div>
    );
  }
};