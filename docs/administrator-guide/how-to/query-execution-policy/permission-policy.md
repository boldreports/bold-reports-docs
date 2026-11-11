---
title: Permission Policy | Query Execution Policy | Bold Reports
description: This section explains how Permission Policy governs allowed and restricted query commands in Query Execution Policy for Bold Reports.
---

# Permission Policy

The Permission Policy node is part of Query Execution Policy in **Bold Reports<sup>®</sup>**. Configured at the User Management Service (UMS) level, it governs which queries can be executed globally across the system, using a precise system of permission types, specific command allow/deny rules, and overrides.

## Permission Types

### ReadOnly

This type allows only data reading operations. All data modification and schema/privilege commands are blocked by default.

> **Allowed keywords:** SELECT, WITH, EXEC, EXECUTE, CALL, BEGIN, END, DECLARE.

> **Restricted keywords:** INSERT, UPDATE, DELETE, MERGE, REPLACE, UPSERT, COPY, LOAD, LOCK, CREATE, ALTER, DROP, TRUNCATE, GRANT, REVOKE, RENAME, COMMENT, ANALYZE, VACUUM.

### ReadWrite

Permits data reading and modification operations, while schema and security-related changes remain blocked.

> **Allowed keywords:** SELECT, WITH, EXEC, EXECUTE, CALL, BEGIN, END, DECLARE, INSERT, UPDATE, DELETE, MERGE, REPLACE, UPSERT, COPY, LOAD, LOCK.

> **Restricted keywords:** CREATE, ALTER, DROP, TRUNCATE, GRANT, REVOKE, RENAME, COMMENT, ANALYZE, VACUUM.

### Unrestricted

* **Allowed commands:** All supported commands except those blocked by Security Policy or Restricted Commands/Keywords.
* **Description:** No built-in restrictions; only Security Policy and overrides apply.

## Permission Overrides

* **Restricted Commands:** You can block specific commands beyond the standard Permission Type.
* **Restricted Keywords:** Block specific keywords in addition to basic restrictions, to further tighten security.
* **Allowed Commands:** Explicitly allow additional commands globally; however, Allowed Commands will never override commands blocked by Security Policy.