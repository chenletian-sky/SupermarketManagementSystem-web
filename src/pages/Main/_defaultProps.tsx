import React from 'react';
import { SmileOutlined, CrownOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons';
import { InventoryManagementIcon, ProcurementManagementIcon, SalesManagementIcon } from '../../types/Icon';
// import TextView from './TextView';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/salesManagement',
        name: `销售管理`,
        icon: <SalesManagementIcon/>,
        // component: './Welcome',
      },
      {
        path: '/inventoryManagement',
        name: '库存管理',
        icon: <InventoryManagementIcon/>,
        // access: 'canAdmin',
        // component: './Admin',
        // routes: [
        //   {
        //     path: '/admin/sub-page1',
        //     name: '一级页面',
        //     icon: <CrownOutlined />,
        //     component: './Welcome',
        //   }
         
        // ],
      },
      {
        path: '/procurementManagement',
        name: '采购管理', 
        icon: <ProcurementManagementIcon />,
        // component:<TextView/>,
        // routes: [
        //   {
        //     path: '/list/sub-page',
        //     name: '一级列表页面',
        //     icon: <CrownOutlined />,
        //     routes: [
        //       {
        //         path: 'sub-sub-page1',
        //         name: '一一级列表页面',
        //         icon: <CrownOutlined />,
        //         component: './Welcome',
        //       },
        //       {
        //         path: 'sub-sub-page2',
        //         name: '一二级列表页面',
        //         icon: <CrownOutlined />,
        //         component: './Welcome',
        //       },
        //       {
        //         path: 'sub-sub-page3',
        //         name: '一三级列表页面',
        //         icon: <CrownOutlined />,
        //         component: './Welcome',
        //       },
        //     ],
        //   },
        //   {
        //     path: '/list/sub-page2',
        //     name: '二级列表页面',
        //     icon: <CrownOutlined />,
        //     component: './Welcome',
        //   },
        //   {
        //     path: '/list/sub-page3',
        //     name: '三级列表页面',
        //     icon: <CrownOutlined />,
        //     component: './Welcome',
        //   },
        // ],
      },
      {
        path:'/test',
        name:'测试用',
        icon:<InventoryManagementIcon/>
      }
      // {
      //   path: 'https://ant.design',
      //   name: 'Ant Design 官网外链',
      //   icon: <AntDesignOutlined />,
      // },
    ],
  },
  location: {
    pathname: '/',
  },
};