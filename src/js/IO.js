export default {
    export: (tables) => {
        let href = URL.createObjectURL(new Blob([JSON.stringify(tables)]));
        let a = document.createElement('a');
        a.href = href;
        a.download = 'knave-tables.json';
        a.click();
    },
    import: (done) => {
        let file = document.createElement('input');
        file.type = 'file';
        file.accept = '.json';
        file.onchange = (e) => {
            e.target.files[0].text().then((t) => {
                done(JSON.parse(t));
            });
        };
        file.click();
    },
};
