// Core
import { createStore, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Reducers
import { authReducer as auth } from '../../bus/auth/reducer';
import { uiReducer as ui } from '../../bus/ui/reducer';
import { postsReducer as posts } from '../../bus/posts/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';
import { usersReducer as users } from '../../bus/users/reducer';
import { formsReducer as forms } from '../../bus/forms/reducer';
import { notificationReducer as notification } from '../../bus/notification/reducer';

// Store
import { store } from '../store';

const referenceRootReducer = combineReducers({
    auth,
    ui,
    posts,
    profile,
    users,
    router,
    forms,
    notification,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});