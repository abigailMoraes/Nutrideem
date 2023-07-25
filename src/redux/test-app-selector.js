const state = {
  items: {
    list: [],
    currentPage: null,
    totalPages: null,
  },
  nutrition: [],
};

export const testUseAppSelector = (f) => f(state);
