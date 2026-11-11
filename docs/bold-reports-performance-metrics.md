---
layout: post
title: Report Rendering Performance Benchmarks | Bold Reports
description: Review Bold Reports On-Premises Edition performance test results for large report rendering in On-Demand Mode and for 100 concurrent users on Kubernetes.
platform: report-platform
documentation: ug
keywords: boldreports
canonical: ''
---

# Bold Reports<sup>®</sup> performance metrics

Bold Reports<sup>®</sup> On-Premises Edition performance tests measure how the system renders large reports and how it behaves under concurrent user load.

## What do the Bold Reports<sup>®</sup> performance tests measure?

Performance testing of Bold Reports<sup>®</sup> On-Premises Edition measured how the system performs when rendering large reports. The results follow.

The tests also evaluate how the system behaves under concurrent user load, providing a comprehensive view of both report rendering performance and server-side stability. The results help you assess Bold Reports<sup>®</sup> stability, responsiveness, and scalability in real-world usage scenarios.

## How fast does Bold Reports<sup>®</sup> render large reports in On-Demand Mode?

Bold Reports<sup>®</sup> On-Demand Mode is designed to optimize responsiveness when working with large datasets. The performance evaluation began with testing how Bold Reports<sup>®</sup> handles report rendering in On-Demand Mode.

Enabling On-Demand Mode significantly improves performance by rendering only the visible portion of the data initially, allowing faster access to the first page.

### Test Environment Configuration

The Bold Reports<sup>®</sup> On-Demand Mode tests used the following environment:

* **RAM:** 16 GB.

* **Processor:** 4 vCPUs.

* **Deployment:** Azure Virtual Machine.

* **Report Name, Settings:** Flat table report with 10 columns.

* **Property settings:** On-Demand (PageCreation → Background).

#### Performance Results

The following table compares Bold Reports<sup>®</sup> first page time and query execution time in Standard Mode and On-Demand Mode.

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Records</span>
    </td>
     <td>
        <span style="font-weight:bold">First Page Time (Standard Mode) (mm:ss:ms)</span>
    </td>
      <td>
        <span style="font-weight:bold">First Page Time (On-Demand Mode) (mm:ss:ms)</span>
    </td>
    <td>
    <span style="font-weight:bold">Query Execution Time (Standard Mode) (mm:ss:ms)</span>
    </td>
    <td>
    <span style="font-weight:bold">Query Execution Time (On-Demand Mode) (mm:ss:ms)</span>
    </td>
 </tr>
 <tr>
 <td>100K</td>
 <td>00:11:15</td>
 <td>00:03:04</td>
 <td>00:01:970</td>
 <td>00:00:251</td>
 </tr>
 <tr>
 <td>500k</td>
 <td>00:36:18</td>
 <td>00:02:88</td>
 <td>00:03:415</td>
 <td>00:03:415</td>
 </tr>
 <tr>
 <td>1M</td>
 <td>01:17:69</td>
 <td>00:10:34</td>
 <td>00:05:664</td>
 <td>00:00:249</td>
 </tr>
 <tr>
 <td>1.5M</td>
 <td>01:56:60</td>
 <td>00:02:87</td>
 <td>00:19:200</td>
 <td>00:00:249</td>
 </tr>
 <tr>
 <td>1.7M</td>
 <td>01:58:16</td>
 <td>00:02:87</td>
 <td>00:13:156</td>
 <td>00:00:266</td>
 </tr>
 <tr>
 <td>2M</td>
 <td>02:20:66</td>
 <td>00:06:56</td>
 <td>00:15:197</td>
 <td>00:00:255</td>
 </tr>
 </table>

The results confirm that On-Demand Mode significantly reduces the initial load time, even for reports containing over 2 million records.

