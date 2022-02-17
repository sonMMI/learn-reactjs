import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat', 
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep', 
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code', 
            status: 'new'
        }
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, index) => { 
        // clone current array to the new one ==> spread
        const newTodoList = [...todoList]

        // Toggle state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new'
        }

        // update todo list
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    };
    
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');

    };

    const handleShowNewClick = () => {
        setFilteredStatus('new');

    };

    const renderedTodoList = todoList.filter(todo => 
        filteredStatus === 'all' || filteredStatus === todo.status
    );

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;