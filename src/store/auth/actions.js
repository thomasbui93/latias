import { signIn as signInRequest, signUp as signUpRequest } from '@/services/auth';

function signIn({ commit }, userCredential) {
  commit('requestingAuth', true);
  return new Promise((resolve, reject) => {
    signInRequest(userCredential.email, userCredential.password)
      .then((data) => {
        if (data.error) {
          commit('failedAuth', true);
          resolve(false);
        } else {
          commit('doneAuth', data.token);
          resolve(true);
        }
      })
      .catch((err) => {
        commit('failedAuth', true);
        reject(err);
      })
      .finally(() => commit('requestingAuth', false));
  });
}

function signUp({ commit }, userInformation) {
  commit('creatingUser', true);
  return new Promise((resolve, reject) => {
    signUpRequest(userInformation.firstName, userInformation.lastName, userInformation.email, userInformation.password)
      .then((data) => {
        if (data.error) {
          commit('failedCreatingUser', true);
          resolve(false);
        } else {
          commit('doneCreatingUser');
          resolve(true);
        }
      })
      .catch((err) => {
        commit('failedCreatingUser', true);
        reject(err);
      })
      .finally(() => commit('creatingUser', false));
  });
}

export default {
  signIn,
  signUp
};
