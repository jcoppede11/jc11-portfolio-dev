interface UserData {
    label: string;
    ariaLabel: string;
    href: string;
    handle: string;
}

const userData: Array<UserData> = [
    {
        label: 'LinkedIn',
        ariaLabel: 'Mi linkedin',
        href: 'https://linkedin.com/in/jjcoppede',
        handle: '@jjcoppede'
    },
    {
        label: 'GitHub',
        ariaLabel: 'Mi github',
        href: 'https://github.com/jcoppede11',
        handle: '@jcoppede11'
    },
    {
        label: 'Correo electrónico',
        ariaLabel: 'Mi correo electrónico',
        href: 'mailto:jcoppede11@gmail.com',
        handle: 'jcoppede11@gmail.com'
    }
]
export default userData;