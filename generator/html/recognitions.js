const recognitionsEntryHTML = `
<div class="resume-item" >
    <div style="display: flex; justify-content: space-between;">
        <h3 class="resume-item-title" itemprop="award" contenteditable="true" data-placeholder="奖项名" style="min-height: auto;" data-key="recognitions|award"></h3>
        <button class="delete-button" style="background-color: purple">x</button>
    </div>  
    
    <h4 class="resume-item-details">
        <input type="text" id="position" placeholder="承办方" style="width: 200px;" data-key="recognitions|organization"></input>
        &bull;
        <input type="text" id="start-date" placeholder="获奖时间" style="width: 200px;" data-key="recognitions|year"></input>
    </h4>
    <p class="resume-item-copy" contenteditable="true" 
    data-placeholder="简介&#10;注: 该Entry和上面的承办方不会出现在LaTeX版本的简历中" 
    data-key="recognitions|summary"></p>
</div >
`
const recognitionsHTML = `
<section class="content-section" data-tag="recognitions">

    <header class="section-header" style="display: flex; justify-content: space-between;">
        <h2>荣誉 / 奖项</h2>
        <button class="delete-button" id="recognitions-remove">x</button>
    </header>

    <div id="recognitions-anchor">
    </div>

    <button class="add-button" id="recognitions-add" style="float: right;">+</button>
    
    <hr style="clear: both;">
</section>
`