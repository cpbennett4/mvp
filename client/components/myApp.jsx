class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('MyApp mounted');
  }

  render() {
    return (
      <div>
        <h1>TEST!</h1>
        <div className="contact">
          <ContactInput />
        </div>
        <div className="display">
          <InterestDisplay />
        </div>
      </div>
    )
  }
}

window.MyApp = MyApp;