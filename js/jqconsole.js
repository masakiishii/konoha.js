// Generated by CoffeeScript 1.3.3
/*
Copyrights 2011, the repl.it project.
Licensed under the MIT license
*/(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j=function(e,t){return function(){return e.apply(t,arguments)}},F=[].slice;e=jQuery,D=0,P=1,H=2,T=13,O=9,E=46,w=8,C=37,A=39,M=38,S=40,N=36,x=35,L=33,k=34,a="jqconsole-",i=""+a+"cursor",s=""+a+"header",f=""+a+"prompt",u=""+a+"old-prompt",o=""+a+"input",r=""+a+"blurred",y="keypress",v="<span/>",p="<div/>",d=":empty",_="\n",h=">>> ",c="... ",l=2,n=""+a+"ansi-",m="",g=/\[(\d*)(?:;(\d*))*m/,t=function(){function e(){this.stylize=j(this.stylize,this),this._closeSpan=j(this._closeSpan,this),this._openSpan=j(this._openSpan,this),this.getClasses=j(this.getClasses,this),this._style=j(this._style,this),this._color=j(this._color,this),this._remove=j(this._remove,this),this._append=j(this._append,this),this.klasses=[]}return e.prototype.COLORS=["black","red","green","yellow","blue","magenta","cyan","white"],e.prototype._append=function(e){e=""+n+e;if(this.klasses.indexOf(e)===-1)return this.klasses.push(e)},e.prototype._remove=function(){var e,t,r,i,s,o;r=1<=arguments.length?F.call(arguments,0):[],o=[];for(i=0,s=r.length;i<s;i++)t=r[i],t==="fonts"||t==="color"||t==="background-color"?o.push(this.klasses=function(){var r,i,s,o;s=this.klasses,o=[];for(r=0,i=s.length;r<i;r++)e=s[r],e.indexOf(t)!==n.length&&o.push(e);return o}.call(this)):(t=""+n+t,o.push(this.klasses=function(){var n,r,i,s;i=this.klasses,s=[];for(n=0,r=i.length;n<r;n++)e=i[n],e!==t&&s.push(e);return s}.call(this)));return o},e.prototype._color=function(e){return this.COLORS[e]},e.prototype._style=function(e){e===""&&(e=0),e=parseInt(e);if(isNaN(e))return;switch(e){case 0:return this.klasses=[];case 1:return this._append("bold");case 2:return this._append("lighter");case 3:return this._append("italic");case 4:return this._append("underline");case 5:return this._append("blink");case 6:return this._append("blink-rapid");case 8:return this._append("hidden");case 9:return this._append("line-through");case 10:return this._remove("fonts");case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:return this._remove("fonts"),this._append("fonts-"+(e-10));case 20:return this._append("fraktur");case 21:return this._remove("bold","lighter");case 22:return this._remove("bold","lighter");case 23:return this._remove("italic","fraktur");case 24:return this._remove("underline");case 25:return this._remove("blink","blink-rapid");case 28:return this._remove("hidden");case 29:return this._remove("line-through");case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:return this._remove("color"),this._append("color-"+this._color(e-30));case 39:return this._remove("color");case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:return this._remove("background-color"),this._append("background-color-"+this._color(e-40));case 49:return this._remove("background-color");case 51:return this._append("framed");case 53:return this._append("overline");case 54:return this._remove("framed");case 55:return this._remove("overline")}},e.prototype.getClasses=function(){return this.klasses.join(" ")},e.prototype._openSpan=function(e){return'<span class="'+this.getClasses()+'">'+e},e.prototype._closeSpan=function(e){return""+e+"</span>"},e.prototype.stylize=function(e){var t,n,r,i,s,o;e=this._openSpan(e),r=0;while((r=e.indexOf(m,r))&&r!==-1)if(n=e.slice(r).match(g)){o=n.slice(1);for(i=0,s=o.length;i<s;i++)t=o[i],this._style(t);e=this._closeSpan(e.slice(0,r))+this._openSpan(e.slice(r+1+n[0].length))}else r++;return this._closeSpan(e)},e}(),B=function(e,t){return'<span class="'+e+'">'+(t||"")+"</span>"},b=function(){function n(n,r,i,o){this.container=n,this._HideComposition=j(this._HideComposition,this),this._ShowComposition=j(this._ShowComposition,this),this._UpdateComposition=j(this._UpdateComposition,this),this._EndComposition=j(this._EndComposition,this),this._StartComposition=j(this._StartComposition,this),this._CheckComposition=j(this._CheckComposition,this),this._ProcessMatch=j(this._ProcessMatch,this),this._HandleKey=j(this._HandleKey,this),this._HandleChar=j(this._HandleChar,this),this.isMobile=!!navigator.userAgent.match(/iPhone|iPad|iPod|Android/i),this.isIos=!!navigator.userAgent.match(/iPhone|iPad|iPod/i),this.isAndroid=!!navigator.userAgent.match(/Android/i),this.$window=e(window),this.header=r||"",this.prompt_label_main=typeof i=="string"?i:h,this.prompt_label_continue=o||c,this.indent_width=l,this.state=P,this.input_queue=[],this.input_callback=null,this.multiline_callback=null,this.history=[],this.history_index=0,this.history_new="",this.history_active=!1,this.shortcuts={},this.$console=e('<pre class="jqconsole"/>').appendTo(this.container),this.$console.css({position:"absolute",top:0,bottom:0,right:0,left:0,margin:0,overflow:"auto"}),this.$console_focused=!0,this.$input_container=e(p).appendTo(this.container),this.$input_container.css({position:"relative",width:1,height:0,overflow:"hidden"}),this.$input_source=e("<textarea/>"),this.$input_source.attr("wrap","off").css({position:"absolute",width:2}),this.$input_source.appendTo(this.$input_container),this.$composition=e(p),this.$composition.addClass(""+a+"composition"),this.$composition.css({display:"inline",position:"relative"}),this.matchings={openings:{},closings:{},clss:[]},this.ansi=new t,this._InitPrompt(),this._SetupEvents(),this.Write(this.header,s),e(this.container).data("jqconsole",this)}return n.prototype.ResetHistory=function(){return this.SetHistory([])},n.prototype.ResetShortcuts=function(){return this.shortcuts={}},n.prototype.ResetMatchings=function(){return this.matchings={openings:{},closings:{},clss:[]}},n.prototype.Reset=function(){return this.state!==P&&this.ClearPromptText(!0),this.state=P,this.input_queue=[],this.input_callback=null,this.multiline_callback=null,this.ResetHistory(),this.ResetShortcuts(),this.ResetMatchings(),this.$prompt.detach(),this.$input_container.detach(),this.$console.html(""),this.$prompt.appendTo(this.$console),this.$input_container.appendTo(this.container),this.Write(this.header,s),void 0},n.prototype.GetHistory=function(){return this.history},n.prototype.SetHistory=function(e){return this.history=e.slice(),this.history_index=this.history.length},n.prototype._CheckKeyCode=function(e){isNaN(e)?e=e.charCodeAt(0):e=parseInt(e,10);if(0<e&&e<256&&!isNaN(e))return e;throw new Error("Key code must be a number between 0 and 256 exclusive.")},n.prototype._LetterCaseHelper=function(e,t){t(e),65<=e&&e<=90&&t(e+32);if(97<=e&&e<=122)return t(e-32)},n.prototype.RegisterShortcut=function(e,t){var n,r=this;e=this._CheckKeyCode(e);if(typeof t!="function")throw new Error("Callback must be a function, not "+t+".");return n=function(e){return e in r.shortcuts||(r.shortcuts[e]=[]),r.shortcuts[e].push(t)},this._LetterCaseHelper(e,n),void 0},n.prototype.UnRegisterShortcut=function(e,t){var n,r=this;return e=this._CheckKeyCode(e),n=function(e){if(e in r.shortcuts)return t?r.shortcuts[e].splice(r.shortcuts[e].indexOf(t),1):delete r.shortcuts[e]},this._LetterCaseHelper(e,n),void 0},n.prototype.GetColumn=function(){var e;return this.$prompt_cursor.text(""),e=this.$console.text().split(_),this.$prompt_cursor.html("&nbsp;"),e[e.length-1].length},n.prototype.GetLine=function(){return this.$console.text().split(_).length-1},n.prototype.ClearPromptText=function(e){if(this.state===P)throw new Error("ClearPromptText() is not allowed in output state.");return this.$prompt_before.html(""),this.$prompt_after.html(""),this.$prompt_label.text(e?"":this._SelectPromptLabel(!1)),this.$prompt_left.text(""),this.$prompt_right.text(""),void 0},n.prototype.GetPromptText=function(t){var n,r,i,s,o;if(this.state===P)throw new Error("GetPromptText() is not allowed in output state.");return t?(this.$prompt_cursor.text(""),o=this.$prompt.text(),this.$prompt_cursor.html("&nbsp;"),o):(s=function(t){var n;return n=[],t.children().each(function(){return n.push(e(this).children().last().text())}),n.join(_)},r=s(this.$prompt_before),r&&(r+=_),i=this.$prompt_left.text()+this.$prompt_right.text(),n=s(this.$prompt_after),n&&(n=_+n),r+i+n)},n.prototype.SetPromptText=function(e){if(this.state===P)throw new Error("SetPromptText() is not allowed in output state.");return this.ClearPromptText(!1),this._AppendPromptText(e),this._ScrollToEnd(),void 0},n.prototype.SetPromptLabel=function(e,t){return this.prompt_label_main=e,t!=null&&(this.prompt_label_continue=t),void 0},n.prototype.Write=function(t,n,r){var i;return r==null&&(r=!0),r&&(t=this.ansi.stylize(e(v).text(t).html())),i=e(v).html(t),n!=null&&i.addClass(n),this.Append(i)},n.prototype.Append=function(t){var n;return n=e(t).insertBefore(this.$prompt),this._ScrollToEnd(),this.$prompt_cursor.detach().insertAfter(this.$prompt_left),n},n.prototype.Input=function(e){var t,n,r,i,s=this;if(this.state===H)r=this.input_callback,i=this.multiline_callback,n=this.history_active,t=this.async_multiline,this.AbortPrompt(),this.input_queue.unshift(function(){return s.Prompt(n,r,i,t)});else if(this.state!==P){this.input_queue.push(function(){return s.Input(e)});return}return this.history_active=!1,this.input_callback=e,this.multiline_callback=null,this.state=D,this.$prompt.attr("class",o),this.$prompt_label.text(this._SelectPromptLabel(!1)),this.Focus(),this._ScrollToEnd(),void 0},n.prototype.Prompt=function(e,t,n,r){var i=this;if(this.state!==P){this.input_queue.push(function(){return i.Prompt(e,t,n,r)});return}return this.history_active=e,this.input_callback=t,this.multiline_callback=n,this.async_multiline=r,this.state=H,this.$prompt.attr("class",f+" "+this.ansi.getClasses()),this.$prompt_label.text(this._SelectPromptLabel(!1)),this.Focus(),this._ScrollToEnd(),void 0},n.prototype.AbortPrompt=function(){if(this.state!==H)throw new Error("Cannot abort prompt when not in prompt state.");return this.Write(this.GetPromptText(!0)+_,u),this.ClearPromptText(!0),this.state=P,this.input_callback=this.multiline_callback=null,this._CheckInputQueue(),void 0},n.prototype.Focus=function(){return this.IsDisabled()||this.$input_source.focus(),void 0},n.prototype.SetIndentWidth=function(e){return this.indent_width=e},n.prototype.GetIndentWidth=function(){return this.indent_width},n.prototype.RegisterMatching=function(e,t,n){var r;return r={opening_char:e,closing_char:t,cls:n},this.matchings.clss.push(n),this.matchings.openings[e]=r,this.matchings.closings[t]=r},n.prototype.UnRegisterMatching=function(e,t){var n;return n=this.matchings.openings[e].cls,delete this.matchings.openings[e],delete this.matchings.closings[t],this.matchings.clss.splice(this.matchings.clss.indexOf(n),1)},n.prototype.Dump=function(){var t,n;return t=this.$console.find("."+s).nextUntil("."+f),function(){var r,i,s;s=[];for(r=0,i=t.length;r<i;r++)n=t[r],e(n).is("."+u)?s.push(e(n).text().replace(/^\s+/,">>> ")):s.push(e(n).text());return s}().join(" ")},n.prototype.GetState=function(){return this.state===D?"input":this.state===P?"output":"prompt"},n.prototype.Disable=function(){return this.$input_source.attr("disabled",!0),this.$input_source.blur()},n.prototype.Enable=function(){return this.$input_source.attr("disabled",!1)},n.prototype.IsDisabled=function(){return Boolean(this.$input_source.attr("disabled"))},n.prototype.MoveToStart=function(e){return this._MoveTo(e,!0),void 0},n.prototype.MoveToEnd=function(e){return this._MoveTo(e,!1),void 0},n.prototype._CheckInputQueue=function(){if(this.input_queue.length)return this.input_queue.shift()()},n.prototype._InitPrompt=function(){this.$prompt=e(B(o)).appendTo(this.$console),this.$prompt_before=e(v).appendTo(this.$prompt),this.$prompt_current=e(v).appendTo(this.$prompt),this.$prompt_after=e(v).appendTo(this.$prompt),this.$prompt_label=e(v).appendTo(this.$prompt_current),this.$prompt_left=e(v).appendTo(this.$prompt_current),this.$prompt_right=e(v).appendTo(this.$prompt_current),this.$prompt_right.css({position:"relative"}),this.$prompt_cursor=e(B(i,"&nbsp;")),this.$prompt_cursor.insertBefore(this.$prompt_right),this.$prompt_cursor.css({color:"transparent",display:"inline",zIndex:0});if(!this.isMobile)return this.$prompt_cursor.css("position","absolute")},n.prototype._SetupEvents=function(){var t,n,i=this;this.isMobile?this.$console.click(function(e){return e.preventDefault(),i.Focus()}):this.$console.mouseup(function(e){var t;return e.which===2?i.Focus():(t=function(){if(!window.getSelection().toString())return e.preventDefault(),i.Focus()},setTimeout(t,0))}),this.$input_source.focus(function(){var e,t;return i._ScrollToEnd(),i.$console_focused=!0,i.$console.removeClass(r),t=function(){if(i.$console_focused)return i.$console.removeClass(r)},setTimeout(t,100),e=function(){if(i.isIos&&i.$console_focused)return i.$input_source.hide()},setTimeout(e,500)}),this.$input_source.blur(function(){var e;return i.$console_focused=!1,i.isIos&&i.$input_source.show(),e=function(){if(!i.$console_focused)return i.$console.addClass(r)},setTimeout(e,100)}),n=e.browser.opera?"input":"paste",this.$input_source.bind(n,function(){var e;return e=function(){if(i.in_composition)return;return i._AppendPromptText(i.$input_source.val()),i.$input_source.val(""),i.Focus()},setTimeout(e,0)}),this.$input_source.keypress(this._HandleChar),this.$input_source.keydown(this._HandleKey),this.$input_source.keydown(this._CheckComposition),e.browser.mozilla!=null&&(this.$input_source.bind("compositionstart",this._StartComposition),this.$input_source.bind("compositionend",this._EndCommposition),this.$input_source.bind("text",this._UpdateComposition));if(e.browser.opera!=null)return t=function(){if(i.in_composition)return;if(i.$input_source.val().length)return i._StartComposition()},setInterval(t,200)},n.prototype._HandleChar=function(t){var n;if(this.state===P||t.metaKey||t.ctrlKey)return!0;n=t.which;if(n===8||n===9||n===13)return!1;if(e.browser.mozilla)if(t.keyCode||t.altKey)return!0;return e.browser.opera&&t.altKey?!0:(this.$prompt_left.text(this.$prompt_left.text()+String.fromCharCode(n)),this._ScrollToEnd(),!1)},n.prototype._HandleKey=function(t){var n;if(this.state===P)return!0;n=t.keyCode||t.which,setTimeout(e.proxy(this._CheckMatchings,this),0);if(t.altKey)return!0;if(t.ctrlKey||t.metaKey)return this._HandleCtrlShortcut(n);if(t.shiftKey){switch(n){case T:this._HandleEnter(!0);break;case O:this._Unindent();break;case M:this._MoveUp();break;case S:this._MoveDown();break;case L:this._ScrollUp();break;case k:this._ScrollDown();break;default:return!0}return!1}switch(n){case T:this._HandleEnter(!1);break;case O:this._Indent();break;case E:this._Delete(!1);break;case w:this._Backspace(!1);break;case C:this._MoveLeft(!1);break;case A:this._MoveRight(!1);break;case M:this._HistoryPrevious();break;case S:this._HistoryNext();break;case N:this.MoveToStart(!1);break;case x:this.MoveToEnd(!1);break;case L:this._ScrollUp();break;case k:this._ScrollDown();break;default:return!0}return!1},n.prototype._HandleCtrlShortcut=function(e){var t,n,r,i;switch(e){case E:this._Delete(!0);break;case w:this._Backspace(!0);break;case C:this._MoveLeft(!0);break;case A:this._MoveRight(!0);break;case M:this._MoveUp();break;case S:this._MoveDown();break;case x:this.MoveToEnd(!0);break;case N:this.MoveToStart(!0);break;default:if(e in this.shortcuts){i=this.shortcuts[e];for(n=0,r=i.length;n<r;n++)t=i[n],t.call(this);return!1}return!0}return!1},n.prototype._HandleEnter=function(e){var t,n,r=this;return e?this._InsertNewLine(!0):(n=this.GetPromptText(),t=function(e){var t,i,s,o,u,f;if(e!==!1){r.MoveToEnd(!0),r._InsertNewLine(!0),f=[];for(s=o=0,u=Math.abs(e);0<=u?o<u:o>u;s=0<=u?++o:--o)e>0?f.push(r._Indent()):f.push(r._Unindent());return f}return i=r.state===D?"input":"prompt",r.Write(r.GetPromptText(!0)+_,""+a+"old-"+i),r.ClearPromptText(!0),r.history_active&&((!r.history.length||r.history[r.history.length-1]!==n)&&r.history.push(n),r.history_index=r.history.length),r.state=P,t=r.input_callback,r.input_callback=null,t&&t(n),r._CheckInputQueue()},this.multiline_callback?this.async_multiline?this.multiline_callback(n,t):t(this.multiline_callback(n)):t(!1))},n.prototype._GetDirectionals=function(t){var n,r,i,s,o,u,a,f;return s=t?this.$prompt_left:this.$prompt_right,n=t?this.$prompt_right:this.$prompt_left,i=t?this.$prompt_before:this.$prompt_after,r=t?this.$prompt_after:this.$prompt_before,u=t?e.proxy(this.MoveToStart,this):e.proxy(this.MoveToEnd,this),o=t?e.proxy(this._MoveLeft,this):e.proxy(this._MoveRight,this),f=t?"last":"first",a=t?"prependTo":"appendTo",{$prompt_which:s,$prompt_opposite:n,$prompt_relative:i,$prompt_rel_opposite:r,MoveToLimit:u,MoveDirection:o,which_end:f,where_append:a}},n.prototype._VerticalMove=function(e){var t,n,r,i,s,o,u,a;a=this._GetDirectionals(e),r=a.$prompt_which,t=a.$prompt_opposite,n=a.$prompt_relative,s=a.MoveToLimit,i=a.MoveDirection;if(n.is(d))return;return o=this.$prompt_left.text().length,s(),i(),u=r.text(),t.text(e?u.slice(o):u.slice(0,o)),r.text(e?u.slice(0,o):u.slice(o))},n.prototype._MoveUp=function(){return this._VerticalMove(!0)},n.prototype._MoveDown=function(){return this._VerticalMove()},n.prototype._HorizontalMove=function(t,n){var r,i,s,o,u,a,f,l,c,h,p,m,g,y;y=this._GetDirectionals(n),u=y.$prompt_which,i=y.$prompt_opposite,o=y.$prompt_relative,s=y.$prompt_rel_opposite,m=y.which_end,p=y.where_append,l=n?/\w*\W*$/:/^\w*\W*/,c=u.text();if(c){if(t){g=c.match(l);if(!g)return;return g=g[0],h=i.text(),i.text(n?g+h:h+g),f=g.length,u.text(n?c.slice(0,-f):c.slice(f))}return h=i.text(),i.text(n?c.slice(-1)+h:h+c[0]),u.text(n?c.slice(0,-1):c.slice(1))}if(!o.is(d))return a=e(v)[p](s),a.append(e(v).text(this.$prompt_label.text())),a.append(e(v).text(i.text())),r=o.children()[m]().detach(),this.$prompt_label.text(r.children().first().text()),u.text(r.children().last().text()),i.text("")},n.prototype._MoveLeft=function(e){return this._HorizontalMove(e,!0)},n.prototype._MoveRight=function(e){return this._HorizontalMove(e)},n.prototype._MoveTo=function(e,t){var n,r,i,s,o,u,a;u=this._GetDirectionals(t),i=u.$prompt_which,n=u.$prompt_opposite,r=u.$prompt_relative,o=u.MoveToLimit,s=u.MoveDirection;if(e){a=[];while(!r.is(d)||i.text()!=="")o(!1),a.push(s(!1));return a}return n.text(this.$prompt_left.text()+this.$prompt_right.text()),i.text("")},n.prototype._Delete=function(e){var t,n,r;n=this.$prompt_right.text();if(n){if(e){r=n.match(/^\w*\W*/);if(!r)return;return r=r[0],this.$prompt_right.text(n.slice(r.length))}return this.$prompt_right.text(n.slice(1))}if(!this.$prompt_after.is(d))return t=this.$prompt_after.children().first().detach(),this.$prompt_right.text(t.children().last().text())},n.prototype._Backspace=function(t){var n,r,i;setTimeout(e.proxy(this._ScrollToEnd,this),0),r=this.$prompt_left.text();if(r){if(t){i=r.match(/\w*\W*$/);if(!i)return;return i=i[0],this.$prompt_left.text(r.slice(0,-i.length))}return this.$prompt_left.text(r.slice(0,-1))}if(!this.$prompt_before.is(d))return n=this.$prompt_before.children().last().detach(),this.$prompt_label.text(n.children().first().text()),this.$prompt_left.text(n.children().last().text())},n.prototype._Indent=function(){var e;return this.$prompt_left.prepend(function(){var t,n,r;r=[];for(e=t=1,n=this.indent_width;1<=n?t<=n:t>=n;e=1<=n?++t:--t)r.push(" ");return r}.call(this).join(""))},n.prototype._Unindent=function(){var e,t,n,r,i;e=this.$prompt_left.text()+this.$prompt_right.text(),i=[];for(t=n=1,r=this.indent_width;1<=r?n<=r:n>=r;t=1<=r?++n:--n){if(!/^ /.test(e))break;this.$prompt_left.text()?this.$prompt_left.text(this.$prompt_left.text().slice(1)):this.$prompt_right.text(this.$prompt_right.text().slice(1)),i.push(e=e.slice(1))}return i},n.prototype._InsertNewLine=function(t){var n,r,i;return t==null&&(t=!1),i=this._SelectPromptLabel(!this.$prompt_before.is(d)),n=e(v).appendTo(this.$prompt_before),n.append(e(v).text(i)),n.append(e(v).text(this.$prompt_left.text())),this.$prompt_label.text(this._SelectPromptLabel(!0)),t&&(r=this.$prompt_left.text().match(/^\s+/))?this.$prompt_left.text(r[0]):this.$prompt_left.text(""),this._ScrollToEnd()},n.prototype._AppendPromptText=function(e){var t,n,r,i,s,o;n=e.split(_),this.$prompt_left.text(this.$prompt_left.text()+n[0]),s=n.slice(1),o=[];for(r=0,i=s.length;r<i;r++)t=s[r],this._InsertNewLine(),o.push(this.$prompt_left.text(t));return o},n.prototype._ScrollUp=function(){var e;return e=this.$console[0].scrollTop-this.$console.height(),this.$console.stop().animate({scrollTop:e},"fast")},n.prototype._ScrollDown=function(){var e;return e=this.$console[0].scrollTop+this.$console.height(),this.$console.stop().animate({scrollTop:e},"fast")},n.prototype._ScrollToEnd=function(){var e,t=this;return this.$console.scrollTop(this.$console[0].scrollHeight),e=function(){var e,n,r,i,s,o,u;n=t.$prompt_cursor.height(),u=t.$window.scrollTop(),o=t.$window.scrollLeft(),e=document.documentElement.clientHeight,i=t.$prompt_cursor.offset(),s=t.$prompt_cursor.position(),t.$input_container.css({left:s.left,top:s.top}),r=i.top-2*n;if(t.isMobile&&typeof orientation!="undefined"&&orientation!==null){if(u<i.top||u>i.top)return t.$window.scrollTop(r)}else{if(u+e<i.top)return t.$window.scrollTop(i.top-e+n);if(u>r)return t.$window.scrollTop(i.top)}},setTimeout(e,0)},n.prototype._SelectPromptLabel=function(e){return this.state===H?e?" \n"+this.prompt_label_continue:this.prompt_label_main:e?"\n ":" "},n.prototype._outerHTML=function(t){return document.body.outerHTML?t.get(0).outerHTML:e(p).append(t.eq(0).clone()).html()},n.prototype._Wrap=function(e,t,n){var r,i;return i=e.html(),r=i.slice(0,t)+B(n,i[t])+i.slice(t+1),e.html(r)},n.prototype._WalkCharacters=function(e,t,n,r,i){var s,o,u;o=i?e.length:0,e=e.split(""),u=function(){var t,n,r,s;return i?(r=e,e=2<=r.length?F.call(r,0,n=r.length-1):(n=0,[]),t=r[n++]):(s=e,t=s[0],e=2<=s.length?F.call(s,1):[]),t&&(o+=i?-1:1),t};while(s=u()){s===t?r++:s===n&&r--;if(r===0)return{index:o,current_count:r}}return{index:-1,current_count:r}},n.prototype._ProcessMatch=function(t,n,r){var i,s,o,u,a,f,l,c,h,p,d,v,m=this;return p=n?[t.closing_char,t.opening_char]:[t.opening_char,t.closing_char],u=p[0],c=p[1],d=this._GetDirectionals(n),o=d.$prompt_which,s=d.$prompt_relative,a=1,f=!1,h=o.html(),n||(h=h.slice(1)),r&&n&&(h=h.slice(0,-1)),v=this._WalkCharacters(h,u,c,a,n),l=v.index,a=v.current_count,l>-1?(this._Wrap(o,l,t.cls),f=!0):(i=s.children(),i=n?Array.prototype.reverse.call(i):i,i.each(function(r,i){var s,o;s=e(i).children().last(),h=s.html(),o=m._WalkCharacters(h,u,c,a,n),l=o.index,a=o.current_count;if(l>-1)return n||l--,m._Wrap(s,l,t.cls),f=!0,!1})),f},n.prototype._CheckMatchings=function(t){var n,r,i,s,o,u,a;i=t?this.$prompt_left.text().slice(this.$prompt_left.text().length-1):this.$prompt_right.text()[0],a=this.matchings.clss;for(o=0,u=a.length;o<u;o++)n=a[o],e("."+n,this.$console).contents().unwrap();(r=this.matchings.closings[i])?s=this._ProcessMatch(r,!0,t):(r=this.matchings.openings[i])?s=this._ProcessMatch(r,!1,t):t||this._CheckMatchings(!0);if(t){if(s)return this._Wrap(this.$prompt_left,this.$prompt_left.html().length-1,r.cls)}else if(s)return this._Wrap(this.$prompt_right,0,r.cls)},n.prototype._HistoryPrevious=function(){if(!this.history_active)return;if(this.history_index<=0)return;return this.history_index===this.history.length&&(this.history_new=this.GetPromptText()),this.SetPromptText(this.history[--this.history_index])},n.prototype._HistoryNext=function(){if(!this.history_active)return;if(this.history_index>=this.history.length)return;return this.history_index===this.history.length-1?(this.history_index++,this.SetPromptText(this.history_new)):this.SetPromptText(this.history[++this.history_index])},n.prototype._CheckComposition=function(t){var n;n=t.keyCode||t.which,e.browser.opera!=null&&this.in_composition&&this._UpdateComposition();if(n===229)return this.in_composition?this._UpdateComposition():this._StartComposition()},n.prototype._StartComposition=function(){return this.$input_source.bind(y,this._EndComposition),this.in_composition=!0,this._ShowComposition(),setTimeout(this._UpdateComposition,0)},n.prototype._EndComposition=function(){return this.$input_source.unbind(y,this._EndComposition),this.in_composition=!1,this._HideComposition(),this.$input_source.val("")},n.prototype._UpdateComposition=function(e){var t,n=this;return t=function(){if(!n.in_composition)return;return n.$composition.text(n.$input_source.val())},setTimeout(t,0)},n.prototype._ShowComposition=function(){return this.$composition.css("height",this.$prompt_cursor.height()),this.$composition.empty(),this.$composition.appendTo(this.$prompt_left)},n.prototype._HideComposition=function(){return this.$composition.detach()},n}(),e.fn.jqconsole=function(e,t,n){return new b(this,e,t,n)},e.fn.jqconsole.JQConsole=b,e.fn.jqconsole.Ansi=t}).call(this);