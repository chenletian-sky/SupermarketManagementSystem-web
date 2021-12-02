import React, {Component} from 'react';
import { Avatar, Button, Layout, Menu } from 'antd'
// import Sider from 'antd/lib/layout/Sider';
// import { Content, Header } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon, { UserOutlined } from '@ant-design/icons';
import type { BasicLayoutProps, ProSettings } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import ProCard from '@ant-design/pro-card';
import { UploadOutlined, PlayCircleOutlined, FileTextOutlined,MailOutlined ,SettingOutlined,AppstoreOutlined} from '@ant-design/icons';
import { HeaderViewProps } from '@ant-design/pro-layout/lib/Header';
import { Route, Switch } from 'react-router-dom';
import { LogoIcon } from '../../types/Icon';
import TestView from '../TestView';
import SalesManagement from '../View/SalesManagement';
const {Sider,Header,Content} = Layout

interface MainProps {
  history:any

}
interface MainState {
  settings:Partial<ProSettings> | undefined,
  pathname:string
}
class Main extends Component <MainProps, MainState>{
    public constructor(props : MainProps) {
        super(props)
        this.state = {
          settings:{ 
            // fixSiderbar: true ,
            navTheme:'light',
            // layout:'mix'
            // headerTheme:'light'
          },
          pathname:"/welcome"
        }
    }

