/**
 * remove a tag from its father tag ref its remove buffton
 * @param {button} removeBtn Tag remove button
 */
function removeFromBtn(removeBtn) {
    let tempTag = removeBtn.parentElement.parentElement;
    tempTag.parentElement.removeChild(tempTag);
}

/**
 * create a section with id and return the add button
 * @param {string} section section name(id)
 * @returns the section add entry button
 */
function createSection(section) {
    try {
        const htmlContent = eval(`${section}HTML`);
        const sectionTag = document.createElement('div');
        sectionTag.innerHTML = htmlContent;

        const BodyTag = document.querySelector('#content-section-body');
        BodyTag.appendChild(sectionTag);

        // section remove
        const sectionRemoveBtn = document.getElementById(`${section}-remove`);
        sectionRemoveBtn.addEventListener('click', () => removeFromBtn(sectionRemoveBtn));

        // section entry situation
        const anchorTag = document.getElementById(`${section}-anchor`);

        // section entry add
        const sectionEntryaddBtn = document.getElementById(`${section}-add`);
        sectionEntryaddBtn.addEventListener('click', function () {
            const entryTag = document.createElement('div');
            const entryHTML = eval(`${section}EntryHTML`);
            entryTag.innerHTML = entryHTML;

            // entry only have one button - secton entry remove
            const sectionEntryRemoveBtn = entryTag.querySelector('button');
            sectionEntryRemoveBtn.addEventListener('click', () => removeFromBtn(sectionEntryRemoveBtn));

            anchorTag.appendChild(entryTag);
        });
        return sectionEntryaddBtn;
    } catch (error) {
        throw error;
    }
}

/**
 * create section ref entry num, can check entry num
 * @param {string} section section name
 * @param {number} number  entry tag number
 */
function createSectionAndEnties(section, number) {
    const sectionTag = document.querySelector(`[data-tag='${section}']`);
    let sectionEntryAddBtn = null;
    if (!sectionTag) {  // 没有tag, 则创建
        sectionEntryAddBtn = createSection(section);
    } else {  // 有tag, 则获得entry数量
        sectionEntryAddBtn = document.getElementById(`${section}-add`);
        number -= document.getElementById(`${section}-anchor`).children.length;
    }
    // 通过触发section的add button，使用其的监听函数进行entry的添加
    const event = new Event('click', { bubbles: true, cancelable: true });
    while (number-- > 0) sectionEntryAddBtn.dispatchEvent(event);
}


function putTextToEle(element, content) {
    if (content !== undefined) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.value = content;
        } else if (element.hasAttribute('contenteditable')) {
            element.innerText = content;
        }
    }
}

function takeTextFromEle(element) {
    return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' ? element.value : element.innerText;
}

// handle config file import button
document.getElementById('config-file-input').addEventListener('change', function (event) {
    if (event.target.files.length === 0) return;

    const file = event.target.files[0];  // only read one
    const fileReader = new FileReader();
    fileReader.onload = () => {
        const fileContent = fileReader.result;
        const data = JSON.parse(fileContent);

        // handle header
        const headTag = document.getElementById("headHTML");
        const elements = headTag.querySelectorAll('[data-key]');
        elements.forEach(element => putTextToEle(element, data["head"][element.getAttribute('data-key')]));

        // handle body
        const bodyTag = document.getElementById("content-section-body");
        while (bodyTag.firstChild) bodyTag.removeChild(bodyTag.firstChild);  // clear section
        for (const sectionPair of data["body"]) createSectionAndEnties(sectionPair["section"], sectionPair["data"].length);  // create

        const sectionTags = bodyTag.children;
        const iLen = sectionTags.length;
        console.assert(iLen == data["body"].length);
        for (let i = 0; i < iLen; i++) {
            const sectionTag = sectionTags[i];
            const sectionData = data["body"][i];

            const archorTag = sectionTag.querySelector(`#${sectionData["section"]}-anchor`);
            const entryTags = archorTag.children;

            const jLen = entryTags.length;
            console.assert(jLen === sectionData["data"].length);
            for (let j = 0; j < jLen; j++) {
                const entryTag = entryTags[j];
                const entryData = sectionData["data"][j];

                const elements = entryTag.querySelectorAll('[data-key]');

                elements.forEach(element => {
                    const key = element.getAttribute('data-key')
                    const value = entryData[key];
                    putTextToEle(element, value);
                });
            }
        }
    };
    fileReader.readAsText(file);  // 异步读入
});

// handle config file export
document.getElementById("export-button").addEventListener("click", function (event) {
    let data = { "head": {}, "body": [] };

    // handle header
    const headTag = document.getElementById("headHTML");
    const elements = headTag.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.dataset.key;
        const value = takeTextFromEle(element)
        data["head"][key] = value;
    });

    // handle body
    const bodyTag = document.getElementById("content-section-body");
    const childrenTags = bodyTag.children;

    [...childrenTags].forEach(childrenTag => {
        console.assert(childrenTag.children.length === 1);
        const sectionTag = childrenTag.children[0];   // 构造的时候是在一个div下插入, 所有要跨过一个div

        const sectionName = sectionTag.getAttribute('data-tag');
        const anchorTag = sectionTag.querySelector(`#${sectionName}-anchor`);
        const entryTags = anchorTag.children;
        let sectionData = [];
        [...entryTags].forEach(entryTag => {
            const elements = entryTag.querySelectorAll('[data-key]');

            let entryData = {};
            elements.forEach(element => {
                const key = element.dataset.key;
                const value = takeTextFromEle(element)
                entryData[key] = value;
            });
            sectionData.push(entryData);
        });
        data["body"].push({ "section": sectionName, "data": sectionData });
    });

    // down
    const dataString = JSON.stringify(data);
    const blob = new Blob([dataString], { type: 'application/json;charset=utf-8' });
    const file = new File([blob], 'resume_config.json', { type: 'application/json;charset=utf-8' });
    saveAs(file);
});

// global const
const SECTION_NAME = ["education", "recognitions", "experience", "projects", "skills"]
const SECTION_NAME_MAP = {
    "education": "教育",
    "recognitions": "荣誉 / 奖项",
    "experience": "工作经历",
    "projects": "项目 / 研究经历",
    "skills": "技能"
}
// 教育, 荣誉 / 奖项, 工作经历, 项目 / 研究经历. 技能

const modal = document.createElement('div');
modal.classList.add("modal");
modal.style.display = "none";

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

modal.appendChild(modalContent);
document.body.appendChild(modal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        while (modalContent.firstChild) modalContent.removeChild(modalContent.firstChild);  // clear, reload next
    }
});

// bottom add button
document.getElementById("global-add-button").addEventListener('click', () => {
    if (getComputedStyle(modal).display === 'flex') return;

    modal.style.display = 'flex';

    const existingSectionName = Array.from(document.querySelectorAll('[data-tag]'), element => element.dataset.tag).filter(Boolean);

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');
    modalContent.appendChild(buttonGroup);

    for (const sectionName of SECTION_NAME) {
        if (existingSectionName.includes(sectionName)) continue;

        const button = document.createElement('button');  // 弹出框中的按钮
        button.style = "width: 100%; height: 50px; display: flex; justify-content: center; align-items: center; border: none; background-color: #ccc;"
        button.id = sectionName
        button.textContent = SECTION_NAME_MAP[button.id];

        button.addEventListener("click", () => {
            try {
                createSection(button.id);
                button.remove();
            } catch (error) {
                console.log(`Don't support ${button.id}`)
            }
        });

        buttonGroup.appendChild(button);
    }
});