class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interestedUsers: []
    }
  }

  sendGetRequest(event) {
    event.preventDefault();
    var scope = this;
    $.ajax({
      "type": 'GET',
      "url": 'http://localhost:3000',
      success: function(data) {
        console.log('data from contactInput get:\n',data);
        scope.setState({interestedUsers: data});
        console.log('HERE ARE THE USERS ON THE FRONT END:\n',scope.state);
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
          <InterestDisplay interested={this.state.interestedUsers} />
        </div>
      </div>
    )
  }
}

window.MyApp = MyApp;