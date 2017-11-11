class InterestDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('InterestDisplay mounted');
  }

  render() {
    return (
      <div>
        Hello from InterestDisplay
      </div>
    )
  }
}

window.InterestDisplay = InterestDisplay;