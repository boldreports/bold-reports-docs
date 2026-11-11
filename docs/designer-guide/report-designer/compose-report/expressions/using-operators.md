---
title: Use Operators in RDL Report Expressions | Bold Reports
description: Use arithmetic, comparison, concatenation, logical, bitwise, and bit shift operators in Bold Reports Web Report Designer expressions to combine RDL values.
keywords: ejReportDesigner, reportdesigner, operators, comparison, queryfilter
---

# Operators in Web Report Designer expressions

An operator in Bold Reports<sup>®</sup> Web Report Designer expressions is a symbol that performs a simple basic operation. You can use arithmetic, comparison, concatenation, logical or bitwise, and bit shift operators in an expression.

## Arithmetic

Arithmetic operators in Web Report Designer expressions perform mathematical operations on two numeric terms.

<table>
<tr>
<th>Operator</th>
<th>Description</th>
</tr>
<tr>
<td>^</td>
<td>
Raises a number to the power of another number.
</td>
</tr>
<tr>
<td>*</td>
<td>
Multiplies two numbers.
</td>
</tr>
<tr>
<td>/</td>
<td>
Divides two numbers and returns a float result.
</td>
</tr>
<tr>
<td>|</td>
<td>
Divides two numbers and returns an integer result.
</td>
</tr>
<tr>
<td>Mod</td>
<td>
Returns the integer remainder of a division.
</td>
</tr>
<tr>
<td>+</td>
<td>
Adds two numbers.
</td>
</tr>
<tr>
<td>-</td>
<td>
Returns the difference between two numbers.
</td>
</tr>
</table>

## Comparison

Comparison operators in Web Report Designer expressions compare whether two expressions are the same.

<table>
<tr>
<th>Operator</th>
<th>Description</th>
</tr>
<tr>
<td>&lt;</td>
<td>
Less than.
</td>
</tr>
<tr>
<td>&gt;=</td>
<td>
Less than or equal to.
</td>
</tr>
<tr>
<td>></td>
<td>
Greater than.
</td>
</tr>
<tr>
<td>>=</td>
<td>
Greater than or equal to.
</td>
</tr>
<tr>
<td>=</td>
<td>
Equal to.
</td>
</tr>
<tr>
<td><></td>
<td>
Not equal to.
</td>
</tr>
<tr>
<td>Like</td>
<td>
Determines specific character string matches a specified pattern.
</td>
</tr>
<tr>
<td>Is</td>
<td>
Compares two object references.
</td>
</tr>
</table>

## String Concatenation

String concatenation operators in Web Report Designer expressions append the second string to the first string.

<table>
<tr>
<th>Operator</th>
<th>Description</th>
</tr>
<tr>
<td>&</td>
<td>
Concatenates two strings.
</td>
</tr>
<tr>
<td>+</td>
<td>
Concatenates two strings.
</td>
</tr>
</table>

## Logical and Bitwise

Logical and bitwise operators in Web Report Designer expressions perform logical manipulations between two integer terms.

<table>
<tr>
<th>Operator</th>
<th>Description</th>
</tr>
<tr>
<td>And</td>
<td>
Performs a logical conjunction on two Boolean expressions, or bitwise conjunction on two.
</td>
</tr>
<tr>
<td>Not</td>
<td>
Performs logical negation on a Boolean expression, or bitwise negation on a numeric expression.
</td>
</tr>
<tr>
<td>Or</td>
<td>
Performs a logical disjunction on two Boolean expressions, or bitwise disjunction on two numeric values.
</td>
</tr>
<tr>
<td>Xor</td>
<td>
Performs a logical exclusion operation on two Boolean expressions, or a bitwise exclusion on two numeric expressions.
</td>
</tr>
<tr>
<td>AndAlso</td>
<td>
Performs logical conjunction on two expressions.
</td>
</tr>
<tr>
<td>OrElse</td>
<td>
Performs logical disjunction on two expressions.
</td>
</tr>
</table>

## Bit Shift

Bit shift operators in Web Report Designer expressions perform bit manipulations between two integer terms.

<table>
<tr>
<th>Operator</th>
<th>Description</th>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>
Performs an arithmetic left-shift on a bit pattern.
</td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>
Performs an arithmetic right-shift on a bit pattern.
</td>
</tr>
</table>

## See also

* [Expression Builder](./../../expressions/)
* [Built-in functions in expressions](./../using-built-in-functions/)
* [Built-in fields in expressions](./../using-built-in-fields/)
