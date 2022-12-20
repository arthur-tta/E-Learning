import { path } from '../constant/path';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Detailpage from '../pages/detailpage/Detailpage';
import Testpage from '../pages/test/Test';
import Forgotpage from '../pages/forgotpassword/ForgotPassword';

export const PageRoutes = [
  {
    path: path.HOME,
    element: Home,
  },
  {
    path: path.LOGIN,
    element: Login,
  },
  {
    path: path.REGISTER,
    element: Register,
  },
  {
    path: path.DETAILPAGE,
    element: Detailpage,
  },
  {
    path: path.TESTPAGE,
    element: Testpage,
  },
  {
    path: path.FORGOTPAGE,
    element: Forgotpage,
  },
];
