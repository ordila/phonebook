import { IGeneralState } from '../store.types';

export const selectToken = (state: IGeneralState) => state.user.token;
export const selectName = (state: IGeneralState) => state.user.user.name;
export const selectEmail = (state: IGeneralState) => state.user.user.email;
export const selectIsLoggedIn = (state: IGeneralState) => state.user.isLoggedIn;
export const selectIsLoading = (state: IGeneralState) => state.user.isLoading;
export const isRefreshing = (state: IGeneralState) => state.user.isRefreshing;
