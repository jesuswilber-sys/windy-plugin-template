import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-hail-risk',
    version: '0.1.0',
    icon: '⛈️',
    title: 'Estimador de Riesgo de Granizo',
    description: 'Calcula el potencial de granizo severo a partir de CAPE e inestabilidad atmosférica',
    author: 'Tu Nombre',
    desktopUI: 'rhpane', // Panel lateral derecho
    mobileUI: 'fullscreen',
};

export default config;
