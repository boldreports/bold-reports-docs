---
title: Join Tables with Bold Report Designer | Bold Reports
description: This section describes how to join tables in query designer, and the query can be used to feed data to the report.
---

# Join Tables

Joining of tables is required when the dataset query design demands for more than one table. The following sections describes the steps required to create and edit the relationships between tables.

Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section for better understanding with the following steps.

## Open query joiner dialog

Click on the `Join` icon in the query designer toolbar to open `Query Joiner` dialog.

The `Join` icon in the query designer toolbar will be in **disabled** state, if there is only one table found dropped in table design view like below:

![Query joiner initial icon state](/static/assets/on-premise/images/report-designer/transforming-data/join-table/query-joiner-icon-initial-state.png)

The `Join` icon will get **enabled** once the second table found dropped in table design like below:

![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/join-table/query-joiner-icon-enabled-state.png)

## Create a table relation

1. Drag a table or view from the left pane and drop it into the center pane labeled with `Drag and Drop tables here` like below.
![Drag and drop a table](/static/assets/on-premise/images/report-designer/transforming-data/join-table/manual-joining-first-table.png)
2. Drag and drop another table into the design area.
![Drag and drop second table](/static/assets/on-premise/images/report-designer/transforming-data/join-table/manual-joining-second-table.png)
3. If the subsequent table being dropped, has any of its column as foreign key in any of the already dropped tables, the joining will take place automatically. Else, it will prompt the join editor like below to let you define the keys (columns) to join between this table and any one of the already dropped tables.
![Query joiner dialog](/static/assets/on-premise/images/report-designer/transforming-data/join-table/manual-joining-query-joiner-dialog-intial-view.png)

### Table drop-down list

* **Left Table** - The `Left Table` drop-down list illustrates the list of table dropped in design area.
![Left table drop-down](/static/assets/on-premise/images/report-designer/transforming-data/join-table/left-table-list.png)

* **Right Table** - The `Right Table` drop-down list illustrates the list of table dropped in design area. By default, the table which you have dropped recently will be selected in this field.
![Right table drop-down](/static/assets/on-premise/images/report-designer/transforming-data/join-table/right-table-list.png)

In the below snap, the new relationship is initiated between `SalesOrderHeader` and `SalesOrderDetail` tables.

![Choose tables](/static/assets/on-premise/images/report-designer/transforming-data/join-table/new-table-relation.png)

### Join Types

The joins are used to retrieve data from two or more data tables, based on a join condition.

**Types**:
1. Inner Join
2. Left Outer
3. Right Outer
4. Full Outer.

Refer [Supported join types](./../../transforming-data/supported-join-types/) section to learn about the purpose of each join type.![Join types](/static/assets/on-premise/images/report-designer/transforming-data/join-table/join-types.png)

In the below snap, `inner join` is created between the `SalesOrderHeader` and `SalesOrderDetail` tables.

![Choose inner join type](/static/assets/on-premise/images/report-designer/transforming-data/join-table/create-inner-join-between-tables.png)

### Table fields

* **Left field** - The available columns of the table selected in the **Left Table** drop-down list will be listed here.
![Left field columns](/static/assets/on-premise/images/report-designer/transforming-data/join-table/left-field-columns-list.png)

* **Right field** - The available columns of the table selected in the **Right Table** drop-down list will be listed here.
![Right field columns](/static/assets/on-premise/images/report-designer/transforming-data/join-table/right-field-column-list.png)

In the below snap, the join field is created for `SalesOrderID` column in both tables.

![Choose field name](/static/assets/on-premise/images/report-designer/transforming-data/join-table/join-fields-of-the-table.png)

### Operator

To compare the values of the two columns (one from each table) between tables, any of the operator list shown in the below image can be used.

![Supported operators](/static/assets/on-premise/images/report-designer/transforming-data/join-table/list-of-supported-operators.png)

In the below snap, the `Equal` operator is applied between `SalesOrderID` column of both tables.

![Choose operator](/static/assets/on-premise/images/report-designer/transforming-data/join-table/equal-operator.png)

## Create multiple join condition

If you want to create multiple join condition for single table relation follow the below steps:

1. Click on the `Add Field` button to create multiple join conditions for single table relation.
![Add field button](/static/assets/on-premise/images/report-designer/transforming-data/join-table/add-field-button.png)
2. Choose the new column field in **Left Field** and **Right Field** drop-down list, then choose the operator condition.
![Create new join condition](/static/assets/on-premise/images/report-designer/transforming-data/join-table/new-join-condition.png)
3. Now, a new join condition will be created like below.
![Multiple join condition](/static/assets/on-premise/images/report-designer/transforming-data/join-table/multiple-join-condition.png)

## Save a table relation

1. Click on the tick icon in the first row of table relation.
![Save icon](/static/assets/on-premise/images/report-designer/transforming-data/join-table/save-table-relation.png)
2. Click on the `OK` button.
![Save table relation](/static/assets/on-premise/images/report-designer/transforming-data/join-table/save-table-relation-output.png)
3. Now, the second table will be dropped in the design area like below.
![Query designer view](/static/assets/on-premise/images/report-designer/transforming-data/join-table/created-relationship-between-two-tables.png)

## Edit a table relation

1. Click on the `Join` icon in the toolbar to open the `Query Joiner` dialog.
![Query joiner dialog](/static/assets/on-premise/images/report-designer/transforming-data/join-table/save-table-relation-output.png)
2. To edit the existing join condition in a table relation, click on the `Edit` icon in the respective field.
  ![Edit join relation icon](/static/assets/on-premise/images/report-designer/transforming-data/join-table/edit-join-icon.png)
3. Clicking on the icon will enable the respective join fields.
![Edit the join conditions](/static/assets/on-premise/images/report-designer/transforming-data/join-table/multiple-join-condition.png)
4. Edit the join condition as required and click on the `tick` icon to update the edited join condition.
5. Then, click on the `Ok` button to save the modified join relationship.

## Delete a join condition

To delete a join condition in a table relation follow the below steps.

1. Open the `Query Joiner` dialog.
2. Mouse hover on the respective join field, to enable the delete option.
![Delete icon](/static/assets/on-premise/images/report-designer/transforming-data/join-table/delete-icon-for-join-condition.png)
3. Click on the above highlighted icon, to remove the join condition.
![Delete a join condition](/static/assets/on-premise/images/report-designer/transforming-data/join-table/equal-operator.png)
4. Click on the `tick` icon to update the join condition and then click on the `Ok` button to save the table relation.

> A table relation must have atleast one join condition.

## Delete a table relation

1. Open the `Query Joiner` dialog.
2. Delete a table relation by clicking the close icon placed at right corners in first row of table relation .
![Delete table relation](/static/assets/on-premise/images/report-designer/transforming-data/join-table/delete-icon-for-table-relation.png)
3. Click on the `Ok` button to save the joiner state.

## Create multiple table relation

1. Drag and drop minimum three tables into the design area
2. Open the `Query Joiner` dialog and click on the `ADD` icon to create a new table relation.
![Add new relation](/static/assets/on-premise/images/report-designer/transforming-data/join-table/add-icon-new-table-relation.png)
3. Choose the new tables and join information in the fields and click on the tick icon.
![Choose fields to create new relation](/static/assets/on-premise/images/report-designer/transforming-data/join-table/multiple-table-relation.png)
4. Click on the `OK` button to save the joiner state.