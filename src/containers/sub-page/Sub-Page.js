import React from 'react';
import { connect } from 'react-redux';

import { clear, getTasks } from '@redux/modules/task';

import Button from '@common/button/Button';
import List from '@components/list/List';
import Error from '@components/common/error/Error';

class SubPage extends React.Component {

  componentDidMount() {
    const { get } = this.props;
    get();
  }

  componentWillUnmount() {
    console.log("Leaving SubPage");
  }

  _onClick = () => {
    const { clearList } = this.props;
    clearList();
  }
  
  render() {

    const { tasks, error } = this.props;
    return (
      <div>
        <List items={tasks}/>
        <Error error={error}/>
        <Button onClick={this._onClick}>Clear items</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    tasks: state.task.tasks,
    error: state.task.error
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearList: () => {
      dispatch(clear());
    },
    get: () => {
      dispatch(getTasks())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubPage);