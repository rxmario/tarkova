import {combineEpics, Epic, ofType} from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  getItemsFailureAction,
  getItemsSuccessAction,
  StartViewActions,
  StartViewActionTypes,
} from '../actions/Start.actions';
import { AppState } from '../../../core/AppState';
import { StartService } from '../../../api/services/StartService';

// eslint-disable-next-line import/prefer-default-export
export const items: Epic<StartViewActions, StartViewActions, AppState> = (
  action$,
  _state$
) => {
  return action$.pipe(
    ofType(StartViewActionTypes.GET_ITEMS),
    mergeMap(() =>
      from(StartService.fetchAll()).pipe(
        map((result) => getItemsSuccessAction(result.data)),
        catchError((error) => of(getItemsFailureAction(error)))
      )
    )
  );
};

export const startEpic = combineEpics(items);
