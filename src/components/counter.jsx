import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2'],
  };

  styles = {
    fontSize: 15,
    fontWeight: 'bold',
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    console.log(product);
    // console.log('Increment clicked!', this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // console.log('props', this.props);
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""></img>
        <br></br> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && 'Please create a new tag!'}
        {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
