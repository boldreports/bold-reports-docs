---
title: Troubleshoot the PDF Report Item on Linux | {{site.productName}}
description: Fix the PDF report item error on Linux in {{site.productName}} by making the libdl.so library available to the PdfiumNative assembly with a symbolic link to libdl.so.2.
keywords: PDF report item troubleshooting, SSRS RDL PDF issues, Linux libdl.so error, PdfiumNative, {{site.productName}} support, documentation, user guide, {{site.productName}}
---

# Troubleshooting and FAQ for the PDF report item in {{site.productNameTM}}

The PDF report item in {{site.productNameTM}} needs the `libdl.so` library on Linux. Use the following answers to identify and fix the most common PDF report item issue.

## Why isn’t the PDF report item working in a Linux environment?

The PDF report item in {{site.productNameTM}} does not work on Linux when the `libdl.so` library is missing. The library is required to access the **PdfiumNative** assembly.

### Reason

To use the `PDF report item` in {{site.productNameTM}} on a Linux machine, the `libdl.so` library must be available to enable access to the **PdfiumNative** assembly.

When you run the PDF custom report item on Linux without it, you may see the following error:

```text
TypeInitializationException: Type initializer for "Syncfusion.PdfToImageConverter.PdfiumNative" threw an exception.
```

### Solution

To make the `libdl.so` library available for {{site.productNameTM}} on Linux, follow these steps:

1. Locate the `libdl.so` library by running:

   ```bash
   sudo find /usr -name 'libdl.so*'
   ```

2. If the `libdl.so` library is found, no further steps are required. If it is not found, go to step 3.

3. If a different version such as `libdl.so.2` is found, create a symbolic link named `libdl.so` in the located directory by running:

   ```bash
   sudo ln -s /usr/lib/x86_64-linux-gnu/libdl.so.2 /usr/lib/x86_64-linux-gnu/libdl.so
   ```

4. Verify that the symbolic link was created successfully by running:

   ```bash
   ls -l /usr/lib/x86_64-linux-gnu/libdl.so
   ```

   The output should be:

   ```text
   /usr/lib/x86_64-linux-gnu/libdl.so -> /usr/lib/x86_64-linux-gnu/libdl.so.2
   ```

> Note: If `libdl.so.2` is found in multiple locations, create the symbolic link in the `/usr/lib/x86_64-linux-gnu` directory. If it is not found there, use `/usr/lib64`. Otherwise, create the symbolic link in the directory where `libdl.so.2` is located. If `libdl.so.2` is not found, check for `libdl.so.2.1` or any other available version.

## See also

* [PDF report item overview](./../)
* [Design an RDL report with PDF content](./../design-report-with-pdf-content/)
