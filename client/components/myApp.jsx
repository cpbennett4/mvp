class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interestedUsers: []
    }
  }

  sendGetRequest(event) {
    event.preventDefault();
    $.ajax({
      "type": 'GET',
      "url": 'http://localhost:3000',
      success: function(data) {
        console.log('data from contactInput get:\n',data);
        this.setState({interestedUsers: interestedUsers.concat(data)});
        console.log('HERE ARE THE USERS ON THE FRONT END:\n',this.state.interestedUsers);
      },
      error: function(error) {
        console.log('error from contactInput get request: ',error);
      }
    });
  }

  render() {
    return (
      <div>
        <div className="contact" >
          <ContactInput get={this.sendGetRequest} />
        </div>
        <div className="display">
          <InterestDisplay />
        </div>
      </div>
    )
  }
}

window.MyApp = MyApp;