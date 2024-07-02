import { httpsCallable } from 'firebase/functions';

import { setError, setStreaming, setTyping } from '@/redux/slices/chatSlice';
import { functions } from '@/redux/store';

/**
 * Fetchs the chat history for a User.
 *
 * @param {Object} payload - The payload for .........
 * @param {function} dispatch - The dispatch function for managing state.
 * @return {Object} - An object containing a status and data containing the session.
 */

const fetchChatHistory = async (payload, dispatch) => {
  try {
    const fetchHistory = httpsCallable(functions, 'fetchChatHistory');
    const response = await fetchHistory(payload);

    return response.data;
  } catch (err) {
    dispatch(setError('Error! Couldn\u0027t fetch message'));
    dispatch(setStreaming(false));
    dispatch(setTyping(false));
    setTimeout(() => {
      dispatch(setError(null));
    }, 3000);
    throw new Error('Error could not fetch message');
  }
};

export default fetchChatHistory;
