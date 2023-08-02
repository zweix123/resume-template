const educationEntryHTML = `
<div class="resume-item" itemscope itemprop="alumniOf" itemtype="http://schema.org/CollegeOrUniversity">
    <div style="display: flex; justify-content: space-between;">
        <h3 class="resume-item-title" itemprop="name" contenteditable="true" data-placeholder="学校" style="min-height: auto;" data-key="education|uni"></h3>
        <button class="delete-button" style="background-color: purple">x</button>
    </div>    

    <h4 class="resume-item-details group" itemprop="description">
        <input type="text" id="position" placeholder="学位: 专业 方向 学位层次" style="width: 235px;" data-key="education|degree"></input>
        &bull;
        <input type="text" id="start-date" placeholder="起始时间" style="width: 201px;" data-key="education|year"></input>
        -
        <input type="text" id="end-date" placeholder="终止时间" style="width: 201px;" data-key="education|year_"></input>
    </h4>
    
    <!--
    <h5 class="resume-item-details award-title resume-item-list" itemprop="description" contenteditable="true" data-placeholder="获奖" data-key="education|awards"></h5>
    -->
    <p class="resume-item-copy resume-item-list" itemprop="description" contenteditable="true"
    data-placeholder="经历(支持Markdown)"
    data-key="education|summary"></p>
</div>
`
const educationHTML = `
<section class="content-section" data-tag="education">
    <header class="section-header" style="display: flex; justify-content: space-between;">
        <h2>教育</h2>
        <button class="delete-button" id="education-remove">x</button>
    </header>
    
    <div id="education-anchor">
    </div>
    
    <button class="add-button" id="education-add" style="float: right;">+</button>
    
    <hr style="clear: both;">
</section>
`