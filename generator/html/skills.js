const skillsEntryHTML = `
<div class="resume-item">
    <div style="display: flex; justify-content: space-between;">
        <h4 class="resume-item-details" contenteditable="true" data-placeholder="技能" style="min-height: auto;" data-key="skills|skill"></h4>
        <button class="delete-button" style="background-color: purple">x</button>
    </div>
    <p class="resume-item-copy" contenteditable="true" data-placeholder="描述" data-key="skills|description"></p>
</div>
`
const skillsHTML = `
<section class="content-section" data-tag="skills">
  <header class="section-header" style="display: flex; justify-content: space-between;">
    <h2>技能</h2>
    <button class="delete-button" id="skills-remove">x</button>
  </header>
  
  <div id="skills-anchor">
  </div>
  
  <button class="add-button" id="skills-add" style="float: right;">+</button>
  
  <hr style="clear: both;">
</section>
`