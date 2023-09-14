## 安装使用
[B站直播间定时发随机弹幕脚本](https://greasyfork.org/zh-CN/scripts/446725 "点击安装Tampermonkey脚本进行使用")

## <font color="#ff0000">**PS：**</font>
&emsp;&emsp;由于不再玩弹幕游戏，现多数时候也懒得登录B站账号，所以有些功能出了问题基本是不会第一时间发现，在使用过程中若果有问题或有好的提议，麻烦动动小手反馈一下。

## 背景
&emsp;&emsp;玩B站直播间的弹幕游戏，想在深夜成为一个“机器人”，机械发送弹幕，所以搜了下站内B站直播间发送弹幕的脚本，发现不是不能动态停止，就是不能动态更新要发的弹幕内容，再或者需要刷新页面才能对设定的定时间隔生效、又或者没有随机选取弹幕发送等，故还是自己搞一个算了。

## 原理
&emsp;&emsp;从数据源里面随机选择一条 **塞到** B站直播间页面的 **文本框** 里，之后帮你 **点击** “发送” **按钮** 进行发弹幕，所以弹幕长度是受阿B的限制，当然页面样式也是，阿B来个页面改版，那就不能保证可以正常运行。

## 功能
**自动参与天选时刻**：无人值守参加天选时刻抽奖（**需登录账号**），再也不用担心错过幸运的一刻！  
**直播间弹幕隔离**：各直播间弹幕独立保存，互不影响；  
**定时功能**： 单位是 **秒** ，在文本框里输入数字即可，点击 **开始** 按钮就会重新定时间隔，不需要刷新页面；  
**凌晨打卡**：到每日凌点时会发送一条“**打卡**”内容的弹幕，现阶段是写死发送“打卡”两个字，如果需要修改请自行在设置里面修改；  
**屏蔽功能**：可以选择直播间一些无用或少众用到的模块进行隐藏，详情看设置面板；  
**动态新增弹幕**：在设置面板任意添加弹幕后，点击面板底下的 **应用** 按钮即可新增入弹幕源，不需要停止再重开；  
**顺序发送**：随机开关 **关闭** 之后，将按分组1~5进行循环顺序发送；  
**随机弹幕**：设置面板有五个分组是让弹幕量大的人可以进行分类放置，没分类需求的随意选一个文本框输入弹幕即可，设置面板底下的 **随机开关** 开启（**默认开启**）之后，会将所有分组数据合并并随机排序（可以在控制台输入arrayInfo()看乱序效果），在发送时会再从里面随机选择一条出来发送。