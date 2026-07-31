export const ROUTES = {
  DASHBOARD: {
    HOME: '/dashboard',
    ADD_PROPERTY: '/dashboard/add-property',
    MY_PROPERTIES: '/dashboard/my-properties',
    NOTIFICATIONS: '/dashboard/notifications',
    EDIT_PROPERTY: '/dashboard/edit-property/:id',
    PROFILE: '/dashboard/profile',
    PROPERTIES: '/dashboard/properties',
    USERS: '/dashboard/users',
  },
  PROPERTY: {
    HOME: '/properties',
    SINGLE_PROPERTY: '/properties/:id',
  }
} as const;