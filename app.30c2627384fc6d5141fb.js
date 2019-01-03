(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){e.exports=n.p+"iconfont.2b12aa52.eot"},277:function(e,t,n){"use strict";(function(e){var t=s(n(1)),o=s(n(3)),r=n(13),a=s(n(283));function s(e){return e&&e.__esModule?e:{default:e}}!function(){var t=n(13).enterModule;t&&t(e)}();var l=function(e){o.default.render(t.default.createElement(r.AppContainer,null,t.default.createElement(e,null)),document.querySelector("#root"))};l(a.default),function(){var t=n(13).default,o=n(13).leaveModule;t&&(t.register(l,"render","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/index.js"),o(e))}()}).call(this,n(35)(e))},283:function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0,exports.default=void 0;var _setPrototypeOf=__webpack_require__(45),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(48),_create2=_interopRequireDefault(_create),_beeLayout=__webpack_require__(294),_beePanel=__webpack_require__(300),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(3),_reactDom2=_interopRequireDefault(_reactDom),_beeButton=__webpack_require__(116),_beeButton2=_interopRequireDefault(_beeButton);__webpack_require__(373);var _Demo=__webpack_require__(382),_Demo2=_interopRequireDefault(_Demo),_Demo3=__webpack_require__(577),_Demo4=_interopRequireDefault(_Demo3),_Demo5=__webpack_require__(578),_Demo6=_interopRequireDefault(_Demo5);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(13).enterModule;e&&e(module)}();var pkg=__webpack_require__(601),CARET=_react2.default.createElement("i",{className:"uf uf-arrow-down"}),CARETUP=_react2.default.createElement("i",{className:"uf uf-arrow-up"}),DemoArray=[{example:_react2.default.createElement(_Demo2.default,null),title:" table 快捷键示例应用。",code:'/**\n*\n* @title table 快捷键示例应用。\n* @description tab 键可以默认选中第一行、↑(上箭) 选中上一条、↓(下箭) 选中下一条 更多api 见文档说明。\n*/\n\nimport React, { Component } from "react";\nimport {Checkbox, Button } from \'tinper-bee\';\nimport Table from \'bee-table\';\n\n\nconst columns = [\n    {\n      title: "",\n      dataIndex: "d",\n      key: "d",\n      width:80,\n      render(text, record, index) {\n        return (\n          <div style={{ position: \'relative\' }} title={text} >\n            <Checkbox />\n          </div>\n        );\n      }\n    },\n    { title: "用户名", dataIndex: "a", key: "a", width:80 , className:"rowClassName"},\n    { id: "123", title: "性别", dataIndex: "b", key: "b", width: 100 },\n    { title: "年龄", dataIndex: "c", key: "c", width: 200 }\n  ];\n  \n  const data = [\n    { a: "令狐冲", b: "男", c: 41,d:\'操作\', key: "1" },\n    { a: "杨过叔叔的女儿黄蓉", b: "男", c: 67,d:\'操作\', key: "2" },\n    { a: "郭靖", b: "男", c: 25,d:\'操作\', key: "3" }\n  ];\n  \n  class Demo1 extends Component {\n  \n    constructor(props){\n        super(props);\n        this.state = {\n          data: data,\n          selectedRowIndex: 2\n        }\n    }\n  \n    onKeyTab=()=>{\n      let {selectedRowIndex} = this.state;\n      // let count = selectedRowIndex;//(selectedRowIndex+1);\n      // count == (data.length-1)?count = -1:count;\n      // this.setState({\n      //   selectedRowIndex: (count+1)\n      // })\n      console.log(" ---onKeyTab---- ",selectedRowIndex);\n       this.setState({\n        selectedRowIndex: 0\n      })\n    }\n  \n    onKeyUp=()=>{\n      let {selectedRowIndex} = this.state;\n      let count = selectedRowIndex;\n      let len = (data.length-1);\n      count = count == 0?count = len:(count-1);\n      this.setState({\n        selectedRowIndex: count\n      })\n    }\n  \n    onKeyDown=()=>{\n      let {selectedRowIndex} = this.state;\n      let count = selectedRowIndex;\n      count == (data.length-1)?count = -1:(count+1);\n      this.setState({\n        selectedRowIndex: (count+1)\n      })\n    }\n   \n    onTableKeyDown = ()=>{\n      let {selectedRowIndex} = this.state;\n      console.log(" ----onTabkeKeyDown--- ",selectedRowIndex);\n    }\n   \n    render() {\n      return (\n        <div className="demoPadding">\n        <input />\n        <Table\n          columns={columns}\n          data={data}\n          rowClassName={(record,index,indent)=>{\n            if (this.state.selectedRowIndex == index) {\n                return \'selected\';\n            } else {\n                return \'\';\n            }\n          }}\n          onRowClick={(record,index,indent)=>{\n            this.setState({ \n                selectedRowIndex: index\n            });\n          }}\n          onKeyTab={this.onKeyTab}\n          onKeyUp={this.onKeyUp}\n          onKeyDown={this.onKeyDown}\n          onTableKeyDown={this.onTableKeyDown} \n          scroll={{ x: "110%", y: 140 }}\n        /> </div>\n      );\n    }\n  }\n  \n  \n  ',desc:" tab 键可以默认选中第一行、↑(上箭) 选中上一条、↓(下箭) 选中下一条 更多api 见文档说明。"},{example:_react2.default.createElement(_Demo4.default,null),title:" be-tree 快捷键示例应用。",code:"/**\n*\n* @title be-tree 快捷键示例应用。\n* @description tab 进入焦点，且选中第一行。 ↑(上箭)、↓(下箭) 上一行、下一行。 ←(左箭)、→(右箭) 收起、展开。 focusable API\n*/\n\nimport React, { Component } from \"react\";\nimport {Tree } from 'tinper-bee';\n\nconst x = 6;\nconst y = 5;\nconst z = 2;\nconst gData = [];\n\nconst generateData = (_level, _preKey, _tns) => {\n    const preKey = _preKey || '0';\n    const tns = _tns || gData;\n\n    const children = [];\n    for (let i = 0; i < x; i++) {\n        const key = `${preKey}-${i}`;\n        tns.push({ title: key, key });\n        if (i < y) {\n            children.push(key);\n        }\n    }\n    if (_level < 0) {\n        return tns;\n    }\n    const level = _level - 1;\n    children.forEach((key, index) => {\n        tns[index].children = [];\n        return generateData(level, key, tns[index].children);\n    });\n};\ngenerateData(z);\n\nconst TreeNode = Tree.TreeNode;\n\n\nclass Demo2 extends Component{\n  constructor(props) {\n  \tsuper(props);\n    this.state = {\n      expandedKeys: [],\n      autoExpandParent: true,\n      checkedKeys: ['0-0-0'],\n      selectedKeys: [],\n    };\n    this.onExpand = this.onExpand.bind(this);\n    this.onCheck = this.onCheck.bind(this);\n    this.onSelect = this.onSelect.bind(this);\n  }\n  onExpand(expandedKeys) {\n    console.log('onExpand', arguments);\n    // if not set autoExpandParent to false, if children expanded, parent can not collapse.\n    // or, you can remove all expanded children keys.\n    this.setState({\n      expandedKeys,\n      autoExpandParent: false,\n    });\n  }\n  onCheck(checkedKeys) {\n    this.setState({\n      checkedKeys,\n      selectedKeys: ['0-3', '0-4'],\n    });\n  }\n  onSelect(selectedKeys, info) {\n    console.log('onSelect', info);\n    this.setState({ selectedKeys });\n  }\n  render() {\n    const loop = data => data.map((item) => {\n      if (item.children) {\n        return (\n          <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'}>\n            {loop(item.children)}\n          </TreeNode>\n        );\n      }\n      return <TreeNode key={item.key} title={item.key} isLeaf={true}/>;\n    });\n    return (\n      <Tree\n        checkable\n        focusable\n        onExpand={this.onExpand} expandedKeys={this.state.expandedKeys}\n        autoExpandParent={this.state.autoExpandParent}\n        onCheck={this.onCheck} \n        onSelect={this.onSelect} \n      >\n        {loop(gData)}\n      </Tree>\n    );\n  }\n};\n\n\n  ",desc:" tab 进入焦点，且选中第一行。 ↑(上箭)、↓(下箭) 上一行、下一行。 ←(左箭)、→(右箭) 收起、展开。 focusable API"},{example:_react2.default.createElement(_Demo6.default,null),title:" bee-datepicker  快捷键",code:'/**\n*\n* @title bee-datepicker  快捷键示例应用。\n* @description esc 关闭面板。 ↓(下箭) 打开日期面板\n*/\n\nimport React, { Component } from "react";\nimport DatePicker from "tinper-bee/lib/Datepicker";\nimport {  Row, Col  } from \'tinper-bee\';\n\nimport zhCN from "rc-calendar/lib/locale/zh_CN";\nimport moment from "moment";\n\nconst format = "YYYY-MM-DD";\n\nconst dateInputPlaceholder = "选择日期";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nfunction disabledDate(current) {\n  return current && current.valueOf() < Date.now();\n}\n\nclass Demo3 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <DatePicker\n              format={format}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n              disabledDate={disabledDate}\n              defaultValue={moment()}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n  ',desc:" esc 关闭面板。 ↓(下箭) 打开日期面板"}],Demo=function(_Component){function Demo(e){_classCallCheck(this,Demo);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.state={open:!1},t.handleClick=t.handleClick.bind(t),t}return _inherits(Demo,_Component),Demo.prototype.handleClick=function(){this.setState({open:!this.state.open})},Demo.prototype.render=function(){var e=this.props,t=e.title,n=e.example,o=e.code,r=e.desc,a=this.state.open?CARETUP:CARET,s=this.state.open?"隐藏代码":"查看代码",l=_react2.default.createElement(_beeButton2.default,{shape:"block",onClick:this.handleClick},a,s);return _react2.default.createElement(_beeLayout.Col,{md:12},_react2.default.createElement("h3",null,t),_react2.default.createElement("p",null,r),_react2.default.createElement(_beePanel.Panel,{collapsible:!0,expanded:this.state.open,colors:"bordered",header:n,footer:l,footerStyle:{padding:0}},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"hljs javascript"},o.replace("../../src/index.js",pkg.name).replace("../../src/index",pkg.name)))))},Demo.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Demo}(_react.Component),DemoGroup=function(_Component2){function DemoGroup(e){return _classCallCheck(this,DemoGroup),_possibleConstructorReturn(this,_Component2.call(this,e))}return _inherits(DemoGroup,_Component2),DemoGroup.prototype.render=function(){return _react2.default.createElement(_beeLayout.Row,null,DemoArray.map(function(e,t){return _react2.default.createElement(Demo,{example:e.example,title:e.title,code:e.code,desc:e.desc,key:t})}))},DemoGroup.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},DemoGroup}(_react.Component);exports.default=DemoGroup,function(){var e=__webpack_require__(13).default,t=__webpack_require__(13).leaveModule;e&&(e.register(CARET,"CARET","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/index.jsx"),e.register(CARETUP,"CARETUP","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/index.jsx"),e.register(DemoArray,"DemoArray","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/index.jsx"),e.register(Demo,"Demo","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/index.jsx"),e.register(DemoGroup,"DemoGroup","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/index.jsx"),t(module))}()}).call(this,__webpack_require__(35)(module))},377:function(e,t,n){e.exports=n.p+"iconfont.ee989690.woff"},378:function(e,t,n){e.exports=n.p+"iconfont.bed8b35e.ttf"},379:function(e,t,n){e.exports=n.p+"iconfont.454e95d8.svg"},382:function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _setPrototypeOf=__webpack_require__(45),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(48),_create2=_interopRequireDefault(_create),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_tinperBee=__webpack_require__(79),_beeTable=__webpack_require__(383),_beeTable2=_interopRequireDefault(_beeTable);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(13).enterModule;e&&e(module)}();var columns=[{title:"",dataIndex:"d",key:"d",width:80,render:function(e,t,n){return _react2.default.createElement("div",{style:{position:"relative"},title:e},_react2.default.createElement(_tinperBee.Checkbox,null))}},{title:"用户名",dataIndex:"a",key:"a",width:80,className:"rowClassName"},{id:"123",title:"性别",dataIndex:"b",key:"b",width:100},{title:"年龄",dataIndex:"c",key:"c",width:200}],data=[{a:"令狐冲",b:"男",c:41,d:"操作",key:"1"},{a:"杨过叔叔的女儿黄蓉",b:"男",c:67,d:"操作",key:"2"},{a:"郭靖",b:"男",c:25,d:"操作",key:"3"}],Demo1=function(_Component){function Demo1(e){_classCallCheck(this,Demo1);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.onKeyTab=function(){var e=t.state.selectedRowIndex;console.log(" ---onKeyTab---- ",e),t.setState({selectedRowIndex:0})},t.onKeyUp=function(){var e=t.state.selectedRowIndex,n=data.length-1;e=0==e?e=n:e-1,t.setState({selectedRowIndex:e})},t.onKeyDown=function(){var e=t.state.selectedRowIndex;e==data.length-1&&(e=-1),t.setState({selectedRowIndex:e+1})},t.onTableKeyDown=function(){var e=t.state.selectedRowIndex;console.log(" ----onTabkeKeyDown--- ",e)},t.state={data:data,selectedRowIndex:2},t}return _inherits(Demo1,_Component),Demo1.prototype.render=function(){var e=this;return _react2.default.createElement("div",{className:"demoPadding"},_react2.default.createElement("input",null),_react2.default.createElement(_beeTable2.default,{columns:columns,data:data,rowClassName:function(t,n,o){return e.state.selectedRowIndex==n?"selected":""},onRowClick:function(t,n,o){e.setState({selectedRowIndex:n})},onKeyTab:this.onKeyTab,onKeyUp:this.onKeyUp,onKeyDown:this.onKeyDown,onTableKeyDown:this.onTableKeyDown,scroll:{x:"110%",y:140}})," ")},Demo1.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Demo1}(_react.Component),_default=Demo1;exports.default=_default,function(){var e=__webpack_require__(13).default,t=__webpack_require__(13).leaveModule;e&&(e.register(columns,"columns","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo1.js"),e.register(data,"data","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo1.js"),e.register(Demo1,"Demo1","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo1.js"),e.register(_default,"default","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo1.js"),t(module))}()}).call(this,__webpack_require__(35)(module))},472:function(e,t,n){var o={"./af":131,"./af.js":131,"./ar":132,"./ar-dz":133,"./ar-dz.js":133,"./ar-kw":134,"./ar-kw.js":134,"./ar-ly":135,"./ar-ly.js":135,"./ar-ma":136,"./ar-ma.js":136,"./ar-sa":137,"./ar-sa.js":137,"./ar-tn":138,"./ar-tn.js":138,"./ar.js":132,"./az":139,"./az.js":139,"./be":140,"./be.js":140,"./bg":141,"./bg.js":141,"./bm":142,"./bm.js":142,"./bn":143,"./bn.js":143,"./bo":144,"./bo.js":144,"./br":145,"./br.js":145,"./bs":146,"./bs.js":146,"./ca":147,"./ca.js":147,"./cs":148,"./cs.js":148,"./cv":149,"./cv.js":149,"./cy":150,"./cy.js":150,"./da":151,"./da.js":151,"./de":152,"./de-at":153,"./de-at.js":153,"./de-ch":154,"./de-ch.js":154,"./de.js":152,"./dv":155,"./dv.js":155,"./el":156,"./el.js":156,"./en-au":157,"./en-au.js":157,"./en-ca":158,"./en-ca.js":158,"./en-gb":60,"./en-gb.js":60,"./en-ie":159,"./en-ie.js":159,"./en-il":160,"./en-il.js":160,"./en-nz":161,"./en-nz.js":161,"./eo":162,"./eo.js":162,"./es":163,"./es-do":164,"./es-do.js":164,"./es-us":165,"./es-us.js":165,"./es.js":163,"./et":166,"./et.js":166,"./eu":167,"./eu.js":167,"./fa":168,"./fa.js":168,"./fi":169,"./fi.js":169,"./fo":170,"./fo.js":170,"./fr":171,"./fr-ca":172,"./fr-ca.js":172,"./fr-ch":173,"./fr-ch.js":173,"./fr.js":171,"./fy":174,"./fy.js":174,"./gd":175,"./gd.js":175,"./gl":176,"./gl.js":176,"./gom-latn":177,"./gom-latn.js":177,"./gu":178,"./gu.js":178,"./he":179,"./he.js":179,"./hi":180,"./hi.js":180,"./hr":181,"./hr.js":181,"./hu":182,"./hu.js":182,"./hy-am":183,"./hy-am.js":183,"./id":184,"./id.js":184,"./is":185,"./is.js":185,"./it":186,"./it.js":186,"./ja":187,"./ja.js":187,"./jv":188,"./jv.js":188,"./ka":189,"./ka.js":189,"./kk":190,"./kk.js":190,"./km":191,"./km.js":191,"./kn":192,"./kn.js":192,"./ko":193,"./ko.js":193,"./ku":194,"./ku.js":194,"./ky":195,"./ky.js":195,"./lb":196,"./lb.js":196,"./lo":197,"./lo.js":197,"./lt":198,"./lt.js":198,"./lv":199,"./lv.js":199,"./me":200,"./me.js":200,"./mi":201,"./mi.js":201,"./mk":202,"./mk.js":202,"./ml":203,"./ml.js":203,"./mn":204,"./mn.js":204,"./mr":205,"./mr.js":205,"./ms":206,"./ms-my":207,"./ms-my.js":207,"./ms.js":206,"./mt":208,"./mt.js":208,"./my":209,"./my.js":209,"./nb":210,"./nb.js":210,"./ne":211,"./ne.js":211,"./nl":212,"./nl-be":213,"./nl-be.js":213,"./nl.js":212,"./nn":214,"./nn.js":214,"./pa-in":215,"./pa-in.js":215,"./pl":216,"./pl.js":216,"./pt":217,"./pt-br":218,"./pt-br.js":218,"./pt.js":217,"./ro":219,"./ro.js":219,"./ru":220,"./ru.js":220,"./sd":221,"./sd.js":221,"./se":222,"./se.js":222,"./si":223,"./si.js":223,"./sk":224,"./sk.js":224,"./sl":225,"./sl.js":225,"./sq":226,"./sq.js":226,"./sr":227,"./sr-cyrl":228,"./sr-cyrl.js":228,"./sr.js":227,"./ss":229,"./ss.js":229,"./sv":230,"./sv.js":230,"./sw":231,"./sw.js":231,"./ta":232,"./ta.js":232,"./te":233,"./te.js":233,"./tet":234,"./tet.js":234,"./tg":235,"./tg.js":235,"./th":236,"./th.js":236,"./tl-ph":237,"./tl-ph.js":237,"./tlh":238,"./tlh.js":238,"./tr":239,"./tr.js":239,"./tzl":240,"./tzl.js":240,"./tzm":241,"./tzm-latn":242,"./tzm-latn.js":242,"./tzm.js":241,"./ug-cn":243,"./ug-cn.js":243,"./uk":244,"./uk.js":244,"./ur":245,"./ur.js":245,"./uz":246,"./uz-latn":247,"./uz-latn.js":247,"./uz.js":246,"./vi":248,"./vi.js":248,"./x-pseudo":249,"./x-pseudo.js":249,"./yo":250,"./yo.js":250,"./zh-cn":42,"./zh-cn.js":42,"./zh-hk":251,"./zh-hk.js":251,"./zh-tw":252,"./zh-tw.js":252};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=472},577:function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _setPrototypeOf=__webpack_require__(45),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(48),_create2=_interopRequireDefault(_create),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_tinperBee=__webpack_require__(79);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(13).enterModule;e&&e(module)}();var x=6,y=5,z=2,gData=[],generateData=function e(t,n,o){for(var r=n||"0",a=o||gData,s=[],l=0;l<x;l++){var c=r+"-"+l;a.push({title:c,key:c}),l<y&&s.push(c)}if(t<0)return a;var i=t-1;s.forEach(function(t,n){return a[n].children=[],e(i,t,a[n].children)})};generateData(z);var TreeNode=_tinperBee.Tree.TreeNode,Demo2=function(_Component){function Demo2(e){_classCallCheck(this,Demo2);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.state={expandedKeys:[],autoExpandParent:!0,checkedKeys:["0-0-0"],selectedKeys:[]},t.onExpand=t.onExpand.bind(t),t.onCheck=t.onCheck.bind(t),t.onSelect=t.onSelect.bind(t),t}return _inherits(Demo2,_Component),Demo2.prototype.onExpand=function(e){console.log("onExpand",arguments),this.setState({expandedKeys:e,autoExpandParent:!1})},Demo2.prototype.onCheck=function(e){this.setState({checkedKeys:e,selectedKeys:["0-3","0-4"]})},Demo2.prototype.onSelect=function(e,t){console.log("onSelect",t),this.setState({selectedKeys:e})},Demo2.prototype.render=function(){return _react2.default.createElement(_tinperBee.Tree,{checkable:!0,focusable:!0,onExpand:this.onExpand,expandedKeys:this.state.expandedKeys,autoExpandParent:this.state.autoExpandParent,onCheck:this.onCheck,onSelect:this.onSelect},function e(t){return t.map(function(t){return t.children?_react2.default.createElement(TreeNode,{key:t.key,title:t.key,disableCheckbox:"0-0-0"===t.key},e(t.children)):_react2.default.createElement(TreeNode,{key:t.key,title:t.key,isLeaf:!0})})}(gData))},Demo2.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Demo2}(_react.Component),_default=Demo2;exports.default=_default,function(){var e=__webpack_require__(13).default,t=__webpack_require__(13).leaveModule;e&&(e.register(x,"x","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo2.js"),e.register(y,"y","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo2.js"),e.register(z,"z","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo2.js"),e.register(gData,"gData","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo2.js"),e.register(generateData,"generateData","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo2.js"),e.register(TreeNode,"TreeNode","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo2.js"),e.register(Demo2,"Demo2","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo2.js"),e.register(_default,"default","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo2.js"),t(module))}()}).call(this,__webpack_require__(35)(module))},578:function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _setPrototypeOf=__webpack_require__(45),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(48),_create2=_interopRequireDefault(_create),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_Datepicker=__webpack_require__(579),_Datepicker2=_interopRequireDefault(_Datepicker),_tinperBee=__webpack_require__(79),_zh_CN=__webpack_require__(39),_zh_CN2=_interopRequireDefault(_zh_CN),_moment=__webpack_require__(2),_moment2=_interopRequireDefault(_moment);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(13).enterModule;e&&e(module)}();var format="YYYY-MM-DD",dateInputPlaceholder="选择日期";function onSelect(e){console.log(e)}function onChange(e){console.log(e)}function disabledDate(e){return e&&e.valueOf()<Date.now()}var Demo3=function(_Component){function Demo3(){return _classCallCheck(this,Demo3),_possibleConstructorReturn(this,_Component.apply(this,arguments))}return _inherits(Demo3,_Component),Demo3.prototype.render=function(){return _react2.default.createElement("div",null,_react2.default.createElement(_tinperBee.Row,null,_react2.default.createElement(_tinperBee.Col,{md:12},_react2.default.createElement(_Datepicker2.default,{format:format,onSelect:onSelect,onChange:onChange,locale:_zh_CN2.default,disabledDate:disabledDate,defaultValue:(0,_moment2.default)(),placeholder:dateInputPlaceholder}))))},Demo3.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Demo3}(_react.Component),_default=Demo3;exports.default=_default,function(){var e=__webpack_require__(13).default,t=__webpack_require__(13).leaveModule;e&&(e.register(format,"format","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo3.js"),e.register(dateInputPlaceholder,"dateInputPlaceholder","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo3.js"),e.register(onSelect,"onSelect","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo3.js"),e.register(onChange,"onChange","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo3.js"),e.register(disabledDate,"disabledDate","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo3.js"),e.register(Demo3,"Demo3","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo3.js"),e.register(_default,"default","/Users/jony/workspaces/yonyou/tinper-acs/ac-keyboard-example/demo/demolist/Demo3.js"),t(module))}()}).call(this,__webpack_require__(35)(module))},601:function(e){e.exports={name:"ac-keyboard-example",version:"0.0.1",description:"",main:"dist/index.js",scripts:{test:'echo "Error: no test specified" && exit 1',clear:"rimraf dist","clear:gh-pages":"rimraf ghpages",build:"npm run clear && webpack --config config/webpack.config.prod.js",dev:"webpack-dev-server --config config/webpack.config.dev.js",lint:"eslint --ext .js --ext .jsx src/","lint-fix":"eslint --fix --ext .js --ext .jsx src/",precommit:"npm run lint",deploy:"npm run clear:gh-pages && webpack --config config/webpack.config.ghpages.js"},bugs:{url:"https://github.com/tinper-acs/ac-keyboard-example/issues"},homepage:"https://github.com/tinper-acs/ac-keyboard-example#readme",repository:{type:"git",url:"git+https://github.com/tinper-acs/ac-keyboard-example.git"},author:"wangshih@yonyou.com",license:"MIT",files:["package.json","dist","README.md"],devDependencies:{"babel-cli":"^6.26.0","babel-core":"^6.26.3","babel-eslint":"^8.2.6","babel-loader":"^7.1.5","babel-plugin-transform-decorators-legacy":"^1.3.5","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-es2015":"^6.24.1","babel-preset-es2015-loose":"^8.0.0","babel-preset-react":"^6.24.1","babel-preset-stage-1":"^6.24.1","bee-button":"^1.0.6","bee-layout":"^1.2.7","bee-panel":"^1.0.0","bee-table":"^1.6.24","css-loader":"^1.0.0",eslint:"^5.4.0","eslint-config-airbnb":"^17.1.0","eslint-config-standard":"^11.0.0","eslint-loader":"^2.1.0","eslint-plugin-import":"^2.14.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-promise":"^4.0.0","eslint-plugin-react":"^7.11.1","eslint-plugin-standard":"^3.1.0","file-loader":"^2.0.0","html-loader":"^0.5.5","html-webpack-plugin":"^3.2.0",less:"^3.8.1","less-loader":"^4.1.0","markdown-styles":"^3.1.10","mini-css-extract-plugin":"^0.4.2","node-sass":"^4.9.3","open-browser-webpack-plugin":"0.0.5","optimize-css-assets-webpack-plugin":"^5.0.0","postcss-loader":"^3.0.0",react:"^16.4.2","react-dom":"^16.4.2","react-hot-loader":"^4.3.4",rimraf:"^2.6.2","sass-loader":"^7.1.0","style-loader":"^0.22.1","tinper-bee":"^1.6.8","tinper-bee-core":"^0.4.1","uglifyjs-webpack-plugin":"^1.3.0","url-loader":"^1.1.1",webpack:"^4.17.0","webpack-cli":"^3.1.0","webpack-dev-server":"^3.1.5","webpack-merge":"^4.1.4","webpack-node-externals":"^1.7.2"},peerDependencies:{react:"^15.3.0 || ^16.0.0","react-dom":"^15.3.0 || ^16.0.0","prop-types":"^15.6.0"}}}},[[277,1,2,3]]]);