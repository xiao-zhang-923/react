import React from 'react'
import { Table } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
class WindowCollecting extends React.Component {
  constructor(){
    super()
    this.state = {
      current:1
    }
  }
  changePage = (page) =>{
    this.setState({
      current:page
    })
  }
  render() {
    return (
      <div>
        <CustomBreadcrumb arr={["接件受理","收件","窗口收件"]}/>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={{  // 分页
            current: this.state.current,
            total: data.length,
            showSizeChanger:true,
            onChange:this.changePage
          }}
          title={() => 'Header'}
        />
      </div>
    )
  }
}

const columns = [
  {
    title: '事项编号',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '事项名称(子项)',
    className: 'column-money',
    dataIndex: 'childrenMenus',
  },
  {
    title: '事项类型',
    dataIndex: 'type',
  },
  {
    title: "事项天数",
    dataIndex: "date"
  }
];

const data = [
  { key: '1', name: '1000000', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '2', name: '1000001', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '3', name: '1000002', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '4', name: '1000003', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '5', name: '1000004', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '6', name: '1000005', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '7', name: '1000006', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '8', name: '1000007', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '9', name: '1000008', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '10', name: '1000009', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '11', name: '1000010', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '12', name: '1000011', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '13', name: '1000012', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '14', name: '1000013', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
  { key: '15', name: '1000014', childrenMenus: "对律师事务所住所变更事项进行备案", type: '承诺件', date: "0" },
];
export default WindowCollecting