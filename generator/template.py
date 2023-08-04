PREFIX = """
<!DOCTYPE html>
<html>

  {% include head.html %}

  <body class="theme-{% if site.resume_theme %}{{ site.resume_theme }}{% endif %}">

    <div class="wrapper" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="telephone" content="{{ site.resume_contact_telephone }}"/>
      <meta itemprop="address" content="{{ site.resume_contact_address }}"/>

      <header class="page-header">

        <!-- You can turn off the avatar in _config.yml by setting to false -->
        {% if site.resume_avatar == 'true' %}
        <img src="images/avatar.jpg" alt="my photo" class="avatar no-print" itemprop="image">
        {% endif %}

        <!-- Your name is defined in the _config.yml file -->
        <h1 class="header-name" itemprop="name">{{ site.resume_name }}</h1>

        <!-- To display contact info here, change `display_header_contact_info` value in _config.yml to true -->
        {% if site.display_header_contact_info == 'true' %}
        <div class="header-contact-info">
          <p>{{ site.resume_header_contact_info }}</p>
        </div>
        {% endif %}

        <div class="title-bar no-print">

          <!-- Your title is also defined in the _config.yml file -->
          <h2 class="header-title" itemprop="jobTitle">{{ site.resume_title }}</h2>

          <!-- This is the markup for the icon links; moved out to an include because it's very verbose, and you shouldn't ever need to edit the markup (unless you want to re-order the icons); if you want to customize which links appear, define them in the _config.yml file -->
          {% include icon-links.html %}
        </div>

        <div class="executive-summary" itemprop="description">
          {{ site.resume_header_intro }}
        </div>

        {% if site.resume_looking_for_work == 'yes' %}
        <a href="mailto:{{ site.resume_contact_email }}" class="contact-button no-print" itemprop="email">Contact me</a>
        {% elsif site.resume_looking_for_work == 'no' %}
        <a class="contact-button not-looking no-print">I'm not looking for work right now.</a>
        {% else %}
        {% endif %}

      </header>
"""
SECTION_MAP = {
    "experience": """
      {% if site.resume_section_experience %}
      <!-- begin Experience -->
      <section class="content-section">

        <header class="section-header">
          <h2>工作经历</h2>
        </header>

        {% for job in site.data.experience %}
        <div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/Organization">
          <h3 class="resume-item-title" itemprop="name">{{ job.company }}</h3>
          {% if job.position and job.duration %}
            <h4 class="resume-item-details" itemprop="description">{{ job.position }} &bull; {{ job.duration }}</h4>
          {% else %}
              <h4 class="resume-item-details" itemprop="description">{{ job.position }}{{ job.duration }}</h4>
          {% endif %}
          <p class="resume-item-copy">{{ job.summary }}</p>
        </div><!-- end of resume-item -->
        {% endfor %}

      </section>
      <!-- end Experience -->
      {% endif %}
""",
    "education": """
      {% if site.resume_section_education %}
      <!-- begin Education -->
      <section class="content-section">
        <header class="section-header">
          <h2>教育</h2>
        </header>

        {% for education in site.data.education %}
        <div class="resume-item" itemscope itemprop="alumniOf" itemtype="http://schema.org/CollegeOrUniversity">
          <h3 class="resume-item-title" itemprop="name">{{ education.uni }}</h3>
          {% if education.degree and education.year %}
            <h4 class="resume-item-details group" itemprop="description">{{ education.degree }} &bull; {{ education.year }}</h4>
          {% else %}
            <h4 class="resume-item-details group" itemprop="description">{{ education.degree }}{{ education.year }}</h4>
          {% endif %}
          
          <h5 class="resume-item-details award-title" itemprop="description">{{ education.award }}</h5>
          <p class="resume-item-copy" itemprop="description">
            <ul class="resume-item-list">
              {% for award in education.awards %}
              <li>{{ award.award }}</li>
              {% endfor %}
            </ul>


          <p class="resume-item-copy">{{ education.summary }}</p>
        </div>
        {% endfor %}
      </section>
      <!-- end Education -->
      {% endif %}
""",
    "projects": """
      {% if site.resume_section_projects %}
      <!-- begin Projects -->
      <section class="content-section">
        <header class="section-header">
          <h2>项目 / 研究经历</h2>
        </header>

        {% for project in site.data.projects %}
        <div class="resume-item" itemscope itemtype="http://schema.org/CreativeWork">
          <meta itemprop="creator" content="{{ site.resume_name }}" itemtype="http://schema.org/Person" />
          <h3 class="resume-item-title" itemprop="name">{% if project.url %}<a href="{{ project.url }}" itemprop="url">{{ project.project }}</a>{% else %}{{ project.project }}{% endif %}</h3>
          {% if project.role and project.duration %}
          <h4 class="resume-item-details" itemprop="description">{{ project.role }}  &bull; {{ project.duration }}</h4>
          {% else %}
          <h4 class="resume-item-details" itemprop="description">{{ project.role }}{{ project.duration }}</h4>
          {% endif %}
          
          <p class="resume-item-copy">{{ project.description }}</p>
        </div>
        {% endfor %}

      </section>
      <!-- end Projects -->
      {% endif %}
""",
    "skills": """
      {% if site.resume_section_skills %}
      <!-- begin Skills -->
      <section class="content-section">

        <header class="section-header">
          <h2>技能</h2>
        </header>
        {% for skill in site.data.skills %}
        <div class="resume-item">
          <h4 class="resume-item-details">{{ skill.skill }}</h4>
          <p class="resume-item-copy">{{ skill.description }}</p>
        </div>
        {% endfor %}

      </section>
      <!-- end Skills -->
      {% endif %}
""",
    "recognition": """
      {% if site.resume_section_recognition %}
      <!-- begin Recognition -->
      <section class="content-section">

        <header class="section-header">
          <h2>荣誉 / 奖项</h2>
        </header>

        {% for recognition in site.data.recognitions %}
        <div class="resume-item">
          <h3 class="resume-item-title" itemprop="award">{{ recognition.award }}</h3>
          {% if recognition.organization and recognition.year %}
            <h4 class="resume-item-details">{{ recognition.organization }} &bull; {{ recognition.year }}</h4>
          {% else %}
            <h4 class="resume-item-details">{{ recognition.organization }}{{ recognition.year }}</h4>
          {% endif %}
          <p class="resume-item-copy">{{ recognition.summary }}</p>
        </div>
        {% endfor %}

      </section>
      <!-- end Recognition -->
      {% endif %}
""",
    "associations": """
      {% if site.resume_section_associations %}
      <!-- begin Associations -->
      <section class="content-section">

        <header class="section-header">
          <h2>Associations</h2>
        </header>

        {% for association in site.data.associations %}
        <div class="resume-item" itemscope itemprop="memberOf" itemtype="http://schema.org/Organization">
          <h3 class="resume-item-title" itemprop="name">{% if association.url %}<a href="{{ association.url }}">{{ association.organization }}</a>{% else %}{{ association.organization }}{% endif %}</h3>
          {% if association.role and association.year %}
            <h4 class="resume-item-details" itemprop="description">{{ association.role }} &bull; {{ association.year }}</h4>
          {% else %}
            <h4 class="resume-item-details" itemprop="description">{{ association.role }}{{ association.year }}</h4>
          {% endif %}
          <p class="resume-item-copy">{{ association.summary }}</p>
        </div>
        {% endfor %}

      </section>
      <!-- end Associations -->
      {% endif %}
""",
    "interests": """
      {% if site.resume_section_interests %}
      <!-- begin Interests -->
      <section class="content-section">

        <header class="section-header">
          <h2>Outside Interests</h2>
        </header>

        <div class="resume-item">
          <ul class="resume-item-list">
            {% for interest in site.data.interests %}
            <li>{{ interest.description }}</li>
            {% endfor %}
          </ul>
        </div>

      </section>
      <!-- end Interests -->
      {% endif %}
""",
    "links": """
      {% if site.resume_section_links %}
      <!-- begin Links -->
      <section class="content-section">

        <header class="section-header">
          <h2>Additional Links</h2>
        </header>

        <div class="resume-item">
          <ul class="resume-item-list">
            {% for link in site.data.links %}
            <li><a href={{ link.url }} itemprop="url">{{ link.description }}</a></li>
            {% endfor %}
          </ul>
        </div>

      </section>
      <!-- end Links -->
      {% endif %}
""",
}
SUFFIX = """
      {% if site.resume_print_social_links %}
      <!-- begin Print Social Links -->
      <section class="content-section print-only">

        <header class="section-header">
          <h2>Social Links</h2>
        </header>

        <div class="resume-item">
        {% include print-social-links.html %}
        </div>

      </section>
      <!-- end Print Social Links -->
      {% endif %}

      <footer class="page-footer">
        <p class="footer-line">Made by <a href="http://twitter.com/jglovier">@jglovier</a>. Secondary development by <a href="https://github.com/zweix123/">zweix</a>, Fork me on <a href="https://github.com/zweix123/resume-template">GitHub</a>.</p>
        <p class="footer-line">If this is your live resume, you can modify or remove this part. ;-)</p>
      </footer>

    </div>

  </body>

</html>
"""