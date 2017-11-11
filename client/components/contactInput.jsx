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
          <input onClick={this.props.submit} type="submit" name="submit" />
        </form>
      </div>
    )
  }
}

window.ContactInput = ContactInput;