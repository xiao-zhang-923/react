import React from 'react'
import CustomMenu from "../CustomMenu/index";
const menus = [
  {
    title: '接件受理',
    key: '/home',
    subs: [
      {
        key: '/home/receipt', title: '收件', icon: '', childrenSubs: [
          { key: "/home/receipt/window", title: "窗口收件", icon: "" },
          { key: "/home/receipt/onlineWeChat", title: "网上&微信收件", icon: "" },
          { key: "/home/receipt/approval", title: "联合审批", icon: "" },
          { key: "/home/receipt/reportPieces", title: "上报件", icon: "" },
        ]
      },
      {
        key: '/home/waitAcceptance', title: '待受理件', icon: '', childrenSubs: [
          { key: "/home/waitAcceptance/window", title: "窗口待受理件", icon: "" },
          { key: "/home/waitAcceptance/stuff", title: "材料待审核", icon: "" },
        ]
      },
      { key: '/home/draft', title: '草稿', icon: '', },
      { key: '/home/correction', title: '补正', icon: '', },
      { key: '/home/comprehensiveAcceptance', title: '综合窗口受理', icon: '', },
      { key: '/home/refuseToAccept', title: '不予受理', icon: '', },
    ]
  },
  {
    title: '网上&微信预审',
    key: '/onlineWeChat',
    subs: [
      { key: '/home/onlineWeChat/pendingTrial', title: '待预审', icon: '', },
      { key: '/home/onlineWeChat/pretrial', title: '已预审', icon: '', },
    ]
  },
  {
    title: '批量受理',
    key: '/batchAcceptance',
  },
]
const menus1 = [
  {
    title: '办件审批',
    key: '/runPiece',
    subs: [
      {
        key: '/runPiece/dealtWith', title: '待办', icon: '', childrenSubs: [
          { key: "/runPiece/dealtWith/examination", title: "审查", icon: "" },
          { key: "/runPiece/dealtWith/specialProduce", title: "特别程序", icon: "" },
          { key: "/runPiece/dealtWith/report", title: "上报", icon: "" },
        ]
      },
      {
        key: '/runPiece/alreadyDone', title: '已办', icon: '', childrenSubs: [
          { key: "/runPiece/alreadyDone/inHanding", title: "办理中", icon: "" },
          { key: "/runPiece/alreadyDone/completed", title: "已办结", icon: "" },
          { key: "/runPiece/alreadyDone/retired", title: "已退废", icon: "" },
        ]
      },
      {
        key: '/runPiece/refund', title: '退件', icon: '', childrenSubs: [
          { key: "/runPiece/refund/draft", title: "草稿", icon: "" },
          { key: "/runPiece/refund/dealtWith", title: "待办", icon: "" },
          { key: "/runPiece/refund/alreadyDone", title: "已办", icon: "" },
          { key: "/runPiece/refund/apply", title: "我的申请", icon: "" },
        ]
      },
      {
        key: '/runPiece/scrap', title: '废件', icon: '', childrenSubs: [
          { key: "/runPiece/scrap/draft", title: "草稿", icon: "" },
          { key: "/runPiece/scrap/dealtWith", title: "待办", icon: "" },
          { key: "/runPiece/scrap/alreadyDone", title: "已办", icon: "" },
          { key: "/runPiece/scrap/apply", title: "我的申请", icon: "" },
        ]
      },
      {
        key: '/runPiece/delay', title: '延期', icon: '', childrenSubs: [
          { key: "/runPiece/delay/draft", title: "草稿", icon: "" },
          { key: "/runPiece/delay/dealtWith", title: "待办", icon: "" },
          { key: "/runPiece/delay/alreadyDone", title: "已办", icon: "" },
          { key: "/runPiece/delay/apply", title: "我的申请", icon: "" },
        ]
      },
    ]
  },
  {
    title: '发证管理',
    key: '/management',
    subs: [
      { key: '/management/uncollected', title: '未领取', icon: '', },
      {
        key: '/management/haveReceived', title: '领取', icon: '', childrenSubs: [
          { key: "/management/haveReceived/electronic", title: "电子证照", icon: "" },
          { key: "/management/haveReceived/Paper", title: "纸质证照", icon: "" },
        ]
      },
      { key: '/management/printing', title: '证照打印', icon: '', },
    ]
  },
  {
    title: '部门办件',
    key: '/departmental',
  },
  {
    title: '督察督办',
    key: '/supervise',
  },
  {
    title: '商务部数据',
    key: '/boardOfTrade',
  },
]
const menus2 = [
  {
    title: '联办辅导',
    key: '/coach',
    subs: [
      { key: '/coach/draft', title: '草稿', icon: '', },
      { key: '/coach/dealtWith', title: '待办', icon: '', },
      { key: '/coach/alreadyDone', title: '已办', icon: '', },
      { key: '/coach/apply', title: '我的申请', icon: '', },
    ]
  },
  {
    title: '联办项目',
    key: '/project',
    subs: [
      { key: '/project/draft', title: '草稿', icon: '', },
      { key: '/project/haveInHand', title: '进行中', icon: '', },
      { key: '/project/hasEnded', title: '已结束', icon: '', },
    ]
  },
]
const menus3 = [
  {
    title: '项目设置',
    key: '/projectSettings',
  },
  {
    title: '银行设置',
    key: '/bankSetup',
  },
]
const menus4 = [
  {
    title: '咨询管理',
    key: '/consultation',
    subs:[
      {key:"/consultation/unanswered",title:"未答复",icon:""},
      {key:"/consultation/reply",title:"已答复",icon:""},
      {key:"/consultation/publicNotice",title:"已公示",icon:""},
      {key:"/consultation/parcelReceived",title:"转办来件",icon:""},
      {key:"/consultation/scrapList",title:"废件列表",icon:""},
      {key:"/consultation/draft",title:"草稿",icon:""},
    ]
  },
  {
    title: '知识库',
    key: '/knowledgeBase',
    subs:[
      {key:"/knowledgeBase/maintain",title:"知识库维护",icon:""},
      {key:"/knowledgeBase/query",title:"知识库查询",icon:""},
      {key:"/knowledgeBase/recycleBin",title:"回收站",icon:""},
    ]
  },
]
const menus5 =[
  {
    title: '事项维护',
    key: '/itemMaintenance',
    subs:[
      {key:"/itemMaintenance/majorItem",title:"大项",icon:""},
      {key:"/itemMaintenance/subitem",title:"子项",icon:""},
      {key:"/itemMaintenance/recycleBin",title:"回收站",icon:""},
    ]
  },
  {
    title:"办件量填报",
    key:"/fillIn"
  },
  {
    title:"授权委托",
    key:"/authorizedDelegation",
    subs:[
      {key:"/authorizedDelegation/workDelegate",title:"工作委托",icon:""}
    ]
  },
  {
    title:"预约管理",
    key:"/booking",
    subs:[
      {key:"/booking/untreated",title:"未处理",icon:""},
      {key:"/booking/processed",title:"已处理",icon:""},
      {key:"/booking/historical",title:"历史预约",icon:""},
    ]
  },
  {
    title:"窗口管理",
    key:"/windowManagement",
  },
  {
    title:"投诉调查",
    key:"/complaint",
  },
  {
    title:"通讯录",
    key:"/mailList",
  },
  {
    title:"叫号取号",
    key:"/callNumber",
    subs:[
      {key:"/callNumber/receivedNumber",title:"已取号",icon:""},
      {key:"/callNumber/alreadyCalled",title:"已叫号",icon:""},
      {key:"/callNumber/noCall",title:"未叫号",icon:""},
    ]
  },
]
const menus6 = [
  {
    title:"办件统计",
    key:"/statisticalAnalysis",
    subs:[
      {key:"/statisticalAnalysis/handlingQuantity",title:"办件量统计",icon:""},
      {key:"/statisticalAnalysis/source",title:"办件来源统计",icon:""},
      {key:"/statisticalAnalysis/efficiency",title:"办件效率统计",icon:""},
      {key:"/statisticalAnalysis/type",title:"办件类型统计",icon:""},
    ]
  },
  {
    title:"综合统计",
    key:"/comprehensiveStatistics",
    subs:[
      {key:"/comprehensiveStatistics/evaluate",title:"评价统计",icon:""},
      {key:"/comprehensiveStatistics/consultation",title:"咨询统计",icon:""},
      {key:"/comprehensiveStatistics/complaint",title:"投诉统计",icon:""},
      {key:"/comprehensiveStatistics/subscribe",title:"预约统计",icon:""},
    ]
  },
  {
    title:"综合查询",
    key:"/comprehensiveQuery",
    subs:[
      {key:"/comprehensiveQuery/searchForParts",title:"办件查询",icon:""},
      {key:"/comprehensiveQuery/evaluationQuery",title:"评价查询",icon:""},
      {key:"/comprehensiveQuery/reservationInquiry",title:"预约查询",icon:""},
      {key:"/comprehensiveQuery/enquiryAndEnquiry",title:"咨询查询",icon:""},
    ]
  },
]
class SiderNav extends React.Component {
  render() {
    if (this.props.HeaderBarCurrent.toString() == 1) {
      this.state = {
        customMenu: menus
      }
    } else if (this.props.HeaderBarCurrent.toString() == 2) {
      this.state = {
        customMenu: menus1
      }
    }else if(this.props.HeaderBarCurrent.toString()==3){
      this.state ={
        customMenu:menus2
      }
    }else if(this.props.HeaderBarCurrent.toString()==4){
      this.state = {
        customMenu:menus3
      }
    }else if(this.props.HeaderBarCurrent.toString()==5){
      this.state = {
        customMenu:menus4
      }
    }
    else if(this.props.HeaderBarCurrent.toString()==6){
      this.state = {
        customMenu:menus5
      }
    }else if(this.props.HeaderBarCurrent.toString()==7){
      this.state = {
        customMenu:menus6
      }
    }else{
      this.state = {
        customMenu:""
      }
    }
    const height = window.screen.availHeight - 134;
    return (
      <div style={{ height: height, overflowY: 'scroll' }}>
        <CustomMenu menus={this.state.customMenu} />
      </div>
    )
  }
}
export default SiderNav