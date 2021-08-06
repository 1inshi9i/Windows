/*第一行强制将非图标字体显示为微软雅黑，图标字体原样显示*
/*:not([class*="icon"]):not(i){font-family: "Microsoft YaHei" !important;}

/*字体阴影*/
*{text-shadow:0.01em 0.01em 0.1em #999999 !important;}

/*去除链接下划线*/
a{text-decoration:none !important}

/*淡蓝色样式*/
a{-webkit-transition: all 0.1s ease-out;}
a:hover{color: #32CD32 !important;text-shadow:-5px 3px 18px #32CD32 !important;-webkit-transition: all 0.1s ease-out;}

*::-webkit-selection {background: #333333 !important; color: #32CD32 !important; }
/*访问过链接红色*/

/*指向图片绿光*/
img:hover{box-shadow: 0px 0px 4px 4px rgba(130,190,10,0.6) !important;-webkit-transition-property: box-shadow;-webkit-transition-duration: .31s;}
img{-webkit-transition-property: box-shadow;-webkit-transition-duration: .31s;}
