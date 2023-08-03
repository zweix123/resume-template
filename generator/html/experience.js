const experienceEntryHTML = `
<div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/Organization">
    <div style="display: flex; justify-content: space-between;">
        <h3 class="resume-item-title" itemprop="name" contenteditable="true" data-placeholder="单位" style="min-height: auto;" data-key="experience|company"></h3>    
        <button class="delete-button" style="background-color: purple">x</button>
    </div>

    <h4 class="resume-item-details group"  itemprop="description">    
        <input type="text" id="position" placeholder="岗位(部门)" style="width: 230px;" data-key="experience|position"></input>
        &bull;
        <input type="text" id="start-date" placeholder="起始时间" style="width: 200px;" data-key="experience|duration0"></input>
        &mdash;
        <input type="text" id="end-date" placeholder="终止时间" style="width: 200px;" data-key="experience|duration1"></input>
        <br>
        <input type="text" id="position" placeholder="地点" style="width: 230px;" data-key="experience|location"></input>
    </h4>

    <p class="resume-item-copy" contenteditable="true" 
    data-placeholder="产出"
    data-key="experience|summary"></p>
</div>
`
const experienceHTML = `
<section class="content-section" data-tag="experience">
    <header class="section-header" style="display: flex; justify-content: space-between;">
        <h2>工作经历</h2>
        <button class="delete-button" id="experience-remove">x</button>
    </header>

    <div id="experience-anchor">
    </div>
    
    <button class="add-button" id="experience-add" style="float: right;">+</button>
    
    <hr style="clear: both;">
</section>
`