# Bold Reports Docs guidelines

Report documentation was built on Gatsby's application. 

Pre-requisite
Install stable NodeJs from https://nodejs.org and run node -v to check whether it is installed properly or not (currently, we recommend node 18 version).
Install the gatsby-cli package with global access by executing the below command and run gatsby -v to check whether it is installed properly or not.
 npm i gatsby-cli@5.12.1 -g
Install gulp package with global access by executing the below command and run gulp -v to check whether it is installed properly or not.
 npm i gulp@4.0.2 -g
Install npm packages 
 npm install --legacy-peer-deps
If npm install encounters package installation problems, run the below commands.
 npm install yarn --global
 yarn install 
 Note : Avoid including entries for yarn-related packages in package.json during commits, as yarn is only used for source run purposes.

Document Structure
The Bold Reports document should be placed inside the docs location. The documents should have written in markdown(.md)format.

Refer to the below folder structure for further details.

    --> docs (1)
        --> angular
            --> report-designer
                --> index.md (4)
                --> overview.md
                --> how-to
                    --> index.md (4)
                    --> customization.md
            --> report-viewer
                --> index.md (4)
                --> overview.md
                --> how-to
                    --> index.md (4)
                    --> customization.md
            --> index.md (4)
            --> summary.json (2b)
        --> javascript
            --> report-designer
                --> index.md (4)
                --> overview.md
                --> how-to
                    --> index.md (4)
                    --> customization.md
            --> report-viewer
                --> index.md (4)
                --> overview.md
                --> how-to
                    --> index.md (4)
                    --> customization.md
            --> index.md (4)
            --> summary.json (2b)
        --> introduction.md (3)
        --> system-requirements.md (3)
        --> summary.json (2a)

   --> demos (5)
      --> javascript
          --> report-designer 
             --> overview
                --> index.html
                --> index.js
(1). This is where all the markdown files should be placed.

(2). summary.json will hold the information about TOC titles (key) and path (value) of the md file.

2 a - For common documentations like introduction, system requirements, we need to create summary.json file at the root of the docs folder.

{
  "Introduction": "introduction.md",
  "System Requirements": "system-requirements.md"
}

2 b - For each platform (Angular, React), we need to create a separate summary.json at that root of the platform folder.

{
    "Angular": {
        "Report Designer": {
            "Overview": "overview.md",
            "How TO": {
               "customization": "customization.md"
            }
        },
        "Report Viewer": {
            "Overview": "overview.md",
            "How TO": {
               "customization": "customization.md"
            }
        }
    }
}
We need to specify MD file name alone not a full path. We will evaluate the path based on your hierarchical key name (We will convert the key name to lower case and replace space with a hyphen).

(3). This is where common MD files like introduction, system requirements should be placed.

(4). This (index.md) file will hold an overview of the platform/section. Each platform/section should have a separate index.md file.

(5). These files will be used for showcasing demo in the new tab and editing the code in Stack Blitz. (supported platforms - JavaScript and Angular)

Frontmatter
We need to define 3 important frontmatter in every MD files.

title - Title of the document (should be unique and Characters should be between 45 and 60)

description - Description of the document (Characters should be between 100 and 160)

---
title: Overview of Embedded Reporting Tools | Bold Reports
description: Embedded Reporting Tools contains complete reporting tools that can be embedded within your applications to create and preview the RDL and RDLC reports.
---
Demo samples - (supported platforms - JavaScript and Angular)
Creating samples
The sample should be created in the demos folder.
The sample should be runnable while hosting the sample folder.
JS - index.html

<div id="viewer"></div>
JS - index.js

$(function () {
    $("#viewer").boldReportViewer({
        reportServiceUrl: "{{site.reportserviceurl}}api/ReportViewer",
        reportPath: '~/Resources/docs/sales-order-detail.rdl'
    });
});

Referring to the sample in the MD file

Use the below tab block to refer, the sample in your MD file.

{% tab demoPath=""  files="" %}

{% endtab %}

demoPath - This field is used for specifying the sample folder path. Here, we need to provide the base path of the sample ignoring the demos folder. For example, if your sample is in demos/javascript/reports-viewer/getting-started folder, then you need to give the below path.

demoPath="javascript/reports-viewer/getting-started
Files - This field is used for specifying the files which is needed to included in a tab. for example, if you want to include index.html code snippets in a tab, then you need to provide the following file name.

files="index.html"
 

For including multiple file snippets, pass the file names separated by a comma.


You can also override the code snippet of a particular file. For example, If you are having index.html file with a bunch of references and you are not willing to display certain snippets (neglecting references) to the customer, you can use tabItem block inside the tab block to override the snippet.

{% tab demoPath="javascript/reports-viewer/getting-started" files="index.html,index.js"  %}

{% tabItem header="index.html" %}

```html

<p>Custom snippet</p>

```

{% endtabItem %}

{% endtab %}

header - This field is used for specifying the filename. For example, if your want to override index.html code snippet content, then you need to provide the following header.

header="index.html"
and the output will look like this.

We have used a regular expression for parsing the data. So, use the correct format for the referring sample.

Embedding Tiles
Tiles enhance content presentation through visually appealing containers, typically containing images, titles, and links, for better organization and engagement.

The tile syntax should be included in the Markdown file in the docs folder.

Use the below block to refer tiles in your MD file.

{:tiles}

{:tile}

title="Tile Title"

image="/path/to/image.png"

link="https://example.com"

{:endtile}

{:endtiles}
 
