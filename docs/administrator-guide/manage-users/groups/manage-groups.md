---
layout: post
title: Add, Edit, and Delete User Groups | Bold Reports
description: Add, edit, and delete groups, assign users to groups, and manage group permissions in Bold Reports Report Server On-Premises Edition from the groups page.
platform: report-plaftorm
documentation: ug
---

# Manage groups in Bold Reports<sup>®</sup> Report Server

In Bold Reports<sup>®</sup> On-Premises Edition, you can add, edit, and delete groups, assign users to them, and manage group permissions.

## What is a group?

A group in Bold Reports<sup>®</sup> is a collection of users to which permissions can be assigned. Users in a group inherit the permissions assigned to the group.

![Manage Groups](/static/assets/on-premise/images/manage-users-and-groups/groups/manage-groups.png)

## How do I add a new group?

You add a new group in Bold Reports<sup>®</sup> On-Premises Edition from the groups management page. Follow these steps:

1. Click `New Group` on the groups management page.

2. Provide a name and an optional description for the group.

    ![Add Groups](/static/assets/on-premise/images/manage-users-and-groups/groups/add-group.png)

3. Click `Add`.

A new group is created, and you can proceed to [add users](#assign-users) or [manage permissions](#manage-permissions) for it.

## How do I edit a group?

You edit group information in Bold Reports<sup>®</sup> from the group's edit page. Follow these steps:

1. Click the name of the group you want to edit.

    ![Edit Group](/static/assets/on-premise/images/manage-users-and-groups/groups/edit-group-name.png)

2. Click the `Edit Group` button.

    ![Edit Group](/static/assets/on-premise/images/manage-users-and-groups/groups/edit-group-button.png)

3. Make the necessary updates to the group and save the changes.

    ![Edit Group](/static/assets/on-premise/images/manage-users-and-groups/groups/edit-group.png)

You can edit the group name and description on the group edit page. You can also assign users to or remove users from the group on that page.

## How do I delete a group?

You can delete groups in Bold Reports<sup>®</sup> if they are no longer needed. However, you cannot delete the `System Administrator` group.

### From group management page

The Bold Reports<sup>®</sup> group management page lets you delete one group or several groups at once.

* Click the `Delete` icon to remove a single group.

    ![Delete single group](/static/assets/on-premise/images/manage-users-and-groups/groups/delete-single-group.png)

* To remove multiple groups, select them and then click `Delete Groups`.

    ![Delete multiple group](/static/assets/on-premise/images/manage-users-and-groups/groups/delete-multiple-groups.png)

### From group edit page

You can also delete a group from its Bold Reports<sup>®</sup> group edit page, as shown in the following image.

![Delete group from group edit page](/static/assets/on-premise/images/manage-users-and-groups/groups/delete-from-group-edit-page.png)

## Assign users

You can assign users to the selected group in Bold Reports<sup>®</sup>, so they inherit the permissions assigned to the group.

![Assign Users](/static/assets/on-premise/images/manage-users-and-groups/groups/assign-users-to-groups.png)

![Add users in the group edit page](/static/assets/on-premise/images/manage-users-and-groups/groups/add-users-in-the-group-edit-page.png)

You can also remove users from the group if a user no longer needs the permissions of the group. Click `Remove` next to the user on the group edit page to remove the user from the group.

![Assign Users](/static/assets/on-premise/images/manage-users-and-groups/groups/remove-users-from-group.png)

## Manage permissions

You can open the Bold Reports<sup>®</sup> Manage Permissions page for a group from either of the following pages:

* Click the `Manage Permission` icon for the respective group on the group management page.

    ![Manage group permission](/static/assets/on-premise/images/manage-users-and-groups/groups/manage-group-permission.png)

* Click the group's name on the group listing page to navigate to the group edit page. Then, select the `Manage Permissions` option from the `Manage` drop-down menu in the top right corner of the page.

    ![Manage group permission](/static/assets/on-premise/images/manage-users-and-groups/groups/group-edit-page-permission.png)

The Manage Permissions grid shows the permissions assigned directly to the group.

![Manage permission grid](/static/assets/on-premise/images/manage-users-and-groups/groups/manage-permission-grid.png)

Click `Add Permission` to assign permissions to the group.

![Add Permission](/static/assets/on-premise/images/manage-users-and-groups/groups/add-permission.png)

### How do I add a permission to the group?

To add a permission to a Bold Reports<sup>®</sup> group, follow these steps:

1. Select the entity.
2. Choose the scope if the entity is not of the `All Resource` or `All Settings` item type.
3. Select the access mode.
4. Click `Add` to include the specified permission to the group.

You can also select multiple scopes and entities to assign multiple permissions. For more information on how to add and manage permissions, see the [Manage Permissions](./../../../manage-permissions/) section.

## Frequently asked questions

### Can I delete the System Administrator group?

No. Bold Reports<sup>®</sup> does not let you delete the `System Administrator` group.

### How do users get permissions from a group?

Users assigned to a group in Bold Reports<sup>®</sup> inherit the permissions assigned to the group.

## See also

* [Import groups](./../import-groups/)
* [Synchronize groups](./../synchronize/)
* [Manage users](./../../users/manage-users/)
