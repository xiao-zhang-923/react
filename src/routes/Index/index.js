import React from 'react'
import { Layout } from 'antd'
import SiderNav from '../../components/SiderNav'
import ContentMain from '../../components/ContentMain'
import HeaderBar from '../../components/HeaderBar'

const { Sider, Header, Content } = Layout

class Index extends React.Component {
  state = {
    collapsed: false,
    HeaderBarCurrent:["1"]
  }
  fromMeg =(e) =>{
    const arr = [];
    arr.push(e)
    this.setState({
      HeaderBarCurrent:arr,
    })
  }
  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    // 设置Sider的minHeight可以使左右自适应对齐
    const height = window.screen.availHeight - 134;
    return (
      <div id='page' style={{ height: '100vh', overflowY: 'scroll' }}>
        <Layout>
          <Header style={{ background: '#fff', padding: '0' }}>
            <HeaderBar toChild={this.fromMeg.bind(this)} collapsed={this.state.collapsed} onToggle={this.toggle} HeaderBarCurrent={this.state.HeaderBarCurrent} />
          </Header>
          <Layout style={{ height: height, overflowY: 'scroll' }}>
            <Sider collapsible
              trigger={null}
              collapsed={this.state.collapsed}
            >
              <SiderNav HeaderBarCurrent={this.state.HeaderBarCurrent}/>
            </Sider>
            <Content>
              <ContentMain />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Index