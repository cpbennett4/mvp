class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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