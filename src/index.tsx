import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { PreloadScreen } from './PreloadScreen';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Suspense fallback={<PreloadScreen />}>
            <App />
        </Suspense>
    </StrictMode>,
);
