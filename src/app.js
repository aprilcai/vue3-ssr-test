import { createSSRApp } from 'vue';
import App from './App.vue';
export default () => {
    const app = createSSRApp(App);
    app.config.errorHandler = () => {
        // do report error here
    };
}
