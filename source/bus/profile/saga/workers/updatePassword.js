// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';
import { notificationActions } from '../../../notification/actions';

export function* updatePassword ({ payload: newPassword }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [
            newPassword
        ]);
        const { data: updatedProfile, message } = yield apply(
            response,
            response.json
        );

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(updatedProfile));
        yield put(
            notificationActions.showNotification('Пароль успешно изменен!')
        );
    } catch (error) {
        yield put(
            uiActions.emitError(error.message, '→ updatePassword worker')
        );
        yield put(
            notificationActions.showNotification(
                'Пароль не был изменен!',
                'error',
                '→ updatePassword'
            )
        );
    } finally {
        yield put(uiActions.stopFetching());
    }
}
