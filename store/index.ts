export const state = () => ({
  accessToken: '',
  user: '',
});

export const mutations = {
  accessToken(state: any, data: any) {
    state.accessToken = data;
  },
  user(state: any, data: any) {
    state.user = data;
  },
};
