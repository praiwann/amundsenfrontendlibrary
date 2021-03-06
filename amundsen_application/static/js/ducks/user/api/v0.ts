import axios, { AxiosResponse, AxiosError } from 'axios';

import { LoggedInUserResponse, UserResponse } from '../types';

export function getLoggedInUser() {
  return axios.get(`/api/auth_user`)
    .then((response: AxiosResponse<LoggedInUserResponse>) => {
      return response.data.user;
    }).catch((error: AxiosError) => {
      return {};
    });
}

export function getUserById(userId: string) {
  return axios.get(`/api/metadata/v0/user?user_id=${userId}`)
  .then((response: AxiosResponse<UserResponse>) => {
    return response.data.user;
  })
  .catch((error: AxiosError) => {
    return {};
  });
}
