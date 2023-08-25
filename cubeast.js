(g(8),v("formGroup",i.form),g(5),v("ngForOf",i.errorsForFormControl(i.form,"mac")),g(34),v("disabled",!i.form.valid||le(48,3,i.requestInProgress)))},directives:[ba,ta,qs,$s,gs,js,ir,sa,Yr,Fs,sr,Pn,na,uy,h0,f0,eh,So,Ft],pipes:[bt],styles:["[_nghost-%COMP%]{display:block;max-width:640px}mat-dialog-content[_ngcontent-%COMP%]{padding-bottom:12px}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:auto!important}.mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}h3[_ngcontent-%COMP%]{font-weight:700}"],changeDetection:0}),n})();var Oue=Z(2729);const cN=new Uint8Array([1,2,66,40,49,145,22,7,32,5,24,84,66,17,18,83]),lN=new Uint8Array([17,3,50,40,33,1,118,39,32,149,120,20,50,18,2,67]);class Gwt extends SD{constructor(t){super(),this.key=new Uint8Array(16),this.ivKey=new Uint8Array(16);const e=t.split(":");if(6!==e.length)throw new Error("Expected device MAC to have 6 elements");for(let i=0;i<6;i++){const s=parseInt(e[5-i],16);this.key[i]=(cN[i]+s)%255,this.ivKey[i]=(lN[i]+s)%255}this.key.set(cN.slice(6),6),this.ivKey.set(lN.slice(6),6)}get encryptor(){return new Oue.ModeOfOperation.cbc(this.key,this.ivKey)}decrypt(t){const e=new Uint8Array(t.buffer);let i;if(e.length>16){const s=e.slice(0),r=this.encryptor.decrypt(s.slice(s.length-16));s.set(r,s.length-16);const a=this.encryptor.decrypt(s.slice(0,16));s.set(a,0),i=s}else i=new Oue.ModeOfOperation.cbc(cN,lN).decrypt(e);return new DataView(i.buffer)}encrypt(t){const e=new Uint8Array(t.buffer);if(e.length<=16){const a=this.encryptor.encrypt(e);return new DataView(a.buffer)}const i=e.slice(0),s=this.encryptor.encrypt(i.slice(0,16));i.set(s,0);const r=this.encryptor.encrypt(i.slice(i.length-16));return i.set(r,i.length-16),new DataView(i.buffer)}}class Ywt{constructor(){this.name="i Carry",this.manufacturer="Gan",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000004"}}class Wwt{constructor(){this.name="12 UI",this.manufacturer="Gan",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000004"}}class jwt{constructor(){this.name="356i 3",this.manufacturer="Gan",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000004"}}class $wt{constructor(){this.name="Monster Go 3i",this.manufacturer="Gan",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000004"}}class Zwt{constructor(t){this.messages=t,this.batteryLevel=new Yt(100),this.pings=new Ks(1),this.signalStrength=this.pings.pipe(Qv(4),ue(e=>this.pingsToSignalStrength(e)),Jn())}setup(){this.sendRequest(),this.setIntervalTimer=window.setInterval(()=>this.sendRequest(),2e3)}teardown(){this.setIntervalTimer&&(window.clearInterval(this.setIntervalTimer),this.setIntervalTimer=void 0),this.subscription&&this.subscription.unsubscribe()}sendRequest(){const t=this.messages.requestPower();this.sentAt=(new Date).getTime(),t.then(e=>this.handleResponse(e))}handleResponse(t){this.batteryLevel.next(t.power);const e=(new Date).getTime()-(this.sentAt||0);this.pings.next(e)}pingsToSignalStrength(t){const e=t.reduce((i,s)=>i+s,0)/t.length;return this.pingToSignalStrength(e)}pingToSignalStrength(t){return t>600?Lo.VeryWeak:t>300?Lo.Weak:Lo.Strong}}class Qwt{constructor(t,e,i,s,r,a,o){this.name=t,this.driver=e,this.bluetoothDevice=i,this.messages=s,this.mac=r,this.stateHandler=a,this.stateTracker=o,this.model=this.modelForName(this.name),this.disconnected=this.bluetoothDevice.bluetoothApiDevice.disconnected,this.disconnected.then(()=>this.onDisconnected()),this.batteryWatcher=new Zwt(this.messages),this.batteryLevel=this.batteryWatcher.batteryLevel,this.signalStrength=this.batteryWatcher.signalStrength,this.batteryWatcher.setup()}timeSynchronizationEnabled(t){t?this.stateHandler.enableTimeSynchronization():this.stateHandler.disableTimeSynchronization()}onDisconnected(){return Tn(this,void 0,void 0,function*(){this.batteryWatcher.teardown(),this.stateHandler.teardown()})}metadata(){return Tn(this,void 0,void 0,function*(){const t=yield this.messages.requestInfo();return{mac:this.mac,software:t.softwareVersion,hardware:t.hardwareVersion,deviceName:t.deviceName.replace("\0",""),gyroEnabled:t.gyroEnabled,gyroCorrect:t.gyroCorrect,reboot:t.reboot}})}resetToSolvedState(){const t=this.messages.requestReset();return t.then(()=>this.stateHandler.reset()),t}disconnect(){this.bluetoothDevice.disconnect()}modelForName(t){const e=t.toLowerCase();if(e.startsWith("ganic"))return new Ywt;if(e.startsWith("gani3"))return new jwt;if(e.startsWith("gan12"))return new Wwt;if(e.startsWith("mg3i"))return new $wt;throw new Error(`Unknown Gan model: ${t}`)}}function Ao(n,t,e,i,s,r=!0){let a=0;const o=[];for(;n<s.byteLength;){let c=0,l=0;for(;c<e&&n<s.byteLength;){let w,f=8-t,m=Math.min(c+f,e),_=m-c,y=f-_;if(w=r?(s.getUint8(n)&zue(t))>>y<<e-m:(s.getUint8(n)&zue(t))>>y<<c,l+=w,c+=_,t+=_,0==y&&(n++,t=0),c==e){o.push(l),a++;break}}if(i>0&&a>=i)break}return o}function zue(n,t=8){n=t-n,n=Math.min(n,31);let e=0;for(let i=0;i<n;i++)e+=Math.pow(2,i);return e}class Fue{constructor(t,e){this.seq=t,this.pieceState=e}}class Vue{constructor(t,e,i,s,r,a){this.reboot=t,this.softwareVersion=e,this.hardwareVersion=i,this.deviceName=s,this.gyroEnabled=r,this.gyroCorrect=a}}const tSt={0:new bs("U",1),1:new bs("U",-1),2:new bs("R",1),3:new bs("R",-1),4:new bs("F",1),5:new bs("F",-1),6:new bs("D",1),7:new bs("D",-1),8:new bs("L",1),9:new bs("L",-1),10:new bs("B",1),11:new bs("B",-1),12:new bs("E",1),13:new bs("E",-1),14:new bs("M",1),15:new bs("M",-1),16:new bs("S",1),17:new bs("S",-1)};class Rue{constructor(t,e){this.seq=t,this.lastTurns=e}}class Nue{constructor(t,e){this.state=t,this.power=e}}function aSt(n){return n instanceof Nue}function Bue(n){return n instanceof Fue}function oSt(n){return n instanceof Vue}function cSt(n){return n instanceof Rue}function lSt(n){return n instanceof class iSt{}}function uSt(n){return n instanceof class sSt{}}class dSt{constructor(){}}const fSt=[new class hSt{constructor(){this.messageTypeId=1}parse(t){return new dSt}},new class nSt{constructor(){this.messageTypeId=2}parse(t){const e=Ao(0,4,8,1,t)[0],i=Ao(1,4,5,7,t),s=Ao(5,7,16,7,t),r=i.map(o=>tSt[o]),a=[];for(let o=0;o<6;o++)a.push(new c2(r[o],s[o]));return new Rue(e,a)}},new class rSt{constructor(){this.messageTypeId=9}parse(t){const e=Ao(0,4,4,1,t)[0],i=Ao(1,0,8,1,t)[0];return new Nue(e,i)}},new class eSt{constructor(){this.messageTypeId=5}parse(t){const e=Ao(0,4,4,1,t)[0],i=Ao(1,0,8,2,t),s=Ao(3,0,8,2,t),r=Ao(5,0,8,8,t),a=1===Ao(13,0,1,1,t)[0],o=1===Ao(13,1,1,1,t)[0],c=s.join("."),l=i.join("."),f=String.fromCharCode(...r);return new Vue(e,c,l,f,a,o)}},new class Jwt{constructor(){this.messageTypeId=4}parse(t){const e=Ao(0,4,8,1,t)[0],i=Ao(1,4,3,7,t),s=Ao(4,1,2,7,t),r=Ao(5,7,4,11,t),a=Ao(11,3,1,11,t),o=this.createEdgeState(r,a),c=this.createCornerState(i,s),l=new zr(Object.assign({},o,c));return new Fue(e,l)}createEdgeState(t,e){const i={},s=t.map(o=>H1[o]);s.forEach((o,c)=>{i[H1[c]]=new ls(o,e[c])});const r=e.reduce((o,c)=>o+c,0),a=P3().difference(H1,s);return i[H1[H1.length-1]]=new ls(a[0],(2-r%2)%2),H1.some(o=>void 0===i[o].name)&&console.error("Invalid state"),i}createCornerState(t,e){const i={},s=t.map(o=>rc[o]);s.forEach((o,c)=>{i[rc[c]]=new Ar(o,e[c])});const r=e.reduce((o,c)=>o+c,0),a=P3().difference(rc,s);return i[rc[rc.length-1]]=new Ar(a[0],(3-r%3)%3),i}}];class mSt{constructor(t,e,i){this.readCharacteristic=t,this.writeCharacteristic=e,this.encryption=i,this.messages=this.readCharacteristic.value.pipe(ue(s=>this.encryption.decrypt(s)),ue(s=>this.handleMessage(s)),Dn)}handleMessage(t){const e=Ao(0,0,4,1,t)[0],i=function pSt(n){return fSt.find(t=>t.messageTypeId===n)}(e);if(i)return i.parse(t);console.error(`Unrecognized Gan message type: ${e}`)}requestFacelets(){return this.sendSimpleRequest(Bue,4)}requestInfo(){return this.sendSimpleRequest(oSt,5)}requestMovesInterval(t,e){return this.sendSimpleRequest(uSt,6,t,e)}requestMoves(t,e){return this.sendSimpleRequest(lSt,7,t,e)}requestPower(){return this.sendSimpleRequest(aSt,9)}requestReset(){return this.sendRequest(Bue,[10,5,57,119,0,0,1,35,69,103,137,171,0,0,0,0,0,0,0,0])}sendSimpleRequest(t,e,i=0,s=0){return this.sendRequest(t,[e,i,s,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])}sendRequest(t,e){const i=this.messages.pipe(yn(t),Mn()).toPromise(),s=new Uint8Array(e),r=this.encryption.encrypt(new DataView(s.buffer));return this.writeCharacteristic.writeValue(r.buffer),i}}class bSt{constructor(t){this.messages=t,this.stateEvents=new Ks(1),this.drift=[],this.synchronization=!0,this.setup()}enableTimeSynchronization(){this.synchronization=!0}disableTimeSynchronization(){this.synchronization=!1}setup(){return Tn(this,void 0,void 0,function*(){const t=yield this.messages.requestFacelets();this.lastSeq=t.seq,this.stateEvents.next(new R3(t.pieceState)),this.startTrackingTurns()})}teardown(){this.subscription&&this.subscription.unsubscribe(),this.stateEvents.complete()}reset(){this.stateEvents.next(new R3(zr.solved))}startTrackingTurns(){this.subscription=this.messages.messages.pipe(yn(cSt)).subscribe(t=>this.handleMessage(t))}handleMessage(t){const i=(new Date).getTime()+-30,s=this.numberOfTurnsSincePreviousUpdate(this.lastSeq,t.seq);if(this.lastSeq=t.seq,s>6)console.error(`Dropped turns, ${s} new turns, but only 6 supported`);else{if(this.synchronization&&this.lastTimestamp){const r=i-(this.lastTimestamp+t.lastTurns[0].timestamp);if(r<0&&(this.lastTimestamp+=r),r>100){if(this.drift.push(r),this.drift.length>=8){const a=Math.round(this.drift.reduce((o,c)=>o+c,0)/this.drift.length);this.lastTimestamp+=a}}else this.drift=[]}for(let r=0;r<s;r++){const a=t.lastTurns[s-r-1];let o;o=!this.lastTimestamp||a.timestamp>=65535?i:this.lastTimestamp+a.timestamp,t.seq%2==0&&(o+=1),this.lastTimestamp=o,this.stateEvents.next(new c2(new bs(a.faceName,a.direction),o))}}}numberOfTurnsSincePreviousUpdate(t,e){let i=e-t;return i=i<0?i+256:i,i}}class ySt{constructor(t,e,i,s,r){this.bluetoothDevice=t,this.driver=e,this.dialog=i,this.ganMacApi=s,this.device=r}connect(){return Tn(this,void 0,void 0,function*(){const t=yield this.ganMac(),e=new Gwt(t),i=new mSt(this.bluetoothDevice.mainService.readCharacteristic,this.bluetoothDevice.mainService.writeCharacteristic,e),s=new bSt(i),r=yield V4.createForStateEvents(s.stateEvents);let a;return a=this.bluetoothDevice.name.startsWith("GANicXXX")||this.bluetoothDevice.name.startsWith("GANi3XXX")?(yield i.requestInfo()).deviceName.replace("\0",""):this.bluetoothDevice.name,new Qwt(a,this.driver,this.bluetoothDevice,i,t,s,r)})}ganMac(){return Tn(this,void 0,void 0,function*(){if(this.device&&this.device.metadata&&this.device.metadata.mac)return this.device.metadata.mac;const t=yield this.collectTurns();if(!t)throw new Error("Cancelled");let e=yield this.ganMacApi.search(this.bluetoothDevice.name,t).toPromise();for(;!e;)if(e=yield this.collectGanMac(this.bluetoothDevice.name,t),!e)throw new Error("Cancelled");return e.mac})}collectTurns(){return Tn(this,void 0,void 0,function*(){const t=this.dialog.open(Cwt,{data:this.bluetoothDevice});return this.bluetoothDevice.bluetoothApiDevice.disconnected.then(()=>{t&&0==t.getState()&&t.close()}),yield t.afterClosed().toPromise()})}collectGanMac(t,e){return Tn(this,void 0,void 0,function*(){const i=this.dialog.open(Uwt,{data:{name:t,packets:e}});return this.bluetoothDevice.bluetoothApiDevice.disconnected.then(()=>{i&&0==i.getState()&&i.close()}),yield i.afterClosed().toPromise()})}}class xSt{constructor(t,e){this.ganMacApi=t,this.dialog=e}connect(t,e,i){return Tn(this,void 0,void 0,function*(){const s=new xwt(t);return yield s.connect(),new ySt(s,e,this.dialog,this.ganMacApi,i).connect()})}}class CSt{constructor(t,e){this.ganMacApi=t,this.dialog=e,this.name="gan356i",this.bluetoothNamePrefixes=["GAN","MG"],this.serviceUUIDs=[sN,wue,kue,"00001800-0000-1000-8000-00805f9b34fb"]}supported(t){return Tn(this,void 0,void 0,function*(){return this.bluetoothNamePrefixes.some(e=>{var i;return null===(i=t.name)||void 0===i?void 0:i.startsWith(e)})})}connect(t,e){return Tn(this,void 0,void 0,function*(){let i=new _wt;try{yield t.service(sN),console.log("API v1 detected")}catch(s){i=new xSt(this.ganMacApi,this.dialog),console.log("API v2 detected")}return i.connect(t,this,e)})}}class TSt extends o2{constructor(){super(...arguments),this.name="Request",this.uuid="0000aaac-0000-1000-8000-00805f9b34fb"}batteryLevel(){return this.writeValue(this.numberToData(181))}reset(){return this.writeValue(this.numberToData(161))}numberToData(t){return new Uint8Array([t]).buffer}}class LSt extends gf{constructor(){super(...arguments),this.name="Response",this.uuid="0000aaab-0000-1000-8000-00805f9b34fb",this.readable=!1}}const Uue="0000aaaa-0000-1000-8000-00805f9b34fb";class DSt extends mf{constructor(){super(...arguments),this.name="Request and Response",this.uuid=Uue,this.requestCharacteristic=new TSt,this.responseCharacteristic=new LSt,this.characteristics=[this.requestCharacteristic,this.responseCharacteristic]}}class kSt extends gf{constructor(){super(...arguments),this.name="Turn",this.uuid="0000aadc-0000-1000-8000-00805f9b34fb",this.readable=!0}}const Gue="0000aadb-0000-1000-8000-00805f9b34fb";class ESt extends mf{constructor(){super(...arguments),this.name="State",this.uuid=Gue,this.turnCharacteristic=new kSt,this.characteristics=[this.turnCharacteristic]}}class PSt extends ig{constructor(){super(...arguments),this.stateService=new ESt,this.requestService=new DSt,this.services=[this.stateService,this.requestService]}}class zSt{constructor(t){this.requestService=t,this.batteryLevel=new Yt(100),this.pings=new Ks(1),this.batteryLevelExpected=!1,this.signalStrength=this.pings.pipe(Qv(4),ue(e=>this.pingsToSignalStrength(e)),Jn())}setup(){this.sendRequest(),this.setIntervalTimer=window.setInterval(()=>this.sendRequest(),2e3),this.responseSubscription=this.requestService.responseCharacteristic.value.subscribe(t=>this.handleResponse(t))}teardown(){this.setIntervalTimer&&(window.clearInterval(this.setIntervalTimer),this.setIntervalTimer=void 0),this.responseSubscription&&this.responseSubscription.unsubscribe()}sendRequest(){this.batteryLevelExpected=!0,this.requestService.requestCharacteristic.batteryLevel(),this.sentAt=(new Date).getTime()}handleResponse(t){const e=t.getUint8(1);this.batteryLevelExpected&&e<=100&&(this.batteryLevelExpected=!1,this.batteryLevel.next(e));const i=(new Date).getTime()-(this.sentAt||0);this.pings.next(i)}pingsToSignalStrength(t){const e=t.reduce((i,s)=>i+s,0)/t.length;return this.pingToSignalStrength(e)}pingToSignalStrength(t){return t>600?Lo.VeryWeak:t>300?Lo.Weak:Lo.Strong}}class FSt{constructor(t,e,i,s,r){this.driver=t,this.model=e,this.bluetooth=i,this.stateTracker=s,this.stateHandler=r,this.name=i.name,this.disconnected=this.bluetooth.bluetoothApiDevice.disconnected,this.disconnected.then(()=>this.onDisconnected()),this.batteryWatcher=new zSt(this.bluetooth.requestService),this.batteryLevel=this.batteryWatcher.batteryLevel,this.signalStrength=this.batteryWatcher.signalStrength,this.batteryWatcher.setup()}timeSynchronizationEnabled(t){}onDisconnected(){return Tn(this,void 0,void 0,function*(){this.batteryWatcher.teardown(),this.stateHandler.teardown()})}disconnect(){this.bluetooth.disconnect()}resetToSolvedState(){const t=this.bluetooth.requestService.requestCharacteristic.reset();return t.then(()=>this.stateHandler.reset()),t}metadata(){return Promise.resolve({})}}class VSt{constructor(){this.name="Giiker i3",this.manufacturer="Xiaomi",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000002"}}class RSt{constructor(){this.name="Giiker i3S",this.manufacturer="Xiaomi",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000003"}}class NSt{constructor(){this.name="Giiker i3Y",this.manufacturer="Xiaomi",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000006"}}class BSt extends SD{decrypt(t){const e=new Uint8Array(t.buffer);if(167===e[18]){const i=[176,81,104,224,86,137,237,119,38,26,193,161,210,126,150,81,93,13,236,249,89,235,88,24,113,81,214,131,130,199,2,169,39,165,171,41],s=e[19]>>4&15,r=15&e[19];for(let a=0;a<18;a++)e[a]+=i[a+s]+i[a+r];return new DataView(e.slice(0,18).buffer)}return t}}const USt=["DF","FR","UF","FL","DR","UR","UL","DL","DB","BR","UB","BL"],GSt=["DFR","URF","UFL","DLF","DRB","UBR","ULB","DBL"],YSt=[1,2,1,2,2,1,2,1],WSt=[2,1,2,1,1,2,1,2],jSt=[-1,1,-1,1,1,-1,1,-1],Yue=[0,0,0,0,1,1,1,1,0,0,0,0];class $St{parse(t){const e=this.giikerState(t);return new zr({DF:this.createEdge(e,0),FR:this.createEdge(e,1),UF:this.createEdge(e,2),FL:this.createEdge(e,3),DR:this.createEdge(e,4),UR:this.createEdge(e,5),UL:this.createEdge(e,6),DL:this.createEdge(e,7),DB:this.createEdge(e,8),BR:this.createEdge(e,9),UB:this.createEdge(e,10),BL:this.createEdge(e,11),DFR:this.createCorner(e,0),URF:this.createCorner(e,1),UFL:this.createCorner(e,2),DLF:this.createCorner(e,3),DRB:this.createCorner(e,4),UBR:this.createCorner(e,5),ULB:this.createCorner(e,6),DBL:this.createCorner(e,7)})}giikerState(t){const e={cornerPositions:[],cornerOrientations:[],edgePositions:[],edgeOrientations:[]};for(let i=0;i<t.byteLength;i++){const s=t.getUint8(i),r=s>>4,a=15&s;i<4?e.cornerPositions.push(r-1,a-1):i<8?e.cornerOrientations.push(r,a):i<14?e.edgePositions.push(r-1,a-1):i<16&&(e.edgeOrientations.push(128&s),e.edgeOrientations.push(64&s),e.edgeOrientations.push(32&s),e.edgeOrientations.push(16&s),14===i&&(e.edgeOrientations.push(8&s),e.edgeOrientations.push(4&s),e.edgeOrientations.push(2&s),e.edgeOrientations.push(1&s)))}return e.edgeOrientations=e.edgeOrientations.map(i=>i>0?1:0),e}createCorner(t,e){return new Ar(GSt[t.cornerPositions[e]],this.transformCornerOrientation(t.cornerOrientations[e],t.cornerPositions[e],e))}transformCornerOrientation(t,e,i){return(3+jSt[i]*t+YSt[i]+WSt[e])%3}createEdge(t,e){return new ls(USt[t.edgePositions[e]],this.transformEdgeOrientation(t.edgeOrientations[e],t.edgePositions[e],e))}transformEdgeOrientation(t,e,i){return t^Yue[i]^Yue[e]}}const qSt={1:yt.B.name,2:yt.D.name,3:yt.L.name,4:yt.U.name,5:yt.R.name,6:yt.F.name};class KSt{parse(t){const e=t.getUint8(16);return new c2(new bs(qSt[e>>4],1==(15&e)?1:-1),(new Date).getTime()-100)}}class ZSt{constructor(t){this.stateService=t,this.stateEventExpected=!0,this.encryption=new BSt,this.stateEvents=new et}setup(){this.turnCharacteristicSubscription=this.stateService.turnCharacteristic.value.subscribe(t=>this.handleCubeChange(t))}teardown(){this.turnCharacteristicSubscription&&(this.turnCharacteristicSubscription.unsubscribe(),this.turnCharacteristicSubscription=void 0),this.stateEvents.complete()}reset(){this.stateEventExpected=!0}handleCubeChange(t){if(t=this.encryption.decrypt(t),this.stateEventExpected)return this.stateEventExpected=!1,void this.stateEvents.next(new R3((new $St).parse(t)));this.stateEvents.next((new KSt).parse(t))}}class QSt{constructor(){this.name="Giiker i3SE",this.manufacturer="Xiaomi",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000003"}}class JSt{constructor(){this.name="Mi Smart Magic Cube",this.manufacturer="Xiaomi",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000007"}}class eTt{connect(t,e){return Tn(this,void 0,void 0,function*(){const i=yield this.recognize(t);console.log(`Recognized ${i.manufacturer} ${i.name}`);const s=new ZSt(t.stateService),r=V4.createForStateEvents(s.stateEvents);s.setup();const a=yield r;return new FSt(e,i,t,a,s)})}recognize(t){return Tn(this,void 0,void 0,function*(){return t.name.startsWith("GiC")?new VSt:t.name.startsWith("GiS")?new RSt:t.name.startsWith("Mi Smart")?new JSt:yield t.stateService.turnCharacteristic.value.pipe(Mn(),ue(i=>167===i.getUint8(18))).pipe(ue(i=>i?new QSt:new NSt)).toPromise()})}}class tTt{constructor(){this.name="giiker_i3",this.serviceUUIDs=[Gue,Uue],this.bluetoothNamePrefixes=["Gi","Mi Smart"]}supported(t){return Tn(this,void 0,void 0,function*(){return this.bluetoothNamePrefixes.some(e=>{var i;return null===(i=t.name)||void 0===i?void 0:i.startsWith(e)})})}connect(t){return Tn(this,void 0,void 0,function*(){const e=new PSt(t);return yield e.connect(),(new eTt).connect(e,this)})}}class TD{constructor(t){this.turns=t}}class Wue{constructor(t){this.state=t}}class jue{constructor(t){this.batteryLevel=t}}class iTt{constructor(){this.turnMessageHandler=new sTt,this.messageTypeHandlers={1:t=>this.turnMessageHandler.handle(t),2:rTt,5:aTt}}handle(t){const e=t.getUint8(2),i=this.messageTypeHandlers[e];return i?i(t):void 0}}class sTt{handle(t){if(t.byteLength<8){if(!this.lastTurn)return console.error("Missing previous turn, possible desync"),new TD([]);const s=new bs(yt[this.lastTurn.faceName].opposite,-1*this.lastTurn.direction);return new TD([new c2(s,this.currentTimestamp())])}const e=this.readTurn(t.getUint8(3));this.lastTurn=e;const i=10===t.byteLength?this.readTurn(t.getUint8(5)):void 0;return new TD(i?[e,i]:[e])}readTurn(t){const e=$ue.charAt(t>>1);return new c2(new bs(e,[1,-1][1&t]),this.currentTimestamp())}currentTimestamp(){return(new Date).getTime()-80}}const $ue="BFUDRL";function rTt(n){const t=[];for(let i=0;i<54;i++)t[i]=yt[$ue.charAt(n.getUint8(3+i))];return new Wue(zr.fromFacelets({BD:t[6],BR:t[8],BU:t[2],BL:t[4],BDL:t[5],BDR:t[7],BUL:t[3],BUR:t[1],FD:t[15],FR:t[13],FU:t[11],FL:t[17],FDL:t[16],FDR:t[14],FUL:t[10],FUR:t[12],LD:t[51],LB:t[53],LU:t[47],LF:t[49],LDB:t[52],LDF:t[50],LUB:t[46],LUF:t[48],RD:t[42],RB:t[40],RU:t[38],RF:t[44],RDB:t[41],RDF:t[43],RUB:t[39],RUF:t[37],DL:t[33],DR:t[29],DB:t[31],DF:t[35],DBL:t[32],DBR:t[30],DFL:t[34],DFR:t[28],UL:t[20],UR:t[24],UB:t[22],UF:t[26],UBL:t[21],UBR:t[23],UFL:t[19],UFR:t[25]}))}function aTt(n){return new jue(n.getUint8(3))}class oTt extends gf{constructor(){super(...arguments),this.readable=!1,this.name="Read",this.uuid="6e400003-b5a3-f393-e0a9-e50e24dcca9e",this.messageHandler=new iTt}connect(t){const e=Object.create(null,{connect:{get:()=>super.connect}});return Tn(this,void 0,void 0,function*(){yield e.connect.call(this,t),this.messages=this.value.pipe(ue(i=>this.parseMessage(i)),Dn,ar())})}parseMessage(t){if(!(t.byteLength<4)&&42===t.getUint8(0)&&13===t.getUint8(t.byteLength-2)&&10===t.getUint8(t.byteLength-1))return this.messageHandler.handle(t)}}class vTt extends o2{constructor(){super(...arguments),this.name="Write",this.uuid="6e400002-b5a3-f393-e0a9-e50e24dcca9e"}batteryLevel(){return this.writeValue(new Uint8Array([50]).buffer)}status(){return this.writeValue(new Uint8Array([51]).buffer)}reset(){return this.writeValue(new Uint8Array([53]).buffer)}rotationTrackingOn(){return this.writeValue(new Uint8Array([56]).buffer)}rotationTrackingOff(){return this.writeValue(new Uint8Array([55]).buffer)}toggleLight(){return this.writeValue(new Uint8Array([68]).buffer)}fastBlink(){return this.writeValue(new Uint8Array([65]).buffer)}faceBlinkToggle(){return this.writeValue(new Uint8Array([66]).buffer)}slowBlink(){return this.writeValue(new Uint8Array([67]).buffer)}unknown1(){return this.writeValue(new Uint8Array([86]).buffer)}}const que="6e400001-b5a3-f393-e0a9-e50e24dcca9e";class bTt extends mf{constructor(){super(...arguments),this.name="Main",this.uuid=que,this.readCharacteristic=new oTt,this.writeCharacteristic=new vTt,this.characteristics=[this.readCharacteristic,this.writeCharacteristic]}}class yTt extends ig{constructor(){super(...arguments),this.mainService=new bTt,this.services=[this.mainService]}}class xTt{constructor(){this.name="Rubik's Connected",this.manufacturer="Particula",this.defaultColorSchemeId="00000000-0000-0000-0000-000000000008"}}class STt{constructor(t){this.mainService=t,this.batteryLevel=new Yt(100),this.pings=new Ks(1),this.signalStrength=this.pings.pipe(Qv(4),ue(e=>this.pingsToSignalStrength(e)),Jn())}setup(){this.sendRequest(),this.setIntervalTimer=window.setInterval(()=>this.sendRequest(),2e3),this.subscription=this.mainService.readCharacteristic.messages.pipe(yn(t=>t instanceof jue)).subscribe(t=>this.handleResponse(t))}teardown(){this.setIntervalTimer&&(window.clearInterval(this.setIntervalTimer),this.setIntervalTimer=void 0),this.subscription&&this.subscription.unsubscribe()}sendRequest(){this.mainService.writeCharacteristic.batteryLevel(),this.sentAt=(new Date).getTime()}

