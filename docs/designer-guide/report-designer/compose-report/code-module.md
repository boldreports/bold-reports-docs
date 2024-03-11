---
title: Simple steps to add custom code using web report designer
description: This section describes about how to a add custom code, assembly references using Bold Report Designer
keywords: ejReportDesigner, reportdesigner, code, assemblies, class
---

# Code Module

The Code Module is used to add custom code or custom assemblies to a report. The Code Module allows you to add references to custom code embedded in a report or generated with custom assemblies.

## Add Custom Code to a report

1. Click on the outer grey surface of the report area, and then click the **Properties** icon to open the **Report Properties**.
    ![open-properies](/static/assets/on-premise/images/report-designer/compose-report/unit-switcher/open-properties.png '#width=400px')
2. The custom code option is listed under the `Code` category. Click **Code...** to open the Code Module dialog.
    ![report-properies](/static/assets/on-premise/images/report-designer/compose-report/unit-switcher/report-properties.png)
3. In the code tab, type the code in the Visual Basic (VB) language.
    ![Open code module](/static/assets/on-premise/images/report-designer/compose-report/code-module/open-code-module.png '#width=350px')
4. The following code example demonstrates a custom function that returns the color string based on the given value range.

    ```basic
    Public Function GetColor(ByVal TotalSales As Decimal) As String
        Dim ColorName As String
        If TotalSales > 0 And TotalSales < 1000 Then
            ColorName = "Yellow"
        ElseIf TotalSales > 1000 And TotalSales < 1500  Then
            ColorName = "Blue"
        ElseIf TotalSales > 2000 Then
            ColorName = "Red"
        Else
            ColorName = "Green"
        End If
        Return ColorName
    End Function
    ```

    ![Enter custom code](/static/assets/on-premise/images/report-designer/compose-report/code-module/code-section.png '#width=350px')
5. Click **OK**.
6. Use the following expression to call the custom code function in the report.
    ![Call custom code function](/static/assets/on-premise/images/report-designer/compose-report/code-module/custom-code-expression.png '#width=400px')
    Refer [Expression](./../../compose-report/expressions/) section to learn more about handling expressions.
7. To view the color changes based on the price range in a report, click `Preview`.
   ![Preview custom code](/static/assets/on-premise/images/report-designer/compose-report/code-module/custom-code-preview.png '#width=450px')

## Add Assembly References

To embed custom assemblies in a report, create a simple Visual Studio class library project and define the required custom functions.

### Create a custom assembly

1. Create a Visual Studio class library. Go to **Installed > Visual C#**, and then select **Class Library (.Net Framework)** from the listed templates. Change the application name, and then click **OK**.
   ![To create c sharp class library](/static/assets/on-premise/images/report-designer/compose-report/code-module/assembly-references.png '#width=450px')

2. Open the class file and create a simple function as shown below.
   ![To create a simple function](/static/assets/on-premise/images/report-designer/compose-report/code-module/add-references.png)

3. After defining the required functions, build the project. Now, the assembly `(.dll)` will be generated in the bin folder of the respective application.

> Note: To embed the custom assembly into the report, the generated assembly must be installed in GAC, or it must be available in the reporting services `bin` location. We prefer manually copying and pasting the generated custom assembly into the following path: **C:\Syncfusion\Report Server\ReportServer.Web\ReportService\bin**.

### Adding References to Custom Assembly

1. Switch to the **References** tab.
   ![Code module assembly references](/static/assets/on-premise/images/report-designer/compose-report/code-module/references-tab.png '#width=350px')

2. To add an **Assembly** reference, Click on the **Add** icon.
   ![Add assemby references](/static/assets/on-premise/images/report-designer/compose-report/code-module/reference-add-icon.png '#width=350px')

3. Specify the assembly name and click **OK**.
   ![Given assemby references name](/static/assets/on-premise/images/report-designer/compose-report/code-module/assembly-reference-name.png '#width=350px')

## Add Class Instances

1. Switch to the **Classes** tab.
    ![Switch to class instance tab](/static/assets/on-premise/images/report-designer/compose-report/code-module/classinstance-tab.png '#width=350px')

2. To add a **Class instance** reference, Click on the **Add** icon.
    ![Code module class instance](/static/assets/on-premise/images/report-designer/compose-report/code-module/listed-class-instance.png '#width=350px')

3. Specify the assembly name, instance name and click **OK**. Now, the custom code assembly and instance are embedded into the report.
    ![Added class instance name](/static/assets/on-premise/images/report-designer/compose-report/code-module/added-class-instances.png '#width=350px')

4. Use the following expression to call the embedded custom code function in the report.

    ![Call the method using expression](/static/assets/on-premise/images/report-designer/compose-report/code-module/custom-assembly-expression.png '#width=350px')
    Refer [Expression](./../../compose-report/expressions/) section to learn more about handling expressions.

5. To view the color changes based on the price range in a report, click `Preview`.
    ![Preview the record](/static/assets/on-premise/images/report-designer/compose-report/code-module/custom-code-preview.png '#width=400px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/compose-report/code-module.rdl)