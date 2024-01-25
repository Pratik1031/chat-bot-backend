import { Router } from 'express';
import { getAllUsers, userLogin, userSignup, verifyUser, userLogout, } from '../controllers/user-controller.js';
import { userLoginValidator, userSignupValidator, validate, } from '../utils/data-validators.js';
import { verifyToken } from '../utils/jwt-token-generator.js';
const userRoutes = Router();
userRoutes.get('/', getAllUsers);
userRoutes.post('/signup', validate(userSignupValidator), userSignup);
userRoutes.post('/login', validate(userLoginValidator), userLogin);
userRoutes.get('/auth-status', verifyToken, verifyUser);
userRoutes.get('/logout', verifyToken, userLogout);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map