import { Router } from 'express';
import { verifyToken } from '../utils/jwt-token-generator.js';
import { chatCompletionValidator, validate } from '../utils/data-validators.js';
import {
  deleteChats,
  generateChatCompletion,
  sendChatsToUser,
} from '../controllers/chat-controller.js';

//Protected API
const chatRoutes = Router();
chatRoutes.post(
  '/new',
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);
chatRoutes.get('/all-chats', verifyToken, sendChatsToUser);
chatRoutes.delete('/delete', verifyToken, deleteChats);

export default chatRoutes;
