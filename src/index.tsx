import { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { PreloadScreen } from './PreloadScreen';

const App = lazy(
    () => import('./App').then(module => ({ default: module.App }))
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Suspense fallback={<PreloadScreen />}>
            <App />
        </Suspense>
    </StrictMode>,
);
