import { List, ListItem, ListItemText } from '@mui/material';

import styles from './styles';

/**
 * ChatHistory component displays a list of chat entries.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.history - The array of chat entries to display.
 * @return {JSX.Element} The rendered ChatHistory component.
 */
const ChatHistory = ({ history }) => (
  // Render a List component containing ListItem components for each chat entry.
  <List>
    {/* Map over each chat entry and render a ListItem component. */}
    {history.map((entry) => {
      // Render a ListItem component with a unique key and ListItemText component inside.
      return (
        <ListItem key={entry.id}>
          {/* Render a ListItemText component with the chat entry's date and first message text. */}
          <ListItemText
            {...styles.chatHistoryListItemText}
            // Format the chat entry's createdAt date and append it to the first message text.
            primary={
              `${new Date(entry.createdAt).toDateString()}: ` +
              `${entry.messages[0].payload.text}`
            }
          />
        </ListItem>
      );
    })}
  </List>
);

export default ChatHistory;
