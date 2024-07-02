/**
 * Contains styles for various components related to the chat history window.
 */
const styles = {
  /**
   * Styles for the chat history sidebar.
   *
   * @param {boolean} showHistorySidebar - Whether the chat history sidebar is shown or hidden.
   * @return {object} - The styles for the chat history sidebar.
   */
  historySideBar: (showHistorySidebar) => ({
    item: true,
    sx: {
      // Set the display property to flex and arrange the children in a column.
      display: 'flex',
      // Set the flex direction to column.
      flexDirection: 'column',
      // Adjust the border of the sidebar based on the value of showHistorySidebar.
      // If showHistorySidebar is true, set the border to 5px solid rgba(115,80,255,255).
      // If showHistorySidebar is false, set the border to none.
      border: showHistorySidebar ? '5px solid rgba(115,80,255,255)' : 'none',
      // Set the border radius.
      borderRadius: '15px',
      // Adjust the background of the sidebar based on the value of showHistorySidebar.
      // If showHistorySidebar is true, set the background to black.
      // If showHistorySidebar is false, set the background to transparent.
      backgroundColor: showHistorySidebar ? '#000000' : 'transparent',
      // Adjust the min-width of the sidebar based on the value of showHistorySidebar.
      // If showHistorySidebar is true, set the min-width to 25%.
      // If showHistorySidebar is false, set the min-width to fit the content.
      minWidth: showHistorySidebar ? '25%' : 'fit-content',
      // Adjust the height of the sidebar based on the value of showHistorySidebar.
      // If showHistorySidebar is true, set the height to 100%.
      // If showHistorySidebar is false, set the height to fit the content.
      height: showHistorySidebar ? '100%' : 'fit-content',
      // Set the color to white.
      color: '#ffffff',
      // Set the max width of the sidebar to 25%.
      maxWidth: '25%',
    },
  }),
  /**
   * Styles for the header of the chat history sidebar.
   *
   * @return {object} - The styles for the chat history sidebar header.
   */
  historySideBarHeader: {
    sx: {
      // Set the display property to flex and arrange the children in a row.
      display: 'flex',
      // Set the flex direction to row.
      flexDirection: 'row',
      // Align the children along the right edge of the header.
      justifyContent: 'flex-end',
      // Align the children along the center of the header vertically.
      alignItems: 'center',
    },
  },
  /**
   * Styles for the title of the chat history sidebar.
   *
   * @param {boolean} showHistorySidebar - Whether the chat history sidebar is shown or hidden.
   * @return {object} - The styles for the chat history sidebar title.
   */
  historySideBarTitle: (showHistorySidebar) => ({
    sx: {
      // Display the title only when the chat history sidebar is shown.
      display: !showHistorySidebar ? 'none' : 'flex',
      // The flexGrow property is set to 1 to make the title span the remaining space in the chat history sidebar header.
      flexGrow: 1,
      // Center the title horizontally.
      justifyContent: 'center',
    },
  }),
  /**
   * Styles for the title text of the chat history sidebar.
   *
   * @return {object} - The styles for the title text.
   */
  historySideBarTitleText: {
    // Center the title text horizontally.
    textAlign: 'center',
  },
  /**
   * Styles for the toggle history button.
   *
   * @param {boolean} showHistorySidebar - Whether the chat history sidebar is shown or hidden.
   * @return {object} - The styles for the toggle history button.
   */
  toggleHistoryButton: (showHistorySidebar) => ({
    sx: {
      // Set the background color to black.
      backgroundColor: '#000000',
      // Set the text color to a custom color.
      color: 'rgba(115,80,255,255)',
      // Adjust the border of the toggle button based on the value of showHistorySidebar.
      // If showHistorySidebar is true, set the border to none.
      // If showHistorySidebar is false, set the border to 5px solid rgba(115,80,255,255).
      border: !showHistorySidebar ? '5px solid rgba(115,80,255,255)' : 'none',
      // Styles for the toggle history button when it is being hovered over.
      '&:hover': {
        // Set the background color to black on hover.
        backgroundColor: '#000000',
      },
    },
  }),
  /**
   * Styles for the content of the chat history sidebar.
   *
   * @param {boolean} showHistorySidebar - Whether the chat history sidebar is shown or hidden.
   * @return {object} - The styles for the chat history sidebar content.
   */
  historySideBarContent: (showHistorySidebar) => ({
    item: true,
    sx: {
      // Display the sidebar only when showHistorySidebar is true
      display: showHistorySidebar ? 'block' : 'none',
      // Set the background color to rgba(24,26,32,255)
      backgroundColor: 'rgba(24,26,32,255)',
      // Set the height of the sidebar to 100%
      height: '100%',
      // Set the width of the sidebar to 100%
      width: '100%',
      // Enable vertical scrolling if the content overflows
      overflowY: 'auto',
      // Set the border radius.
      borderRadius: '0px 0px 15px 15px',
      // Add a smooth transition when the sidebar is opened or closed
      transition: 'all 0.3s ease',
    },
  }),
};

export default styles;
