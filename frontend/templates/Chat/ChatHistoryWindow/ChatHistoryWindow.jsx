import { useState } from 'react';

import { Button, Grid, Typography } from '@mui/material';

import ChatHistory from '../ChatHistory';

import styles from './styles';

/**
 * Array of test data for chat history.
 * Each object represents a chat session with the following properties:
 * - createdAt: timestamp of when the chat session was created
 * - id: unique identifier for the chat session
 * - messages: array of messages in the chat session
 *   - payload: object containing details of a message
 *     - text: content of the message
 *     - role: role of the user who sent the message (either 'human' or 'ai')
 *     - timestamp: timestamp of when the message was sent
 *     - type: type of the message (e.g., 'text', 'image')
 * - type: type of the chat session
 * - updatedAt: timestamp of when the chat session was last updated
 * - user: object containing details of the user who participated in the chat session
 *   - email: email address of the user
 *   - fullName: full name of the user
 *   - id: unique identifier for the user
 */
const testData = [
  {
    createdAt: 'Thu Jun 26 2024 10:19:32 GMT-0400 (Eastern Daylight Time)',
    id: 'H4yMmnuIJAfGT76YWnZ2',
    messages: [
      {
        payload: {
          text: 'Hi Kai. I am Test. How are you?',
          role: 'human',
          timestamp:
            'Thu Jun 27 2024 10:19:32 GMT-0400 (Eastern Daylight Time)',
          type: 'text',
        },
      },
      {
        payload: {
          text: '👋 Hi Test! I am here to help you with any educational queries you may have. Feel free to ask me anything! 📚',
          role: 'ai',
          timestamp:
            'Thu Jun 27 2024 10:19:34 GMT-0400 (Eastern Daylight Time)',
          type: 'text',
        },
      },
    ],
    type: 'chat',
    updatedAt: 'Thu Jun 26 2024 10:19:32 GMT-0400 (Eastern Daylight Time)',
    user: {
      email: 'test@gmail.com',
      fullName: 'Test',
      id: 'Nn1j4XPFbu3U0hKTUURXoTomhoSe',
    },
  },
  {
    createdAt: 'Thu Jun 27 2024 10:19:32 GMT-0400 (Eastern Daylight Time)',
    id: 'H4yMmnuIJAfGT76YWnZ3',
    messages: [
      {
        payload: {
          text: 'Hi Kai.',
          role: 'human',
          timestamp:
            'Thu Jun 27 2024 10:19:32 GMT-0400 (Eastern Daylight Time)',
          type: 'text',
        },
      },
      {
        payload: {
          text: '👋 Hi Test! I am here to help you with any educational queries you may have. Feel free to ask me anything! 📚',
          role: 'ai',
          timestamp:
            'Thu Jun 27 2022 10:19:34 GMT-0400 (Eastern Daylight Time)',
          type: 'text',
        },
      },
    ],
    type: 'chat',
    updatedAt: 'Thu Jun 27 2024 10:19:32 GMT-0400 (Eastern Daylight Time)',
    user: {
      email: 'test@gmail.com',
      fullName: 'Test',
      id: 'Nn1j4XPFbu3U0hKTUURXoTomhoSe',
    },
  },
];

/**
 * ChatHistoryWindow component displays a sidebar that contains chat history.
 * The sidebar is toggled by clicking on the toggle button.
 */
const ChatHistoryWindow = () => {
  // State variable to determine if the chat history sidebar is shown or hidden
  const [showHistorySidebar, setShowHistorySidebar] = useState(false);

  /**
   * Toggles the visibility of the chat history sidebar.
   *
   * @return {void} No return value.
   */
  const toggleHistorySidebar = () => {
    // Toggle the value of showHistorySidebar
    setShowHistorySidebar(!showHistorySidebar);
  };

  return (
    // This sidebar is positioned at the top right corner of the chat interface.
    <Grid {...styles.historySideBar(showHistorySidebar)}>
      {/* Header of the sidebar */}
      <Grid {...styles.historySideBarHeader}>
        {/* Title of the chat history sidebar */}
        <Grid {...styles.historySideBarTitle(showHistorySidebar)}>
          {/* Display the title of the chat history sidebar */}
          <Typography {...styles.historySideBarTitleText}>
            {/* Display 'Chat History' */}
            Chat History
          </Typography>
        </Grid>
        {/* Toggle button for chat history sidebar */}
        <Button onClick={toggleHistorySidebar} {...styles.toggleHistoryButton}>
          {/* Display 'X' when the chat history sidebar is open, otherwise display '+' */}
          {showHistorySidebar ? 'X' : '+'}
        </Button>
      </Grid>

      {/* Content of the chat history sidebar */}
      <Grid {...styles.historySideBarContent(showHistorySidebar)}>
        {/* The chat history sidebar content is displayed based on the value of showHistorySidebar.
          If showHistorySidebar is true, the sidebar is open and the content is displayed.
          If showHistorySidebar is false, the sidebar is closed and the content is hidden. */}
        {/* Render the chat history */}
        {/* Pass the test data to the ChatHistory component */}
        <ChatHistory history={testData} />
      </Grid>
    </Grid>
  );
};

export default ChatHistoryWindow;
