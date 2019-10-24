import React from 'react'
import { Icon, Badge, Dropdown, Menu, Modal } from 'antd'
import screenfull from 'screenfull'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated } from '../../utils/Session'

//withRouter一定要写在前面，不然路由变化不会反映到props中去
@withRouter @inject('appStore') @observer
class HeaderBar extends React.Component {
  menuClick= (e) =>{
    this.props.toChild(e.key)
  }
  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={this.props.HeaderBarCurrent}
        style={{ lineHeight: '64px' }}
        onClick={this.menuClick.bind(this)}
      >
        <Menu.Item key="1">接件受理</Menu.Item>
        <Menu.Item key="2">通用审批</Menu.Item>
        <Menu.Item key="3">协同审批</Menu.Item>
        <Menu.Item key="4">收费管理</Menu.Item>
        <Menu.Item key="5">业务咨询</Menu.Item>
        <Menu.Item key="6">辅助功能</Menu.Item>
        <Menu.Item key="7">查询统计</Menu.Item>
        <Menu.Item key="8">电子档案查询</Menu.Item>
        <Menu.Item key="9">企业信息查询</Menu.Item>
        <Menu.Item key="10">社会组织查询</Menu.Item>
        <Menu.Item key="11">事业单位查询</Menu.Item>
      </Menu>
    )
  }
}
export default HeaderBar