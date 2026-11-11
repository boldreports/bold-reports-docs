---
title: Supported SQL Join Types in the Query Joiner | {{site.productName}}
description: Learn the join types the {{site.productName}} Web Report Designer query joiner supports, such as inner join, and the purpose of each join type with example tables.
---

# Supported join types in the Web Report Designer query joiner

The {{site.productNameTM}} Web Report Designer query joiner supports four join types: inner join, left outer join, right outer join, and full outer join. Each join type has its own purpose, as the examples below show.

## Inner join

An `INNER JOIN` in the {{site.productNameTM}} query joiner returns the records from two or more tables where the records match in both tables.

An inner join of Table1 and Table2 gives the result of Table1 intersect Table2.

For example, consider the following two tables.

Table1

| `Supplier_Id` | `Supplier_Name` |
|---------------|-----------------|
| 100           | James           |
| 101           | John            |
| 102           | Robert          |
| 103           | Michael         |

Table2

| `Order_Id` | `Supplier_Id` | `Order_Date` |
|------------|---------------|--------------|
| 20125      | 100           | 09/21/2017   |
| 20126      | 101           | 09/22/2017   |
| 20127      | 104           | 09/23/2017   |

If you join (INNER JOIN) Table1 and Table2 on the Supplier_Id column with equals (=) as the comparison operator, the result is as follows:  

| `Supplier_Id` | `Supplier_Name` | `Order_Id` | `Supplier_Id(Table2)` | `Order_Date` |
|---------------|-----------------|------------|-----------------------|--------------|
| 100           | James           | 20125      | 100                   | 09/21/2017   |
| 101           | John            | 20126      | 101                   | 09/22/2017   |

## Left outer join

A `LEFT OUTER JOIN` in the {{site.productNameTM}} query joiner returns all records from the left table and the matched records from the right table. If there is no match, the result from the right table is NULL.

For example, consider the following two tables.

Table1

| `Supplier_Id` | `Supplier_Name` |
|---------------|-----------------|
| 100           | James           |
| 101           | John            |
| 102           | Robert          |
| 103           | Michael         |

Table2

| `Order_Id` | `Supplier_Id` | `Order_Date` |
|------------|---------------|--------------|
| 20125      | 100           | 09/21/2017   |
| 20126      | 101           | 09/22/2017   |
| 20127      | 104           | 09/23/2017   |

If you join (LEFT OUTER JOIN) Table1 and Table2 on the Supplier_Id column with equals (=) as the comparison operator, the result is as follows:

| `Supplier_Id` | `Supplier_Name`  | `Order_Id` | `Supplier_Id(Table2)` | `Order_Date` |
|---------------|------------------|------------|-----------------------|--------------|
| 100           | James            | 20125      | 100                   | 09/21/2017   |
| 101           | John             | 20126      | 101                   | 09/22/2017   |
| 102           | Robert           |            |                       |              |
| 103           | Michael          |            |                       |              |

## Right outer join

A right outer join in the {{site.productNameTM}} query joiner preserves the rows from the second (right) table, joining them with a NULL in the shape of the first (left) table.

For example, consider the following two tables.

Table1

|   `OrderID`    |   `CustomerID`   |   `EmployeeID`  |   `OrderDate`   |   `ShipperID`   |
|--------------|----------------|---------------|---------------|---------------|
|   10308      |   2            |   7           |   1996-09-18  |   3           |
|   10309      |   37           |   3           |   1996-09-19  |   1           |
|   10310      |   77           |   8           |   1996-09-20  |   2           |

Table2

|`EmployeeID` |`LastName` |`FirstName`|`BirthDate`|`Photo`|
|---------------|---------------|---------------|---------------|---------------|
|1  |Davolio |Nancy |12/8/1968 |EmpID1.png|
|2|Fuller|Andrew|2/19/1952|EmpID2.png|
|3|Leverling|Janet|8/30/1963|EmpID3.png|

If you join (RIGHT OUTER) Table1 and Table2 on the EmployeeID column with equals (=) as the comparison operator, the result is as follows:

|`EmployeeID`|`LastName`|`FirstName`|`OrderID`|`EmployeeID`|`OrderDate`|`ShipperID`|
|---------------|---------------|---------------|---------------|---------------|---------------|---------------|
|1|Davolio|Nancy|12/8/1968||||
|2|Fuller|Andrew|2/19/1952||||
|3|Leverling|Janet|8/30/1963|3|1996-09-19|2|

## Full outer join

A FULL OUTER JOIN in the {{site.productNameTM}} query joiner returns all records when there is a match in either the left (table1) or right (table2) table records.

For example, consider the following two tables.

Table1

|`CustomerID`|`Name`|`ContactName`|`City`|`PostalCode`|`Country`|
|---------------|-----------|-------------------|---------------|---------------|-----------|
|1|Alfreds|Maria|Berlin|12209|Germany|
|2|Ana|Ana Trujillo|México D.F.|05021|Mexico|
|3|Antonio|Antonio Moreno|México D.F.|05023|Mexico|

Table2

|   `OrderID`    |   `CustomerID`   |   `EmployeeID`  |   `OrderDate`   |   `ShipperID`   |
|--------------|----------------|---------------|---------------|---------------|
|   10308      |   2            |   7           |   1996-09-18  |   3           |
|   10309      |   37           |   3           |   1996-09-19  |   1           |
|   10310      |   77           |   8           |   1996-09-20  |   2           |

The FULL OUTER JOIN keyword returns all the rows from the left table (table1) and all the rows from the right table (table2).

|`CustomerID`|`Name`|`ContactName`|`City`|`PostalCode`|`Country`|`OrderID`|
|---------------|-----------|-------------------|---------------|---------------|-----------|-----------|
|1|Alfreds|Maria|Berlin|12209|Germany||
|2|Ana|Ana Trujillo|México D.F.|05021|Mexico|10308|
|3|Antonio|Antonio Moreno|México D.F.|05023|Mexico|10365|
|||||||10382|
|||||||10351|

## See also

* [Join tables](./../../transforming-data/join-table/)
* [Query filter](./../../transforming-data/query-filter/)
* [Transforming data overview](./../../transforming-data/)
