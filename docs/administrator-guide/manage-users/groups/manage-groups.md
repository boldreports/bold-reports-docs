---
layout: post
title: Managing Groups in the Bold Reports On-Premise.
description: Learn how to add, edit, manage permissions, assign users to group and delete groups in the Bold Reports On-Premise.
platform: report-plaftorm
documentation: ug
---

# Manage Groups

This section explains how to add, edit, and delete groups, as well as how to assign users and manage permissions to groups in Bold Reports On-Premise.

A groups is a collection of users to which permissions can be assigned.

![Manage Groups](/static/assets/on-premise/images/manage-users-and-groups/groups/manage-groups.png)

## Add new group

* To add a new group to Bold Reports On-Premise, click on `New Group` on the groups management page.

* New groups can be added by providing a name and an optional description for the group.

    ![Add Groups](/static/assets/on-premise/images/manage-users-and-groups/groups/add-group.png)

Fill out the form with a name and description, then click on `Add`. A New group will be created, and you can proceed to [add users](#assign-users) or [manage permissions](#manage-permissions) for it.

## Edit group

Group information can be edited from the group's edit page.

* Click on the name of the group you wish to edit and then click the `Edit Group` button.

    ![Edit Group](/static/assets/on-premise/images/manage-users-and-groups/groups/edit-group-name.png)

    ![Edit Group](/static/assets/on-premise/images/manage-users-and-groups/groups/edit-group-button.png)

* Make the necessary updates to the group and save the changes.

    ![Edit Group](/static/assets/on-premise/images/manage-users-and-groups/groups/edit-group.png)

Group name and description can be edited on the group edit page. Additionally, users can be assigned or removed from the group on this page.

## Delete group

Groups can be deleted if they are no longer needed. However, You cannot delete the `System Administrator` group.

### From group management page

* Clicking the `Delete` icon will remove a single group.

    ![Delete single group](/static/assets/on-premise/images/manage-users-and-groups/groups/delete-single-group.png)

* Additionally, you have the option to remove multiple groups by selecting them and then clicking `Delete Groups`.

    ![Delete multiple group](/static/assets/on-premise/images/manage-users-and-groups/groups/delete-multiple-groups.png)

### From group edit page

![Delete group from group edit page](/static/assets/on-premise/images/manage-users-and-groups/groups/delete-from-group-edit-page.png)

## Assign users

Users can be assigned to the selected group, allowing them to inherit the permissions assigned to the group.

![Assign Users](/static/assets/on-premise/images/manage-users-and-groups/groups/assign-users-to-groups.png)

![Add users in the group edit page](/static/assets/on-premise/images/manage-users-and-groups/groups/add-users-in-the-group-edit-page.png)

Users can also be removed from the group if the user no longer needs the permissions of the group. Click on `Remove` next to the user in the group edit page to remove the user from the group.

If a user no longer requires the permissions associated with the group, they can be removed from the group by clicking `Remove` on the group edit page.

![Assign Users](/static/assets/on-premise/images/manage-users-and-groups/groups/remove-users-from-group.png)

## Manage permissions

The Manage Permissions page for the group can be accessed from any of the following pages.

* Click on the `Manage Permission` icon for the respective group on the group management page.

    ![Manage group permission](/static/assets/on-premise/images/manage-users-and-groups/groups/manage-group-permission.png)

* Click the group's name on the group listing page to navigate to the group edit page. Then, select the `Manage Permissions` option from the `Manage` drop-down menu in the top right corner of the page.

    ![Manage group permission](/static/assets/on-premise/images/manage-users-and-groups/groups/group-edit-page-permission.png)

* You can find the permissions assigned directly to the group in the Manage Permissions grid.

    ![Manage permission grid](/static/assets/on-premise/images/manage-users-and-groups/groups/manage-permission-grid.png)

* Click `Add Permission` to assign permissions to the group.

    ![Add Permission](/static/assets/on-premise/images/manage-users-and-groups/groups/add-permission.png)

### Steps to add permission to the group

1. Select the entity
2. Choose the scope if the entity is not of the `All Resource` or `All Settings` item type.
3. Select the access mode
4. Click `Add` to include the specified permission to the group.

You can also select multiple scopes and entities to assign multiple permissions. For more information on how to add and manage permissions, please visit the [Manage Permissions](./../../../manage-permissions/) section.