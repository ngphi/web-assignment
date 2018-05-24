export const DashboardAction = {
    'DASHBOARD_CREATION': 'DASHBOARD_CREATION'
}

export const DashboardActionCreator = {
    createDashboard: () => {
        return {
            type: DashboardAction.DASHBOARD_CREATION
        }
    }
}
