const params = new URLSearchParams(window.location.search);
const theme = params.get('theme') ?? 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function setTheme(name) {
    window.location.search = `theme=${name}`;
}

const buttons = {
    verticalButton: 'btn btn-outline-light w-100 h-100 p-0'
}

export {buttons, theme, setTheme};
