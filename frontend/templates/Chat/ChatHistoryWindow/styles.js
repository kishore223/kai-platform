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
      // Set the border color and width.
      border: '1px solid rgba(105, 73, 255, 1)',
      // Set the border radius.
      borderRadius: '15px',
      // Set the background color.
      backgroundColor: '#ffffff',
      // Adjust the width of the sidebar based on the value of showHistorySidebar.
      // If showHistorySidebar is true, set the width to 30%.
      // If showHistorySidebar is false, set the width to fit the content.
      width: showHistorySidebar ? '30%' : 'fit-content',
      // Adjust the height of the sidebar based on the value of showHistorySidebar.
      // If showHistorySidebar is true, set the height to 100%.
      // If showHistorySidebar is false, set the height to fit the content.
      height: showHistorySidebar ? '100%' : 'fit-content',
      // Adjust the padding bottom of the sidebar based on the value of showHistorySidebar.
      // If showHistorySidebar is true, set the padding bottom to 10px.
      // If showHistorySidebar is false, set the padding bottom to 0px.
      paddingBottom: showHistorySidebar ? '10px' : '0px',
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
   * @return {object} - The styles for the toggle history button.
   */
  toggleHistoryButton: {
    sx: {
      // Set the background color to transparent.
      backgroundColor: 'transparent',
      // Set the text color to a custom color.
      color: 'rgba(105, 73, 255, 1)',
      // Set the font size to large.
      fontSize: 'large',
      // Define styles for the hover state.
      ':hover': {
        // Set the background color to transparent.
        backgroundColor: 'transparent',
        // Set the text color to the same custom color.
        color: 'rgba(105, 73, 255, 1)',
        // Set the opacity to 0.7.
        opacity: 0.7,
      },
    },
  },
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
      // Set the height of the sidebar to the full viewport height
      height: '100%',
      // Enable vertical scrolling if the content overflows
      overflowY: 'auto',
      // Add a border at the top of the sidebar
      borderTop: '1px solid rgba(105, 73, 255, 1)',
      // Add a smooth transition when the sidebar is opened or closed
      transition: 'right 0.3s ease',
    },
  }),
};

export default styles;
