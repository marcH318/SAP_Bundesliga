const cds = require('@sap/cds')
module.exports = function () {
    this.on('CREATE', 'Matches', async (req, next) => {
        const { Teams } = cds.entities
        var tx = cds.transaction(req);
        if (req.data.hometeam_ID != null) {
            const n = await tx.run(
                UPDATE(Teams)
                    .set({ // Update Goals Hometeam
                        goals_scored: { '+=': req.data.goals_hometeam },
                        goals_against: { '+=': req.data.goals_awayteam },
                        goal_difference: {'+=': req.data.goals_hometeam - req.data.goals_awayteam}
                    }).where({ ID: req.data.hometeam_ID })
            )
            const o = await tx.run(
                UPDATE(Teams)
                    .set({ // Update Goals Awayteam
                        goals_scored: { '+=': req.data.goals_awayteam},
                        goals_against: {'+=': req.data.goals_hometeam},
                        goal_difference: {'+=': req.data.goals_awayteam - req.data.goals_hometeam}
                    }).where({ID: req.data.awayteam_ID})
            )
            if (req.data.goals_hometeam > req.data.goals_awayteam){ // Win Hometeam
                const p = await tx.run(
                    UPDATE(Teams)
                    .set({ 
                        points:{'+=':3}
                    }).where({ID: req.data.hometeam_ID})
                )
            }
            else if(req.data.goals_hometeam < req.data.goals_awayteam){ // Win Awayteam
                const p = await tx.run(
                    UPDATE(Teams)
                    .set({ 
                        points:{'+=':3}
                    }).where({ID: req.data.awayteam_ID})
                )
            }
            else if(req.data.goals_hometeam == req.data.goals_awayteam){ // Draw
                const p = await tx.run(
                    UPDATE(Teams)
                    .set({
                        points:{'+=':1}
                    }).where({ID: req.data.hometeam_ID})
                )
                const q = await tx.run(
                    UPDATE(Teams)
                    .set({
                        points:{'+=':1}
                    }).where({ID: req.data.hometeam_ID})
                )
            }
        }
        return next()
    })
}