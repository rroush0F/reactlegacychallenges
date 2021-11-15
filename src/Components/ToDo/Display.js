import React, { Component } from "react";
import { Form, Button, Input, ListGroup, ListGroupItem, Card} from "reactstrap";


export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            toDoList: [],
        };
    };

    newTask = (e) => {
        e.preventDefault();
        this.setState({
            toDoList: [...this.state.toDoList, this.state.task],
            task: ""
        })
    }

    
    taskList = () => {
        return this.state.toDoList.map((task, taskList) => (
            <ListGroup key={taskList}>
				<Input type="checkbox"/>
				<ListGroupItem>{task}</ListGroupItem>
			</ListGroup>
        ))
    }

    eventHandler = (e) => {
        this.setState({ task: e.target.value });
    };

    render() {
        console.log(this.state);
		return (
			<div>
                <Form onSubmit={(e) => this.newTask(e)}>
                    <Input required placeholder="Ex. Laundry" value={this.state.task} onChange={this.eventHandler} />
                    <Button type="submit">New Task</Button>
                    <hr />
                    <h5>Check off what you have completed below!</h5>
                </Form>
                <br />
				<div>
                    <h6>Tasks:</h6>
					<Card>{this.taskList()}</Card>
				</div>
			</div>
		);
	}
}