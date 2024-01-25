import { Router } from 'express';
import { getAllUsers, login, signup, verifyUser, userLogout, } from '../controllers/user-controller.js';
import { userLoginValidator, userSignupValidator, validate, } from '../utils/data-validators.js';
import { verifyToken } from '../utils/jwt-token-generator.js';
const userRouter = Router();
userRouter.get('/', getAllUsers);
userRouter.post('/signup', validate(userSignupValidator), signup); // using express validator for validation ..
userRouter.post('/login', validate(userLoginValidator), login);
userRouter.get('/auth-status', verifyToken, verifyUser);
userRouter.get('/logout', verifyToken, userLogout);
export default userRouter;
//# sourceMappingURL=user-router.js.map