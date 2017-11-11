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
        Hello from contactInput
      </div>
    )
  }
}

window.ContactInput = ContactInput;