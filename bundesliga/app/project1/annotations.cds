using ManageService as service from '../../srv/manage-service';

annotate service.Teams with @(
    UI : {        
        LineItem: [
            {Value: name, Label: 'Team'},
            {Value: points, Label: 'Points'},
            {Value: goal_difference, Label: 'Goal Difference'},
            {Value: goals_scored, Label: 'Goals Scored'},
            {Value: goals_against, Label: 'Goals against'}
        ],
        PresentationVariant: {
            SortOrder: [
                {
                    $Type:'Common.SortOrderType',
                    Property : points,
                    Descending : true,
                },
            ]
        }
    }
);