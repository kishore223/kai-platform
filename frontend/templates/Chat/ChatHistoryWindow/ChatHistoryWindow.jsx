import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Fab, Grid, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';

import ChatHistory from '../ChatHistory';

import styles from './styles';

import { resetChat } from '@/redux/slices/chatSlice';

/**
 * ChatHistoryWindow component displays a sidebar that contains chat history.
 * The sidebar is toggled by clicking on the toggle button.
 */
const ChatHistoryWindow = () => {
  // State variable to track whether the chat history sidebar is shown or hidden. Initially set to false.
  const [showHistorySidebar, setShowHistorySidebar] = useState(false);

  // The dispatch function from the Redux store. Used to dispatch actions to the store.
  const dispatch = useDispatch();

  /**
   * Toggles the visibility of the chat history sidebar.
   *
   * @return {void} No return value.
   */
  const toggleHistorySidebar = () => setShowHistorySidebar((prev) => !prev);

  /**
   * Resets the chat state and removes the session ID from local storage.
   *
   * @return {void} No return value.
   */
  const newChat = () => {
    // Dispatch the resetChat action to reset the chat state
    dispatch(resetChat());

    // Remove the session ID from local storage
    localStorage.removeItem('sessionId');
  };

  return (
    // Conditionally render the chat history sidebar based on the showHistorySidebar state
    !showHistorySidebar ? (
      // Render the open chat history button
      <Fab
        aria-label="open chat history"
        onClick={toggleHistorySidebar}
        {...styles.toggleHistoryButton(showHistorySidebar)}
      >
        <AddIcon />
      </Fab>
    ) : (
      // Render the chat history sidebar
      <Grid {...styles.historySideBar}>
        {/* Header of the sidebar */}
        <Grid {...styles.historySideBarHeader}>
          {/* Title of the chat history sidebar */}
          <Grid {...styles.historySideBarTitle}>
            {/* Display the title of the chat history sidebar */}
            <Typography {...styles.historySideBarTitleText}>
              {/* Display 'Chat History' */}
              Chat History
            </Typography>
          </Grid>
          {/* Close chat history button */}
          <Fab
            aria-label="close chat history"
            size="medium"
            onClick={toggleHistorySidebar}
            {...styles.toggleHistoryButton(showHistorySidebar)}
          >
            <RemoveIcon />
          </Fab>
        </Grid>

        {/* Chat history section of the sidebar */}
        <Grid {...styles.chatHistory}>
          {/* Render the ChatHistory component */}
          <ChatHistory />
        </Grid>

        {/* Add new chat button */}
        <Grid {...styles.newChatContainer}>
          {/* Add new chat button with onClick event handler to reset the state of the chat reducer. */}
          <Button {...styles.newChatButton} onClick={() => newChat()}>
            <AddIcon />
            <Typography>&nbsp;&nbsp;Start a new chat</Typography>
          </Button>
        </Grid>
      </Grid>
    )
  );
};

export default ChatHistoryWindow;
