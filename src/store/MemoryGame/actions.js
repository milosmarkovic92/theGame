export const UPDATE_COMPLETED_CARDS = 'UPDATE_COMPLETED_CARDS';
export const UPDATE_OPEN_CARDS = 'UPDATE_OPEN_CARDS';

export const updateCompletedCards = payload => {
    return {
      type: UPDATE_COMPLETED_CARDS,
      payload
    }
  }

  export const updateOpenCards = payload => {
    return {
      type: UPDATE_OPEN_CARDS,
      payload
    }
  }
