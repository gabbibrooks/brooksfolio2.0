export const state = () => ({
  pageHeader: '',
  pageSubheader: '',
  pageHeaderPosition: 'center'
})

export const actions = {
  setPageHeader({ commit }, text) {
    commit('pageHeader', text)
  },
  setPageSubheader({ commit }, text) {
    commit('pageSubheader', text)
  },
  setPageHeaderPosition({ commit }, position) {
    commit('pageHeaderPosition', position)
  }
}

export const mutations = {
  pageHeader(state, text) {
    state.pageHeader = text
  },
  pageSubheader(state, text) {
    state.pageSubheader = text
  },
  pageHeaderPosition(state, position) {
    state.pageHeaderPosition = position
  }
}
