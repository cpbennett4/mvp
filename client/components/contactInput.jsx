class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: '',
      email: ''
    }
  }

  sendRequest (event) {
    event.preventDefault();
    console.log($('input#usersName').val());
    console.log($('input#email').val());
    $.ajax({
      "type": 'POST',
      "url": 'http://localhost:3000/',
      "Content-type": "application/json",
      "data": {
        "name": $('input#usersName').val(),
        "email": $('input#email').val()
      },
      success: function(error, results) {
        if(error) {
          console.log(error);
        }
        console.log(results);
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
            <input onClick={this.sendRequest.bind(this)} type="submit" name="submit" />
          </label>
        </form>
      </div>
    )
  }
}

window.ContactInput = ContactInput;