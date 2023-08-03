const projectsEntryHTML = `
<div class="resume-item" itemscope itemtype="http://schema.org/CreativeWork">

    <div style="display: flex; justify-content: space-between;">
        <h3 class="resume-item-title" itemprop="name" contenteditable="true" data-placeholder="项目(研究)名" style="min-height: auto;" data-key="projects|project"></h3>
        <button class="delete-button" style="background-color: purple">x</button>
    </div>   

    <h4 class="resume-item-details " itemprop="description">
        <input type="text" id="position" placeholder="角色" style="width: 200px;" data-key="projects|role"></input>
        &bull;
        <input type="text" id="start-date" placeholder="起始时间" style="width: 200px;" data-key="projects|duration0"></input>
        &mdash;
        <input type="text" id="end-date" placeholder="终止时间" style="width: 200px;" data-key="projects|duration1"></input>
    </h4>
    <p class="resume-item-copy" contenteditable="true" 
    data-placeholder="细节描述(支持Markdown)"
    data-key="projects|description" style="white-space: nowrap;"></p>
</div>
`

const projectsHTML = `
<section class="content-section" data-tag="projects">
    <header class="section-header" style="display: flex; justify-content: space-between;">
        <h2>项目 / 研究经历</h2>
        <button class="delete-button" id="projects-remove">x</button>
    </header>


    <div id="projects-anchor">
    </div>

    <button class="add-button" id="projects-add" style="float: right;">+</button>
    
    <hr style="clear: both;">
</section>
`
