import React from 'react';
import ReactTable from 'react-table'
import { getGroupResults, getContestantFromGroup } from '../api/ResultsComponent'

require('react-table/react-table.css');
require('styles/home/Table.css');

class TableComponent extends React.Component {
  componentDidMount() {
    const groupColumns = [
      {
        Header: 'Team',
        id: 'teamName',
        accessor: team => team.country
      },
      {
        Header: 'Who',
        id: 'team_owner',
        accessor: team => getContestantFromGroup(team.group_letter)
      },
      {
        Header: 'Points',
        id: 'points',
        accessor: team => team.points
      },
      {
        Header: 'Goal Diff',
        id: 'goal_differential',
        accessor: team => team.goal_differential
      }
    ];

    const defaultSorting = [
      {
        id: 'points',
        desc: true
      },
      {
        id: 'goal_differential',
        desc: true
      }
    ];

    this.setState({ groupColumns, defaultSorting });

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

    const {
            groupResults,
            teamResults,
            teamColumns,
            groupColumns,
            defaultSorting
          } = this.state;

    return (
      <div className='table-component'>
        <ReactTable
          data={groupResults}
          columns={groupColumns}
          defaultSorted={defaultSorting}
          className='-striped -highlight'
          showPagination={false}
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
