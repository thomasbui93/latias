import { signIn as signInRequest } from '@/services/auth';

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

export default {
  signIn,
};