{:tiles} - Denotes the start of the tile section. It marks the beginning of a collection of tiles within the Markdown file.

{:tile} - Denotes a single tile. It marks the beginning of individual tile content within the tile section.

{:endtile} - Denotes the end of a single tile. It marks the conclusion of the content specific to one tile.

{:endtiles} - Denotes the end of the tile section. It marks the conclusion of the collection of tiles within the Markdown file.

Each {:tile} block represents a tile with a title, image, and link. You can customize the content within each {:tile} block.

For including single tile:

{:tiles}

{:tile}

title="Maximizing Efficiency: 7 Advantages of Embedded Reporting Tools"

image="/assets/tileImages/maximizingEfficiency.png"

link="https://www.boldreports.com/"

{:endtile}

{:endtiles}
 
The {:tiles} tag marks the beginning of a section containing multiple tiles. Within this section, each {:tile} tag represents a single tile.

title - Specifies the title of the tile.

image - Defines the image URL or path displayed within the tile. 

link - Specifies the URL that the tile will link to when clicked.

In the above example

"Maximizing Efficiency: 7 Advantages of Embedded Reporting Tools." denotes the title of the tile.

"/assets/tileImages/maximizingEfficiency.png" denotes the image URL.

"https://www.boldreports.com/" denotes the URL that the tile is linked with.

The {:endtile} tag marks the end of the content specific to one tile within the {:tiles} section. Finally, the {:endtiles} tag indicates the conclusion of the tile section.

For including multiple tiles:

{:tiles}

{:tile}

title="37 Essential SSRS Expressions Cheat Sheet for Report Designers"

image="/assets/tileImages/essentialSSRS.png"

link="https://www.boldreports.com/"

{:endtile}

{:tile}

title="Bold Report Viewer: A Microservice-Friendly Report Viewer"

image="/assets/tileImages/boldReportViewer.png"

link="https://www.boldreports.com/"

{:endtile}

{:tile}

title="Maximizing Efficiency: 7 Advantages of Embedded Reporting Tools"

image="/assets/tileImages/maximizingEfficiency.png"

link="https://www.boldreports.com/"

{:endtile}

{:endtiles}
The output will appear as follows:



 

 

 

 

Note: We have set the maximum tile count to 3. Additionally, we have utilized a regular expression for parsing the data in Markdown files. Please ensure to use the correct format when creating the tile.

Common Files
In some scenarios, we need to reuse the MD content of other platforms in our platform instead of creating separate MD content on our platform. For example, let say our current platform is the cloud. We need Email settings content from the enterprise platform in our cloud platform.

To handle this scenario, we have provided a configuration file common-files.json. Here we can specify your common files like the below.

Don't forget to add the entry in summary.json and don't commit the .gitignore file.

{
    "enterprise-docs": [ //(1)
        {
            "src": "settings/email-settings.md", //(2)
            "frontmatter": { //(3)
                "title": "Your platform specific title",
                "description": "Your platform specific decription"
            }
        }
    ]
}
(1). Here enterprise-docs is the target platform from which we are going to utilize MD content. We need to specify the package name of the target repository.

(2). This is where we specify the path of target platform MD file. We need to provide the path of the MD file relative to docs folder.

The target platform will have this structure.

--> enterprise-docs
   --> docs
        --> settings
            --> email-settings.md
After running the common file gulp task, your current platform will have this structure.

--> cloud-docs
   --> docs
        --> settings
            --> email-settings.md
(3). To avoid duplicate title and description, We have provided the frontmatter object. Here, we can add your front matters like title, description, keywords..etc.

We can also specify multiple MD contents and platforms like below.

{
    "enterprise-docs": [
        {
            "src": "settings/email-settings.md",
            "frontmatter": {
                "title": "Your platform specific title",
                "description": "Your platform specific decription"
            }
        },
        {
            "src": "manage-content/reports/create-report.md",
            "frontmatter": {
                "title": "Your platform specific title",
                "description": "Your platform specific decription"
            }
        }
    ],
    "embedded-docs": [
        {
            "src": "javascript/report-viewer/ssrs-report.md",
            "frontmatter": {
                "title": "Your platform specific title",
                "description": "Your platform specific decription"
            }
        }
    ]
}
 

You can specify the target branch using the branch property in config.json.

We have provided gulp copy-common-files task and triggered this task in NPM postinstall life cycle.

Whenever we make the changes in common file configuration, we need to manually call this task. so, the configured source files will be copied to the destination

Gulp Tasks
The below gulp tasks can be used to build and serve the documentation.

Run the below command to build the application.

gulp build
Run the below command to serve the application. After running the command, Navigate to [localhost:8000](http://localhost:8000).

gulp serve
Run the below command to test markdown lint.

gulp md-lint
Run the below command to test typo error.

This task will throw an error on using custom words like ej, localhost. For that, we need to include these words (need to have a valid reason for using these custom names in .spelling file.

gulp typo
Run the below command to test file name validation.

This task will throw an error on using custom file names. For that, we need to include these names(need to have a valid reason for using these custom names) in .customnames file.

gulp file-validation
Run the below command to test markdown lint, typo error and file name validation.

gulp test
Run the below command to generate the white label documentation.

gulp white-label-docs
The above task is applicable only for cloud and enterprises platform.

Run the below command in order to update the nexus domain url by passing the new nexus domain to be updated.

gulp update-nexus-domain --newDomain="https://nexus.syncfusioninternal.com"
Important Markdown formats
Refer to the below link.

Markdown formats
