import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './components/Static/LoadingSpinner';
import { toast } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './i18n';

import App from './App';
// import * as serviceWorker from './serviceWorker';

toast.configure({
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    closeButton: false,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true,
    progressStyle: {
        background: 'lightgray',
    },
    bodyClassName: 'resume-toast-body',
});

ReactDOM.render(

    <Suspense fallback={<LoadingSpinner />}>
        <App />
    </Suspense>,

    document.getElementById('root'),
);
