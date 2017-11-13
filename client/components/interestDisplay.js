class InterestDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.interested}
      </div>
    )
  }
}

window.InterestDisplay = InterestDisplay;