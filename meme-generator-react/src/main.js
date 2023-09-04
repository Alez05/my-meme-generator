import React from 'react';
import { createRoot } from 'react-dom/client';
import { MyApp } from './components';

const rootElement = document.querySelector('#app');
const root = createRoot(rootElement);

const app = <MyApp />;

root.render(app);
