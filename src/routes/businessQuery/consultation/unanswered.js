import React from 'react'
import { Table ,Popover} from 'antd';
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
export default class bcNoReply extends React.Component {
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
        <Table
          columns={columns}
          dataSource={data}
          bordered
          rowSelection={rowSelection}
          pagination={{  // 分页
            current: this.state.current,
            total: data.length,
            showSizeChanger:true,
            onChange:this.changePage
          }}
          onRow={(record)=>{

          }}
          title={() => 'Header'}
        />
      </div>
    )
  }
}

const columns = [
  {
    title: '序号',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
    width:80
  },
  {
    title: '来源',
    dataIndex: 'come',
    width:120
  },
  {
    title: '编号',
    dataIndex: 'number',
  },
  {
    title: "行使层级",
    dataIndex: "hierarchy"
  },
  {
    title: "咨询部门",
    dataIndex: "department"
  },
  {
    title: "问题描述",
    dataIndex: "description",
    ellipsis: true,
    className:"ant-popover-open",
    render(text) {
      return ( <Popover content={text} trigger="hover" arrowPointAtCenter placement="topLeft">{text}</Popover>)
    }
  },
  {
    title: "是否公开",
    dataIndex: "flag",
    width:120
  },
  {
    title: "咨询时间",
    dataIndex: "date"
  },
];

const data = [
  { key: '1', name: '1', come: "互联网",number:"zx100231908124" ,hierarchy: '市政府服务中心', department: "石景山区人力资源和社会保障局",description:"我每个月都查社保记录，但是这次7月查6月没有查到记录怎么回事",flag:"未公开",date:"2019-07-25 12:41:51"},
  { key: '2', name: '2', come: "互联网",number:"zx100231908125" ,hierarchy: '市政府服务中心', department: "石景山区住建委",description:"领导好，我想咨询一下，出租房屋备案去哪里备案？",flag:"未公开",date:"2019-07-12 15:25:34"},
];