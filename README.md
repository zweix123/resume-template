# Resume template

**Fork from [jglovier/resume-template](https://github.com/jglovier/resume-template)**

模板来自jglovier的简历模板，是一个利用Github Page的在线简历（`Ctrl + p`可以打印PDF但格式不同），关于模板本身的更多信息可以去他的Repo。

jglovier的简历模板通过配置文件（YAML）的方式设置各个模块内容，想修改模块先后顺序需要修改Jinja代码，心智负担不大但仍然有。  
而写简历最自然的方式肯定是点击想修改的地方然后添加内容（就像Work模板但是我肯定不会用）能不能在jglovier模板的基础上增强可用性呢？

Roadmap是通过前端网页让用户填写内容生成配置文件，然后后端用一个脚本生成上面提到的配置文件和Jinja代码。
>我不想为了这么小的事情还要建立一个Web Server，但是纯前端不能修改本地文件。  
>上面这样通过配置文件相当于前后端分离了，给以后的发展留个Hook。

## Use

>我试图在不通过外界部分的网站情况下让非技术人员也能使用该简历生成器，但是您仍然需要会简单的Git操作和运行Python项目

1. Fork项目到你的Repo并Clone
2. 前端：输入简历内容  
    页面是单HTML的，所以你可以打开本地的`./generator/index.html`文件，或者访问我的项目Page中[对应页面](https://zweix123.github.io/resume-template/generator/)（当然，也能访问你Fork过去后自动生成的对应页面，格式为`https://你的用户名.github.io/resume-template/generator/`，其中的`resume-template`和你Fork是设置的项目名对应）

    至于网站的使用，任何教程都是对它的易用性的侮辱。
3. 后端：生成配置文件
    + 进入`poetry`环境：
        ```bash
        poetry shell
        ```
    + 下载依赖库：
        ```bash
        poetry install
        ```
    + 运行脚本：
        ```bash
        python generator/main.py -nogui -f 在第一步中得到的配置文件路径
        ```
        比如使用jglovier的配置（`example_resume_config.json`文件）来生成的命令如下
        ```bash
        python generator/main.py -nogui -f ./example_resume_config.json
        ```

        >从参数设计上也能看到我试图设计通过图形化的方式使用来的。

4. Push到Github上，运行一下命令：
    ```bash
    git add .
    git commit -m "add config"
    git push
    ```

稍等几分钟即可在这个页面查看到最终的在线简历：`https://你的用户名.github.io/resume-template/`，其中的`resume-template`和你Fork是设置的项目名对应），比如我的简历模板的路径是`https://zweix123.github.io/resume-template/`

简历模板有页脚，对应代码在`./generator/template.py`的267-268行，不需要删除即可。

## Develop

我们最初的目的实现了，但是新的问题出现了。

jglovier的简历样式很松散，就我个人而言觉得不适合校招，难道要自己开发一个样式么？

我们可以这样，我们已经拿到了简历的内容，那么我们既然可以把内容填入到配置文件中，也能填入到其它的简历模板中！比如我个人在校招使用的[这份LaTeX模板](http://www.latextemplates.com/template/medium-length-professional-cv)，或者是网友推荐我的[这个模板](https://github.com/billryan/resume)。

这个想法还能更进一步，在投递校招时对各个公司并不知道直接一个PDF交上去就完事了，基本是网站会解析我们的PDF填入到它们的在线简历中，既然如此，我们可以实现自动的将简历内容填入到各个公司的在线简历中。而且这个过程很容易标准化的，届时就只需要填写一份简历就能投递不同公司了，不过这就需要伟大的开源社区的支持了

## 后记

可以以上想法都有前人想过并实现了吧，比如各个公司的官网提交简历的方式就是一个易用的简历模板（只不过只使用于它的公司），而牛客也需要填写简历，它似乎能帮我们用同一套简历发给多个公司？（没试过不知道）