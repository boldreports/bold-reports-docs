---
title: List of Built-in functions supported in Expression Designer
description: This section provides the information about the list of built-in functions supported in query expression designer.
keywords: 
---

# Supported built-in functions

Following built-in functions are supported in Query Expression Designer.

## Numbers

   <table>
   <tr>
   <th>Functions</th>
   <th>Syntax & Descriptions</th>
   </tr>
<tr>
   <td><code class="language-text" style="word-break: break-word;">ABS</code></td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ABS(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the absolute value of the given expression.</br></ul>
   </td>
</tr>
   <tr>

   <td><code class="language-text" style="word-break: break-word;">ACOS</code></td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ACOS(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the inverse cosine (also known as arccosine) of the given numeric expression.</br></ul>
   </td>
   </tr>
   <tr>

   <td><code class="language-text" style="word-break: break-word;">ASIN</code></td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ASIN(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the inverse sine (also known as arcsine) of the given numeric expression.</br></ul>
   </td>
   </tr>
   <tr>

   <td><code class="language-text" style="word-break: break-word;">ATAN</code></td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ATAN(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the inverse tangent (also known as arctangent) of the given numeric expression.</br></ul>
   </td>
   </tr>
   <tr>

   <td><code class="language-text" style="word-break: break-word;">COS</code></td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   COS(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the cosine of the angle specified in radians, in the given expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">DEGREES</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DEGREES(numeric_expression)</br>
   <b>Description:</b></br> Returns the angle in degrees for the one specified in radians, in the given numeric expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">EXP</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> EXP(numeric_expression)</br>
   <b>Description:</b></br> Returns the exponential value of the given expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">LOG</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LOG(numeric_expression)</br>
   <b>Description:</b></br> Returns the logarithm of the given expression to the specified base.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">PI</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> PI()</br>
   <b>Description:</b></br> Returns the constant value of PI.</br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">POWER</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> POWER(numeric_expression, numeric_expression)</br>
   <b>Description:</b></br> Returns the value of the given expression (expression1) to the specified power (expression2).</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">ROUND</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ROUND(numeric_expression)</br>
   <b>Description:</b></br> Returns a rounded value.</br>
   </ul>
   </td>
   </tr>
   <tr>   <td><code class="language-text" style="word-break: break-word;">RADIANS</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RADIANS(numeric_expression)</br>
   <b>Description:</b></br> Returns the angle in radians for the one specified in degrees in the given numeric expression.</br>
   </ul>
   </td>
   </tr>
   <tr>

   <td><code class="language-text" style="word-break: break-word;">SIGN</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SIGN(numeric_expression)</br>
   <b>Description:</b></br> Returns a value representing the positive (+1), zero (0), or negative (-1) sign of the given numeric expression.</br>
   </ul>
   </td>
   </tr>
   <tr>

   <td><code class="language-text" style="word-break: break-word;">SIN</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SIN(numeric_expression)</br>
   <b>Description:</b></br> Returns the sine of the angle specified in radians, in the given expression.</br></ul>
   </td>
   </tr>
   <tr>

   <td><code class="language-text" style="word-break: break-word;">SQRT</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SQRT(numeric_expression)</br>
   <b>Description:</b></br> Returns the square root of the given numeric expression.</br>
   </ul>
   </td>
   </tr>
   <tr>

   <td><code class="language-text" style="word-break: break-word;">TAN</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TAN(numeric_expression)</br>
   <b>Description:</b></br> Returns the tangent of the given numeric expression.</br></ul>
   </td>
   </tr>
   </table>

## Conditional

  <table>
   <tr>
   <th>Functions</th>
   <th>Syntax & Descriptions</th>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">IF</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> IF(expression, true_part, false_part)</br>
   <b>Description:</b></br> Returns either true part or false part, depending on the evaluation of the expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">IFNULL</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> IFNULL(expression1,expression2)</br>
   <b>Description:</b></br> If the expression is numeric/string/date, returns the first expression. If the first expression is NULL, returns the second expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">ISNOTNULL</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ISNOTNULL(expression)</br>
   <b>Description:</b></br> If the expression is numeric/string/date is NULL, returns a string representing false, otherwise returns true.</br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">ISNULL</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ISNULL(expression)</br>
   <b>Description:</b></br> Returns true if the given expression evaluates to null.</br></ul>
   </td>
   </tr>
   </table>

## Logical

  <table>
   <tr>
   <th>Functions</th>
   <th>Syntax & Descriptions</th>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">AND</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> (expression1) AND (expression2)</br>
   <b>Description:</b></br> Returns true if both the expressions evaluates to true.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">NOT</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> NOT(expression)</br>
   <b>Description:</b></br> Returns the reversed logical value of the expression being evaluated.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">OR</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> (expression1) OR (expression2)</br>
   <b>Description:</b></br> Returns true if any of the expressions evaluates to true.</br>
   </ul>
   </td>
   </tr>
   </table>

## Date

  <table>
   <tr>
   <th>Functions</th>
   <th>Syntax & Descriptions</th>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">DATEADD</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATEADD(numeric_expression, date_expression)</br>
   <b>Description:</b></br> Adds the number of days to the specified date.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">DATENAME</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATENAME(date_part, date_expression)</br>
   <b>Description:</b></br> Returns a string representing the specified date_part of the given date expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">DATEPART</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATEPART(date_part, date_expression)</br>
   <b>Description:</b></br> Returns an integer value representing the specified date_part of the given date expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">DATESUB</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATESUB(numeric_expression, date_expression)</br>
   <b>Description:</b></br> Returns the date subtracted from the specified date.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">DAY</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DAY(date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the day part of the specified date.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">DAYDIFF</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DAYDIFF(start_date_expression, end_date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the difference between two specified dates.</br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">HOUR</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> HOUR(date_expression)</br>
   <b>Description:</b></br> Returns the hour of the given date as an integer.</br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">MINUTE</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MINUTE(date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the minute part of the date resulted from specified date expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">MONTH</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MONTH(date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the month part of the date resulted from specified date expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">NOW</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> NOW()</br>
   <b>Description:</b></br> Returns the current date and time.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">TODAY</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TODAY()</br>
   <b>Description:</b></br> Returns the current date.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">YEAR</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> YEAR(date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the year part of the date resulting from the specified date expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">MAX</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MAX(expression)</br>
   <b>Description:</b></br> Returns the maximum value in the given expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">MIN</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MIN(expression)</br>
   <b>Description:</b></br> Returns the minimum value in the given expression.</br>  
   </ul>
   </td>
   </tr>
   </table>

## String

  <table>
   <tr>
   <th>Functions</th>
   <th>Syntax & Descriptions</th>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">CHAR</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CHAR(integer_expression)</br>
   <b>Description:</b></br> Converts the given integer ASCII code into a character.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">CONCAT</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CONCAT(string_expression1, string_expression2,…, string_expressionN)</br>
   <b>Description:</b></br> Returns a string value resulting from the concatenation of two or more string values.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">CONTAINS</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CONTAINS(string_expression, substring_expression)</br>
   <b>Description:</b></br> Returns true if the given string expression contains the specified substring expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">ENDSWITH</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ENDSWITH(string_expression substring_expression)</br>
   <b>Description:</b></br> Returns true if the given string expression ends with the specified substring expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">LEFT</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LEFT(string_expression, numeric_expression)</br>
   <b>Description:</b></br> Returns the specified number of characters from start of the given string expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">LEN</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LEN(string_expression)</br>
   <b>Description:</b></br> Returns the number of characters in the given string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">LOWER</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LOWER(string_expression)</br>
   <b>Description:</b></br> Returns a lower case converted string value from a given string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">LTRIM</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LTRIM(string_expression)</br>
   <b>Description:</b></br> Returns the string value with any leading blanks removed from string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">MAX</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MAX(expression)</br>
   <b>Description:</b></br> Returns the maximum value in the given expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">MIN</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MIN(expression)</br>
   <b>Description:</b></br> Returns the minimum value in the given expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">RIGHT</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RIGHT(string_expression, numeric_expression)</br>
   <b>Description:</b></br> Returns the specified number of characters from end of the given string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">RTRIM</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RTRIM(string_expression)</br>
   <b>Description:</b></br> Returns the string value with any trailing blanks removed from string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">STARTSWITH</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> STARTSWITH(string_expression, substring_expression)</br>
   <b>Description:</b></br> Returns true if the given string expression starts with the specified substring expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">SUBSTR</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SUBSTR(string_expression, starting_index, length_of_the_string)</br>
   <b>Description:</b></br> Returns a specific length of string starting from specific index from the given string expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td><code class="language-text" style="word-break: break-word;">UPPER</code></td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> UPPER(string_expression)</br>
   <b>Description:</b></br> Returns an upper case converted string value from a given string expression.</br></ul>
   </td>
   </tr>
   </table>