    public render() : JSX.Element {
  const {settings,pathname} = this.state
        return (
          <ProLayout
                {...defaultProps}
                location={{
                  pathname,
                }}
                
                contentStyle={{
                  // backgroundColor:'red'
                }}
                title="超市供销管理系统"
                // logo={<Icon   component={LogoIcon}></Icon>}
                collapsedButtonRender= {()=> {
                  return (<div></div>)
                }}
                menuHeaderRender={(logo, title) => (
                  <div
                    id="customize_menu_header"
                    onClick={() => {
                      // window.open('https://remaxjs.org/');
                    }}
                    style={{
                      backgroundColor:'#066094',
                      // float:"left"
                      height:"50px",
                      // color:"white"
                    }}
                  >
                    {/* <img
                        alt="pro-logo"
                        src="/public/logo192.png"
                        style={{
                          width: 16,
                          height: 16,
                          margin: '0 16px',
                          marginRight: 10,
                        }}
                      /> */}
                    <div
                      style={{
                        height:"10px",
                        width:"10px",
                        position:'relative',
                        left:"10px",
                        top:'10px'
                      }}
                    >
                    <LogoIcon/>
                    </div>
                    
                    
                    <h1
                      id="logotitle-title"
                      style={{
                        color:"white",
                        position:"relative",
                        left:"10px",
                        textAlign:"center",
                        fontSize:"18px"
                        // left:"0px"
                      }}
                    >
                    超市供销管理系统
                    </h1>
                  </div>
                )}
                onMenuHeaderClick={(e: any) => console.log(e)}
                menuItemRender={(item, dom) => (
                  <a
                    style={{
                      // height:"50px",
                      // position:"relative",
                      // top:"5px",
                      fontSize:"20px",
                      textAlign:"center"
                    }}
                    onClick={() => {
                      console.log('menuItemClick',item,dom)

                      this.props.history.push(`/index${item.path}`)
                      this.setState({
                        pathname:(item.path || '/welcome')
                      })
                      
                    }}
                  >
                    {dom}
                  </a>
                )}
                headerRender={(props: HeaderViewProps) => {
                  return (<div
                    style={{
                      height: "50px",
                      backgroundColor: "#00446B"
                      // backgroundColor:"red"

                    }}
                  >
                    &nbsp;
                    <Avatar size='large' 
                    icon={<UserOutlined />} 
                    style={{
                      float: 'right',
                      marginTop: '4px',
                      marginRight: '10px'
                      // marginTop: '-47px',
                      // marginRight: '15px'
                    }} />
                  </div>)
                }}
                headerContentRender={(props: BasicLayoutProps) => {
                  return <div
                    style={{
                      // height:"500px"
                      // backgroundColor:"white"
                    }}
                  >
                      {/* hello */}
                  </div>;
                }}
                rightContentRender={() => (
                  <div
                    style={{
                      // height:"10px"
                      // backgroundColor:"#00446B"
                    }}
                  >
                    <Avatar shape="square" size="large" icon={<UserOutlined />} 
                      style={{
                        float:"right"
                      }}
                    />
                  </div>
                )}
                {...settings}
              >
                <PageContainer
                  onTabChange = {(value) => {
                    console.log("pageContainer",value)
                  }}
                >
                  
                  {
                    <div
                    style={{
                      height: '100vh',
                      // position:"relative",
                      // top:"-15px"
                    }}
                  >
                    {/* <div
                      style={{
                        height:"50px",
                        // backgroundColor:"rgb(0, 68, 107)"
                        background: '#2188E2'
                      }}
                    >
                      
                    </div> */}
                    <Switch>

                      <Route path="/index/test" component={TestView} />
                      <Route path="/index/salesManagement" component={SalesManagement} />
                      {/* <Route path="/index/text" component={TextControl} />

                      <Route path="/index/tool" component={ToolControl}></Route> */}
                      

                    </Switch>
                    
                          
                  </div>
                  }
                  
                </PageContainer>
              </ProLayout>


        //   <Layout
        //   style={{
        //     height:"100%"
        //   }}
        // >
        //   <Sider
        //     theme="light"
        //     style={{
        //       height:"100%"
        //     }}
        //   >
        //     <div
        //       style={{
        //         height:"40px",
        //         textAlign:"center",
        //         fontSize:"20px"
        //       }}
        //     >
        //       <p
        //         style={{
        //           position:"relative",
        //           top:"10px"
        //         }}
        //       >超市供销管理系统</p>
        //     </div>
        //     <Menu mode="inline" 
        //       // openKeys={openKeys} 
        //       // selectedKeys={this.props.selectKey}
        //       // onOpenChange={(keys) => {}} 
        //       style={{ width: "100%" }}
        //       // selectedKeys={}
        //     >
        //       <SubMenu key="sub1" icon={<MailOutlined />} 
        //         title="Navigation One"
        //         // onTitleClick = {(key) => {
        //         //   console.log(key)
        //         //   openKeys[0] === key.key ? openKeys[0] = '' : openKeys[0] = key.key
        //         // }}
        //         >
        //         <Menu.Item key="1">Option 1</Menu.Item>
        //         <Menu.Item key="2">Option 2</Menu.Item>
        //         <Menu.Item key="3">Option 3</Menu.Item>
        //         <Menu.Item key="4">Option 4</Menu.Item>
        //       </SubMenu>
        //       <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two"
        //         // onTitleClick = {(key) => {
        //         //   console.log(key)
        //         //   openKeys[0] === key.key ? openKeys[0] = '' : openKeys[0] = key.key
        //         // }}
        //       >
        //         <Menu.Item key="5">Option 5</Menu.Item>
        //         <Menu.Item key="6">Option 6</Menu.Item>
                
        //           <Menu.Item key="7">Option 7</Menu.Item>
        //           <Menu.Item key="8">Option 8</Menu.Item>
                
        //       </SubMenu>
        //       <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three"
        //         // onTitleClick = {(key) => {
        //         //   console.log(key)
        //         //   openKeys[0] === key.key ? openKeys[0] = '' : openKeys[0] = key.key
        //         // }}                
        //       >
        //         <Menu.Item key="9">Option 9</Menu.Item>
        //         <Menu.Item key="10">Option 10</Menu.Item>
        //         <Menu.Item key="11">Option 11</Menu.Item>
        //         <Menu.Item key="12">Option 12</Menu.Item>
        //       </SubMenu>
        //     </Menu>
        //   </Sider>
        //   <Layout>
        //     <Header
        //     ></Header>
        //     <Content
        //     >
        //       {/* <MyTableTest></MyTableTest> */}
        //       <Button
        //         type="primary"
        //         size="small"
        //         value="hello"
        //         onClick = {() => {
        //           // updateMenuSelectKey(['hi'])
        //           // console.log(this.props.selectKey)
        //         }}
        //       >
        //         {/* hello */}
        //       </Button>
        //     </Content>
        //   </Layout>
        // </Layout>
        )
    }
}
export default Main;