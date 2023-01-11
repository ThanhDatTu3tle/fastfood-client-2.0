import { takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

async function fetchCategorySaga(action: any) {
    const category = await call(api.fetchCategory)
    console.log('[category]', category)
}

async function mySaga(): Promise<any> {
    await takeLatest(actions.getCategory.getCategoryRequest, fetchCategorySaga)
}

export default mySaga;
