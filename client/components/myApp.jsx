class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('MyApp mounted');
  }

  handleClick (event) {
    event.preventDefault();
    console.log('handleClick test');
  }

  render() {
    return (
      <div>
        <div className="contact">
          <ContactInput submit={this.handleClick}/>
        </div>
        <div className="display">
          <InterestDisplay />
        </div>
      </div>
    )
  }
}

window.MyApp = MyApp;