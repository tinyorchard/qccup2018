'use strict';

import _ from 'lodash';

function flattenTeams(groups) {
  return _.flatten(_.map(groups, (item) => {
    return item.ordered_teams
  }));
}

export function getContestantFromGroup(group) {
  const contestants = {
    A: 'Mikayla',
    B: 'Josh',
    C: 'Matty',
    D: 'Tom',
    E: 'Lynne',
    F: 'Sienna',
    G: 'Alf',
    H: 'Lucie'
  };

  return contestants[group];
}

export function getGroupResults() {
  return fetch('//worldcup.sfg.io/teams/group_results').then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      return response.json().then(function(data) {
        return flattenTeams(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
    return err;
  });
}
