import './main.css';
import { sites } from '@/const';

// LMS全体のスタイルオーバーライド
export default defineContentScript({
    matches: sites.map(site => `*://${site.hostname}${site.basePath ?? ''}/*`),
    cssInjectionMode: 'manifest',
    main() {
        // do nothing
    },
});
