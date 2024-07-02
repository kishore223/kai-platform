const admin = require('firebase-admin');
const { https, logger } = require('firebase-functions');
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const DEBUG = process.env.DEBUG;

// New
/**
 * Fetches information from the chatsessions collection for a user.
 *
 * @param {Object} props - The properties passed to the function.
 * @param {Object} props.data - The data object containing the user, challenge, message, and botType.
 * @param {Object} props.data.user - The user object.
 *  @param {string} props.data.user.id - The user ID value.
 *  @param {string} props.data.user.fullName - The user's full name.
 *  @param {string} props.data.user.email - The users email.
 * @param {Object} props.data.message - The message object.
 * @param {Object} props.data.type - The bot type.
 *
 * @param {Object} data - The data object containing the user's email, full name, and unique identifier (uid).
 * @param {Object} context - The context object containing information about the authenticated user.
 *
 * @return {Promise<Object>} - A promise that resolves to an object containing the status and data of the chat sessions.
 * @throws {HttpsError} Throws an error if there is an internal error.
 */

exports.fetchChatHistory = onCall(async (props) => {
  try {
    DEBUG && logger.log('Communicator started, data:', props.data);

    const { email, fullName, id } = props.data.user;

    if (!email || !fullName || !id) {
      throw new https.HttpsError(
        'failed-precondition',
        'Please provide all required fields'
      );
    }

    const fetchChatHistoryRef = await admin
      .firestore()
      .collection('chatSessions')
      .where('user.id', '==', id)
      .get();

    if (fetchChatHistoryRef.empty) {
      throw new https.HttpsError('not-found', 'Document history not-found');
    }

    const Wholehistory = [];
    fetchChatHistoryRef.forEach((doc) => {
      Wholehistory.push({ id: doc.id, ...doc.data() });
    });

    const extractChatLogs = (docs) => {
      const result = [];

      docs.forEach((doc) => {
        const { id, messages } = doc;

        messages.forEach((message) => {
          result.push({
            docId: id,
            timestamp: new Date(
              message.timestamp._seconds * 1000 +
                message.timestamp._nanoseconds / 1000000
            ),
            role: message.role,
            text: message.payload.text,
          });
        });
      });

      return result;
    };

    const history = extractChatLogs(Wholehistory);

    DEBUG && logger.log('Fetch Chat History: ', history);

    logger.log('Successfully communicated');

    // return history;

    return {
      status: 'created',
      data: history,
      history,
    };
  } catch (error) {
    logger.error(error);
    throw new HttpsError('internal', error.message);
  }
});

// const fetchChatHistory = onCall(async (props) => {
//   try {
//     // Error from getFirestore(), ''
//     const db = getFirestore();
//     DEBUG && logger.log('Communicator started, data:', props.data);

//     const { user } = props.data;

//     if (!user) {
//       logger.log('Missing required fields', props.data);
//       throw new HttpsError('invalid-argument', 'Missing required fields');
//     }

//     /**
//      * props.data.user.id may need to be changed to allow for modularity
//      * in the future. For now, it is set to 'const userId = 'user123';'
//      * from the ChatWindow feature.
//      */

//     const fetchChatHistoryRef = async (userId = props.data.user.id) => {
//       const q = query(
//         collection(db, 'chatSessions'),
//         where('userId', '==', userId)
//       );
//       const querySnapshot = await getDocs(q);
//       const history = [];
//       querySnapshot.forEach((doc) => {
//         history.push({ id: doc.id, ...doc.data() });
//       });
//       // New
//       // Potential loop to print chatHistoryData entities
//       history.forEach((item) =>
//         console.log(
//           'id: ' +
//             item.id +
//             ', message: ' +
//             item.message +
//             ', timestamp: ' +
//             item.timestamp
//         )
//       );
//       return history;
//     };

//     DEBUG && logger.log('Fetch Chat History: ', fetchChatHistory);

//     logger.log('Successfully communicated');
//     return {
//       status: 'created',
//       data: fetchChatHistory,
//     };
//   } catch (error) {
//     logger.error(error);
//     throw new HttpsError('internal', error.message);
//   }
// });
