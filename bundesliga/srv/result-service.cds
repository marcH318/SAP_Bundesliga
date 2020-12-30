using { de.fhaachen.bundesliga as bundesliga } from '../db/schema.cds';
service ResultService{
    entity Teams as projection on bundesliga.Teams;
    entity Matches as projection on bundesliga.matches;
}