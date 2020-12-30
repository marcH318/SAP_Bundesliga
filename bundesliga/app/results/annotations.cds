using ResultService as service from '../../srv/result-service';
annotate service.Matches with @odata.draft.enabled;
annotate service.Matches with @(
    UI: {
        LineItem: [
            {Value: hometeam.name, Label: 'HomeTeam'},
            {Value: goals_hometeam, Label: 'Goal HomeTeam'},
            {Value: awayteam.name, Label: 'AwayTeam'},
            {Value: goals_awayteam, Label: 'Goal HomeTeam'},
        ]
    }
);