const headHTML = `
<header class="page-header">
    <img src="../images/avatar.jpg" alt="photo" class="avatar no-print" itemprop="image">

    <input contenteditable="true" class="header-name" itemprop="name" placeholder="姓名" style="width: 100%;"
        data-key="resume_name">
    </input>

    <div class="input-container header-contact-info line-input-container">
        <input type="text" placeholder="地址" data-key="resume_contact_address">
        &bull;
        <input type="text" placeholder="电话" data-key="resume_contact_telephone">
        &bull;
        <input type="text" placeholder="邮箱" data-key="resume_contact_email">
    </div>

    <div class="title-bar no-print">
        <!--
        <input type="text" class="header-title" itemprop="jobTitle" placeholder="当前职位名称" data-key="resume_title">
        </input>
        -->

        <ul class="icon-links">
            <li class="icon-link-item">
                
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve" width="28">
                <path id="GitHub" fill-rule="evenodd" clip-rule="evenodd" fill="#D1CECC" d="M14.01,0C6.27,0-0.01,6.28-0.01,14.02
  c0,6.19,4.02,11.45,9.59,13.3c0.7,0.13,0.96-0.3,0.96-0.68c0-0.33-0.01-1.21-0.02-2.38c-3.9,0.85-4.72-1.88-4.72-1.88
  c-0.64-1.62-1.56-2.05-1.56-2.05c-1.27-0.87,0.1-0.85,0.1-0.85c1.41,0.1,2.15,1.44,2.15,1.44c1.25,2.14,3.28,1.52,4.08,1.16
  c0.13-0.91,0.49-1.52,0.89-1.87c-3.11-0.35-6.38-1.56-6.38-6.93c0-1.53,0.55-2.78,1.44-3.76C6.37,9.17,5.89,7.74,6.65,5.81
  c0,0,1.18-0.38,3.85,1.44c1.12-0.31,2.32-0.47,3.51-0.47c1.19,0.01,2.39,0.16,3.51,0.47c2.68-1.81,3.85-1.44,3.85-1.44
  c0.76,1.93,0.28,3.35,0.14,3.71c0.9,0.98,1.44,2.23,1.44,3.76c0,5.38-3.28,6.57-6.4,6.92c0.5,0.43,0.95,1.29,0.95,2.6
  c0,1.87-0.02,3.39-0.02,3.84c0,0.37,0.25,0.81,0.96,0.67c5.56-1.86,9.58-7.11,9.58-13.3C28.03,6.28,21.75,0,14.01,0z" />
                </svg>

                <input type="text" placeholder="github link" data-key="resume_social_links|resume_github_url"
                    style="width: 250px;">
            </li>

            <br>

            <li class="icon-link-item">
                
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve" width="28">
                <path id="LinkedIn" fill="#D1CECC" d="M18.82,15.09v3.61h-2.09v-3.37c0-0.85-0.3-1.42-1.06-1.42c-0.58,0-0.92,0.39-1.07,0.77
  c-0.06,0.13-0.07,0.32-0.07,0.51v3.52h-2.09c0,0,0.03-5.71,0-6.3h2.09v0.89c0,0.01-0.01,0.01-0.01,0.02h0.01V13.3
  c0.28-0.43,0.77-1.04,1.89-1.04C17.79,12.25,18.82,13.16,18.82,15.09z M9.18,18.7h2.09v-6.3H9.18V18.7z M10.24,9.36
  c-0.72,0-1.19,0.47-1.19,1.09c0,0.61,0.45,1.09,1.16,1.09h0.01c0.73,0,1.18-0.48,1.18-1.09C11.39,9.84,10.95,9.36,10.24,9.36z
   M28,14c0,7.73-6.27,14-14,14S0,21.73,0,14S6.27,0,14,0S28,6.27,28,14z M20.93,8.02c0-0.55-0.46-1-1.02-1H8.09
  c-0.57,0-1.02,0.45-1.02,1v11.96c0,0.55,0.46,1,1.02,1h11.82c0.57,0,1.02-0.45,1.02-1V8.02z"></path>
                </svg>

                <input type="text" placeholder="linkedin link" data-key="resume_social_links|resume_linkedin_url"
                    style="width: 250px;">
            </li>
        </ul>
    </div>

    <div class="executive-summary editable-width" itemprop="description" contenteditable="true" data-placeholder="简介" data-key="resume_header_intro"></div>

</header>
`