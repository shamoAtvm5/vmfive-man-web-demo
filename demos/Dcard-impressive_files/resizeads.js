var win=window.parent,firstCall=0;function resize(){var a=0;if(navigator.userAgent.match(/WebKit/)){a=document.documentElement.scrollHeight}else{a=document.body.scrollHeight}if(undefined!==window.ypaAdHeightOffset){a+=window.ypaAdHeightOffset}var b={evId:"ypapostmessage",eNm:window.name,aC:ac,rs:{eH:a}};if(firstCall===0){b.cb={errObj:errObj};firstCall=1}try{var d=JSON.stringify(b);win.postMessage("ypa"+d,"*")}catch(c){}}if(window.addEventListener){window.addEventListener("resize",resize,false)}else{window.attachEvent("onresize",resize)}resize();