export type SiteConfig = {
    /** Moodleのホスト名 */
    hostname: string;
    /** Moodleのベースパス（末尾スラッシュなし） */
    basePath?: string;
    /** Moodleのサイト名 or 採用機関名 */
    name: string;
    /** 試験対応？ */
    experimental?: boolean;
};

export const sites: SiteConfig[] = [
    {
        hostname: 'lms.omu.ac.jp',
        name: '大阪公立大学',
    },
    {
        hostname: 'moodle.s.kyushu-u.ac.jp',
        name: '九州大学',
    },
    {
        hostname: 'elms.u-aizu.ac.jp',
        name: '会津大学',
    },
    {
        hostname: 'sulms.shiga-u.ac.jp',
        name: '滋賀大学',
    },
    {
        hostname: 'mdl.media.gunma-u.ac.jp',
        name: '群馬大学',
    },
    {
        hostname: 'cms.aitech.ac.jp',
        name: '愛知工業大学',
    },
    {
        hostname: 'lms-m41.mie-u.ac.jp',
        name: '三重大学 (Moodle v4.1)',
        experimental: true,
    },
    {
        hostname: 'wsdmoodle.waseda.jp',
        name: 'Waseda Moodle',
    },
];

/** 対応しているMoodleのホスト名 */
export const compatibleWebsiteHostnames = sites.map(site => site.hostname);
