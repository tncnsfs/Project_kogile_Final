/*window.onload= function(){
    		var btn = document.querySelector('input');
		var text = document.querySelector('textarea');
		var list = document.querySelector('#list');
		var colors = [ "red", "pink" ];
		var nub = 0;
		btn.onclick = function() {
			if (text.value.trim() == "") {
				alert("입력하기");
				return false;
			}
			var li = document.createElement("li");
			li.innerHTML = text.value;
			// li.className = colors[nub%colors.length];
			/* 判断a标签已经被添加，就让a标签显示出来，否则就添加 */

			if (list.children[0] && list.children[0].className == "red") {
				li.className = "pink";
			} else {
				li.className = "red";
			}
			var a = null;
			li.onmouseover = function() {
				if (a) {
					a.style.display = "block";
				} else {
					a = document.createElement("a");
					a.href = "javascript:;";
					a.className = "clos";
					a.innerHTML = "삭제";
					a.onclick = function() {
						list.removeChild(this.parentNode);
					};
					this.appendChild(a);
				}
			};
			li.onmouseout = function() {
				a.style.display = "none";
			};
			list.insertBefore(li, list.children[0]);
			text.value = "";
			nub++ ;
		};
};*/


function MM_preloadImages() { var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array(); var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++) if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}} }
function MM_swapImgRestore() { var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc; }
function MM_findObj(n, d) { var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) { d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p); } if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n]; for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); if(!x && d.getElementById) x=d.getElementById(n); return x; }
function MM_swapImage() { var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3) if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];} }

function bluring() { if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus(); } 
document.onfocusin=bluring; 
function bt(id,after){ document.getElementById(id).src=after; }
function onlyNum(el){ el.value = el.value.replace(/\D/g,''); }
//String.prototype.trim = function() { return this.replace(/(^[ \f\n\r\t]*)|([ \f\n\r\t]*$)/g, ""); }
function setCookie(cookieName, cookieValue, expires, path, domain, secure) { document.cookie = escape(cookieName) + '=' + escape(cookieValue) + (expires ? '; EXPIRES=' + expires.toGMTString() : '') + (path ? '; PATH=' + path : '') + (domain ? '; DOMAIN=' + domain : '') + (secure ? '; SECURE' : ''); } 
function getCookie( name ) { var nameOfCookie = name + "="; var x = 0; while ( x <= document.cookie.length ) { var y = (x+nameOfCookie.length); if ( document.cookie.substring( x, y ) == nameOfCookie ) { if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) endOfCookie = document.cookie.length; return unescape( document.cookie.substring( y, endOfCookie ) ); } x = document.cookie.indexOf( " ", x ) + 1; if ( x == 0 ) break; } return ""; }
var _ua = navigator.userAgent.toLowerCase();
function goto_url(url) { location.href=url; }
function view_image(img) { var view_image = window.open("/inc/view_image.html?img=" + img,"viewImg", "width=520 ,height=400,resizable=yes,scrollbars=no"); view_image.focus(); return; }
String.prototype.trim = function() { return this.replace(/(^[ \f\n\r\t]*)|([ \f\n\r\t]*$)/g, ""); }
//숫자키만 입력
function checkNumKeyDwn(obj, e)
{
	if (!e)	e = window.event;

	var kc = e.keyCode ? e.keyCode : e.which ? e.which : e.charCod;
	if ((kc <= 57 && kc >= 48) || (kc <= 105 && kc >= 96) || kc < 33
			|| kc == 46 || kc == 37 || kc == 39) {
		return true;
	} else {
		if (_ua.indexOf("firefox") != -1) {
			e.preventDefault();
		} else {
			alert("숫자만 입력할수 있습니다.");
			e.returnValue = false;
		}
		return false;
	}
}

function lang_change(v) {
		//alert(getCookie('ck_lang'));
		setCookies('ck_lang', v);
		location.reload();
}


/**
 * byte를 용량에 따라 b, kb, mb, gb, tb로 계산하여 리턴함 (JavaScript)
 *
 * @param int bytes
 * @return String
 */
function byteConvertor(bytes) {
	bytes = parseInt(bytes);
	var s = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
	var e = Math.floor(Math.log(bytes)/Math.log(1024));
	if(e == "-Infinity") return "0 "+s[0]; 
	else return (bytes/Math.pow(1024, Math.floor(e))).toFixed(2)+" "+s[e];
}

function resizeBbsImage(imageWidth, borderColor) {
	var target = document.getElementsByName('target_resize_image[]');
	var imageHeight = 0;

	if (target) {
		for(i=0; i<target.length; i++) { 
			target[i].tmp_width  = target[i].width;
			target[i].tmp_height = target[i].height;
			if(target[i].width > imageWidth) {
				imageHeight = parseFloat(target[i].width / target[i].height)
				target[i].width = imageWidth;
				target[i].height = parseInt(imageWidth / imageHeight);
				target[i].style.cursor = 'pointer';

				target[i].style.width = '';
				target[i].style.height = '';
			}
			if (borderColor) {
				target[i].style.borderWidth = '1px';
				target[i].style.borderStyle = 'solid';
				target[i].style.borderColor = borderColor;
			}
		}
	}
}

