const menuList1 = [
  {
    name: '系统管理',
    value: 'systemManage',
    icon: 'Tools',
    component: 'layout',
    id: '001',
    children: [
      {
        name: '用户管理',
        value: 'user',
        component: 'systemManage/user',
        id: '001001',
        pid: '001',
      },
      {
        name: '角色管理',
        value: 'role',
        component: 'systemManage/role',
        id: '001002',
        pid: '001',
      },
    ],
  },
]
{
  /* <info theme="outline" size="24" fill="#333"/> */
}
const menuList2 = [
  {
    name: '信息管理',
    value: 'infoManage',
    icon: 'InfoFilled',
    component: 'layout',
    id: '002',
    children: [
      {
        name: '用户信息',
        value: 'info',
        component: 'infoManage',
        id: '002001',
        pid: '002',
      },
    ],
  },
]

const menuList = {
  menuList1: menuList1,
  menuList2: menuList2,
}

export default menuList
