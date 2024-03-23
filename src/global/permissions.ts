import { RoleEnum } from "./rol-enum"

export enum PermissionTypeEnum{
    CREATE,
    READ,
    UPDATE,
    DELETE,
    ALL,
    NULL
}

export enum EntityEnum{
    PROJECT,
    DEVELOPER,
}

class Permission {
    types!: PermissionTypeEnum[]
    entity!: EntityEnum
    rol!: RoleEnum
}

export const rolePermissions : Permission[] =[
    {
        types:[PermissionTypeEnum.ALL],
        entity: EntityEnum.PROJECT,
        rol: RoleEnum.ADMIN
    },
    {
        types:[PermissionTypeEnum.ALL],
        entity: EntityEnum.DEVELOPER,
        rol: RoleEnum.ADMIN
    },
    {
        types:[PermissionTypeEnum.READ],
        entity: EntityEnum.PROJECT,
        rol: RoleEnum.PROJECT_MANAGER
    },
    {
        types:[PermissionTypeEnum.READ],
        entity: EntityEnum.PROJECT,
        rol: RoleEnum.DEVELOPER
    }
]