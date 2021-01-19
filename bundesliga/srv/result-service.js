const cds = require('@sap/cds')

module.exports = cds.service.impl (function (){
    this.on ('submitResult', async req => {
        const [match] = req.params
        const {matches} = cds.entities
        const {Teams} = cds.entities
        // const n = await UPDATE (matches) // wie änder ich Einträge in Tabelle Teams??

        /*const n = await UPDATE(Teams)
            .set({
                goals_scored: 5,//{'+=': goals_hometeam},
                goal_against: {'+=': goals_awayteam}
            }).where({
                ID: {'=': hometeam_ID}
            })
*/
        let u = await cds.transaction(req).run(
            UPDATE(Teams).set({ // Update goals of hometeam
                goals_scored: 5,//{'+=': match.goals_hometeam},
                goal_against: {'+=': match.goals_awayteam},
                goal_difference:{'=': goals_scored - goals_against}
            }).where ({ID:match.hometeam_ID}),

            UPDATE(Teams).set({   // Update goals of awayteam
                goals_scored:{'+=':match.goals_awayteam},
                goal_against:{'+=':match.goals_hometeam},
                goal_difference:{'=': goals_scored - goals_against}
            }).where ({ID:match.awayteam_ID})

            /*if (goals_hometeam > matches.goals_awayteam){  //Update points
                UPDATE('Teams').set ({
                    points:{'+=':3}
                }).where ({ID:matches.hometeam_ID})
            }
            else if (matches.goals_hometeam < matches.goals_awayteam){
                UPDATE('Teams').set ({
                    points:{'+=':3}
                }).where ({ID:matches.awayteam_ID})
            }
            /*else {
                UPDATE('Teams').set ({
                    points:{'+=':1}
                }).where ({ID:matches.awayteam_ID && ID:matches.hometeam_ID})
            }
            
        */
        )
        
    })
})