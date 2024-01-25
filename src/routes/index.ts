import { Router } from 'express';
import userRoutes from './user-routes.js';
import chatRoutes from './chat-routes.js';

const appRouter = Router();

appRouter.use('/user', userRoutes); //domain/user
appRouter.use('/chat', chatRoutes); //domain/chats

export default appRouter;
