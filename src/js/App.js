import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newItem: "",
			list: []
		};
	}

	updateInput(key, value) {
		//update react state
		this.setState({
			[key]: value
		});
	}
	addItem() {
		// create item with unique id
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};

		//copy of current list of items
		const list = [...this.state.list];

		//add new item to list
		list.push(newItem);

		//update state with new list and reset newItem updateInput
		this.setState({
			list,
			newItem: ""
		});
	}
	deleteItem(id) {
		//copy current list of items
		const list = [...this.state.list];

		//filter out item being deleted
		const updatedList = list.filter(item => item.id !== id);

		this.setState({ list: updatedList });
	}
	render() {
		return (
			<div className="App">
				<div className="app-title">
					To-Do List...
					<br />
					<input
						type="text"
						placeholder="Write it here..."
						value={this.state.newItem}
						onChange={e =>
							this.updateInput("newItem", e.target.value)
						}
					/>
					<button className="add-btn" onClick={() => this.addItem()}>
						Add item
					</button>
					<br />
					<ul>
						{this.state.list.map(item => {
							return (
								<li key={item.id}>
									{item.value}
									<button
										className="btn btn-floating"
										onClick={() =>
											this.deleteItem(item.id)
										}>
										<i className="material-icons">x</i>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
