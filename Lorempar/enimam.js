// main.js

import { onDeviceTransactionReviewThunk } from "./sendFormThunks";

// Assuming you have a transaction ID to review
const transactionId = "12345";

// Call the imported function with the transaction ID
onDeviceTransactionReviewThunk(transactionId);
