import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'


// 接件受理
    // 收件
    const windowReceipt = LoadableComponent(()=>import("../../routes/Home/receipt/window")) //窗口收件
    const onlineWeChat = LoadableComponent(()=>import("../../routes/Home/receipt/onlineWeChat")) //窗口收件
//业务咨询
  //自行管理
  const unansweredConsultation = LoadableComponent(()=>import("../../routes/businessQuery/consultation/unanswered"))
@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/home/receipt/window' component={windowReceipt}/>
          <PrivateRoute exact path='/home/receipt/onlineWeChat' component={onlineWeChat}/>
          <PrivateRoute exact path='/consultation/unanswered' component={unansweredConsultation}/>
          <Redirect exact from='/' to='/home/receipt/window'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain