class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: '',
      email: ''
    }
  }

  sendPostRequest(event) {
    event.preventDefault();
    $.ajax({
      "type": 'POST',
      "url": 'http://localhost:3000',
      "Content-type": "application/json",
      "data": {
        "name": $('input#usersName').val(),
        "email": $('input#email').val()
      },
      success: function(data) {
        console.log('results from contactInput post: ',data);
      },
      error: function(error) {
        console.log('error from contactInput post request: ',error);
      }
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="usersName" id="usersName" />
            Email:
            <input type="text" name="email" id="email" />
            <input onClick={this.sendPostRequest.bind(this)} type="submit" name="submit" />
          </label>
        </form>
        <button onClick={this.props.get.bind(this)} type="button" name="getButton">Show all interested</button>
      </div>
    )
  }
}

window.ContactInput = ContactInput;