class ContactInput extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('ContactInput mounted');
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
            Email:
            <input type="text" name="email" />
          </label>
          <input type="submit" name="Submit" />
        </form>
      </div>
    )
  }
}

window.ContactInput = ContactInput;