using ResultService as service from '../../srv/result-service';
annotate service.Matches with @odata.draft.enabled;
annotate service.Matches with @(
    UI: {
        LineItem: [
            {Value: hometeam.name, Label: 'HomeTeam'},
            {Value: goals_hometeam, Label: 'Goals HomeTeam'},
            {Value: awayteam.name, Label: 'AwayTeam'},
            {Value: goals_awayteam, Label: 'Goals HomeTeam'},
        ],
        HeaderInfo : {
            TypeName       : 'Match', 
            TypeNamePlural : 'Matches', 
            TypeImageUrl   : 'sap-icon://alert',
            Title          : {Value : ID}
        },
        Identification: [
            {Value: hometeam.name, Label: 'HomeTeam'}
        ],
        Facets:[
            { $Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#Matches'},
            { $Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#Matches'}
        ],
        FieldGroup#Matches:{
            Data: [
                {Value: hometeam_ID, Label: 'HomeTeam'},
                {Value: goals_hometeam, Label: 'Goals HomeTeam'},
                {Value: awayteam_ID, Label: 'AwayTeam'},
                {Value: goals_awayteam, Label: 'Goals AwayTeam'}
                
            ]
        }
    }
);