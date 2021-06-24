import React from "react";
import { ServiceHeaderWrapper } from "../../components/Card/CardWrapper";
import { ServiceCardWrapper } from "../../components/Card/CardWrapper";
import { serviceDataList } from "../../helpers/Static/Fake";
import ServiceCard from "../../components/FormElements/Elements/ServiceCard";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { getServiceDepartmentList } from "../../redux/actions/ServiceDepartment";
import initialData from "../../helpers/Static/initial-data";
import Column from "../../components/DragAndDrop/Column";

class ServicesSelected extends React.Component {
  checkServiceDepartment = prevProps => {
    const {
      serviceDepartmentListIsLoading,
      serviceDepartmentList,
      serviceDepartmentListErrorMessage
    } = this.props;

    if (
      prevProps.serviceDepartmentListIsLoading &&
      !serviceDepartmentListIsLoading &&
      serviceDepartmentList
    ) {
      initialData.tasks = {};
      serviceDepartmentList.map(task => {
        initialData.tasks[`task-${task.Id}`] = {
          id: `task-${task.Id}`,
          content: task.Name
        };
      });

      initialData.columns["column-2"].taskIds = [];

      serviceDepartmentList.map(task => {
        initialData.columns["column-2"].taskIds.push(`task-${task.Id}`);
      });

      this.setState({
        data: initialData
      });
    }
  };

  state = {
    data: null
  };

  componentDidMount() {
    this.props.getServiceDepartmentList();
  }

  componentDidUpdate(prevProps) {
    this.checkServiceDepartment(prevProps);
  }

  onDragEnd = result => {
    console.log("data: ", result);

    if (result.source["droppableId"] != result.destination["droppableId"]) {
      initialData.columns["column-1"].taskIds.push(result.draggableId);
      initialData.columns["column-2"].taskIds.pop();
      this.setState({
        data: initialData
      });
    }
  };

  render() {
    if (!this.state.data) return null;
    return (
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.data.columnOrder.map(columnId => {
            const column = this.state.data.columns[columnId];
            const tasks = column.taskIds.map(
              taskId => this.state.data.tasks[taskId]
            );

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    serviceDepartmentListIsLoading,
    serviceDepartmentList,
    serviceDepartmentListErrorMessage
  } = state.fetchServiceDepartmentList;

  return {
    serviceDepartmentListIsLoading,
    serviceDepartmentList,
    serviceDepartmentListErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { getServiceDepartmentList }
)(ServicesSelected);
