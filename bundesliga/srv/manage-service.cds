using { de.fhaachen.bundesliga as bundesliga } from '../db/schema.cds';
service ManageService {
  entity Teams as projection on bundesliga.Teams;
}