---
title: Simple steps of basic functions using web report designer
description: This section describes about the basic functions references of expression using Bold Report Designer
keywords: ejReportDesigner, reportdesigner, functions, expressions
---

# Built-in Functions

## Text Functions

<table>
<tr>
<th>References</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Asc</code> <br></td>
<td>
Returns an integer value representing the character code corresponding to a character.
</td>
<td><code class="language-text" style="word-break: break-word;">=Asc(Fields!Description.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">AscW</code></td>
<td>
Returns an integer value representing the character code corresponding to a character.
</td>
<td><code class="language-text" style="word-break: break-word;">=AscW(Fields!Description.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Chr</code></td>
<td>
Returns the character associated with the specified character code.
</td>
<td><code class="language-text" style="word-break: break-word;">=Chr(65)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">ChrW</code></td>
<td>
Returns the character associated with the specified character code.
</td>
<td><code class="language-text" style="word-break: break-word;">=ChrW(241)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Filter</code></td>
<td>
Returns a zero-based array containing a subset of a string array based on specified filter criteria.
</td>
<td><code class="language-text" style="word-break: break-word;">=Filter(Parameters!MultivalueParameter.Value, "3", True, CompareMethod.Binary)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Format`</td>
<td>
Returns a formatted string according to the instructions in a format string expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Format(Globals!ExecutionTime, "Long Date")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">FormatCurrency</code></td>
<td>
Returns an expression formatted as a currency value using the currency symbol defined in the system control panel.
</td>
<td><code class="language-text" style="word-break: break-word;">=FormatCurrency(Fields!YearlyIncome.Value,0)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">FormatDateTime</code></td>
<td>
Returns a string expression representing a date/time value.
</td>
<td><code class="language-text" style="word-break: break-word;">=FormatDateTime(Fields!BirthDate.Value,DateFormat.ShortDate)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">FormatNumber</code></td>
<td>
Returns an expression formatted as a number.
</td>
<td><code class="language-text" style="word-break: break-word;">=FormatNumber(Fields!Weight.Value,2)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">FormatPercent</code></td>
<td>
Returns an expression formatted as a percentage (that is, multiplied by 100).
</td>
<td><code class="language-text" style="word-break: break-word;">=FormatPercent(Fields!Sales.Value/Sum(Fields!Sales.Value, "DataSet1"),0)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">GetChar</code></td>
<td>
Returns a char value representing the character from the specified index in the supplied string.
</td>
<td><code class="language-text" style="word-break: break-word;">=GetChar(Fields!Description.Value, 5)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">InStr</code></td>
<td>
Returns an integer specifying the start position of the first occurrence of one string within another.
</td>
<td><code class="language-text" style="word-break: break-word;">=InStr(Fields!Description.Value, "car")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">InStrRev</code></td>
<td>
Returns the position of the first occurrence of one string within another, starting from the right side of the string.
</td>
<td><code class="language-text" style="word-break: break-word;">=InStrRev(Fields!Description.Value, "car")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Join</code></td>
<td>
Returns a string created by joining a number of substrings in an array.
</td>
<td><code class="language-text" style="word-break: break-word;">=Join(Parameters!MultivalueParameter.Value,",")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">LCase</code></td>
<td>
Returns a string or character converted to lowercase.
</td>
<td><code class="language-text" style="word-break: break-word;">=LCase(Fields!Description.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Left</code></td>
<td>
Returns a string containing a specified number of characters from the left side of a string.
</td>
<td><code class="language-text" style="word-break: break-word;">=Left(Fields!Description.Value,4)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Len`</td>
<td>
Returns an integer containing either the number of characters in a string or the number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Len(Fields!Description.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">LSet</code></td>
<td>
Returns a left-aligned string containing the specified string adjusted to the specified length.
</td>
<td><code class="language-text" style="word-break: break-word;">=LSet(Fields!Description.Value,4)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">LTrim</code></td>
<td>
Returns the string without left side trailing spaces in the given string.
</td>
<td><code class="language-text" style="word-break: break-word;">=LTrim(Fields!Description.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Mid</code></td>
<td>
Returns a string containing a specified number of characters from a string.
</td>
<td><code class="language-text" style="word-break: break-word;">=Mid(Fields!Description.Value,3,4)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Replace</code></td>
<td>
Returns a string in which a specified substring has been replaced with another.
</td>
<td><code class="language-text" style="word-break: break-word;">=Replace(Fields!Description.Value,"tube","headlight")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Right</code></td>
<td>
Returns a string containing a specified number of characters from the right side of a string.
</td>
<td><code class="language-text" style="word-break: break-word;">=Right(Fields!Description.Value,4)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">RSet</code></td>
<td>
Returns a right-aligned string containing the specified string adjusted to the specified length.
</td>
<td><code class="language-text" style="word-break: break-word;">=RSet(Fields!Description.Value,4)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">RTrim</code></td>
<td>
Returns the string without right side trailing spaces in the given string.
</td>
<td><code class="language-text" style="word-break: break-word;">=RTrim(Fields!Description.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Space</code></td>
<td>
Returns a string consisting of the specified number of spaces.
</td>
<td><code class="language-text" style="word-break: break-word;">=Space(3)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Split</code></td>
<td>
Returns a zero-based, one-dimensional array containing a specified number of substrings.
</td>
<td><code class="language-text" style="word-break: break-word;">=Split(Fields!ListWithCommas.Value,",")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">StrComp</code></td>
<td>
Returns -1, 0, or 1, based on the result of a string comparison.
</td>
<td><code class="language-text" style="word-break: break-word;">=StrComp(Fields!Description.Value,First(Fields!Description.Value))</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">StrConv</code></td>
<td>
Returns a string converted as specified.
</td>
<td><code class="language-text" style="word-break: break-word;">=StrConv(Fields!Description.Value,vbProperCase)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">StrDup</code></td>
<td>
Returns a string or object consisting of the specified character repeated the specified number of times.
</td>
<td><code class="language-text" style="word-break: break-word;">=StrDup(3,"M")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">StrReverse</code></td>
<td>
Returns a string in which the character order of a specified string is reversed.
</td>
<td><code class="language-text" style="word-break: break-word;">=StrReverse(Fields!Description.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Trim</code></td>
<td>
Returns the string without trailing spaces in the given string
</td>
<td><code class="language-text" style="word-break: break-word;">=Trim(Fields!Description.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">UCase</code></td>
<td>
Returns a string or character containing the specified string converted to uppercase.
</td>
<td><code class="language-text" style="word-break: break-word;">=UCase(Fields!Description.Value)</code></td>
</tr>
</table>

## Date Time Functions

<table>
<tr>
<th>References</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CDate</code></td>
<td>
Convert to date.
</td>
<td><code class="language-text" style="word-break: break-word;">=CDate(Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">DateAdd</code></td>
<td>
Returns a long value specifying the number of time intervals between two date values.
</td>
<td><code class="language-text" style="word-break: break-word;">=DateAdd("d",3,Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">DatePart</code></td>
<td>
Returns an integer value containing the specified component of a given date value.
</td>
<td><code class="language-text" style="word-break: break-word;">=DatePart("q",Fields!BirthDate.Value,0,0)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">DateSerial</code></td>
<td>
Returns a date value representing a specified year, month, and day, with the time information set to midnight (00:00:00).</code>
</td>
<td><code class="language-text" style="word-break: break-word;">=DateSerial(DatePart("yyyy",Fields!BirthDate.Value)-10, DatePart("m",Fields!BirthDate.Value)+3,DatePart("d",Fields!BirthDate.Value)-1)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">DateString</code></td>
<td>
Returns or sets a string value representing the current date according to your system.
</td>
<td><code class="language-text" style="word-break: break-word;">=DatePart("m",DateString())</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">DateValue</code></td>
<td>
Returns a date value containing the date information represented by a string, with the time information.
</td>
<td><code class="language-text" style="word-break: break-word;">=DateValue("January 15, 2010")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Day</code></td>
<td>
Returns an integer value from 1 through 31 representing the day of the month.
</td>
<td><code class="language-text" style="word-break: break-word;">=Day(Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">FormatDateTime</code></td>
<td>
Returns a string expression representing date/time value.
</td>
<td><code class="language-text" style="word-break: break-word;">=FormatDateTime(Fields!BirthDate.Value,DateFormat.ShortDate)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Hour</code></td>
<td>
Returns an integer value from 0 through 23 representing the hour of the day.
</td>
<td><code class="language-text" style="word-break: break-word;">=Hour(Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Minute</code></td>
<td>
Returns an integer value from 0 through 59 representing the minute of the hour.
</td>
<td><code class="language-text" style="word-break: break-word;">=Minute(Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Month</code></td>
<td>
Returns an integer value from 1 through 12 representing the month of the year.
</td>
<td><code class="language-text" style="word-break: break-word;">=Month(Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">MonthName</code></td>
<td>
Returns a string value containing the name of the specified month.
</td>
<td><code class="language-text" style="word-break: break-word;">=MonthName(10,True)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Now</code></td>
<td>
Returns a date value containing the current date and time according to your system.
</td>
<td><code class="language-text" style="word-break: break-word;">="This time tomorrow is " & DateAdd("d", 1, Now())</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Second</td>
<td>
Returns an integer value from 0 through 59 representing the second of the minute.</code>
</td>
<td><code class="language-text" style="word-break: break-word;">=Second(Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">TimeOfDay</code></td>
<td>
Returns or sets a date value containing the current time of day according to your system.
</td>
<td><code class="language-text" style="word-break: break-word;">="Time of the day is " & TimeOfDay()</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Timer</code></td>
<td>
Returns a double value representing the number of seconds elapsed since midnight.
</td>
<td><code class="language-text" style="word-break: break-word;">="Number of seconds since midnight " & Timer()</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">TimeSerial</code></td>
<td>
Returns a date value representing a specified hour, minute, and second, with the date information set relative to January 1 of the year 1.
</td>
<td><code class="language-text" style="word-break: break-word;">=TimeSerial(DatePart("h",Fields!BirthDate.Value), 'DatePart("n",Fields!BirthDate.Value),DatePart("s",Fields!BirthDate.Value))</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">TimeString</code></td>
<td>
Returns or sets a string value representing the current time of day according to your system.
</td>
<td><code class="language-text" style="word-break: break-word;">=TimeString()</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">TimeValue</code></td>
<td>
Returns a date value containing the time information represented by a string, with the date information set to January 1 of the year 1.
</td>
<td><code class="language-text" style="word-break: break-word;">=TimeValue(Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Today</code></td>
<td>
Returns or sets a date value containing the current date according to your system.
</td>
<td><code class="language-text" style="word-break: break-word;">="Tomorrow is " & DateAdd("d", 1, Today())</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Weekday</code></td>
<td>
Returns an integer value containing a number that represents the day of the week.
</td>
<td><code class="language-text" style="word-break: break-word;">=Weekday(Fields!BirthDate.Value,0)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">WeekdayName</code></td>
<td>
Returns a string value containing the name of the specified weekday.
</td>
<td><code class="language-text" style="word-break: break-word;">=WeekdayName(2,True,0)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Year</code></td>
<td>
Returns an integer value from 1 through 9999 representing the year.
</td>
<td><code class="language-text" style="word-break: break-word;">=Year(Fields!BirthDate.Value)</code></td>
</tr>
</table>

## Math Functions

<table>
<tr>
<th>References</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Abs</code></td>
<td>
Returns the absolute value of a single-precision floating-point number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Abs(Fields!YearlyIncome.Value - 80000)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Acos</code></td>
<td>
Returns the angle whose cosine is the specified number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Acos(Fields!Angle.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Asin</code></td>
<td>
Returns the angle whose sine is the specified number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Asin(Fields!Angle.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Atan</code></td>
<td>
Returns the angle whose tangent is the specified number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Atan(Fields!Tangent.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">tan2</code></td>
<td>
Returns the angle whose tangent is the quotient of two specified numbers.
</td>
<td><code class="language-text" style="word-break: break-word;">=Atan2(Fields!CoordinateY.Value,Fields!CoordinateX.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">BigMul</code></td>
<td>
Produces the full product of two 32-bit numbers.
</td>
<td><code class="language-text" style="word-break: break-word;">=`BigMul(Fields!Int32Value.Value, Fields!Int32Value.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Ceiling</code></td>
<td>
Returns the smallest integer that is greater than or equal to the specified integer.
</td>
<td><code class="language-text" style="word-break: break-word;">=Ceiling(Fields!YearlyIncome.Value / 7)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Cos</code></td>
<td>
Returns the cosine of the specified angle.
</td>
<td><code class="language-text" style="word-break: break-word;">=Cos(Fields!Angle.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Cosh</code></td>
<td>
Returns the hyperbolic cosine of the specified angle.
</td>
<td><code class="language-text" style="word-break: break-word;">=Cosh(Fields!Angle.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Exp</code></td>
<td>
Returns e raised to the specified power.
</td>
<td><code class="language-text" style="word-break: break-word;">=Exp(Fields!IntegerCounter.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Fix</code></td>
<td>
Returns an integer portion of a number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Fix(Fields!YearlyIncome.Value /-3)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Floor</code></td>
<td>
Returns the largest integer less than or equal to the specified integer.
</td>
<td><code class="language-text" style="word-break: break-word;">=Floor(Fields!YearlyIncome.Value / 12)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Int</code></td>
<td>
Returns an integer portion of a number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Int(Fields!YearlyIncome.Value / 12)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Log</code></td>
<td>
Returns the natural (base e) logarithm of a specified number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Log(Fields!NumberValue.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Log10</code></td>
<td>
Returns the base 10 logarithm of a specified number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Log10(Fields!NumberValue.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Max</code></td>
<td>
Returns the maximum value from all non-null values of the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Max(Fields!YearlyIncome.Value, "AdventureWorks", Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Min</code></td>
<td>
Returns the minimum value from all non-null values of the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Min(Fields!YearlyIncome.Value, "AdventureWorks", Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Pow</code></td>
<td>
Returns a specified number raised to the specified power.
</td>
<td><code class="language-text" style="word-break: break-word;">=Pow(Fields!YearlyIncome.Value,2)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Rnd</code></td>
<td>
Returns a random number of single type.
</td>
<td><code class="language-text" style="word-break: break-word;">=Rnd(-1)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Round</code></td>
<td>
Rounds a double-precision floating-point value to the nearest integer.
</td>
<td><code class="language-text" style="word-break: break-word;">=Round(Fields!YearlyIncome.Value / 12, 2)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Sign</code></td>
<td>
Returns a value indicating the sign of an 8-bit signed integer.
</td>
<td><code class="language-text" style="word-break: break-word;">=Sign(Fields!YearlyIncome.Value - 60000)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Sin</code></td>
<td>
Returns the sine of the specified angle.
</td>
<td><code class="language-text" style="word-break: break-word;">=Sin(Fields!Angle.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Sinh</code></td>
<td>
Returns the hyperbolic sine of the specified angle.
</td>
<td><code class="language-text" style="word-break: break-word;">=Sinh(Fields!Angle.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Sqrt</code></td>
<td>
Returns the square root of a specified number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Sqrt(Fields!Area.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Tan</code></td>
<td>
Returns the tangent of the specified angle.
</td>
<td><code class="language-text" style="word-break: break-word;">=Tan(Fields!Angle.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Tanh</code></td>
<td>
Returns the hyperbolic tangent of the specified angle.
</td>
<td><code class="language-text" style="word-break: break-word;">=Tanh(Fields!Angle.Value)</code></td>
</tr>
</table>

## Inspection Functions

<table>
<tr>
<th>References</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">IsArray</code></td>
<td>
Returns a Boolean value indicating whether variable points to an array.
</td>
<td><code class="language-text" style="word-break: break-word;">=IsArray(Parameters!Initials.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">IsDate</code></td>
<td>
Returns a Boolean value indicating whether an expression represents a valid.
</td>
<td><code class="language-text" style="word-break: break-word;">=IsDate(Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">IsNothing</code></td>
<td>
Returns a Boolean value indicating whether an expression has no object.
</td>
<td><code class="language-text" style="word-break: break-word;">=IsNothing(Fields!MiddleInitial.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">IsNumeric</code></td>
<td>
Returns a Boolean value indicating whether an expression can be evaluated as a number.
</td>
<td><code class="language-text" style="word-break: break-word;">=IsNumeric(Fields!YearlyIncome.Value)</code></td>
</tr>
</table>

## Program Flow Functions

<table>
<tr>
<th>References</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Choose</code></td>
<td>
Selects and returns a value from a list of arguments.
</td>
<td><code class="language-text" style="word-break: break-word;">=Tanh(Fields!Angle.Value)=Choose(Datepart("w", Fields!BirthDate.Value), "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">IIf</code></td>
<td>
Returns one of two objects depending upon the evaluation of an expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Tanh(Fields!Angle.Value) =IIf(Fields!YearlyIncome.Value >= 60000,"High","Low")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Switch</code></td>
<td>
Evaluates a list of expressions and returns an object value corresponding to the first expression in the list that is true.
</td>
<td><code class="language-text" style="word-break: break-word;">=Switch(Fields!FirstName.Value = "Sue", "Susan",Fields!FirstName.Value = "Bob", "Robert")</code></td>
</tr>
</table>

## Aggregate Functions

<table>
<tr>
<th>References</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Avg</code></td>
<td>
Returns the average of all non-null values from the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Avg(Fields!YearlyIncome.Value, "GroupByGender", Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Count</code></td>
<td>
Returns a count of the values from the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=CountDistinct(Fields!MiddleInitial.Value, "GroupByInitial", Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CountDistinct</code></td>
<td>
Returns a count of all distinct values from the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=CountDistinct(Fields!MiddleInitial.Value, "GroupByInitial", Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CountRows</code></td>
<td>
Returns a count of rows within the specified scope.
</td>
<td><code class="language-text" style="word-break: break-word;">=CountRows("GroupByInitial", Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">First</code></td>
<td>
Returns the first value from the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=First(Fields!MiddleInitial.Value, "AdventureWorks")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Last</code></td>
<td>
Returns the last value from the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Last(Fields!MiddleInitial.Value, "AdventureWorks")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Max</code></td>
<td>
Returns the maximum value in the given expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Max(Fields!YearlyIncome.Value, "AdventureWorks", Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Min</code></td>
<td>
Returns the minimum value in the given expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Min(Fields!YearlyIncome.Value, "AdventureWorks", Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">StDev</code></td>
<td>
Returns the standard deviation of all non-null values of the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=StDev(Fields!YearlyIncome.Value,"GroupByInitial",Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">StDevP</code></td>
<td>
Returns the population standard deviation of all non-null values of the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=StDevP(Fields!YearlyIncome.Value,"GroupByInitial",Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Sum</code></td>
<td>
Returns a sum of the values of the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Sum(Fields!YearlyIncome.Value,"GroupByInitial",Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Var</code></td>
<td>
Returns the variance of all non-null values of the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=Var(Fields!YearlyIncome.Value,"GroupByInitial",Recursive)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">VarP</code></td>
<td>
Returns the population variance of all non-null values of the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=VarP(Fields!YearlyIncome.Value,"GroupByInitial")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">RunningValue</code></td>
<td>
Uses a specified function to return a running aggregate of the specified expression.
</td>
<td><code class="language-text" style="word-break: break-word;">=RunningValue(Fields!YearlyIncome.Value,Sum,"AdventureWorks")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Aggregate</code></td>
<td>
Returns a custom aggregate of the specified expression, as defined by the data provider.
</td>
<td><code class="language-text" style="word-break: break-word;">=Aggregate(Fields!Order_Count.Value)</code></td>
</tr>
</table>

## Financial Functions

<table>
<tr>
<th>References</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">DDB</code></td>
<td>
Returns a double value specifying the depreciation of an asset for a specific time period using the double-declining balance method or some other method you specify.
</td>
<td><code class="language-text" style="word-break: break-word;">=DDB(Fields!CostOfProperty.Value,Fields!Salvage.Value,Parameters!Life.Value,Parameters!Period.Value,2)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">FV</code></td>
<td>
Returns double value specifying the future value of an annuity based on periodic fixed payments and a fixed interest rate.
</td>
<td><code class="language-text" style="word-break: break-word;">=FV(Parameters!Rate.Value,Parameters!NumberOfPayments.Value, Parameters!PaymentAmount.Value,Fields!PropertyCost.Value,DueDate.EndOfPeriod)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">IPmt</code></td>
<td>
Returns double value specifying the interest payment for a given period of an annuity based on periodic, fixed payments and a fixed interest rate.
</td>
<td><code class="language-text" style="word-break: break-word;">=IPmt(Parameters!Rate.Value, Parameters!PaymentPeriod.Value, Parameters!NumberOfPayments.Value, 'Parameters!PresentValue.Value, 0,DueDate.EndOfPeriod)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">NPer</code></td>
<td>
Returns a double value specifying the number of periods for an annuity based on periodic fixed payments and a fixed interest rate.
</td>
<td><code class="language-text" style="word-break: break-word;">=NPer(Parameters!Rate.Value, Parameters!PaymentAmount.Value,Parameters!PresentValue.Value,0,DueDate.EndOfPeriod)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Pmt</code></td>
<td>
Returns a double value specifying the payment for an annuity based on periodic, fixed payments and a fixed interest rate.
</td>
<td><code class="language-text" style="word-break: break-word;">=Pmt(Parameters!Rate.Value, Parameters!NumberOfPayments.Value,Fields!PropertyCost.Value,0, DueDate.EndOfPeriod)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">PPmt</code></td>
<td>
Returns a double value specifying the principal payment for a given period of an annuity based on periodic fixed payments and a fixed interest rate.
</td>
<td><code class="language-text" style="word-break: break-word;">=PPmt(Parameters!Rate.Value,Parameters!Period.Value,Parameters!NumberOfPayments.Value, Fields!PropertyCost.Value,0,DueDate.EndOfPeriod)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">PV</code></td>
<td>
Returns a double value specifying the present value of an annuity based on periodic, fixed payments to be paid in the future and a fixed interest rate.
</td>
<td><code class="language-text" style="word-break: break-word;">=PV(Parameters!Rate.Value, Parameters!NumberOfPayments.Value,Fields!PaymentAmount.Value,0,DueDate.EndOfPeriod)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Rate</code></td>
<td>
Returns a double value specifying the interest rate per period for an annuity.
</td>
<td><code class="language-text" style="word-break: break-word;">=Rate(Parameters!NumberOfPayments.Value,Parameters!PaymentAmount.Value,Parameters!PresentValue.Value, DueDate.EndOfPeriod,0.1)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">SLN</code></td>
<td>
Returns a double value specifying the straight-line depreciation of an asset for a single period.
</td>
<td><code class="language-text" style="word-break: break-word;">=SLN(Fields!PropertyCost.Value,Parameters!Salvage.Value,Parameters!Life.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">SYD</code></td>
<td>
Returns a double value specifying the sum-of-years digits depreciation of an asset for a specified period.
</td>
<td><code class="language-text" style="word-break: break-word;">=SYD(Fields!PropertyCost.Value,Parameters!Salvage.Value, Parameters!Life.Value,Parameters!Period.Value)</code></td>
</tr>
</table>

## Conversion Functions

<table>
<tr>
<th>References</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CBool</code></td>
<td>
Convert to Boolean.
</td>
<td><code class="language-text" style="word-break: break-word;">=CBool(Fields!HouseOwnerFlag.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CByte</code></td>
<td>
Convert to byte.
</td>
<td><code class="language-text" style="word-break: break-word;">=CByte(Fields!Number.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CChar</code></td>
<td>
Convert to char.
</td>
<td><code class="language-text" style="word-break: break-word;">=CChar(Fields!MaritalStatus.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CDate</code></td>
<td>
Convert to date.
</td>
<td><code class="language-text" style="word-break: break-word;">=CDate(Fields!BirthDate.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CDbl</code></td>
<td>
Convert to double.
</td>
<td><code class="language-text" style="word-break: break-word;">=CDbl(Fields!YearlyIncome.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CDec</code></td>
<td>
Convert to decimal.
</td>
<td><code class="language-text" style="word-break: break-word;">=CDec(Fields!YearlyIncome.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CInt</code></td>
<td>
Convert to integer.
</td>
<td><code class="language-text" style="word-break: break-word;">=CInt(Fields!YearlyIncome.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CLng</code></td>
<td>
Convert to lone.
</td>
<td><code class="language-text" style="word-break: break-word;">=CLng(Fields!YearlyIncome.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CObj</code></td>
<td>
Convert to object.
</td>
<td><code class="language-text" style="word-break: break-word;">=CObj(Fields!YearlyIncome.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CShort</code></td>
<td>
Convert to short.
</td>
<td><code class="language-text" style="word-break: break-word;">=CShort(Fields!NumberCarsOwned.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CSng</code></td>
<td>
Convert to single.
</td>
<td><code class="language-text" style="word-break: break-word;">=CSng(Fields!YearlyIncome.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">CStr</code></td>
<td>
Convert to string.
</td>
<td><code class="language-text" style="word-break: break-word;">=CStr(Fields!YearlyIncome.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Fix</code></td>
<td>
Returns an integer portion of a number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Fix(Fields!YearlyIncome.Value / -3)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Hex</code></td>
<td>
Returns a string representing the hexadecimal value of a number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Hex(Fields!CellColor.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Int</code></td>
<td>
Returns an integer portion of a number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Int(Fields!YearlyIncome.Value / 12)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Oct</code></td>
<td>
Returns a string representing the octal value of a number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Oct(Fields!BitString.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Str</code></td>
<td>
Returns a string that represents a number.
</td>
<td><code class="language-text" style="word-break: break-word;">=Str(Fields!YearlyIncome.Value)</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Val</code></td>
<td>
Returns numbers in a string as a numeric value of appropriate type.
</td>
<td><code class="language-text" style="word-break: break-word;">=Val(Fields!AddressLine1.Value)</code></td>
</tr>
</table>

## Miscellaneous Functions

<table>
<tr>
<th>References</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">InScope</code></td>
<td>
Returns true if the current instance is within the specified scope.
</td>
<td><code class="language-text" style="word-break: break-word;">=InScope("table1_Group1")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Level</code></td>
<td>
Returns a zero-based integer representing the current depth level.
</td>
<td><code class="language-text" style="word-break: break-word;">=Level("GroupByInitial")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Lookup</code></td>
<td>
Use Lookup to retrieve the value from the specified dataset for a name-value pair where there is a 1-to-1 relationship.
</td>
<td><code class="language-text" style="word-break: break-word;">=Lookup(Fields!SaleProdId.Value, Fields!ProductID.Value,  Fields!Name.Value, "Product")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">LookupSet</code></td>
<td>
Use LookupSet to retrieve a set of values from the specified dataset for a name-value pair where there is a 1-to-many relationship.
</td>
<td><code class="language-text" style="word-break: break-word;">=LookupSet(Fields!TerritoryGroupID.Value, Fields!TerritoryID.Value, Fields!StoreName.value, "Stores")</code></td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Previous</code></td>
<td>
Returns the value of the expression for the previous row of data.
</td>
<td>
<code class="language-text" style="word-break: break-word;">=Previous(Fields!FirstName.Value)</code>
</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">RowNumber</code></td>
<td>
Returns a running count of all rows in the specified scope.
</td>
<td><code class="language-text" style="word-break: break-word;">=RowNumber("AdventureWorks")</code></td>
</tr>
</table>