function image_window(img) {
		var w = img.tmp_width; 
		var h = img.tmp_height; 
		var winl = (screen.width-w)/2; 
		var wint = (screen.height-h)/3; 

		if (w >= screen.width) { 
				winl = 0; 
				h = (parseInt)(w * (h / w)); 
		} 

		if (h >= screen.height) { 
				wint = 0; 
				w = (parseInt)(h * (w / h)); 
		} 

		var js_url = "<script language='JavaScript1.2'> \n"; 
				js_url += "<!-- \n"; 
				js_url += "var ie=document.all; \n"; 
				js_url += "var nn6=document.getElementById&&!document.all; \n"; 
				js_url += "var isdrag=false; \n"; 
				js_url += "var x,y; \n"; 
				js_url += "var dobj; \n"; 
		    js_url += "function movemouse(e) \n"; 
        js_url += "{ \n"; 
        js_url += "  if (isdrag) \n"; 
        js_url += "  { \n"; 
        js_url += "    dobj.style.left = nn6 ? tx + e.clientX - x : tx + event.clientX - x; \n"; 
        js_url += "    dobj.style.top  = nn6 ? ty + e.clientY - y : ty + event.clientY - y; \n"; 
        js_url += "    return false; \n"; 
        js_url += "  } \n"; 
        js_url += "} \n"; 
        js_url += "function selectmouse(e) \n"; 
        js_url += "{ \n"; 
        js_url += "  var fobj      = nn6 ? e.target : event.srcElement; \n"; 
        js_url += "  var topelement = nn6 ? 'HTML' : 'BODY'; \n"; 
				js_url += "  while (fobj.tagName != topelement && fobj.className != 'dragme') \n"; 
				js_url += "  { \n"; 
				js_url += "    fobj = nn6 ? fobj.parentNode : fobj.parentElement; \n"; 
				js_url += "  } \n"; 
				js_url += "  if (fobj.className=='dragme') \n"; 
				js_url += "  { \n"; 
				js_url += "    isdrag = true; \n"; 
				js_url += "    dobj = fobj; \n"; 
				js_url += "    tx = parseInt(dobj.style.left+0); \n"; 
				js_url += "    ty = parseInt(dobj.style.top+0); \n"; 
				js_url += "    x = nn6 ? e.clientX : event.clientX; \n"; 
				js_url += "    y = nn6 ? e.clientY : event.clientY; \n"; 
				js_url += "    document.onmousemove=movemouse; \n"; 
				js_url += "    return false; \n"; 
				js_url += "  } \n"; 
				js_url += "} \n"; 
				js_url += "document.onmousedown=selectmouse; \n"; 
				js_url += "document.onmouseup=new Function('isdrag=false'); \n"; 
				js_url += "//--> \n"; 
			  js_url += "</"+"script> \n"; 

		var settings;

		if (_ua.indexOf("gecko") != -1) {
				settings  ='width='+(w+10)+','; 
	      settings +='height='+(h+10)+','; 
		} else {
				settings  ='width='+w+','; 
				settings +='height='+h+','; 
		}
		settings +='top='+wint+','; 
		settings +='left='+winl+','; 
		settings +='scrollbars=no,'; 
		settings +='resizable=yes,'; 
		settings +='status=no'; 


		win=window.open("","image_window",settings); 
	  win.document.open(); 
    win.document.write ("<html><head> \n<meta http-equiv='imagetoolbar' CONTENT='no'> \n<meta http-equiv='content-type' content='text/html; charset=euc-kr'>\n"); 
		var size = "이미지 사이즈 : "+w+" x "+h;
		win.document.write ("<title>"+size+"</title> \n"); 
		if(w >= screen.width || h >= screen.height) { 
				win.document.write (js_url); 
				var click = "ondblclick='window.close();' style='cursor:move' title=' "+size+" \n\n 이미지 사이즈가 화면보다 큽니다. \n 왼쪽 버튼을 클릭한 후 마우스를 움직여서 보세요. \n\n 더블 클릭하면 닫혀요. '"; 
		} 
		else 
				var click = "onclick='window.close();' style='cursor:pointer' title=' "+size+" \n\n 클릭하면 닫혀요. '"; 
		win.document.write ("<style>.dragme{position:relative;}</style> \n"); 
		win.document.write ("</head> \n\n"); 
		win.document.write ("<body leftmargin=0 topmargin=0 bgcolor=#dddddd style='cursor:arrow;'> \n"); 
		win.document.write ("<table width=100% height=100% cellpadding=0 cellspacing=0><tr><td align=center valign=middle><img src='"+img.src+"' width='"+w+"' height='"+h+"' border=0 class='dragme' "+click+"></td></tr></table>");
		win.document.write ("</body></html>"); 
		win.document.close(); 

		if(parseInt(navigator.appVersion) >= 4){win.window.focus();} 
}

function Email_Check(String)
{
   var checkflag = true;
   var retvalue;

   if ($.trim(String) == "")
      return false;

   if (window.RegExp) {
      var tempstring = "a";
      var exam = new RegExp(tempstring);
      if (tempstring.match(exam)) {
         var ret1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
         var ret2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$");
         retvalue = (!ret1.test(String) && ret2.test(String));
      } else {
         checkflag = false;
      }
   } else {
      checkflag = false;
   }

   if (!checkflag) {
      retvalue = ( (String != "") && (String.indexOf("@")) > 0 && (String.indexOf(".") > 0) ); 
   }
   return retvalue;
}