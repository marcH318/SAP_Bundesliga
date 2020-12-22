using { managed } from '@sap/cds/common';

namespace de.fhaachen.bundesliga;

entity Teams : managed {
  key ID            : Integer;
  points            : Integer;
  name              : String(500);
  goals_scored      : Integer;
  goals_against     : Integer;
  goal_difference   : Integer;
}