---
title: Register Custom Styles in Report Server | Bold Reports
description: Register custom report styles in Bold Reports Report Server with a JSON file, using the File Upload, Custom Location, or Preconfigured Location method.
---

# Register custom styles in Bold Reports<sup>®</sup> Report Server

Bold Reports<sup>®</sup> Report Server lets you register external custom styles from a JSON file and apply them to your reports. You can register custom styles in the Report Server using any of the following methods:

* File Upload
* Custom Location
* Preconfigured Location

## How do I create a custom styles JSON file?

To define custom styles for Bold Reports<sup>®</sup> Report Server, create a JSON file with a user-defined name represented as `{name of file}.json` that holds the required CSS styles. The file must follow this format:

   ```json
   "table header": {
        "font-family": "arial",
        "font-size": "13.333333333333334px",
        "font-weight": "bold",
        "background-color": "#6495ED",
        "border-bottom-color": "navy",
        "border-right-color": "gray",
        "border-left-color": "gray",
        "border-right-width": "1.333px",
        "border-left-width": "1.333px",
        "border-top-width": "2px",
        "border-bottom-width": "2px",
        "border-bottom-style": "double",
        "border-top-color": "navy"
    },
    "header": {
        "background-color": "#6495ED",
        "font-family": "arial",
        "font-size": "0.16666979166666665in",
        "font-style": "normal",
        "font-weight": "bold",
        "color": "white"
    }
   ```

## How do I register custom styles with File Upload?

Use the `File Upload` option in Bold Reports<sup>®</sup> Report Server to apply tenant-specific custom styles. Each tenant can upload and manage its own styles independently. Follow these steps to configure custom styles with the file upload method:

1. Follow the [Report Server File Upload](../../../designer-guide/manage-content/reports/file-upload/) section and upload your custom styles JSON file. The following screenshot shows the upload dialog.
    ![Custom style upload](/static/assets/on-premise/images/report-designer/how-to/configure-custom-styles/custom-style-upload.png '#width=450px')

    > **Note**: In the **Upload File** dialog, the **Name** field must be set to `custom_style`.

2. After the file is uploaded, you cannot upload another file with the same name **[custom_style]**.

3. To modify styles in an existing uploaded file, re-upload the file. Only the user who originally uploaded the file or an administrator can do this.

4. If an admin or user does not upload a custom styles file, the system uses the next available configuration. It uses either a `Custom Location` or a `Preconfigured Location` that is shared across all tenants.

> **Note**: If a report is open in the Designer tab, reload it after uploading the file.

## How do I register custom styles from a Custom Location?

Choose the Custom Location option to register custom styles in Bold Reports<sup>®</sup> Report Server from your designated location. The custom styles are shared across all tenants, and you can modify the styles in the file at your designated location. After you specify the file path in the configuration file, restart the on-premises server to load the custom styles.

1. Add the reference path to the `custom_style` JSON file in the configuration settings using the following format:
    ```XML
    <CustomStyleSheet>
    <FilePath>{path-to-your-custom-style-JSON-file} </FilePath>
    </CustomStyleSheet>
    ```
    > **Note**: Replace {path-to-your-custom-style-JSON-file} with the path to your custom_style JSON file in the designated location.

2. After the custom styles file path is configured, you can apply changes to the file without restarting the server.

3. If an admin does not configure the file path in the configuration settings, the system uses the next available configuration from a `Preconfigured Location`. The following screenshot shows the file path in the configuration settings.
![External css configuration](/static/assets/on-premise/images/report-designer/how-to/configure-custom-styles/external-css-configuration.png '#width=450px')

## How do I register custom styles from the Preconfigured Location?

Select the Preconfigured Location option to maintain and load Bold Reports<sup>®</sup> custom styles from the **app_data** directory. The styles remain intact during server upgrades and align with updated resources. After you add the file to app_data, restart the on-premises server to load the custom styles.

1. Create a folder named `custom-styles` in the following location:
   {Installed location}\BoldServices\app_data\reporting\configuration.
    > **Note**: The folder must be named `custom-styles` and the JSON file must be named `custom_style.json`.

2. Add your JSON file named `custom_style.json` inside this folder.

3. After you place the custom styles file in the app_data directory, you can apply changes to the file without restarting the server.

## Frequently asked questions

### Which custom style method applies to a single tenant?

The File Upload method applies tenant-specific custom styles. The Custom Location and Preconfigured Location methods are shared across all tenants.

### What name must the uploaded custom styles file have?

In the **Upload File** dialog, set the **Name** field to `custom_style`. In the Preconfigured Location, name the JSON file `custom_style.json`.

### Do I need to restart the server after I change the styles file?

No. After the file path or file is in place, you can apply changes to the file without restarting the server. You restart the on-premises server only to load the custom styles the first time.

## See also

* [Report Server File Upload](../../../designer-guide/manage-content/reports/file-upload/)
* [Remove the GUID from report URLs](../remove-id-from-url/)
* [Report link with filter parameters](../report-link-with-filter-parameters/)