* To learn about enabling On-Demand Mode and best practices for large dataset rendering, see
   [View Millions of Data - Best Practices](https://help.boldreports.com/embedded-reporting/aspnet-core-reporting/report-viewer/best-practices/view-millions-of-data/).

* For further details, see the [On-Demand Mode limitations](https://help.boldreports.com/embedded-reporting/aspnet-core-reporting/report-viewer/best-practices/view-millions-of-data/#what-are-the-limitations-of-the-on-demand-processing-engine) documentation.

#### General Performance Metrics

The following table outlines the performance metrics of Bold Reports<sup>®</sup> during report rendering with various row and column counts. The time taken shows how long it takes to load the specified number of records.

Representative Performance for Various Data Sizes:

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Column Count</span>
    </td>
     <td>
        <span style="font-weight:bold">Row Count</span>
    </td>
      <td>
        <span style="font-weight:bold">First Page Time (mm:ss:ms)</span>
    </td>
        <td>
    <span style="font-weight:bold">Query Execution Time (mm:ss:ms)</span>
    </td>
 </tr>
 <tr>
 <td> 10 </td>
 <td> 1K </td>
 <td>00:03:29</td>
 <td>00:00:895</td>
 </tr>
 <tr>
 <td> 10 </td>
 <td> 50K </td>
 <td>00:03:26</td>
  <td>00:00:254</td>
 </tr>
 <tr>
 <td> 10 </td>
 <td> 100K </td>
 <td>00:02:73</td>
  <td>00:00:254</td>
 </tr>
 <tr>
 <td> 10 </td>
 <td>1M </td>
 <td>00:02:58</td>
  <td>00:00:246</td>
 </tr>
 <tr>
 <td> 20 </td>
 <td> 10K </td>
 <td>00:03:33</td>
  <td>00:00:492</td>
 </tr>
 <tr>
 <td> 20 </td>
 <td> 200K </td>
 <td>00:03:56</td>
   <td>00:00:242</td>
 </tr>
  <tr>
 <td> 20 </td>
 <td> 1M </td>
 <td>00:03:64</td>
   <td>00:00:238</td>
 </tr>
 </table>

> **Note:** As you can see, the time taken increases with the row count, particularly for larger datasets (100K or more). The trend highlights the system's performance when handling large datasets.

##### Complete Performance Data Table

The full Bold Reports<sup>®</sup> rendering dataset is shown below for more granular details.

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Column Count</span>
    </td>
     <td>
        <span style="font-weight:bold">Row Count</span>
    </td>
      <td>
        <span style="font-weight:bold">Records</span>
    </td>
      <td>
        <span style="font-weight:bold">Time Taken (mm:ss:ms)</span>
    </td>
        <td>
    <span style="font-weight:bold">Query Execution Time (mm:ss:ms)</span>
    </td>
 </tr>
 <tr>
 <td> 10 </td>
 <td> 1K </td>
 <td>1K</td>
 <td>00:03:29</td>
 <td>00:00:895</td>
 </tr>
 <tr>
 <td> 10 </td>
 <td> 10K </td>
 <td>10K</td>
 <td>00:02:94</td>
 <td>00:00:234</td>
 </tr>
 <td> 10 </td>
 <td> 20K </td>
 <td>20K</td>
 <td>00:02:83</td>
 <td>00:00:237</td>
 </tr>
 <tr>
 <td> 10 </td>
 <td>50K</td>
 <td>50K</td>
 <td>00:03:26</td>
  <td>00:00:254</td>
 </tr>
 <tr>
 <td> 10 </td>
 <td> 100K </td>
 <td>100K</td>
 <td>00:02:73</td>
 <td>00:00:254</td>
 </tr>
 <tr>
 <td> 10 </td>
 <td> 200K </td>
 <td>200K</td>
 <td>00:03:27</td>
 <td>00:00:284</td>
 </tr>
  <tr>
 <td> 10 </td>
 <td> 300K </td>
 <td>300K</td>
 <td>00:03:12</td>
 <td>00:00:287</td>
 </tr>
   <tr>
 <td> 10 </td>
 <td> 400K </td>
 <td>400K</td>
 <td>00:30:30</td>
 <td>00:00:287</td>
 </tr>
   <tr>
 <td> 10 </td>
 <td> 500K </td>
 <td>500K</td>
 <td>00:04:47</td>
 <td>00:00:247</td>
 </tr>
 <tr>
 <td> 10 </td>
 <td> 1M </td>
 <td>1M</td>
 <td>00:02:58</td>
 <td>00:00:246</td>
 </tr>
  <tr>
 <td> 20 </td>
 <td> 1K </td>
 <td>1K</td>
 <td>00:03:00</td>
 <td>00:00:240</td>
 </tr>
 <tr>
 <td> 20 </td>
 <td> 10K </td>
 <td>10K</td>
 <td>00:03:19</td>
 <td>00:00:251</td>
 </tr>
 <td> 20 </td>
 <td> 20K </td>
 <td>20K</td>
 <td>00:03:19</td>
 <td>00:00:251</td>
 </tr>
 <tr>
 <td> 20 </td>
 <td>50K </td>
 <td>50K</td>
 <td>00:03:89</td>
 <td>00:00:249</td>
 </tr>
 <tr>
 <td> 20 </td>
 <td> 100K </td>
 <td>100K</td>
 <td>00:03:21</td>
 <td>00:00:241</td>
 </tr>
 <tr>
 <td> 20 </td>
 <td> 200K </td>
 <td>200K</td>
 <td>00:03:56</td>
 <td>00:00:242</td>
 </tr>
  <tr>
 <td> 20 </td>
 <td> 300K </td>
 <td>300K</td>
 <td>00:03:06</td>
 <td>00:00:246</td>
 </tr>
   <tr>
 <td> 20 </td>
 <td> 400K </td>
 <td>400K</td>
 <td>00:03:47</td>
 <td>00:00:227</td>
 </tr>
   <tr>
 <td> 20 </td>
 <td> 500K </td>
 <td>500K</td>
 <td>00:02:90</td>
 <td>00:00:229</td>
 </tr>
 <tr>
 <td> 20 </td>
 <td> 1M </td>
 <td>1M</td>
 <td>00:03:64</td>
 <td>00:00:238</td>
 </tr>
 </table>

## How does Bold Reports<sup>®</sup> perform under concurrent user load?

Bold Reports<sup>®</sup> load testing simulated concurrent users to evaluate how Bold Reports<sup>®</sup> On-Premises Edition performs under load. Load testing shows how the system handles real-world scenarios where multiple users access and interact with reports at the same time.

The tests were conducted in **Kubernetes environments** using different machine configurations to evaluate application scalability, stability, and responsiveness under increasing workloads.

The load testing was performed using the following configurations:

* 100 concurrent users: 4 vCPUs and 16 GiB RAM.

* 250 concurrent users: 2 worker nodes, each with 4 vCPUs and 16 GiB RAM (8 vCPUs and 32 GiB RAM total), using a multi-container deployment.

The goal of these tests is to help you understand how Bold Reports<sup>®</sup> On-Premises Edition performs under stress, so you can assess its stability and responsiveness when multiple users access it at the same time.

### Test Setup and Key Parameters

The following table lists the key Bold Reports<sup>®</sup> load test parameters for each configuration, including the number of concurrent users, test duration, and the settings used to simulate the load.

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Property</span>
    </td>
    <td>
        <span style="font-weight:bold">100 Concurrent Users</span>
    </td>
    <td>
        <span style="font-weight:bold">250 Concurrent Users</span>
    </td>
    <td>
        <span style="font-weight:bold">Explanation</span>
    </td>
 </tr>

 <tr>
 <td> Concurrent Users </td>
 <td> 100 </td>
 <td> 250 </td>
 <td>Total users accessing reports simultaneously.</td>
 </tr>

 <tr>
 <td> Ramp Up Period (seconds) </td>
 <td> 50 </td>
 <td> 60 </td>
 <td> Controls how users are gradually introduced during the load test.</td>
 </tr>

 <tr>
 <td> Loop </td>
 <td> 1 </td>
 <td> Continuous </td>
 <td> Specifies how many times the test scenario is executed.</td>
 </tr>

 <tr>
 <td> Thread Life Time (seconds) </td>
 <td> 700 </td>
 <td> N/A </td>
 <td>Maximum duration of the test; ends after the set time, even if incomplete.</td>
 </tr>

 <tr>
 <td> Startup Delay (seconds) </td>
 <td> 2 </td>
 <td> 2 </td>
 <td>Initial delay before the test starts, to handle setup time.</td>
 </tr>

 <tr>
 <td> RunTime Controller Runtime (seconds) </td>
 <td> 480 </td>
 <td> 90 </td>
 <td>Limits how long the test runs before stopping, applied to child elements.</td>
 </tr>

 <tr>
 <td> Flow Control Action Pass Duration (seconds) </td>
 <td> 3 </td>
 <td> 2 </td>
 <td>Controls the delay between consecutive requests sent to the application during the load test.</td>
 </tr>
 </table>

#### Tested Actions

The 250 concurrent user load test included the following actions:

* Report Load
* Report View
* Report Update
* Report Download
* Report Export

#### Load Test Results

The Bold Reports<sup>®</sup> load test results highlight the system's stability under concurrent user load:

<table>
  <tr>
    <td>
      <span style="font-weight:bold">Test Run</span>
    </td>
    <td>
      <span style="font-weight:bold">Success Rate (100 Users)</span>
    </td>
    <td>
      <span style="font-weight:bold">Success Rate (250 Users)</span>
    </td>
  </tr>

  <tr>
    <td>1st Run</td>
    <td>100%</td>
    <td>100%</td>
  </tr>

  <tr>
    <td>2nd Run</td>
    <td>99.55%</td>
    <td>100%</td>
  </tr>

  <tr>
    <td>3rd Run</td>
    <td>99.91%</td>
    <td>99.78%</td>
  </tr>
</table>

These results show that Bold Reports<sup>®</sup> On-Premises Edition maintained stable performance under concurrent user load across different deployment configurations.

## Frequently asked questions

### How much faster is the first page in On-Demand Mode?

In the Bold Reports<sup>®</sup> tests, the first page for 2M records took 02:20:66 in Standard Mode and 00:06:56 in On-Demand Mode (mm:ss:ms).

### What success rate did the concurrent load test achieve?

With 100 concurrent users, Bold Reports<sup>®</sup> achieved success rates of 100%, 99.55%, and 99.91% across three test runs. With 250 concurrent users, the success rates were 100%, 100%, and 99.78%.

## See also

* [Bold Reports<sup>®</sup> overview](./../)
* [Does Bold Reports<sup>®</sup> support scaling?](../administrator-guide/faq/does-bold-reports-support-scaling/)
* [Bold Reports<sup>®</sup> architecture](../administrator-guide/faq/bold-reports-architecture/)
