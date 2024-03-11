---
title: Design rdl report using subreport | Web Report Designer
description: Design ssrs rdl report using subreport item, to insert one report inside the body of other report using web report designer
keywords: ejReportDesigner, reportdesigner, subreport, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Design rdl report using subreport

This section describes the steps to create SSRS RDL report to compare two different employees details side by side using subreport.

## Create a main report

1. Below is the dataset query used for the main report. Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section and create dataset using the below query.
      ```sql
      SELECT
      Employees.EmployeeID,
      Employees.FirstName
      FROM
      Employees
      ```
      ![create a dataset](/static/assets/on-premise/images/report-designer/report-items/subreport/main-report-dataset.png '#width=410px')
2. To compare the employee details, create two parameters named `Employee-A` and `Employee-B` in the main report and assign the required dataset field value to the parameters as shown in the following snaps. Refer [Parameter](./../../../report-parameters/add/#create-parameter) and [Assign Value](./../../../report-parameters/define-available-values-for-parameter/#query-values) section to create and assign value to the parameters.
   ![Create a parameter](/static/assets/on-premise/images/report-designer/report-items/subreport/main-report-parameter.png '#width=385px')
   ![Assign parameter values](/static/assets/on-premise/images/report-designer/report-items/subreport/assign-parameter-values.png '#width=455px')
3. Using textbox and line report items, design a simple report as shown below.
   ![create a main report](/static/assets/on-premise/images/report-designer/report-items/subreport/main-report-textbox.png '#width=355px')
   > Note: Refer [Textbox](./../../../report-items/textbox/), [Line](./../../../report-items/line/) section to design the above report design.

### Add subreport

1. Drag and drop subreport item listed in the item panel under the `Sub Reports` category.
   ![Subreport listed in item panel](/static/assets/on-premise/images/report-designer/report-items/subreport/subreportitem-itempanel.png '#width=385px')
2. To compare the employee details,  drag and drop two subreport items side by side in the design area.
   ![Drag and drop subreportitem into design area](/static/assets/on-premise/images/report-designer/report-items/subreport/subreportitem-designarea.png '#width=410px')

## Create a subreport

Design a subreport to display the employee details.

### Create dataset

1. Below is the dataset query used in this report to fetch the employee personal details that is bound to the `Employees` table of `Northwind` database. Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the below query.
      ```sql
      SELECT Employees.EmployeeID,Employees.LastName,Employees.FirstName,Employees.Title,Employees.TitleOfCourtesy ,(DATENAME(WEEKDAY,Employees.BirthDate)+', '+ DATENAME (DAY,Employees.BirthDate)+'+DATENAME(MONTH,Employees.BirthDate)+'+DATENAME(YEAR,Employees.BirthDate)) as BirthDate
      ,(DATENAME(WEEKDAY,Employees.HireDate)+', '+DATENAME(DAY,Employees.HireDate)+'+DATENAME(MONTH,Employees.HireDate)+'+DATENAME(YEAR,Employees.HireDate))as HireDate
      ,Employees.HomePhone ,Employees.City,Employees.Region,Employees.PostalCode,Employees.Country ,SUM(o.Quantity * o.UnitPrice)  As TotalGain FROM
      Employees,[Order Details] as O,[Orders] as Ord  WHERE o.OrderID  = ord.OrderID and Employees.EmployeeID = ord.EmployeeID and Employees.EmployeeID = @SalesPersonID
      group by  Employees.EmployeeID ,Employees.LastName,Employees.FirstName,Employees.Title,Employees.TitleOfCourtesy,BirthDate,HireDate,Employees.City,Employees.HomePhone,Employees.Region
      ,Employees.PostalCode,Employees.Country
      ```

2. To present respective employee sales order details information in the tabular format, create a dataset using below query and bind data to the table report item.

      ```sql
      SELECT Top(10) o.OrderID,Cus.CompanyName,SUM(OD.UnitPrice * od.Quantity ) As ExPrice FROM [Orders] as O, [Customers] as Cus,[Order Details] as OD where  (O.EmployeeID = @SalesPersonID) and (cus.CustomerID=o.CustomerID) and od.OrderID = o.OrderID group by o.OrderID,o.CustomerID,cus.CompanyName
      ```

3. Use the below query and create a dataset, to retrieve the employee image details from `Employees` table of `Northwind` database.

      ```sql
      SELECT Employees.Photo FROM Employees
      WHERE (Employees.EmployeeID = @SalesPersonID)
      ```

      Now, the dataset created in the report will be listed in the `Data panel` as shown below.
      ![Subreport three dataset](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-three-dataset.png '#width=385px')
4. Based on the `@SalesPersonID` query parameter created in dataset query, equivalent report parameter will be created automatically in the report as shown below.
   ![Subreport parameter](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-parameter.png '#width=385px')

### Design report

Here we have designed a simple subreport using image, textbox and table reportitem as shown below.
![subreport item with properties view](/static/assets/on-premise/images/report-designer/report-items/subreport/create-a-subreport.png '#width=425px')
> Note: Refer [Image](./../../../report-items/image/), [Line](./../../../report-items/line/), [Table](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/) section to design the above subreport.

### Assign fields

* To display employee `DOB`, we have used this `=First(Fields!BirthDate.Value,"EmployeePersonalDetails")` expression in the textbox reportitem.
* To display employee `DOJ`, we have used this `=First(Fields!HireDate.Value,"EmployeePersonalDetails")` expression in the textbox reportitem.
* To display employee `GAIN` we have used this `=Sum(Fields!TotalGain.Value,"EmployeePersonalDetails")` expression in the textbox reportitem.
* To display employee `First Name` and `Last Name`, we have used this `=First(Fields!FirstName.Value, "EmployeePersonalDetails")+" "+" "+First(Fields!LastName.Value, "EmployeePersonalDetails")` expression in the textbox reportitem.
* To present the sales details of a respective employee, `EmployeeSalesDetails` dataset is assigned to the table report item.
* To display employee image in the report, assigned the `=First(Fields!Photo.Value, "EmployeeImages")` expression to the image report item value property.
![subreport item with properties view](/static/assets/on-premise/images/report-designer/report-items/subreport/assign-value-to-image-report-item.png '#width=355px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/subreport/side-by-side.rdl).

## Link sub report into main report

Once you drag and drop the subreport item into design area, respective item properties will be listed in the properties panel.

![subreport item with properties view](/static/assets/on-premise/images/report-designer/report-items/subreport/subreportitem-properties.png)

Follow the below steps to link subreport into main report
1. Click on the browse button in **Report** option as shown below.

    ![Report link-fields](/static/assets/on-premise/images/report-designer/report-items/subreport/report-linking-option.png '#width=315px')

2. Browse dialog will open, click on **Sample Reports** folder.

      ![browse-from-dialog](/static/assets/on-premise/images/report-designer/report-items/subreport/sample-folder.png '#width=385px')

3. Select the already designed sub report and click **Open**.

      ![select report from folder](/static/assets/on-premise/images/report-designer/report-items/subreport/browse-report-dialog.png '#width=385px')

4. Selected report path is linked in the **Report** option and subreport item in the design area as shown below.

      ![selected report path](/static/assets/on-premise/images/report-designer/report-items/subreport/report-path.png)

Similarly set the report path to the another subreport item by following the above steps.

## Set Parameters values

To assign parameter values to the sub report from main report follow the below steps:

1. Click on the **Set Parameters** button and click on the **ADD** icon.
   ![selected report path](/static/assets/on-premise/images/report-designer/report-items/subreport/parameter-add-icon.png '#width=385px')
2. The available parameters in the sub report will be listed in the `Parameters Name` drop down, choose the parameter name and assign values. Here, the following expression `=Parameters!Employee-A.Value` is assigned to the `SalesPersonID` parameter of subreport.
   ![Pass the parameter value](/static/assets/on-premise/images/report-designer/report-items/subreport/parameter-values-passed.png '#width=385px')
3. Similarly set the parameter name and assign values to the another subreport item by following the above steps.

Now, the report path and parameters are set for both subreport item in the report as shown below snap.
![side by side subreport](/static/assets/on-premise/images/report-designer/report-items/subreport/side-by-side-subreport.png)

Preview the report and choose the required employee name in the `Left Side Employee` and `Right Side Employee` parameter drop-down and click on view report. On report preview, the comparison report for two employees will be shown based on the values selected in the parameter drop-down.

![Preview the highlighted parameter](/static/assets/on-premise/images/report-designer/report-items/subreport/preview-highlighted-parameter.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/subreport/main-report.rdl).