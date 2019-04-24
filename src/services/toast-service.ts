import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
toast.configure();

const { info, warn, error, success } = toast;

export { info, warn, error, success };
