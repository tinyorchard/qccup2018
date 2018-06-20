'use strict';

import _ from 'lodash';

function flattenTeams(groups) {
  return _.flatten(_.map(groups, (item) => {
    return item.group.teams
  }));
}

function decorateTeams(teams) {
  return _.each(teams, (team) => {
    debugger
    groupFromTeam(team);
    // addContestantToTeams(team);
  });
}

function groupFromTeam(team) {

  // get the list of groups
  // find the team in that list


  return _.extend({}, team, { team: { group: 'UNKNOWN' } });
}

function addContestantToTeams(team) {
  const contestants = {
    A: 'Mikayla',
    B: 'Tom',
    C: 'Josh',
    D: 'Lucie',
    E: 'Sienna',
    F: 'Lynne',
    G: 'Alf',
    H: 'Matty'
  };

  return '';//_.assign(team, { _.where() });
}

function prepDataForTable(data) {
  const flatTeams = flattenTeams(data);
  const decoratedTeams = decorateTeams(flatTeams);

  // debugger

  const allTeams = flatTeams;
  return allTeams;
}

export function getGroupResults() {
  return fetch('http://worldcup.sfg.io/teams/group_results').then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      return response.json().then(function(data) {
        console.log(data);
        return prepDataForTable(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
    return err;
  });
}
