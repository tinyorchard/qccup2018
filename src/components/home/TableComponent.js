require('react-table/react-table.css');

import React from 'react';
import ReactTable from 'react-table'
import { getTeamResults, getGroupResults } from '../api/ResultsComponent.js'
// import { get } from '../api/ResultsComponent.js'

require('styles/home/Table.css');

class TableComponent extends React.Component {
  componentDidMount() {
    // const columns = getGroupStageColumns();
    const groupColumns = [
      {
        Header: 'Team',
        id: 'teamName',
        accessor: i => i.team.country
      },
      {
        Header: 'Points',
        id: 'points',
        accessor: i => i.team.points
      },
      {
        Header: 'Goal Diff',
        id: 'goal_differential',
        accessor: i => i.team.goal_differential
      }
    ];

    this.setState({ groupColumns });

    getGroupResults().then((data) => {
      this.setState({ groupResults: data });
    });
  }

  render() {
    if (!this.state) {
      return (
        <h1>Loading...</h1>
      );
    }

    const { groupResults, teamResults, teamColumns, groupColumns } = this.state;
    console.log('state', this.state)

    return (
      <div className='table-component'>
        <ReactTable
          data={groupResults}
          columns={groupColumns}
          defaultSorted={[
            {
              id: "points",
              desc: true
            },
            {
              id: "goal_differential",
              desc: true
            }
          ]}
          className='-striped -highlight'
          defaultPageSize={32}
          style={{
            height: '100vh'
          }}
        />
      </div>
    );
  }
}


TableComponent.displayName = 'HomeTableComponent';

// Uncomment properties you need
// TableComponent.propTypes = {};
// TableComponent.defaultProps = {};

export default TableComponent;
