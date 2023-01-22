const inputReducer = (state, action = {}) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        value: action.value,
        isValid: action.value.trim().length !== 0,
      };
    default:
      return {
        value: '',
        isValid: false,
      };
  }
};

export default inputReducer;
