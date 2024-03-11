---
title: Supported Barcode Types | Web ReportDesigner | Bold Reports
description: This section provides the list of supported barcode report item in Bold Report Designer and valid value formats for each types.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Supported barcode types

The following table contains the supported types and associated valid characters.

<table>
<tr>
<th>Symbol</th>
<th>Supported characters</th>
<th>Length</th>
</tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/QR_code">QR Code</a></td><td>
[0–9]; [A–Z (upper-case only)]; [space $ % * + - . / , :]; [Shift JIS characters]</td><td>
variable</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Data_Matrix">DataMatrix</a></td><td>
All ASCII characters</td><td>
</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/PDF417">PDF417</a></td><td>
[0-9]; [A-Z]; [a-z]; Mixed; Punctuation; Byte</td><td>
variable</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Code_39">Code 39</a></td><td>
[0-9]; [A-Z]; [- . $ / + % SPACE]</td><td>
variable</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Code_39#Full_ASCII_Code_39">Code 39 Extended</a></td><td>
[0-9]; [A-Z]; [a-z]</td><td>
variable</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Code_11">Code 11</a></td>
<td>
[0-9]; [-]</td><td>
variable</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Codabar">Codabar</a></td><td>
[0-9]; [- $ : / . +]</td><td>
variable</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Code_93">Code 93</a></td><td>
[0-9]; [A-Z]; [- . $ / + % SPACE]</td><td>
variable</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Code_128">Code 128A</a></td><td>
[0-9]; [A-Z]; [NUL (0x00) SOH (0x01) STX (0x02) ETX (0x03) EOT(0x04) ENQ (0x05) ACK (0x06) BEL (0x07) BS (0x08) HT (0x09) LF (0x0A) VT(0x0B) FF (0x0C) CR (0x0D) SO (0x0E) SI (0x0F) DLE (0x10) DC1 (0x11) DC2(0x12) DC3 (0x13) DC4 (0x14) NAK (0x15) SYN (0x16) ETB (0x17) CAN(0x18) EM (0x19) SUB (0x1A) ESC (0x1B) FS (0x1C) GS (0x1D) RS (0x1E) US(0x1F) SPACE (0x20)]; [" ! # $ % & ' ( ) * + , - . / ; &lt; = &gt; ? @ [ / ]^ _ ]</td><td>
variable</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Code_128">Code 128B</a></td><td>
[0-9]; [A-Z]; [a-z]; [SPACE (0x20) ! " # $ % & ' ( ) * + , - . / :; &lt; = &gt; ? @ [ / ]^ _ `  { | } ~ DEL (•) ]</td><td>
variable</td></tr>
<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Code_128">Code 128C</a></td><td>
ASCII 00-99(encodes each two digit with one code)</td><td>
variable</td>
</tr>

<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Universal_Product_Code">UPCA</a></td><td>numeric [0..9]</td><td>
12 digits</td></tr>

<tr>
<td>
<a href="https://en.wikipedia.org/wiki/International_Article_Number">EAN-13</a></td><td>numeric [0..9]</td><td>
12 digits</td></tr>

<tr>
<td>
<a href="https://en.wikipedia.org/wiki/International_Article_Number">EAN-8</a></td><td>
numeric [0..9]</td><td>
7 usable digits</td></tr>

<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Code_39">Code39 Mod 43</a></td><td>[A-Z (upper-case only)] [0-9] [SPACE - . $ / + % ]</td><td>
variable</td></tr>

<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Interleaved_2_of_5">Interleaved 2 of 5</a></td><td>numeric [0..9]</td><td>
variable</td></tr>

<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Two-out-of-five_code">Standard 2 of 5</a></td><td>
numeric [0..9]</td><td>
variable</td></tr>

<tr>
<td>
<a href="https://en.wikipedia.org/wiki/Pharmacode">Pharmacode</a></td><td>numeric [0..9] and generic;</td><td>
variable</td></tr>

<tr>
<td>
<a href="https://en.wikipedia.org/wiki/GS1-128">GS1Code128</a></td><td>[A, B, or C], numeric [0..9] and FNC1 character</td><td>
variable</td></tr>
</table>