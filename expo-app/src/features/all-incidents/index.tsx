import React, {Component} from "react";
import Layout from "../../components/layout";
import LeftMenu from "../../components/left-menu";
import RepositoryImpl from "../../repository/repository";
import IncidentDetails from "../incident-details";

const repository = new RepositoryImpl();

export default class AllIncidents extends Component {

  private details: IncidentDetails;
  private leftContent = (<LeftMenu repository={repository} selectItem={item => this.selectItem(item)}/>);
  private midContent = (<IncidentDetails initialState={{data: null }} ref={ref => this.details = ref}/>);

  selectItem(item: HelpRequest) {
    this.details.setHelpRequest(item);
  }

  render() {
    return (
        <Layout
            leftContent={this.leftContent}
            midContent={this.midContent}
        />
    );
  }
}
