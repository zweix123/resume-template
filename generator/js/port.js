/**
 * config file import
 * @param {*} event 
 */
function handleConfigImport(event) {
    if (event.target.files.length === 0) return;

    const file = event.target.files[0];  // only read one
    const fileReader = new FileReader();
    fileReader.onload = () => {
        const fileContent = fileReader.result;
        const data = JSON.parse(fileContent);

        const headTag = document.getElementById("headHTML");
        const elements = headTag.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const value = data["head"][element.getAttribute('data-key')];
            if (value !== undefined) {
                // 和导出有关，因为如果不填不是不导出，而是导出空，所以其实这里应该都是defined的，只是为空；所以会产生覆盖

                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = value;
                } else if (element.hasAttribute('contenteditable')) {
                    element.innerText = value;
                }
            }
        });
    };
    fileReader.readAsText(file);  // 异步读入
}

/**
 * config file export
 * @param {*} event 
 */
function HandleConfigExport(event) {
    let data = { "head": {} };

    const headTag = document.getElementById("headHTML");
    const elements = headTag.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.dataset.key;
        const value = element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' ? element.value : element.innerText;
        data["head"][key] = value;
    });

    const dataString = JSON.stringify(data);
    const blob = new Blob([dataString], { type: 'application/json;charset=utf-8' });
    const file = new File([blob], 'resume_config.json', { type: 'application/json;charset=utf-8' });
    saveAs(file);
}

const fileInput = document.getElementById('config-file-input');
fileInput.addEventListener('change', handleConfigImport);

const ExportButton = document.getElementById("export-button");
ExportButton.addEventListener("click", HandleConfigExport);
