---
title: Security Policy | Query Execution Policy | Bold Reports
description: This section explains how Security Policy works in Query Execution Policy to block unsafe or injection-based queries for increased Bold Reports security.
---

# Security Policy

The Security Policy is a component of Query Execution Policy that helps prevent execution of potentially dangerous, malicious, or injection-based query patterns to improve the overall security of **Bold Reports<sup>®</sup>**. It works by blocking queries that contain high-risk commands or patterns commonly used to exploit or damage databases.

Security Policy does not have directly configurable options—the blocks are managed by built-in, vendor-maintained lists.

Dangerous commands and patterns are designed to:
* Prevent privilege escalation, destructive data actions, and unauthorized access
* Stop known SQL injection methods and malicious database operations

## Dangerous patterns

> * **Remote command and code execution:** cmd.exe, powershell, powershell.exe, xp_cmdshell, sp_oacreate, sp_oamethod, sp_oagetproperty, sp_oadestroy, to program, from program
> * **SQL Server administrative procedures:** sp_addjob, sp_start_job, shutdown, shutdown with nowait, sp_configure, reconfigure, xp_regread, xp_regwrite, xp_dirtree, xp_fileexist, xp_fixeddrives
> * **Distributed queries and external data access:** openrowset, opendatasource, openquery, bulk insert
> * **File system read and write operations:** load_file, load data infile, into outfile, into dumpfile, pg_read_file, pg_read_binary_file, pg_stat_file
> * **PostgreSQL administrative functions and utilities:** pg_terminate_backend, pg_cancel_backend, pg_reload_conf, pg_ctl, pg_resetwal, pg_resetxlog, pg_rewind, pg_upgrade, pg_dumpall, pg_restore
> * **Privilege and replication management:** flush privileges, reset master, reset slave
> * **Session and process control:** kill query, kill connection, kill session
> * **Time-based and benchmark functions:** pgsleep, pg_sleep, sleep(), waitfor delay, waitfor time, benchmark()
> * **Dynamic SQL execution:** execute immediate, sp_executesql, exec()
> * **Oracle dynamic SQL APIs:** dbms_sql.open_cursor, dbms_sql.parse
> * **Prepared statement execution:** prepare stmt, prepare, prepare myquery

## Injected patterns

> * **Tautology patterns:** OR 1=1, OR 0=0, OR TRUE=TRUE, AND 1=1, OR 5>=5
> * **Boolean-based patterns:** OR TRUE, AND TRUE, OR FALSE, AND FALSE
> * **Literal comparison patterns:** OR 100>50, OR 1<>0, AND 10<=10
> * **Parenthesized boolean patterns:** OR (1=1), OR ((TRUE)), AND (5>4)
> * **String concatenation patterns:** '' + OR + '', '' || OR || '', '' + AND + ''
> * **Numeric scalar patterns:** OR 1, OR -1, OR 1.5, AND +100
> * **Schema modification patterns:** SELECT ... INTO NewTable FROM ...
