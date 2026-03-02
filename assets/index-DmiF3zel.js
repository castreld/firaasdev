(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function jm(){Km(),Zm(),Jm()}function Km(){const r=document.getElementById("hero-canvas");if(!r)return;const e=r.getContext("2d");let t,n,i=0,s,a=0;function o(){t=r.width=r.parentElement.offsetWidth,n=r.height=r.parentElement.offsetHeight}window.addEventListener("resize",o),o(),document.addEventListener("mousemove",h=>a=h.clientY);function l(){e.clearRect(0,0,t,n),i+=.02;const h=n/2,f=(a/innerHeight-.5)*60;e.beginPath(),e.strokeStyle="rgba(0, 229, 255, 0.25)",e.lineWidth=2;for(let u=0;u<t;u+=4){const d=h+f+Math.sin(u*.006+i)*50*Math.sin(u*.002-i*.4);u===0?e.moveTo(u,d):e.lineTo(u,d)}e.stroke(),e.beginPath(),e.strokeStyle="rgba(176, 38, 255, 0.2)",e.lineWidth=2;for(let u=0;u<t;u+=4){const d=h-f+Math.sin(u*.01-i*1.1)*70*Math.cos(u*.0015+i*.6);u===0?e.moveTo(u,d):e.lineTo(u,d)}e.stroke(),e.beginPath(),e.strokeStyle="rgba(255, 255, 255, 0.04)",e.lineWidth=1;for(let u=0;u<t;u+=4){const d=h+Math.sin(u*.004+i*.8)*30*Math.cos(u*.003-i*.3);u===0?e.moveTo(u,d):e.lineTo(u,d)}e.stroke(),s=requestAnimationFrame(l)}new IntersectionObserver(([h])=>{h.isIntersecting?l():cancelAnimationFrame(s)},{threshold:.1}).observe(r.parentElement)}function Zm(){const r=document.getElementById("footer-canvas");if(!r)return;const e=r.getContext("2d");let t,n,i=0,s;function a(){t=r.width=r.parentElement.offsetWidth,n=r.height=r.parentElement.offsetHeight*.5}window.addEventListener("resize",a),a();function o(){e.clearRect(0,0,t,n),i+=.04;const c=n*.6;e.beginPath(),e.strokeStyle="rgba(0, 229, 255, 0.5)",e.lineWidth=2,e.shadowBlur=12,e.shadowColor="rgba(0, 229, 255, 0.3)";for(let u=0;u<t;u+=3){let d=c;const m=i*120%t,g=Math.exp(-Math.pow((u-m)/30,2));d-=g*60;const p=Math.exp(-Math.pow((u-m+50)/18,2));d+=p*25;const _=Math.sin(u/t*Math.PI);d=c+(d-c)*_,u===0?e.moveTo(u,d):e.lineTo(u,d)}e.stroke(),e.shadowBlur=0;const h=i*120%t,f=e.createLinearGradient(h-40,0,h+40,0);f.addColorStop(0,"transparent"),f.addColorStop(.5,"rgba(0, 229, 255, 0.08)"),f.addColorStop(1,"transparent"),e.fillStyle=f,e.fillRect(h-40,0,80,n),s=requestAnimationFrame(o)}new IntersectionObserver(([c])=>{c.isIntersecting?o():cancelAnimationFrame(s)},{threshold:.1}).observe(r.parentElement)}function Jm(){document.querySelectorAll(".project-canvas").forEach(r=>{const e=r.getContext("2d"),t=r.dataset.type;let n,i,s;function a(){const u=r.parentElement.getBoundingClientRect();n=r.width=u.width,i=r.height=u.height}new ResizeObserver(a).observe(r.parentElement),a();let l=[];if(t==="nodes")for(let u=0;u<25;u++)l.push({x:Math.random()*(n||300),y:Math.random()*(i||300),vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:Math.random()*1.5+.5});let c=0;function h(){if(e.clearRect(0,0,n,i),t==="nodes")e.fillStyle="rgba(0, 229, 255, 0.5)",e.strokeStyle="rgba(0, 229, 255, 0.08)",e.lineWidth=.5,l.forEach((u,d)=>{u.x+=u.vx,u.y+=u.vy,(u.x<0||u.x>n)&&(u.vx*=-1),(u.y<0||u.y>i)&&(u.vy*=-1),e.beginPath(),e.arc(u.x,u.y,u.size,0,Math.PI*2),e.fill();for(let m=d+1;m<l.length;m++){const g=l[m],p=Math.hypot(u.x-g.x,u.y-g.y);p<80&&(e.globalAlpha=1-p/80,e.beginPath(),e.moveTo(u.x,u.y),e.lineTo(g.x,g.y),e.stroke(),e.globalAlpha=1)}});else if(t==="radar"){c+=.02;const u=n/2,d=i/2,m=Math.min(u,d)-20;e.strokeStyle="rgba(176, 38, 255, 0.15)",e.lineWidth=1,[1,.65,.3].forEach(v=>{e.beginPath(),e.arc(u,d,m*v,0,Math.PI*2),e.stroke()}),e.strokeStyle="rgba(176, 38, 255, 0.06)",e.beginPath(),e.moveTo(u-m,d),e.lineTo(u+m,d),e.moveTo(u,d-m),e.lineTo(u,d+m),e.stroke();const g=e.createConicGradient(c,u,d);g.addColorStop(0,"rgba(176, 38, 255, 0.12)"),g.addColorStop(.15,"transparent"),g.addColorStop(1,"transparent"),e.fillStyle=g,e.beginPath(),e.arc(u,d,m,0,Math.PI*2),e.fill();const p=u+Math.cos(c-.3)*m*.6,_=d+Math.sin(c-.3)*m*.6;e.fillStyle="rgba(0, 229, 255, 0.9)",e.shadowBlur=10,e.shadowColor="#00e5ff",e.beginPath(),e.arc(p,_,3,0,Math.PI*2),e.fill(),e.shadowBlur=0}s=requestAnimationFrame(h)}new IntersectionObserver(([u])=>{u.isIntersecting?h():cancelAnimationFrame(s)},{threshold:.05}).observe(r.parentElement)})}const qu="183",Qm=0,Bh=1,e_=2,Ho=1,t_=2,_a=3,Tr=0,Dn=1,Ai=2,Zi=0,Os=1,rl=2,zh=3,kh=4,n_=5,Wr=100,i_=101,r_=102,s_=103,a_=104,o_=200,l_=201,c_=202,u_=203,wc=204,Ac=205,h_=206,f_=207,d_=208,p_=209,m_=210,__=211,g_=212,v_=213,x_=214,Cc=0,Rc=1,Pc=2,Xs=3,Dc=4,Lc=5,Ic=6,Uc=7,bd=0,S_=1,M_=2,Ui=0,Td=1,wd=2,Ad=3,Cd=4,Rd=5,Pd=6,Dd=7,Ld=300,ss=301,Ys=302,Ll=303,Il=304,yl=306,Nc=1e3,ji=1001,Fc=1002,rn=1003,y_=1004,no=1005,_n=1006,Ul=1007,Yr=1008,li=1009,Id=1010,Ud=1011,Ba=1012,$u=1013,Oi=1014,Ri=1015,er=1016,ju=1017,Ku=1018,za=1020,Nd=35902,Fd=35899,Od=1021,Bd=1022,vi=1023,tr=1026,qr=1027,zd=1028,Zu=1029,qs=1030,Ju=1031,Qu=1033,Go=33776,Wo=33777,Xo=33778,Yo=33779,Oc=35840,Bc=35841,zc=35842,kc=35843,Vc=36196,Hc=37492,Gc=37496,Wc=37488,Xc=37489,Yc=37490,qc=37491,$c=37808,jc=37809,Kc=37810,Zc=37811,Jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,au=37820,ou=37821,lu=36492,cu=36494,uu=36495,hu=36283,fu=36284,du=36285,pu=36286,E_=3200,b_=0,T_=1,mr="",si="srgb",$s="srgb-linear",sl="linear",vt="srgb",ps=7680,Vh=519,w_=512,A_=513,C_=514,eh=515,R_=516,P_=517,th=518,D_=519,Hh=35044,Gh="300 es",Pi=2e3,al=2001;function L_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ol(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function I_(){const r=ol("canvas");return r.style.display="block",r}const Wh={};function Xh(...r){const e="THREE."+r.shift();console.log(e,...r)}function kd(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function $e(...r){r=kd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ft(...r){r=kd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ll(...r){const e=r.join(" ");e in Wh||(Wh[e]=!0,$e(...r))}function U_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const N_={[Cc]:Rc,[Pc]:Ic,[Dc]:Uc,[Xs]:Lc,[Rc]:Cc,[Ic]:Pc,[Uc]:Dc,[Lc]:Xs};class ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nl=Math.PI/180,mu=180/Math.PI;function Ka(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function F_(r,e){return(r%e+e)%e}function Fl(r,e,t){return(1-t)*r+t*e}function aa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ra{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[a+0],d=s[a+1],m=s[a+2],g=s[a+3];if(f!==g||l!==u||c!==d||h!==m){let p=l*u+c*d+h*m+f*g;p<0&&(u=-u,d=-d,m=-m,g=-g,p=-p);let _=1-o;if(p<.9995){const v=Math.acos(p),E=Math.sin(v);_=Math.sin(_*v)/E,o=Math.sin(o*v)/E,l=l*_+u*o,c=c*_+d*o,h=h*_+m*o,f=f*_+g*o}else{l=l*_+u*o,c=c*_+d*o,h=h*_+m*o,f=f*_+g*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[a],u=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(s/2),u=l(n/2),d=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=i+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ol=new X,Yh=new ra;class tt{constructor(e,t,n,i,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],g=i[0],p=i[3],_=i[6],v=i[1],E=i[4],S=i[7],b=i[2],w=i[5],A=i[8];return s[0]=a*g+o*v+l*b,s[3]=a*p+o*E+l*w,s[6]=a*_+o*S+l*A,s[1]=c*g+h*v+f*b,s[4]=c*p+h*E+f*w,s[7]=c*_+h*S+f*A,s[2]=u*g+d*v+m*b,s[5]=u*p+d*E+m*w,s[8]=u*_+d*S+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,d=c*s-a*l,m=t*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=f*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bl.makeScale(e,t)),this}rotate(e){return this.premultiply(Bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bl=new tt,qh=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O_(){const r={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?sl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ll("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ll("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[$s]:{primaries:e,whitePoint:n,transfer:sl,toXYZ:qh,fromXYZ:$h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:qh,fromXYZ:$h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}const ct=O_();function Ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ms;class B_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=ol("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ol("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ji(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(zl(i[a].image)):s.push(zl(i[a]))}else s=zl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?B_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let k_=0;const kl=new X;class An extends ia{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=ji,i=ji,s=_n,a=Yr,o=vi,l=li,c=An.DEFAULT_ANISOTROPY,h=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Ka(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nc:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nc:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Ld;An.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,i=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],g=l[2],p=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(d+1)/2,b=(_+1)/2,w=(h+u)/4,A=(f+g)/4,x=(m+p)/4;return E>S&&E>b?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=A/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=x/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=x/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-m)*(p-m)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(f-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V_ extends ia{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new An(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new nh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends V_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vd extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zt{constructor(e,t,n,i,s,a,o,l,c,h,f,u,d,m,g,p){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,f,u,d,m,g,p)}set(e,t,n,i,s,a,o,l,c,h,f,u,d,m,g,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=f,_[14]=u,_[3]=d,_[7]=m,_[11]=g,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,d=a*f,m=o*h,g=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,m=c*h,g=c*f;t[0]=u+g*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,m=c*h,g=c*f;t[0]=u-g*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,m=o*h,g=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+g,t[1]=l*f,t[5]=g*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=g-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-g*f}else if(e.order==="XZY"){const u=a*l,d=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+g,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=g*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,W_)}lookAt(e,t,n){const i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),or.crossVectors(n,kn),or.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),or.crossVectors(n,kn)),or.normalize(),io.crossVectors(kn,or),i[0]=or.x,i[4]=io.x,i[8]=kn.x,i[1]=or.y,i[5]=io.y,i[9]=kn.y,i[2]=or.z,i[6]=io.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],g=n[6],p=n[10],_=n[14],v=n[3],E=n[7],S=n[11],b=n[15],w=i[0],A=i[4],x=i[8],y=i[12],P=i[1],R=i[5],L=i[9],z=i[13],H=i[2],B=i[6],k=i[10],N=i[14],ee=i[3],te=i[7],D=i[11],ue=i[15];return s[0]=a*w+o*P+l*H+c*ee,s[4]=a*A+o*R+l*B+c*te,s[8]=a*x+o*L+l*k+c*D,s[12]=a*y+o*z+l*N+c*ue,s[1]=h*w+f*P+u*H+d*ee,s[5]=h*A+f*R+u*B+d*te,s[9]=h*x+f*L+u*k+d*D,s[13]=h*y+f*z+u*N+d*ue,s[2]=m*w+g*P+p*H+_*ee,s[6]=m*A+g*R+p*B+_*te,s[10]=m*x+g*L+p*k+_*D,s[14]=m*y+g*z+p*N+_*ue,s[3]=v*w+E*P+S*H+b*ee,s[7]=v*A+E*R+S*B+b*te,s[11]=v*x+E*L+S*k+b*D,s[15]=v*y+E*z+S*N+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],g=e[7],p=e[11],_=e[15],v=l*d-c*u,E=o*d-c*f,S=o*u-l*f,b=a*d-c*h,w=a*u-l*h,A=a*f-o*h;return t*(g*v-p*E+_*S)-n*(m*v-p*b+_*w)+i*(m*E-g*b+_*A)-s*(m*S-g*w+p*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],g=e[13],p=e[14],_=e[15],v=t*o-n*a,E=t*l-i*a,S=t*c-s*a,b=n*l-i*o,w=n*c-s*o,A=i*c-s*l,x=h*g-f*m,y=h*p-u*m,P=h*_-d*m,R=f*p-u*g,L=f*_-d*g,z=u*_-d*p,H=v*z-E*L+S*R+b*P-w*y+A*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=(o*z-l*L+c*R)*B,e[1]=(i*L-n*z-s*R)*B,e[2]=(g*A-p*w+_*b)*B,e[3]=(u*w-f*A-d*b)*B,e[4]=(l*P-a*z-c*y)*B,e[5]=(t*z-i*P+s*y)*B,e[6]=(p*S-m*A-_*E)*B,e[7]=(h*A-u*S+d*E)*B,e[8]=(a*L-o*P+c*x)*B,e[9]=(n*P-t*L-s*x)*B,e[10]=(m*w-g*S+_*v)*B,e[11]=(f*S-h*w-d*v)*B,e[12]=(o*y-a*R-l*x)*B,e[13]=(t*R-n*y+i*x)*B,e[14]=(g*E-m*b-p*v)*B,e[15]=(h*b-f*E+u*v)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,d=s*h,m=s*f,g=a*h,p=a*f,_=o*f,v=l*c,E=l*h,S=l*f,b=n.x,w=n.y,A=n.z;return i[0]=(1-(g+_))*b,i[1]=(d+S)*b,i[2]=(m-E)*b,i[3]=0,i[4]=(d-S)*w,i[5]=(1-(u+_))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(m+E)*A,i[9]=(p-v)*A,i[10]=(1-(u+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=_s.set(i[0],i[1],i[2]).length();const o=_s.set(i[4],i[5],i[6]).length(),l=_s.set(i[8],i[9],i[10]).length();s<0&&(a=-a),di.copy(this);const c=1/a,h=1/o,f=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=f,di.elements[9]*=f,di.elements[10]*=f,t.setFromRotationMatrix(di),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Pi,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let m,g;if(l)m=s/(a-s),g=a*s/(a-s);else if(o===Pi)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===al)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Pi,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,g;if(l)m=1/(a-s),g=a/(a-s);else if(o===Pi)m=-2/(a-s),g=-(a+s)/(a-s);else if(o===al)m=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _s=new X,di=new zt,G_=new X(0,0,0),W_=new X(1,1,1),or=new X,io=new X,kn=new X,jh=new zt,Kh=new ra;class nr{constructor(e=0,t=0,n=0,i=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class Hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const Zh=new X,gs=new ra,Vi=new zt,ro=new X,oa=new X,Y_=new X,q_=new ra,Jh=new X(1,0,0),Qh=new X(0,1,0),ef=new X(0,0,1),tf={type:"added"},$_={type:"removed"},vs={type:"childadded",child:null},Vl={type:"childremoved",child:null};class Ln extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new X,t=new nr,n=new ra,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new tt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(ef,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(oa,ro,this.up):Vi.lookAt(ro,oa,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(Vi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tf),vs.child=e,this.dispatchEvent(vs),vs.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($_),Vl.child=e,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tf),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ln.DEFAULT_UP=new X(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class so extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class Hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),_=this._getHandJoint(c,g);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new so;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Gl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=F_(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Gl(a,s,e+1/3),this.g=Gl(a,s,e),this.b=Gl(a,s,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=si){function n(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const n=Gd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return ct.workingToColorSpace(hn.copy(this),e),Math.round(ot(hn.r*255,0,255))*65536+Math.round(ot(hn.g*255,0,255))*256+Math.round(ot(hn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,s=hn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=si){ct.workingToColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,i=hn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(ao);const n=Fl(lr.h,ao.h,t),i=Fl(lr.s,ao.s,t),s=Fl(lr.l,ao.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new pt;pt.NAMES=Gd;class Wd extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new X,Hi=new X,Wl=new X,Gi=new X,xs=new X,Ss=new X,nf=new X,Xl=new X,Yl=new X,ql=new X,$l=new Ot,jl=new Ot,Kl=new Ot;class gi{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pi.subVectors(e,t),i.cross(pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pi.subVectors(i,t),Hi.subVectors(n,t),Wl.subVectors(e,t);const a=pi.dot(pi),o=pi.dot(Hi),l=pi.dot(Wl),c=Hi.dot(Hi),h=Hi.dot(Wl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return $l.setScalar(0),jl.setScalar(0),Kl.setScalar(0),$l.fromBufferAttribute(e,t),jl.fromBufferAttribute(e,n),Kl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector($l,s.x),a.addScaledVector(jl,s.y),a.addScaledVector(Kl,s.z),a}static isFrontFacing(e,t,n,i){return pi.subVectors(n,t),Hi.subVectors(e,t),pi.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),pi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return gi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;xs.subVectors(i,n),Ss.subVectors(s,n),Xl.subVectors(e,n);const l=xs.dot(Xl),c=Ss.dot(Xl);if(l<=0&&c<=0)return t.copy(n);Yl.subVectors(e,i);const h=xs.dot(Yl),f=Ss.dot(Yl);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xs,a);ql.subVectors(e,s);const d=xs.dot(ql),m=Ss.dot(ql);if(m>=0&&d<=m)return t.copy(s);const g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ss,o);const p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return nf.subVectors(s,i),o=(f-h)/(f-h+(d-m)),t.copy(i).addScaledVector(nf,o);const _=1/(p+g+u);return a=g*_,o=u*_,t.copy(n).addScaledVector(xs,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Za{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),lo.subVectors(this.max,la),Ms.subVectors(e.a,la),ys.subVectors(e.b,la),Es.subVectors(e.c,la),cr.subVectors(ys,Ms),ur.subVectors(Es,ys),Lr.subVectors(Ms,Es);let t=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Lr.z,Lr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Lr.z,0,-Lr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Lr.y,Lr.x,0];return!Zl(t,Ms,ys,Es,lo)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,Ms,ys,Es,lo))?!1:(co.crossVectors(cr,ur),t=[co.x,co.y,co.z],Zl(t,Ms,ys,Es,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new X,new X,new X,new X,new X,new X,new X,new X],mi=new X,oo=new Za,Ms=new X,ys=new X,Es=new X,cr=new X,ur=new X,Lr=new X,la=new X,lo=new X,co=new X,Ir=new X;function Zl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ir.fromArray(r,s);const o=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=e.dot(Ir),c=t.dot(Ir),h=n.dot(Ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kt=new X,uo=new dt;let K_=0;class Jn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hh,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=aa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),i=Rn(i,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}}class Xd extends Jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yd extends Jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Cn extends Jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Z_=new Za,ca=new X,Jl=new X;class El{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Z_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const t=ca.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ca,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Jl)),this.expandByPoint(ca.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let J_=0;const ii=new zt,Ql=new Ln,bs=new X,Vn=new Za,ua=new Za,Jt=new X;class Bn extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L_(e)?Yd:Xd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Ql.lookAt(e),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Cn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Vn.min,ua.min),Vn.expandByPoint(Jt),Jt.addVectors(Vn.max,ua.max),Vn.expandByPoint(Jt)):(Vn.expandByPoint(ua.min),Vn.expandByPoint(ua.max))}Vn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Jt.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),Jt.add(bs)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new X,l[x]=new X;const c=new X,h=new X,f=new X,u=new dt,d=new dt,m=new dt,g=new X,p=new X;function _(x,y,P){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,P),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,P),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(R),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(R),o[x].add(g),o[y].add(g),o[P].add(g),l[x].add(p),l[y].add(p),l[P].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,y=v.length;x<y;++x){const P=v[x],R=P.start,L=P.count;for(let z=R,H=R+L;z<H;z+=3)_(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new X,S=new X,b=new X,w=new X;function A(x){b.fromBufferAttribute(i,x),w.copy(b);const y=o[x];E.copy(y),E.sub(b.multiplyScalar(b.dot(y))).normalize(),S.crossVectors(w,y);const R=S.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,R)}for(let x=0,y=v.length;x<y;++x){const P=v[x],R=P.start,L=P.count;for(let z=R,H=R+L;z<H;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,h=new X,f=new X;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),g=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let _=0;_<h;_++)u[m++]=c[d++]}return new Jn(u,h,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Q_=0;class Ja extends ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Os,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ac,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ac&&(n.blendDst=this.blendDst),this.blendEquation!==Wr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xi=new X,ec=new X,ho=new X,hr=new X,tc=new X,fo=new X,nc=new X;class qd{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ec.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(ec);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ho),o=hr.dot(this.direction),l=-hr.dot(ho),c=hr.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=s*h,f>=0)if(u>=-m)if(u<=m){const g=1/h;f*=g,u*=g,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ec).addScaledVector(ho,u),d}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,i,s){tc.subVectors(t,e),fo.subVectors(n,e),nc.crossVectors(tc,fo);let a=this.direction.dot(nc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hr.subVectors(this.origin,e);const l=o*this.direction.dot(fo.crossVectors(hr,fo));if(l<0)return null;const c=o*this.direction.dot(tc.cross(hr));if(c<0||l+c>a)return null;const h=-o*hr.dot(nc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cl extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rf=new zt,Ur=new qd,po=new El,sf=new X,mo=new X,_o=new X,go=new X,ic=new X,vo=new X,af=new X,xo=new X;class Si extends Ln{constructor(e=new Bn,t=new cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(ic.fromBufferAttribute(f,e),a?vo.addScaledVector(ic,h):vo.addScaledVector(ic.sub(t),h))}t.add(vo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(po.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(po,sf)===null||Ur.origin.distanceToSquared(sf)>(e.far-e.near)**2))&&(rf.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(rf),!(n.boundingBox!==null&&Ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=u.length;m<g;m++){const p=u[m],_=a[p.materialIndex],v=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=v,b=E;S<b;S+=3){const w=o.getX(S),A=o.getX(S+1),x=o.getX(S+2);i=So(this,_,e,n,c,h,f,w,A,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=m,_=g;p<_;p+=3){const v=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);i=So(this,a,e,n,c,h,f,v,E,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=u.length;m<g;m++){const p=u[m],_=a[p.materialIndex],v=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=v,b=E;S<b;S+=3){const w=S,A=S+1,x=S+2;i=So(this,_,e,n,c,h,f,w,A,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=m,_=g;p<_;p+=3){const v=p,E=p+1,S=p+2;i=So(this,a,e,n,c,h,f,v,E,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function eg(r,e,t,n,i,s,a,o){let l;if(e.side===Dn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Tr,o),l===null)return null;xo.copy(o),xo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:r}}function So(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,mo),r.getVertexPosition(l,_o),r.getVertexPosition(c,go);const h=eg(r,e,t,n,mo,_o,go,af);if(h){const f=new X;gi.getBarycoord(af,mo,_o,go,f),i&&(h.uv=gi.getInterpolatedAttribute(i,o,l,c,f,new dt)),s&&(h.uv1=gi.getInterpolatedAttribute(s,o,l,c,f,new dt)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,l,c,f,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new X,materialIndex:0};gi.getNormal(mo,_o,go,u.normal),h.face=u,h.barycoord=f}return h}class tg extends An{constructor(e=null,t=1,n=1,i,s,a,o,l,c=rn,h=rn,f,u){super(null,a,o,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rc=new X,ng=new X,ig=new tt;class kr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rc.subVectors(n,t).cross(ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ig.getNormalMatrix(e),i=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new El,rg=new dt(.5,.5),Mo=new X;class $d{constructor(e=new kr,t=new kr,n=new kr,i=new kr,s=new kr,a=new kr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],m=s[8],g=s[9],p=s[10],_=s[11],v=s[12],E=s[13],S=s[14],b=s[15];if(i[0].setComponents(c-a,d-h,_-m,b-v).normalize(),i[1].setComponents(c+a,d+h,_+m,b+v).normalize(),i[2].setComponents(c+o,d+f,_+g,b+E).normalize(),i[3].setComponents(c-o,d-f,_-g,b-E).normalize(),n)i[4].setComponents(l,u,p,S).normalize(),i[5].setComponents(c-l,d-u,_-p,b-S).normalize();else if(i[4].setComponents(c-l,d-u,_-p,b-S).normalize(),t===Pi)i[5].setComponents(c+l,d+u,_+p,b+S).normalize();else if(t===al)i[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const t=rg.distanceTo(e.center);return Nr.radius=.7071067811865476+t,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mo.x=i.normal.x>0?e.max.x:e.min.x,Mo.y=i.normal.y>0?e.max.y:e.min.y,Mo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ih extends Ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const of=new zt,_u=new qd,yo=new El,Eo=new X;class jd extends Ln{constructor(e=new Bn,t=new ih){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;of.copy(i).invert(),_u.copy(e.ray).applyMatrix4(of);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=u,g=d;m<g;m++){const p=c.getX(m);Eo.fromBufferAttribute(f,p),lf(Eo,p,l,i,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=u,g=d;m<g;m++)Eo.fromBufferAttribute(f,m),lf(Eo,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lf(r,e,t,n,i,s,a){const o=_u.distanceSqToPoint(r);if(o<t){const l=new X;_u.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Kd extends An{constructor(e=[],t=ss,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ka extends An{constructor(e,t,n=Oi,i,s,a,o=rn,l=rn,c,h=tr,f=1){if(h!==tr&&h!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sg extends ka{constructor(e,t=Oi,n=ss,i,s,a=rn,o=rn,l,c=tr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zd extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qa extends Bn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(h,3)),this.setAttribute("uv",new Cn(f,2));function m(g,p,_,v,E,S,b,w,A,x,y){const P=S/A,R=b/x,L=S/2,z=b/2,H=w/2,B=A+1,k=x+1;let N=0,ee=0;const te=new X;for(let D=0;D<k;D++){const ue=D*R-z;for(let de=0;de<B;de++){const ne=de*P-L;te[g]=ne*v,te[p]=ue*E,te[_]=H,c.push(te.x,te.y,te.z),te[g]=0,te[p]=0,te[_]=w>0?1:-1,h.push(te.x,te.y,te.z),f.push(de/A),f.push(1-D/x),N+=1}}for(let D=0;D<x;D++)for(let ue=0;ue<A;ue++){const de=u+ue+B*D,ne=u+ue+B*(D+1),se=u+(ue+1)+B*(D+1),ie=u+(ue+1)+B*D;l.push(de,ne,ie),l.push(ne,se,ie),ee+=6}o.addGroup(d,ee,y),d+=ee,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rh extends Bn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Cn(s,3)),this.setAttribute("normal",new Cn(s.slice(),3)),this.setAttribute("uv",new Cn(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new X,S=new X,b=new X;for(let w=0;w<t.length;w+=3)d(t[w+0],E),d(t[w+1],S),d(t[w+2],b),l(E,S,b,v)}function l(v,E,S,b){const w=b+1,A=[];for(let x=0;x<=w;x++){A[x]=[];const y=v.clone().lerp(S,x/w),P=E.clone().lerp(S,x/w),R=w-x;for(let L=0;L<=R;L++)L===0&&x===w?A[x][L]=y:A[x][L]=y.clone().lerp(P,L/R)}for(let x=0;x<w;x++)for(let y=0;y<2*(w-x)-1;y++){const P=Math.floor(y/2);y%2===0?(u(A[x][P+1]),u(A[x+1][P]),u(A[x][P])):(u(A[x][P+1]),u(A[x+1][P+1]),u(A[x+1][P]))}}function c(v){const E=new X;for(let S=0;S<s.length;S+=3)E.x=s[S+0],E.y=s[S+1],E.z=s[S+2],E.normalize().multiplyScalar(v),s[S+0]=E.x,s[S+1]=E.y,s[S+2]=E.z}function h(){const v=new X;for(let E=0;E<s.length;E+=3){v.x=s[E+0],v.y=s[E+1],v.z=s[E+2];const S=p(v)/2/Math.PI+.5,b=_(v)/Math.PI+.5;a.push(S,1-b)}m(),f()}function f(){for(let v=0;v<a.length;v+=6){const E=a[v+0],S=a[v+2],b=a[v+4],w=Math.max(E,S,b),A=Math.min(E,S,b);w>.9&&A<.1&&(E<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function d(v,E){const S=v*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function m(){const v=new X,E=new X,S=new X,b=new X,w=new dt,A=new dt,x=new dt;for(let y=0,P=0;y<s.length;y+=9,P+=6){v.set(s[y+0],s[y+1],s[y+2]),E.set(s[y+3],s[y+4],s[y+5]),S.set(s[y+6],s[y+7],s[y+8]),w.set(a[P+0],a[P+1]),A.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),b.copy(v).add(E).add(S).divideScalar(3);const R=p(b);g(w,P+0,v,R),g(A,P+2,E,R),g(x,P+4,S,R)}}function g(v,E,S,b){b<0&&v.x===1&&(a[E]=v.x-1),S.x===0&&S.z===0&&(a[E]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function _(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.vertices,e.indices,e.radius,e.detail)}}class sh extends rh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sh(e.radius,e.detail)}}class bl extends Bn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],g=[],p=[];for(let _=0;_<h;_++){const v=_*u-a;for(let E=0;E<c;E++){const S=E*f-s;m.push(S,-v,0),g.push(0,0,1),p.push(E/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const E=v+c*_,S=v+c*(_+1),b=v+1+c*(_+1),w=v+1+c*_;d.push(E,S,w),d.push(S,b,w)}this.setIndex(d),this.setAttribute("position",new Cn(m,3)),this.setAttribute("normal",new Cn(g,3)),this.setAttribute("uv",new Cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ah extends Bn{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/i,d=new X,m=new dt;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){const _=s+p/n*a;d.x=f*Math.cos(_),d.y=f*Math.sin(_),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let g=0;g<i;g++){const p=g*(n+1);for(let _=0;_<n;_++){const v=_+p,E=v,S=v+n+1,b=v+n+2,w=v+1;o.push(E,S,w),o.push(S,b,w)}}this.setIndex(o),this.setAttribute("position",new Cn(l,3)),this.setAttribute("normal",new Cn(c,3)),this.setAttribute("uv",new Cn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function js(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=js(r[t]);for(const i in n)e[i]=n[i]}return e}function ag(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Jd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const og={clone:js,merge:Sn};var lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ug extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hg extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fg extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bo=new X,To=new ra,yi=new X;class Qd extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bo,To,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,To,yi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(bo,To,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,To,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new X,cf=new dt,uf=new dt;class Xn extends Qd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mu*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,t){return this.getViewBounds(e,cf,uf),t.subVectors(uf,cf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ep extends Qd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=-90,ws=1;class dg extends Ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xn(Ts,ws,e,t);i.layers=this.layers,this.add(i);const s=new Xn(Ts,ws,e,t);s.layers=this.layers,this.add(s);const a=new Xn(Ts,ws,e,t);a.layers=this.layers,this.add(a);const o=new Xn(Ts,ws,e,t);o.layers=this.layers,this.add(o);const l=new Xn(Ts,ws,e,t);l.layers=this.layers,this.add(l);const c=new Xn(Ts,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class pg extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function hf(r,e,t,n){const i=mg(n);switch(t){case Od:return r*e;case zd:return r*e/i.components*i.byteLength;case Zu:return r*e/i.components*i.byteLength;case qs:return r*e*2/i.components*i.byteLength;case Ju:return r*e*2/i.components*i.byteLength;case Bd:return r*e*3/i.components*i.byteLength;case vi:return r*e*4/i.components*i.byteLength;case Qu:return r*e*4/i.components*i.byteLength;case Go:case Wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xo:case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bc:case kc:return Math.max(r,16)*Math.max(e,8)/4;case Oc:case zc:return Math.max(r,8)*Math.max(e,8)/2;case Vc:case Hc:case Wc:case Xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Yc:case qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ru:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case au:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ou:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lu:case cu:case uu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hu:case fu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case du:case pu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mg(r){switch(r){case li:case Id:return{byteLength:1,components:1};case Ba:case Ud:case er:return{byteLength:2,components:1};case ju:case Ku:return{byteLength:2,components:4};case Oi:case $u:case Ri:return{byteLength:4,components:1};case Nd:case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);function tp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function _g(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],g=f[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++u,f[u]=g)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const g=f[d];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ev=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:gg,alphahash_pars_fragment:vg,alphamap_fragment:xg,alphamap_pars_fragment:Sg,alphatest_fragment:Mg,alphatest_pars_fragment:yg,aomap_fragment:Eg,aomap_pars_fragment:bg,batching_pars_vertex:Tg,batching_vertex:wg,begin_vertex:Ag,beginnormal_vertex:Cg,bsdfs:Rg,iridescence_fragment:Pg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Ng,color_fragment:Fg,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:zg,common:kg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:Yg,colorspace_fragment:qg,colorspace_pars_fragment:$g,envmap_fragment:jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Zg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:c0,envmap_vertex:Qg,fog_vertex:e0,fog_pars_vertex:t0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:s0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:o0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:h0,lights_phong_fragment:f0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:_0,lights_fragment_maps:g0,lights_fragment_end:v0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:y0,map_fragment:E0,map_pars_fragment:b0,map_particle_fragment:T0,map_particle_pars_fragment:w0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:C0,morphinstance_vertex:R0,morphcolor_vertex:P0,morphnormal_vertex:D0,morphtarget_pars_vertex:L0,morphtarget_vertex:I0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:F0,normal_pars_vertex:O0,normal_vertex:B0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:G0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:Y0,project_vertex:q0,dithering_fragment:$0,dithering_pars_fragment:j0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:ev,shadowmask_pars_fragment:tv,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:rv,skinnormal_vertex:sv,specularmap_fragment:av,specularmap_pars_fragment:ov,tonemapping_fragment:lv,tonemapping_pars_fragment:cv,transmission_fragment:uv,transmission_pars_fragment:hv,uv_pars_fragment:fv,uv_pars_vertex:dv,uv_vertex:pv,worldpos_vertex:mv,background_vert:_v,background_frag:gv,backgroundCube_vert:vv,backgroundCube_frag:xv,cube_vert:Sv,cube_frag:Mv,depth_vert:yv,depth_frag:Ev,distance_vert:bv,distance_frag:Tv,equirect_vert:wv,equirect_frag:Av,linedashed_vert:Cv,linedashed_frag:Rv,meshbasic_vert:Pv,meshbasic_frag:Dv,meshlambert_vert:Lv,meshlambert_frag:Iv,meshmatcap_vert:Uv,meshmatcap_frag:Nv,meshnormal_vert:Fv,meshnormal_frag:Ov,meshphong_vert:Bv,meshphong_frag:zv,meshphysical_vert:kv,meshphysical_frag:Vv,meshtoon_vert:Hv,meshtoon_frag:Gv,points_vert:Wv,points_frag:Xv,shadow_vert:Yv,shadow_frag:qv,sprite_vert:$v,sprite_frag:jv},Se={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},wi={basic:{uniforms:Sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Sn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Sn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Sn([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Sn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Sn([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Sn([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Sn([Se.common,Se.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Sn([Se.lights,Se.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};wi.physical={uniforms:Sn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const wo={r:0,b:0,g:0},Fr=new nr,Kv=new zt;function Zv(r,e,t,n,i,s){const a=new pt(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const S=v.backgroundBlurriness>0;E=e.get(E,S)}return E}function m(v){let E=!1;const S=d(v);S===null?p(a,o):S&&S.isColor&&(p(S,1),E=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,E){const S=d(E);S&&(S.isCubeTexture||S.mapping===yl)?(c===void 0&&(c=new Si(new Qa(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:js(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Fr.copy(E.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(Fr)),c.material.toneMapped=ct.getTransfer(S.colorSpace)!==vt,(h!==S||f!==S.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Si(new bl(2,2),new Bi({name:"BackgroundMaterial",uniforms:js(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(S.colorSpace)!==vt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(wo,Jd(r)),t.buffers.color.setClear(wo.r,wo.g,wo.b,E,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:g,dispose:_}}function Jv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(R,L,z,H,B){let k=!1;const N=f(R,H,z,L);s!==N&&(s=N,c(s.object)),k=d(R,H,z,B),k&&m(R,H,z,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(R,L,z,H),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function h(R){return r.deleteVertexArray(R)}function f(R,L,z,H){const B=H.wireframe===!0;let k=n[L.id];k===void 0&&(k={},n[L.id]=k);const N=R.isInstancedMesh===!0?R.id:0;let ee=k[N];ee===void 0&&(ee={},k[N]=ee);let te=ee[z.id];te===void 0&&(te={},ee[z.id]=te);let D=te[B];return D===void 0&&(D=u(l()),te[B]=D),D}function u(R){const L=[],z=[],H=[];for(let B=0;B<t;B++)L[B]=0,z[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:H,object:R,attributes:{},index:null}}function d(R,L,z,H){const B=s.attributes,k=L.attributes;let N=0;const ee=z.getAttributes();for(const te in ee)if(ee[te].location>=0){const ue=B[te];let de=k[te];if(de===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),ue===void 0||ue.attribute!==de||de&&ue.data!==de.data)return!0;N++}return s.attributesNum!==N||s.index!==H}function m(R,L,z,H){const B={},k=L.attributes;let N=0;const ee=z.getAttributes();for(const te in ee)if(ee[te].location>=0){let ue=k[te];ue===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor));const de={};de.attribute=ue,ue&&ue.data&&(de.data=ue.data),B[te]=de,N++}s.attributes=B,s.attributesNum=N,s.index=H}function g(){const R=s.newAttributes;for(let L=0,z=R.length;L<z;L++)R[L]=0}function p(R){_(R,0)}function _(R,L){const z=s.newAttributes,H=s.enabledAttributes,B=s.attributeDivisors;z[R]=1,H[R]===0&&(r.enableVertexAttribArray(R),H[R]=1),B[R]!==L&&(r.vertexAttribDivisor(R,L),B[R]=L)}function v(){const R=s.newAttributes,L=s.enabledAttributes;for(let z=0,H=L.length;z<H;z++)L[z]!==R[z]&&(r.disableVertexAttribArray(z),L[z]=0)}function E(R,L,z,H,B,k,N){N===!0?r.vertexAttribIPointer(R,L,z,B,k):r.vertexAttribPointer(R,L,z,H,B,k)}function S(R,L,z,H){g();const B=H.attributes,k=z.getAttributes(),N=L.defaultAttributeValues;for(const ee in k){const te=k[ee];if(te.location>=0){let D=B[ee];if(D===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),D!==void 0){const ue=D.normalized,de=D.itemSize,ne=e.get(D);if(ne===void 0)continue;const se=ne.buffer,ie=ne.type,V=ne.bytesPerElement,j=ie===r.INT||ie===r.UNSIGNED_INT||D.gpuType===$u;if(D.isInterleavedBufferAttribute){const Z=D.data,he=Z.stride,Me=D.offset;if(Z.isInstancedInterleavedBuffer){for(let Pe=0;Pe<te.locationSize;Pe++)_(te.location+Pe,Z.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Pe=0;Pe<te.locationSize;Pe++)p(te.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,se);for(let Pe=0;Pe<te.locationSize;Pe++)E(te.location+Pe,de/te.locationSize,ie,ue,he*V,(Me+de/te.locationSize*Pe)*V,j)}else{if(D.isInstancedBufferAttribute){for(let Z=0;Z<te.locationSize;Z++)_(te.location+Z,D.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Z=0;Z<te.locationSize;Z++)p(te.location+Z);r.bindBuffer(r.ARRAY_BUFFER,se);for(let Z=0;Z<te.locationSize;Z++)E(te.location+Z,de/te.locationSize,ie,ue,de*V,de/te.locationSize*Z*V,j)}}else if(N!==void 0){const ue=N[ee];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(te.location,ue);break;case 3:r.vertexAttrib3fv(te.location,ue);break;case 4:r.vertexAttrib4fv(te.location,ue);break;default:r.vertexAttrib1fv(te.location,ue)}}}}v()}function b(){y();for(const R in n){const L=n[R];for(const z in L){const H=L[z];for(const B in H){const k=H[B];for(const N in k)h(k[N].object),delete k[N];delete H[B]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const L=n[R.id];for(const z in L){const H=L[z];for(const B in H){const k=H[B];for(const N in k)h(k[N].object),delete k[N];delete H[B]}}delete n[R.id]}function A(R){for(const L in n){const z=n[L];for(const H in z){const B=z[H];if(B[R.id]===void 0)continue;const k=B[R.id];for(const N in k)h(k[N].object),delete k[N];delete B[R.id]}}}function x(R){for(const L in n){const z=n[L],H=R.isInstancedMesh===!0?R.id:0,B=z[H];if(B!==void 0){for(const k in B){const N=B[k];for(const ee in N)h(N[ee].object),delete N[ee];delete B[k]}delete z[H],Object.keys(z).length===0&&delete n[L]}}}function y(){P(),a=!0,s!==i&&(s=i,c(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:y,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function Qv(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];t.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g]*u[g];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ex(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==vi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==li&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ri&&!x)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&($e("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:b,samples:w}}function tx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new kr,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,_=r.get(f);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,E=v*4;let S=_.clippingState||null;l.value=S,S=h(m,u,E,d);for(let b=0;b!==E;++b)S[b]=t[b];_.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const _=d+g*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let E=0,S=d;E!==g;++E,S+=4)a.copy(f[E]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const _r=4,ff=[.125,.215,.35,.446,.526,.582],Xr=20,nx=256,ha=new ep,df=new pt;let sc=null,ac=0,oc=0,lc=!1;const ix=new X;class pf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=ix}=s;sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,ac,oc),this._renderer.xr.enabled=lc,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:er,format:vi,colorSpace:$s,depthBuffer:!1},i=mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rx(s)),this._blurMaterial=ax(s,e,t),this._ggxMaterial=sx(s,e,t)}return i}_compileMaterial(e){const t=new Si(new Bn,e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,n,i,s){const l=new Xn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(df),f.toneMapping=Ui,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new Qa,new cl({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let _=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,_=!0):(p.color.copy(df),_=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));const b=this._cubeSize;As(i,S*b,E>2?b:0,b,b),f.setRenderTarget(i),_&&f.render(g,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ss||e.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ha)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:m}=this,g=this._sizeLods[n],p=3*g*(n>m-_r?n-m+_r:0),_=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,As(s,p,_,3*g,2*g),i.setRenderTarget(s),i.render(o,ha),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,As(e,p,_,3*g,2*g),i.setRenderTarget(e),i.render(o,ha)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[i];f.material=c;const u=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Xr-1),g=s/m,p=isFinite(s)?1+Math.floor(h*g):Xr;p>Xr&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xr}`);const _=[];let v=0;for(let A=0;A<Xr;++A){const x=A/g,y=Math.exp(-x*x/2);_.push(y),A===0?v+=y:A<p&&(v+=2*y)}for(let A=0;A<_.length;A++)_[A]=_[A]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=_,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=m,u.mipInt.value=E-n;const S=this._sizeLods[i],b=3*S*(i>E-_r?i-E+_r:0),w=4*(this._cubeSize-S);As(t,b,w,3*S,2*S),l.setRenderTarget(t),l.render(f,ha)}}function rx(r){const e=[],t=[],n=[];let i=r;const s=r-_r+1+ff.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-_r?l=ff[a-r+_r-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,g=3,p=2,_=1,v=new Float32Array(g*m*d),E=new Float32Array(p*m*d),S=new Float32Array(_*m*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,x=w>2?0:-1,y=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(y,g*m*w),E.set(u,p*m*w);const P=[w,w,w,w,w,w];S.set(P,_*m*w)}const b=new Bn;b.setAttribute("position",new Jn(v,g)),b.setAttribute("uv",new Jn(E,p)),b.setAttribute("faceIndex",new Jn(S,_)),n.push(new Si(b,null)),i>_r&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function mf(r,e,t){const n=new Ni(r,e,t);return n.texture.mapping=yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function sx(r,e,t){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ax(r,e,t){const n=new Float32Array(Xr),i=new X(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function _f(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function gf(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class np extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qa(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:Zi});s.uniforms.tEquirect.value=t;const a=new Si(i,s),o=t.minFilter;return t.minFilter===Yr&&(t.minFilter=_n),new dg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function ox(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Ll||d===Il)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const g=new np(m.height);return g.fromEquirectangularTexture(r,u),e.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,m=d===Ll||d===Il,g=d===ss||d===Ys;if(m||g){let p=t.get(u);const _=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return n===null&&(n=new pf(r)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return m&&v&&v.height>0||g&&v&&l(v)?(n===null&&(n=new pf(r)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===Ll?u.mapping=ss:d===Il&&(u.mapping=Ys),u}function l(u){let d=0;const m=6;for(let g=0;g<m;g++)u[g]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function lx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ll("WebGLRenderer: "+n+" extension not supported."),i}}}function cx(r,e,t,n){const i={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],r.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let g=0;if(m===void 0)return;if(d!==null){const v=d.array;g=d.version;for(let E=0,S=v.length;E<S;E+=3){const b=v[E+0],w=v[E+1],A=v[E+2];u.push(b,w,w,A,A,b)}}else{const v=m.array;g=m.version;for(let E=0,S=v.length/3-1;E<S;E+=3){const b=E+0,w=E+1,A=E+2;u.push(b,w,w,A,A,b)}}const p=new(m.count>=65535?Yd:Xd)(u,1);p.version=g;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function ux(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*a),t.update(d,n,1)}function c(u,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,u*a,m),t.update(d,n,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,m);let p=0;for(let _=0;_<m;_++)p+=d[_];t.update(p,n,1)}function f(u,d,m,g){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)c(u[_]/a,d[_],g[_]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,g,0,m);let _=0;for(let v=0;v<m;v++)_+=d[v]*g[v];t.update(_,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function hx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fx(r,e,t){const n=new WeakMap,i=new Ot;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var d=P;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let b=o.attributes.position.count*S,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*f),x=new Vd(A,b,w,f);x.type=Ri,x.needsUpdate=!0;const y=S*4;for(let R=0;R<f;R++){const L=_[R],z=v[R],H=E[R],B=b*w*4*R;for(let k=0;k<L.count;k++){const N=k*y;m===!0&&(i.fromBufferAttribute(L,k),A[B+N+0]=i.x,A[B+N+1]=i.y,A[B+N+2]=i.z,A[B+N+3]=0),g===!0&&(i.fromBufferAttribute(z,k),A[B+N+4]=i.x,A[B+N+5]=i.y,A[B+N+6]=i.z,A[B+N+7]=0),p===!0&&(i.fromBufferAttribute(H,k),A[B+N+8]=i.x,A[B+N+9]=i.y,A[B+N+10]=i.z,A[B+N+11]=H.itemSize===4?i.w:1)}}u={count:f,texture:x,size:new dt(b,w)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function dx(r,e,t,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const px={[Td]:"LINEAR_TONE_MAPPING",[wd]:"REINHARD_TONE_MAPPING",[Ad]:"CINEON_TONE_MAPPING",[Cd]:"ACES_FILMIC_TONE_MAPPING",[Pd]:"AGX_TONE_MAPPING",[Dd]:"NEUTRAL_TONE_MAPPING",[Rd]:"CUSTOM_TONE_MAPPING"};function mx(r,e,t,n,i){const s=new Ni(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Ni(e,t,{type:er,depthBuffer:!1,stencilBuffer:!1}),o=new Bn;o.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const l=new ug({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Si(o,l),h=new ep(-1,1,1,-1,0,1);let f=null,u=null,d=!1,m,g=null,p=[],_=!1;this.setSize=function(v,E){s.setSize(v,E),a.setSize(v,E);for(let S=0;S<p.length;S++){const b=p[S];b.setSize&&b.setSize(v,E)}},this.setEffects=function(v){p=v,_=p.length>0&&p[0].isRenderPass===!0;const E=s.width,S=s.height;for(let b=0;b<p.length;b++){const w=p[b];w.setSize&&w.setSize(E,S)}},this.begin=function(v,E){if(d||v.toneMapping===Ui&&p.length===0)return!1;if(g=E,E!==null){const S=E.width,b=E.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return _===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Ui,!0},this.hasRenderPass=function(){return _},this.end=function(v,E){v.toneMapping=m,d=!0;let S=s,b=a;for(let w=0;w<p.length;w++){const A=p[w];if(A.enabled!==!1&&(A.render(v,b,S,E),A.needsSwap!==!1)){const x=S;S=b,b=x}}if(f!==v.outputColorSpace||u!==v.toneMapping){f=v.outputColorSpace,u=v.toneMapping,l.defines={},ct.getTransfer(f)===vt&&(l.defines.SRGB_TRANSFER="");const w=px[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(c,h),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const ip=new An,gu=new ka(1,1),rp=new Vd,sp=new H_,ap=new Kd,vf=[],xf=[],Sf=new Float32Array(16),Mf=new Float32Array(9),yf=new Float32Array(4);function sa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=vf[i];if(s===void 0&&(s=new Float32Array(i),vf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function wl(r,e){let t=xf[e];t===void 0&&(t=new Int32Array(e),xf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _x(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),jt(t,e)}}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),jt(t,e)}}function xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),jt(t,e)}}function Sx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;yf.set(n),r.uniformMatrix2fv(this.addr,!1,yf),jt(t,n)}}function Mx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;Mf.set(n),r.uniformMatrix3fv(this.addr,!1,Mf),jt(t,n)}}function yx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;Sf.set(n),r.uniformMatrix4fv(this.addr,!1,Sf),jt(t,n)}}function Ex(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),jt(t,e)}}function Tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),jt(t,e)}}function wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),jt(t,e)}}function Ax(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),jt(t,e)}}function Rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),jt(t,e)}}function Px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),jt(t,e)}}function Dx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gu.compareFunction=t.isReversedDepthBuffer()?th:eh,s=gu):s=ip,t.setTexture2D(e||s,i)}function Lx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||sp,i)}function Ix(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ap,i)}function Ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rp,i)}function Nx(r){switch(r){case 5126:return _x;case 35664:return gx;case 35665:return vx;case 35666:return xx;case 35674:return Sx;case 35675:return Mx;case 35676:return yx;case 5124:case 35670:return Ex;case 35667:case 35671:return bx;case 35668:case 35672:return Tx;case 35669:case 35673:return wx;case 5125:return Ax;case 36294:return Cx;case 36295:return Rx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Ux}}function Fx(r,e){r.uniform1fv(this.addr,e)}function Ox(r,e){const t=sa(e,this.size,2);r.uniform2fv(this.addr,t)}function Bx(r,e){const t=sa(e,this.size,3);r.uniform3fv(this.addr,t)}function zx(r,e){const t=sa(e,this.size,4);r.uniform4fv(this.addr,t)}function kx(r,e){const t=sa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vx(r,e){const t=sa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Hx(r,e){const t=sa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gx(r,e){r.uniform1iv(this.addr,e)}function Wx(r,e){r.uniform2iv(this.addr,e)}function Xx(r,e){r.uniform3iv(this.addr,e)}function Yx(r,e){r.uniform4iv(this.addr,e)}function qx(r,e){r.uniform1uiv(this.addr,e)}function $x(r,e){r.uniform2uiv(this.addr,e)}function jx(r,e){r.uniform3uiv(this.addr,e)}function Kx(r,e){r.uniform4uiv(this.addr,e)}function Zx(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=gu:a=ip;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Jx(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||sp,s[a])}function Qx(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ap,s[a])}function eS(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||rp,s[a])}function tS(r){switch(r){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return kx;case 35675:return Vx;case 35676:return Hx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return Yx;case 5125:return qx;case 36294:return $x;case 36295:return jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return eS}}class nS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nx(t.type)}}class iS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tS(t.type)}}class rS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function Ef(r,e){r.seq.push(e),r.map[e.id]=e}function sS(r,e,t){const n=r.name,i=n.length;for(cc.lastIndex=0;;){const s=cc.exec(n),a=cc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ef(t,c===void 0?new nS(o,r,e):new iS(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new rS(o),Ef(t,f)),t=f}}}class qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);sS(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function bf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const aS=37297;let oS=0;function lS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tf=new tt;function cS(r){ct._getMatrix(Tf,ct.workingColorSpace,r);const e=`mat3( ${Tf.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(r)){case sl:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function wf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+lS(r.getShaderSource(e),o)}else return s}function uS(r,e){const t=cS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hS={[Td]:"Linear",[wd]:"Reinhard",[Ad]:"Cineon",[Cd]:"ACESFilmic",[Pd]:"AgX",[Dd]:"Neutral",[Rd]:"Custom"};function fS(r,e){const t=hS[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ao=new X;function dS(){ct.getLuminanceCoefficients(Ao);const r=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function mS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _S(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ga(r){return r!==""}function Af(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gS=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(r){return r.replace(gS,xS)}const vS=new Map;function xS(r,e){let t=nt[e];if(t===void 0){const n=vS.get(e);if(n!==void 0)t=nt[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vu(t)}const SS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(r){return r.replace(SS,MS)}function MS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const yS={[Ho]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};function ES(r){return yS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bS={[ss]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[yl]:"ENVMAP_TYPE_CUBE_UV"};function TS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":bS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const wS={[Ys]:"ENVMAP_MODE_REFRACTION"};function AS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":wS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CS={[bd]:"ENVMAP_BLENDING_MULTIPLY",[S_]:"ENVMAP_BLENDING_MIX",[M_]:"ENVMAP_BLENDING_ADD"};function RS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":CS[r.combine]||"ENVMAP_BLENDING_NONE"}function PS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function DS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ES(t),c=TS(t),h=AS(t),f=RS(t),u=PS(t),d=pS(t),m=mS(s),g=i.createProgram();let p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ga).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ga).join(`
`),_.length>0&&(_+=`
`)):(p=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),_=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?fS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,uS("linearToOutputTexel",t.outputColorSpace),dS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),a=vu(a),a=Af(a,t),a=Cf(a,t),o=vu(o),o=Af(o,t),o=Cf(o,t),a=Rf(a),o=Rf(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=v+p+a,S=v+_+o,b=bf(i,i.VERTEX_SHADER,E),w=bf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,b),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(R){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(b)||"",H=i.getShaderInfoLog(w)||"",B=L.trim(),k=z.trim(),N=H.trim();let ee=!0,te=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,w);else{const D=wf(i,b,"vertex"),ue=wf(i,w,"fragment");ft("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+D+`
`+ue)}else B!==""?$e("WebGLProgram: Program Info Log:",B):(k===""||N==="")&&(te=!1);te&&(R.diagnostics={runnable:ee,programLog:B,vertexShader:{log:k,prefix:p},fragmentShader:{log:N,prefix:_}})}i.deleteShader(b),i.deleteShader(w),x=new qo(i,g),y=_S(i,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(g,aS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let LS=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new US(e),t.set(e,n)),n}}class US{constructor(e){this.id=LS++,this.code=e,this.usedTimes=0}}function NS(r,e,t,n,i,s){const a=new Hd,o=new IS,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,y,P,R,L){const z=R.fog,H=L.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=e.get(x.envMap||B,k),ee=N&&N.mapping===yl?N.image.height:null,te=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const D=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=D!==void 0?D.length:0;let de=0;H.morphAttributes.position!==void 0&&(de=1),H.morphAttributes.normal!==void 0&&(de=2),H.morphAttributes.color!==void 0&&(de=3);let ne,se,ie,V;if(te){const Te=wi[te];ne=Te.vertexShader,se=Te.fragmentShader}else ne=x.vertexShader,se=x.fragmentShader,o.update(x),ie=o.getVertexShaderID(x),V=o.getFragmentShaderID(x);const j=r.getRenderTarget(),Z=r.state.buffers.depth.getReversed(),he=L.isInstancedMesh===!0,Me=L.isBatchedMesh===!0,Pe=!!x.map,je=!!x.matcap,Ee=!!N,Ne=!!x.aoMap,Ge=!!x.lightMap,Fe=!!x.bumpMap,G=!!x.normalMap,U=!!x.displacementMap,We=!!x.emissiveMap,Qe=!!x.metalnessMap,He=!!x.roughnessMap,be=x.anisotropy>0,C=x.clearcoat>0,M=x.dispersion>0,F=x.iridescence>0,J=x.sheen>0,Q=x.transmission>0,$=be&&!!x.anisotropyMap,ye=C&&!!x.clearcoatMap,ce=C&&!!x.clearcoatNormalMap,Ue=C&&!!x.clearcoatRoughnessMap,we=F&&!!x.iridescenceMap,ae=F&&!!x.iridescenceThicknessMap,le=J&&!!x.sheenColorMap,Ae=J&&!!x.sheenRoughnessMap,Re=!!x.specularMap,_e=!!x.specularColorMap,Xe=!!x.specularIntensityMap,I=Q&&!!x.transmissionMap,fe=Q&&!!x.thicknessMap,oe=!!x.gradientMap,ge=!!x.alphaMap,re=x.alphaTest>0,K=!!x.alphaHash,Ce=!!x.extensions;let ke=Ui;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=r.toneMapping);const ut={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:se,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Me,batchingColor:Me&&L._colorsTexture!==null,instancing:he,instancingColor:he&&L.instanceColor!==null,instancingMorph:he&&L.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$s,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:je,envMap:Ee,envMapMode:Ee&&N.mapping,envMapCubeUVHeight:ee,aoMap:Ne,lightMap:Ge,bumpMap:Fe,normalMap:G,displacementMap:U,emissiveMap:We,normalMapObjectSpace:G&&x.normalMapType===T_,normalMapTangentSpace:G&&x.normalMapType===b_,metalnessMap:Qe,roughnessMap:He,anisotropy:be,anisotropyMap:$,clearcoat:C,clearcoatMap:ye,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ue,dispersion:M,iridescence:F,iridescenceMap:we,iridescenceThicknessMap:ae,sheen:J,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:Re,specularColorMap:_e,specularIntensityMap:Xe,transmission:Q,transmissionMap:I,thicknessMap:fe,gradientMap:oe,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:re,alphaHash:K,combine:x.combine,mapUv:Pe&&m(x.map.channel),aoMapUv:Ne&&m(x.aoMap.channel),lightMapUv:Ge&&m(x.lightMap.channel),bumpMapUv:Fe&&m(x.bumpMap.channel),normalMapUv:G&&m(x.normalMap.channel),displacementMapUv:U&&m(x.displacementMap.channel),emissiveMapUv:We&&m(x.emissiveMap.channel),metalnessMapUv:Qe&&m(x.metalnessMap.channel),roughnessMapUv:He&&m(x.roughnessMap.channel),anisotropyMapUv:$&&m(x.anisotropyMap.channel),clearcoatMapUv:ye&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&m(x.sheenRoughnessMap.channel),specularMapUv:Re&&m(x.specularMap.channel),specularColorMapUv:_e&&m(x.specularColorMap.channel),specularIntensityMapUv:Xe&&m(x.specularIntensityMap.channel),transmissionMapUv:I&&m(x.transmissionMap.channel),thicknessMapUv:fe&&m(x.thicknessMap.channel),alphaMapUv:ge&&m(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(G||be),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Pe||ge),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&G===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Z,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:de,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:We&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ai,flipSided:x.side===Dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ce&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&x.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)y.push(P),y.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(y,x),v(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function _(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function E(x){const y=d[x.type];let P;if(y){const R=wi[y];P=og.clone(R.uniforms)}else P=x.uniforms;return P}function S(x,y){let P=h.get(y);return P!==void 0?++P.usedTimes:(P=new DS(r,y,x,i),c.push(P),h.set(y,P)),P}function b(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:A}}function FS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function OS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Df(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Lf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,g,p,_){let v=r[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:p,group:_},r[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=a(u),v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=p,v.group=_),e++,v}function l(u,d,m,g,p,_){const v=o(u,d,m,g,p,_);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function c(u,d,m,g,p,_){const v=o(u,d,m,g,p,_);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(u,d){t.length>1&&t.sort(u||OS),n.length>1&&n.sort(d||Df),i.length>1&&i.sort(d||Df)}function f(){for(let u=e,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}function BS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Lf,r.set(n,[a])):i>=s.length?(a=new Lf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function zS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new pt};break;case"SpotLight":t={position:new X,direction:new X,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function kS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let VS=0;function HS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function GS(r){const e=new zS,t=kS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new zt,a=new zt;function o(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,m=0,g=0,p=0,_=0,v=0,E=0,S=0,b=0,w=0,A=0;c.sort(HS);for(let y=0,P=c.length;y<P;y++){const R=c[y],L=R.color,z=R.intensity,H=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===qs?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=L.r*z,f+=L.g*z,u+=L.b*z;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],z);A++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const N=R.shadow,ee=t.get(R);ee.shadowIntensity=N.intensity,ee.shadowBias=N.bias,ee.shadowNormalBias=N.normalBias,ee.shadowRadius=N.radius,ee.shadowMapSize=N.mapSize,n.directionalShadow[d]=ee,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=R.shadow.matrix,v++}n.directional[d]=k,d++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(L).multiplyScalar(z),k.distance=H,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[g]=k;const N=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,N.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=N.matrix,R.castShadow){const ee=t.get(R);ee.shadowIntensity=N.intensity,ee.shadowBias=N.bias,ee.shadowNormalBias=N.normalBias,ee.shadowRadius=N.radius,ee.shadowMapSize=N.mapSize,n.spotShadow[g]=ee,n.spotShadowMap[g]=B,S++}g++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(L).multiplyScalar(z),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=k,p++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const N=R.shadow,ee=t.get(R);ee.shadowIntensity=N.intensity,ee.shadowBias=N.bias,ee.shadowNormalBias=N.normalBias,ee.shadowRadius=N.radius,ee.shadowMapSize=N.mapSize,ee.shadowCameraNear=N.camera.near,ee.shadowCameraFar=N.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=R.shadow.matrix,E++}n.point[m]=k,m++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(z),k.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[_]=k,_++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==d||x.pointLength!==m||x.spotLength!==g||x.rectAreaLength!==p||x.hemiLength!==_||x.numDirectionalShadows!==v||x.numPointShadows!==E||x.numSpotShadows!==S||x.numSpotMaps!==b||x.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,x.directionalLength=d,x.pointLength=m,x.spotLength=g,x.rectAreaLength=p,x.hemiLength=_,x.numDirectionalShadows=v,x.numPointShadows=E,x.numSpotShadows=S,x.numSpotMaps=b,x.numLightProbes=A,n.version=VS++)}function l(c,h){let f=0,u=0,d=0,m=0,g=0;const p=h.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const E=c[_];if(E.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(E.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(E.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(E.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),u++}else if(E.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function If(r){const e=new GS(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function WS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new If(r),e.set(i,[o])):s>=a.length?(o=new If(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qS=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],$S=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Uf=new zt,fa=new X,uc=new X;function jS(r,e,t){let n=new $d;const i=new dt,s=new dt,a=new Ot,o=new hg,l=new fg,c={},h=t.maxTextureSize,f={[Tr]:Dn,[Dn]:Tr,[Ai]:Ai},u=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:XS,fragmentShader:YS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Bn;m.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Si(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let _=this.type;this.render=function(w,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===t_&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ho);const y=r.getRenderTarget(),P=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Zi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const z=_!==this.type;z&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(B=>B.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,B=w.length;H<B;H++){const k=w[H],N=k.shadow;if(N===void 0){$e("WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const ee=N.getFrameExtents();i.multiply(ee),s.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ee.x),i.x=s.x*ee.x,N.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ee.y),i.y=s.y*ee.y,N.mapSize.y=s.y));const te=r.state.buffers.depth.getReversed();if(N.camera._reversedDepth=te,N.map===null||z===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===_a){if(k.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ni(i.x,i.y,{format:qs,type:er,minFilter:_n,magFilter:_n,generateMipmaps:!1}),N.map.texture.name=k.name+".shadowMap",N.map.depthTexture=new ka(i.x,i.y,Ri),N.map.depthTexture.name=k.name+".shadowMapDepth",N.map.depthTexture.format=tr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=rn,N.map.depthTexture.magFilter=rn}else k.isPointLight?(N.map=new np(i.x),N.map.depthTexture=new sg(i.x,Oi)):(N.map=new Ni(i.x,i.y),N.map.depthTexture=new ka(i.x,i.y,Oi)),N.map.depthTexture.name=k.name+".shadowMap",N.map.depthTexture.format=tr,this.type===Ho?(N.map.depthTexture.compareFunction=te?th:eh,N.map.depthTexture.minFilter=_n,N.map.depthTexture.magFilter=_n):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=rn,N.map.depthTexture.magFilter=rn);N.camera.updateProjectionMatrix()}const D=N.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<D;ue++){if(N.map.isWebGLCubeRenderTarget)r.setRenderTarget(N.map,ue),r.clear();else{ue===0&&(r.setRenderTarget(N.map),r.clear());const de=N.getViewport(ue);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),L.viewport(a)}if(k.isPointLight){const de=N.camera,ne=N.matrix,se=k.distance||de.far;se!==de.far&&(de.far=se,de.updateProjectionMatrix()),fa.setFromMatrixPosition(k.matrixWorld),de.position.copy(fa),uc.copy(de.position),uc.add(qS[ue]),de.up.copy($S[ue]),de.lookAt(uc),de.updateMatrixWorld(),ne.makeTranslation(-fa.x,-fa.y,-fa.z),Uf.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Uf,de.coordinateSystem,de.reversedDepth)}else N.updateMatrices(k);n=N.getFrustum(),S(A,x,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===_a&&v(N,x),N.needsUpdate=!1}_=this.type,p.needsUpdate=!1,r.setRenderTarget(y,P,R)};function v(w,A){const x=e.update(g);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ni(i.x,i.y,{format:qs,type:er})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,x,u,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,x,d,g,null)}function E(w,A,x,y){let P=null;const R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=P.uuid,z=A.uuid;let H=c[L];H===void 0&&(H={},c[L]=H);let B=H[z];B===void 0&&(B=P.clone(),H[z]=B,A.addEventListener("dispose",b)),P=B}if(P.visible=A.visible,P.wireframe=A.wireframe,y===_a?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:f[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=r.properties.get(P);L.light=x}return P}function S(w,A,x,y,P){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===_a)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const z=e.update(w),H=w.material;if(Array.isArray(H)){const B=z.groups;for(let k=0,N=B.length;k<N;k++){const ee=B[k],te=H[ee.materialIndex];if(te&&te.visible){const D=E(w,te,y,P);w.onBeforeShadow(r,w,A,x,z,D,ee),r.renderBufferDirect(x,null,z,D,w,ee),w.onAfterShadow(r,w,A,x,z,D,ee)}}}else if(H.visible){const B=E(w,H,y,P);w.onBeforeShadow(r,w,A,x,z,B,null),r.renderBufferDirect(x,null,z,B,w,null),w.onAfterShadow(r,w,A,x,z,B,null)}}const L=w.children;for(let z=0,H=L.length;z<H;z++)S(L[z],A,x,y,P)}function b(w){w.target.removeEventListener("dispose",b);for(const x in c){const y=c[x],P=w.target.uuid;P in y&&(y[P].dispose(),delete y[P])}}}function KS(r,e){function t(){let I=!1;const fe=new Ot;let oe=null;const ge=new Ot(0,0,0,0);return{setMask:function(re){oe!==re&&!I&&(r.colorMask(re,re,re,re),oe=re)},setLocked:function(re){I=re},setClear:function(re,K,Ce,ke,ut){ut===!0&&(re*=ke,K*=ke,Ce*=ke),fe.set(re,K,Ce,ke),ge.equals(fe)===!1&&(r.clearColor(re,K,Ce,ke),ge.copy(fe))},reset:function(){I=!1,oe=null,ge.set(-1,0,0,0)}}}function n(){let I=!1,fe=!1,oe=null,ge=null,re=null;return{setReversed:function(K){if(fe!==K){const Ce=e.get("EXT_clip_control");K?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),fe=K;const ke=re;re=null,this.setClear(ke)}},getReversed:function(){return fe},setTest:function(K){K?j(r.DEPTH_TEST):Z(r.DEPTH_TEST)},setMask:function(K){oe!==K&&!I&&(r.depthMask(K),oe=K)},setFunc:function(K){if(fe&&(K=N_[K]),ge!==K){switch(K){case Cc:r.depthFunc(r.NEVER);break;case Rc:r.depthFunc(r.ALWAYS);break;case Pc:r.depthFunc(r.LESS);break;case Xs:r.depthFunc(r.LEQUAL);break;case Dc:r.depthFunc(r.EQUAL);break;case Lc:r.depthFunc(r.GEQUAL);break;case Ic:r.depthFunc(r.GREATER);break;case Uc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=K}},setLocked:function(K){I=K},setClear:function(K){re!==K&&(re=K,fe&&(K=1-K),r.clearDepth(K))},reset:function(){I=!1,oe=null,ge=null,re=null,fe=!1}}}function i(){let I=!1,fe=null,oe=null,ge=null,re=null,K=null,Ce=null,ke=null,ut=null;return{setTest:function(Te){I||(Te?j(r.STENCIL_TEST):Z(r.STENCIL_TEST))},setMask:function(Te){fe!==Te&&!I&&(r.stencilMask(Te),fe=Te)},setFunc:function(Te,Oe,et){(oe!==Te||ge!==Oe||re!==et)&&(r.stencilFunc(Te,Oe,et),oe=Te,ge=Oe,re=et)},setOp:function(Te,Oe,et){(K!==Te||Ce!==Oe||ke!==et)&&(r.stencilOp(Te,Oe,et),K=Te,Ce=Oe,ke=et)},setLocked:function(Te){I=Te},setClear:function(Te){ut!==Te&&(r.clearStencil(Te),ut=Te)},reset:function(){I=!1,fe=null,oe=null,ge=null,re=null,K=null,Ce=null,ke=null,ut=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],m=null,g=!1,p=null,_=null,v=null,E=null,S=null,b=null,w=null,A=new pt(0,0,0),x=0,y=!1,P=null,R=null,L=null,z=null,H=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=N>=1):ee.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=N>=2);let te=null,D={};const ue=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),ne=new Ot().fromArray(ue),se=new Ot().fromArray(de);function ie(I,fe,oe,ge){const re=new Uint8Array(4),K=r.createTexture();r.bindTexture(I,K),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<oe;Ce++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(fe,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(fe+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return K}const V={};V[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),V[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),V[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(r.DEPTH_TEST),a.setFunc(Xs),Fe(!1),G(Bh),j(r.CULL_FACE),Ne(Zi);function j(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function Z(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function he(I,fe){return f[I]!==fe?(r.bindFramebuffer(I,fe),f[I]=fe,I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=fe),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=fe),!0):!1}function Me(I,fe){let oe=d,ge=!1;if(I){oe=u.get(fe),oe===void 0&&(oe=[],u.set(fe,oe));const re=I.textures;if(oe.length!==re.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let K=0,Ce=re.length;K<Ce;K++)oe[K]=r.COLOR_ATTACHMENT0+K;oe.length=re.length,ge=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,ge=!0);ge&&r.drawBuffers(oe)}function Pe(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const je={[Wr]:r.FUNC_ADD,[i_]:r.FUNC_SUBTRACT,[r_]:r.FUNC_REVERSE_SUBTRACT};je[s_]=r.MIN,je[a_]=r.MAX;const Ee={[o_]:r.ZERO,[l_]:r.ONE,[c_]:r.SRC_COLOR,[wc]:r.SRC_ALPHA,[m_]:r.SRC_ALPHA_SATURATE,[d_]:r.DST_COLOR,[h_]:r.DST_ALPHA,[u_]:r.ONE_MINUS_SRC_COLOR,[Ac]:r.ONE_MINUS_SRC_ALPHA,[p_]:r.ONE_MINUS_DST_COLOR,[f_]:r.ONE_MINUS_DST_ALPHA,[__]:r.CONSTANT_COLOR,[g_]:r.ONE_MINUS_CONSTANT_COLOR,[v_]:r.CONSTANT_ALPHA,[x_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ne(I,fe,oe,ge,re,K,Ce,ke,ut,Te){if(I===Zi){g===!0&&(Z(r.BLEND),g=!1);return}if(g===!1&&(j(r.BLEND),g=!0),I!==n_){if(I!==p||Te!==y){if((_!==Wr||S!==Wr)&&(r.blendEquation(r.FUNC_ADD),_=Wr,S=Wr),Te)switch(I){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rl:r.blendFunc(r.ONE,r.ONE);break;case zh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ft("WebGLState: Invalid blending: ",I);break}else switch(I){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case zh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",I);break}v=null,E=null,b=null,w=null,A.set(0,0,0),x=0,p=I,y=Te}return}re=re||fe,K=K||oe,Ce=Ce||ge,(fe!==_||re!==S)&&(r.blendEquationSeparate(je[fe],je[re]),_=fe,S=re),(oe!==v||ge!==E||K!==b||Ce!==w)&&(r.blendFuncSeparate(Ee[oe],Ee[ge],Ee[K],Ee[Ce]),v=oe,E=ge,b=K,w=Ce),(ke.equals(A)===!1||ut!==x)&&(r.blendColor(ke.r,ke.g,ke.b,ut),A.copy(ke),x=ut),p=I,y=!1}function Ge(I,fe){I.side===Ai?Z(r.CULL_FACE):j(r.CULL_FACE);let oe=I.side===Dn;fe&&(oe=!oe),Fe(oe),I.blending===Os&&I.transparent===!1?Ne(Zi):Ne(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),We(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):Z(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){P!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),P=I)}function G(I){I!==Qm?(j(r.CULL_FACE),I!==R&&(I===Bh?r.cullFace(r.BACK):I===e_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Z(r.CULL_FACE),R=I}function U(I){I!==L&&(k&&r.lineWidth(I),L=I)}function We(I,fe,oe){I?(j(r.POLYGON_OFFSET_FILL),(z!==fe||H!==oe)&&(z=fe,H=oe,a.getReversed()&&(fe=-fe),r.polygonOffset(fe,oe))):Z(r.POLYGON_OFFSET_FILL)}function Qe(I){I?j(r.SCISSOR_TEST):Z(r.SCISSOR_TEST)}function He(I){I===void 0&&(I=r.TEXTURE0+B-1),te!==I&&(r.activeTexture(I),te=I)}function be(I,fe,oe){oe===void 0&&(te===null?oe=r.TEXTURE0+B-1:oe=te);let ge=D[oe];ge===void 0&&(ge={type:void 0,texture:void 0},D[oe]=ge),(ge.type!==I||ge.texture!==fe)&&(te!==oe&&(r.activeTexture(oe),te=oe),r.bindTexture(I,fe||V[I]),ge.type=I,ge.texture=fe)}function C(){const I=D[te];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function J(){try{r.texSubImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function Q(){try{r.texSubImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function ce(){try{r.texStorage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function Ue(){try{r.texStorage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function we(){try{r.texImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function ae(){try{r.texImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function le(I){ne.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function Ae(I){se.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),se.copy(I))}function Re(I,fe){let oe=c.get(fe);oe===void 0&&(oe=new WeakMap,c.set(fe,oe));let ge=oe.get(I);ge===void 0&&(ge=r.getUniformBlockIndex(fe,I.name),oe.set(I,ge))}function _e(I,fe){const ge=c.get(fe).get(I);l.get(fe)!==ge&&(r.uniformBlockBinding(fe,ge,I.__bindingPointIndex),l.set(fe,ge))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,D={},f={},u=new WeakMap,d=[],m=null,g=!1,p=null,_=null,v=null,E=null,S=null,b=null,w=null,A=new pt(0,0,0),x=0,y=!1,P=null,R=null,L=null,z=null,H=null,ne.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:Z,bindFramebuffer:he,drawBuffers:Me,useProgram:Pe,setBlending:Ne,setMaterial:Ge,setFlipSided:Fe,setCullFace:G,setLineWidth:U,setPolygonOffset:We,setScissorTest:Qe,activeTexture:He,bindTexture:be,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:F,texImage2D:we,texImage3D:ae,updateUBOMapping:Re,uniformBlockBinding:_e,texStorage2D:ce,texStorage3D:Ue,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:ye,scissor:le,viewport:Ae,reset:Xe}}function ZS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,M){return d?new OffscreenCanvas(C,M):ol("canvas")}function g(C,M,F){let J=1;const Q=be(C);if((Q.width>F||Q.height>F)&&(J=F/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(J*Q.width),ye=Math.floor(J*Q.height);f===void 0&&(f=m($,ye));const ce=M?m($,ye):f;return ce.width=$,ce.height=ye,ce.getContext("2d").drawImage(C,0,0,$,ye),$e("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+ye+")."),ce}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function _(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(C,M,F,J,Q=!1){if(C!==null){if(r[C]!==void 0)return r[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=M;if(M===r.RED&&(F===r.FLOAT&&($=r.R32F),F===r.HALF_FLOAT&&($=r.R16F),F===r.UNSIGNED_BYTE&&($=r.R8)),M===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.R8UI),F===r.UNSIGNED_SHORT&&($=r.R16UI),F===r.UNSIGNED_INT&&($=r.R32UI),F===r.BYTE&&($=r.R8I),F===r.SHORT&&($=r.R16I),F===r.INT&&($=r.R32I)),M===r.RG&&(F===r.FLOAT&&($=r.RG32F),F===r.HALF_FLOAT&&($=r.RG16F),F===r.UNSIGNED_BYTE&&($=r.RG8)),M===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RG8UI),F===r.UNSIGNED_SHORT&&($=r.RG16UI),F===r.UNSIGNED_INT&&($=r.RG32UI),F===r.BYTE&&($=r.RG8I),F===r.SHORT&&($=r.RG16I),F===r.INT&&($=r.RG32I)),M===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RGB8UI),F===r.UNSIGNED_SHORT&&($=r.RGB16UI),F===r.UNSIGNED_INT&&($=r.RGB32UI),F===r.BYTE&&($=r.RGB8I),F===r.SHORT&&($=r.RGB16I),F===r.INT&&($=r.RGB32I)),M===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RGBA8UI),F===r.UNSIGNED_SHORT&&($=r.RGBA16UI),F===r.UNSIGNED_INT&&($=r.RGBA32UI),F===r.BYTE&&($=r.RGBA8I),F===r.SHORT&&($=r.RGBA16I),F===r.INT&&($=r.RGBA32I)),M===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),M===r.RGBA){const ye=Q?sl:ct.getTransfer(J);F===r.FLOAT&&($=r.RGBA32F),F===r.HALF_FLOAT&&($=r.RGBA16F),F===r.UNSIGNED_BYTE&&($=ye===vt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(C,M){let F;return C?M===null||M===Oi||M===za?F=r.DEPTH24_STENCIL8:M===Ri?F=r.DEPTH32F_STENCIL8:M===Ba&&(F=r.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Oi||M===za?F=r.DEPTH_COMPONENT24:M===Ri?F=r.DEPTH_COMPONENT32F:M===Ba&&(F=r.DEPTH_COMPONENT16),F}function b(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){const M=C.target;M.removeEventListener("dispose",w),x(M),M.isVideoTexture&&h.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),P(M)}function x(C){const M=n.get(C);if(M.__webglInit===void 0)return;const F=C.source,J=u.get(F);if(J){const Q=J[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(C),Object.keys(J).length===0&&u.delete(F)}n.remove(C)}function y(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const F=C.source,J=u.get(F);delete J[M.__cacheKey],a.memory.textures--}function P(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let Q=0;Q<M.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)r.deleteFramebuffer(M.__webglFramebuffer[J]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=C.textures;for(let J=0,Q=F.length;J<Q;J++){const $=n.get(F[J]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[J])}n.remove(C)}let R=0;function L(){R=0}function z(){const C=R;return C>=i.maxTextures&&$e("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function H(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function B(C,M){const F=n.get(C);if(C.isVideoTexture&&Qe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const J=C.image;if(J===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{V(F,C,M);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+M)}function k(C,M){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){V(F,C,M);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+M)}function N(C,M){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){V(F,C,M);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+M)}function ee(C,M){const F=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){j(F,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+M)}const te={[Nc]:r.REPEAT,[ji]:r.CLAMP_TO_EDGE,[Fc]:r.MIRRORED_REPEAT},D={[rn]:r.NEAREST,[y_]:r.NEAREST_MIPMAP_NEAREST,[no]:r.NEAREST_MIPMAP_LINEAR,[_n]:r.LINEAR,[Ul]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},ue={[w_]:r.NEVER,[D_]:r.ALWAYS,[A_]:r.LESS,[eh]:r.LEQUAL,[C_]:r.EQUAL,[th]:r.GEQUAL,[R_]:r.GREATER,[P_]:r.NOTEQUAL};function de(C,M){if(M.type===Ri&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===_n||M.magFilter===Ul||M.magFilter===no||M.magFilter===Yr||M.minFilter===_n||M.minFilter===Ul||M.minFilter===no||M.minFilter===Yr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,te[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,te[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,te[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,D[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,D[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===rn||M.minFilter!==no&&M.minFilter!==Yr||M.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ne(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));const J=M.source;let Q=u.get(J);Q===void 0&&(Q={},u.set(J,Q));const $=H(M);if($!==C.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[$].usedTimes++;const ye=Q[C.__cacheKey];ye!==void 0&&(Q[C.__cacheKey].usedTimes--,ye.usedTimes===0&&y(M)),C.__cacheKey=$,C.__webglTexture=Q[$].texture}return F}function se(C,M,F){return Math.floor(Math.floor(C/F)/M)}function ie(C,M,F,J){const $=C.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,F,J,M.data);else{$.sort((ae,le)=>ae.start-le.start);let ye=0;for(let ae=1;ae<$.length;ae++){const le=$[ye],Ae=$[ae],Re=le.start+le.count,_e=se(Ae.start,M.width,4),Xe=se(le.start,M.width,4);Ae.start<=Re+1&&_e===Xe&&se(Ae.start+Ae.count-1,M.width,4)===_e?le.count=Math.max(le.count,Ae.start+Ae.count-le.start):(++ye,$[ye]=Ae)}$.length=ye+1;const ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ue=r.getParameter(r.UNPACK_SKIP_PIXELS),we=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let ae=0,le=$.length;ae<le;ae++){const Ae=$[ae],Re=Math.floor(Ae.start/4),_e=Math.ceil(Ae.count/4),Xe=Re%M.width,I=Math.floor(Re/M.width),fe=_e,oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,Xe,I,fe,oe,F,J,M.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function V(C,M,F){let J=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=r.TEXTURE_3D);const Q=ne(C,M),$=M.source;t.bindTexture(J,C.__webglTexture,r.TEXTURE0+F);const ye=n.get($);if($.version!==ye.__version||Q===!0){t.activeTexture(r.TEXTURE0+F);const ce=ct.getPrimaries(ct.workingColorSpace),Ue=M.colorSpace===mr?null:ct.getPrimaries(M.colorSpace),we=M.colorSpace===mr||ce===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ae=g(M.image,!1,i.maxTextureSize);ae=He(M,ae);const le=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type);let Re=E(M.internalFormat,le,Ae,M.colorSpace,M.isVideoTexture);de(J,M);let _e;const Xe=M.mipmaps,I=M.isVideoTexture!==!0,fe=ye.__version===void 0||Q===!0,oe=$.dataReady,ge=b(M,ae);if(M.isDepthTexture)Re=S(M.format===qr,M.type),fe&&(I?t.texStorage2D(r.TEXTURE_2D,1,Re,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,Re,ae.width,ae.height,0,le,Ae,null));else if(M.isDataTexture)if(Xe.length>0){I&&fe&&t.texStorage2D(r.TEXTURE_2D,ge,Re,Xe[0].width,Xe[0].height);for(let re=0,K=Xe.length;re<K;re++)_e=Xe[re],I?oe&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,_e.width,_e.height,le,Ae,_e.data):t.texImage2D(r.TEXTURE_2D,re,Re,_e.width,_e.height,0,le,Ae,_e.data);M.generateMipmaps=!1}else I?(fe&&t.texStorage2D(r.TEXTURE_2D,ge,Re,ae.width,ae.height),oe&&ie(M,ae,le,Ae)):t.texImage2D(r.TEXTURE_2D,0,Re,ae.width,ae.height,0,le,Ae,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Re,Xe[0].width,Xe[0].height,ae.depth);for(let re=0,K=Xe.length;re<K;re++)if(_e=Xe[re],M.format!==vi)if(le!==null)if(I){if(oe)if(M.layerUpdates.size>0){const Ce=hf(_e.width,_e.height,M.format,M.type);for(const ke of M.layerUpdates){const ut=_e.data.subarray(ke*Ce/_e.data.BYTES_PER_ELEMENT,(ke+1)*Ce/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ke,_e.width,_e.height,1,le,ut)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,_e.width,_e.height,ae.depth,le,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Re,_e.width,_e.height,ae.depth,0,_e.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,_e.width,_e.height,ae.depth,le,Ae,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Re,_e.width,_e.height,ae.depth,0,le,Ae,_e.data)}else{I&&fe&&t.texStorage2D(r.TEXTURE_2D,ge,Re,Xe[0].width,Xe[0].height);for(let re=0,K=Xe.length;re<K;re++)_e=Xe[re],M.format!==vi?le!==null?I?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,_e.width,_e.height,le,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Re,_e.width,_e.height,0,_e.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?oe&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,_e.width,_e.height,le,Ae,_e.data):t.texImage2D(r.TEXTURE_2D,re,Re,_e.width,_e.height,0,le,Ae,_e.data)}else if(M.isDataArrayTexture)if(I){if(fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Re,ae.width,ae.height,ae.depth),oe)if(M.layerUpdates.size>0){const re=hf(ae.width,ae.height,M.format,M.type);for(const K of M.layerUpdates){const Ce=ae.data.subarray(K*re/ae.data.BYTES_PER_ELEMENT,(K+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,ae.width,ae.height,1,le,Ae,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,le,Ae,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,ae.width,ae.height,ae.depth,0,le,Ae,ae.data);else if(M.isData3DTexture)I?(fe&&t.texStorage3D(r.TEXTURE_3D,ge,Re,ae.width,ae.height,ae.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,le,Ae,ae.data)):t.texImage3D(r.TEXTURE_3D,0,Re,ae.width,ae.height,ae.depth,0,le,Ae,ae.data);else if(M.isFramebufferTexture){if(fe)if(I)t.texStorage2D(r.TEXTURE_2D,ge,Re,ae.width,ae.height);else{let re=ae.width,K=ae.height;for(let Ce=0;Ce<ge;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,Re,re,K,0,le,Ae,null),re>>=1,K>>=1}}else if(Xe.length>0){if(I&&fe){const re=be(Xe[0]);t.texStorage2D(r.TEXTURE_2D,ge,Re,re.width,re.height)}for(let re=0,K=Xe.length;re<K;re++)_e=Xe[re],I?oe&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,le,Ae,_e):t.texImage2D(r.TEXTURE_2D,re,Re,le,Ae,_e);M.generateMipmaps=!1}else if(I){if(fe){const re=be(ae);t.texStorage2D(r.TEXTURE_2D,ge,Re,re.width,re.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,Ae,ae)}else t.texImage2D(r.TEXTURE_2D,0,Re,le,Ae,ae);p(M)&&_(J),ye.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function j(C,M,F){if(M.image.length!==6)return;const J=ne(C,M),Q=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+F);const $=n.get(Q);if(Q.version!==$.__version||J===!0){t.activeTexture(r.TEXTURE0+F);const ye=ct.getPrimaries(ct.workingColorSpace),ce=M.colorSpace===mr?null:ct.getPrimaries(M.colorSpace),Ue=M.colorSpace===mr||ye===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,le=[];for(let K=0;K<6;K++)!we&&!ae?le[K]=g(M.image[K],!0,i.maxCubemapSize):le[K]=ae?M.image[K].image:M.image[K],le[K]=He(M,le[K]);const Ae=le[0],Re=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Xe=E(M.internalFormat,Re,_e,M.colorSpace),I=M.isVideoTexture!==!0,fe=$.__version===void 0||J===!0,oe=Q.dataReady;let ge=b(M,Ae);de(r.TEXTURE_CUBE_MAP,M);let re;if(we){I&&fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Xe,Ae.width,Ae.height);for(let K=0;K<6;K++){re=le[K].mipmaps;for(let Ce=0;Ce<re.length;Ce++){const ke=re[Ce];M.format!==vi?Re!==null?I?oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,0,0,ke.width,ke.height,Re,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,Xe,ke.width,ke.height,0,ke.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,0,0,ke.width,ke.height,Re,_e,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,Xe,ke.width,ke.height,0,Re,_e,ke.data)}}}else{if(re=M.mipmaps,I&&fe){re.length>0&&ge++;const K=be(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Xe,K.width,K.height)}for(let K=0;K<6;K++)if(ae){I?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,le[K].width,le[K].height,Re,_e,le[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,le[K].width,le[K].height,0,Re,_e,le[K].data);for(let Ce=0;Ce<re.length;Ce++){const ut=re[Ce].image[K].image;I?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,0,0,ut.width,ut.height,Re,_e,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,Xe,ut.width,ut.height,0,Re,_e,ut.data)}}else{I?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,_e,le[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,Re,_e,le[K]);for(let Ce=0;Ce<re.length;Ce++){const ke=re[Ce];I?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,0,0,Re,_e,ke.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,Xe,Re,_e,ke.image[K])}}}p(M)&&_(r.TEXTURE_CUBE_MAP),$.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Z(C,M,F,J,Q,$){const ye=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),Ue=E(F.internalFormat,ye,ce,F.colorSpace),we=n.get(M),ae=n.get(F);if(ae.__renderTarget=M,!we.__hasExternalTextures){const le=Math.max(1,M.width>>$),Ae=Math.max(1,M.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,Ue,le,Ae,M.depth,0,ye,ce,null):t.texImage2D(Q,$,Ue,le,Ae,0,ye,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),We(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,ae.__webglTexture,0,U(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,ae.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(C,M,F){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const J=M.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=S(M.stencilBuffer,Q),ye=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;We(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(M),$,M.width,M.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(M),$,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,$,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,C)}else{const J=M.textures;for(let Q=0;Q<J.length;Q++){const $=J[Q],ye=s.convert($.format,$.colorSpace),ce=s.convert($.type),Ue=E($.internalFormat,ye,ce,$.colorSpace);We(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(M),Ue,M.width,M.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(M),Ue,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(C,M,F){const J=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),de(r.TEXTURE_CUBE_MAP,M.depthTexture);const we=s.convert(M.depthTexture.format),ae=s.convert(M.depthTexture.type);let le;M.depthTexture.format===tr?le=r.DEPTH_COMPONENT24:M.depthTexture.format===qr&&(le=r.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,le,M.width,M.height,0,we,ae,null)}}else B(M.depthTexture,0);const $=Q.__webglTexture,ye=U(M),ce=J?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,Ue=M.depthTexture.format===qr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===tr)We(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ue,ce,$,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,Ue,ce,$,0);else if(M.depthTexture.format===qr)We(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ue,ce,$,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,Ue,ce,$,0);else throw new Error("Unknown depthTexture format")}function Pe(C){const M=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=J}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let J=0;J<6;J++)Me(M.__webglFramebuffer[J],C,J);else{const J=C.texture.mipmaps;J&&J.length>0?Me(M.__webglFramebuffer[0],C,0):Me(M.__webglFramebuffer,C,0)}else if(F){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=r.createRenderbuffer(),he(M.__webglDepthbuffer[J],C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),he(M.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(C,M,F){const J=n.get(C);M!==void 0&&Z(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Pe(C)}function Ee(C){const M=C.texture,F=n.get(C),J=n.get(M);C.addEventListener("dispose",A);const Q=C.textures,$=C.isWebGLCubeRenderTarget===!0,ye=Q.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=M.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let Ue=0;Ue<M.mipmaps.length;Ue++)F.__webglFramebuffer[ce][Ue]=r.createFramebuffer()}else F.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)F.__webglFramebuffer[ce]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ce=0,Ue=Q.length;ce<Ue;ce++){const we=n.get(Q[ce]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&We(C)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const Ue=Q[ce];F.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const we=s.convert(Ue.format,Ue.colorSpace),ae=s.convert(Ue.type),le=E(Ue.internalFormat,we,ae,Ue.colorSpace,C.isXRRenderTarget===!0),Ae=U(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,le,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),he(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),de(r.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)Z(F.__webglFramebuffer[ce][Ue],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue);else Z(F.__webglFramebuffer[ce],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(M)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ce=0,Ue=Q.length;ce<Ue;ce++){const we=Q[ce],ae=n.get(we);let le=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,ae.__webglTexture),de(le,we),Z(F.__webglFramebuffer,C,we,r.COLOR_ATTACHMENT0+ce,le,0),p(we)&&_(le)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),de(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)Z(F.__webglFramebuffer[Ue],C,M,r.COLOR_ATTACHMENT0,ce,Ue);else Z(F.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,ce,0);p(M)&&_(ce),t.unbindTexture()}C.depthBuffer&&Pe(C)}function Ne(C){const M=C.textures;for(let F=0,J=M.length;F<J;F++){const Q=M[F];if(p(Q)){const $=v(C),ye=n.get(Q).__webglTexture;t.bindTexture($,ye),_($),t.unbindTexture()}}}const Ge=[],Fe=[];function G(C){if(C.samples>0){if(We(C)===!1){const M=C.textures,F=C.width,J=C.height;let Q=r.COLOR_BUFFER_BIT;const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(C),ce=M.length>1;if(ce)for(let we=0;we<M.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ue=C.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<M.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ae=n.get(M[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,F,J,0,0,F,J,Q,r.NEAREST),l===!0&&(Ge.length=0,Fe.length=0,Ge.push(r.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ge.push($),Fe.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let we=0;we<M.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ae=n.get(M[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function U(C){return Math.min(i.maxSamples,C.samples)}function We(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Qe(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function He(C,M){const F=C.colorSpace,J=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==$s&&F!==mr&&(ct.getTransfer(F)===vt?(J!==vi||Q!==li)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",F)),M}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=ee,this.rebindTextures=je,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JS(r,e){function t(n,i=mr){let s;const a=ct.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===ju)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ku)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Nd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Id)return r.BYTE;if(n===Ud)return r.SHORT;if(n===Ba)return r.UNSIGNED_SHORT;if(n===$u)return r.INT;if(n===Oi)return r.UNSIGNED_INT;if(n===Ri)return r.FLOAT;if(n===er)return r.HALF_FLOAT;if(n===Od)return r.ALPHA;if(n===Bd)return r.RGB;if(n===vi)return r.RGBA;if(n===tr)return r.DEPTH_COMPONENT;if(n===qr)return r.DEPTH_STENCIL;if(n===zd)return r.RED;if(n===Zu)return r.RED_INTEGER;if(n===qs)return r.RG;if(n===Ju)return r.RG_INTEGER;if(n===Qu)return r.RGBA_INTEGER;if(n===Go||n===Wo||n===Xo||n===Yo)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===zc||n===kc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===Yc||n===qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vc||n===Hc)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wc)return s.COMPRESSED_R11_EAC;if(n===Xc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Yc)return s.COMPRESSED_RG11_EAC;if(n===qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$c||n===jc||n===Kc||n===Zc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===au||n===ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$c)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ru)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===au)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lu||n===cu||n===uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===lu)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===fu||n===du||n===pu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===hu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===za?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bi({vertexShader:QS,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Si(new bl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends ia{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const g=typeof XRWebGLBinding<"u",p=new tM,_={},v=t.getContextAttributes();let E=null,S=null;const b=[],w=[],A=new dt;let x=null;const y=new Xn;y.viewport=new Ot;const P=new Xn;P.viewport=new Ot;const R=[y,P],L=new pg;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=b[V];return j===void 0&&(j=new Hl,b[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=b[V];return j===void 0&&(j=new Hl,b[V]=j),j.getGripSpace()},this.getHand=function(V){let j=b[V];return j===void 0&&(j=new Hl,b[V]=j),j.getHandSpace()};function B(V){const j=w.indexOf(V.inputSource);if(j===-1)return;const Z=b[j];Z!==void 0&&(Z.update(V.inputSource,V.frame,c||a),Z.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",N);for(let V=0;V<b.length;V++){const j=w[V];j!==null&&(w[V]=null,b[V].disconnect(j))}z=null,H=null,p.reset();for(const V in _)delete _[V];e.setRenderTarget(E),d=null,u=null,f=null,i=null,S=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",k),i.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,he=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?qr:tr,he=v.stencil?za:Oi);const Pe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Pe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Ni(u.textureWidth,u.textureHeight,{format:vi,type:li,depthTexture:new ka(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Z={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ni(d.framebufferWidth,d.framebufferHeight,{format:vi,type:li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(V){for(let j=0;j<V.removed.length;j++){const Z=V.removed[j],he=w.indexOf(Z);he>=0&&(w[he]=null,b[he].disconnect(Z))}for(let j=0;j<V.added.length;j++){const Z=V.added[j];let he=w.indexOf(Z);if(he===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=w.length){w.push(Z),he=Pe;break}else if(w[Pe]===null){w[Pe]=Z,he=Pe;break}if(he===-1)break}const Me=b[he];Me&&Me.connect(Z)}}const ee=new X,te=new X;function D(V,j,Z){ee.setFromMatrixPosition(j.matrixWorld),te.setFromMatrixPosition(Z.matrixWorld);const he=ee.distanceTo(te),Me=j.projectionMatrix.elements,Pe=Z.projectionMatrix.elements,je=Me[14]/(Me[10]-1),Ee=Me[14]/(Me[10]+1),Ne=(Me[9]+1)/Me[5],Ge=(Me[9]-1)/Me[5],Fe=(Me[8]-1)/Me[0],G=(Pe[8]+1)/Pe[0],U=je*Fe,We=je*G,Qe=he/(-Fe+G),He=Qe*-Fe;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(He),V.translateZ(Qe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Me[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const be=je+Qe,C=Ee+Qe,M=U-He,F=We+(he-He),J=Ne*Ee/C*be,Q=Ge*Ee/C*be;V.projectionMatrix.makePerspective(M,F,J,Q,be,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ue(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let j=V.near,Z=V.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(Z=p.depthFar)),L.near=P.near=y.near=j,L.far=P.far=y.far=Z,(z!==L.near||H!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),z=L.near,H=L.far),L.layers.mask=V.layers.mask|6,y.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;const he=V.parent,Me=L.cameras;ue(L,he);for(let Pe=0;Pe<Me.length;Pe++)ue(Me[Pe],he);Me.length===2?D(L,y,P):L.projectionMatrix.copy(y.projectionMatrix),de(V,L,he)};function de(V,j,Z){Z===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(Z.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=mu*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(V){return _[V]};let ne=null;function se(V,j){if(h=j.getViewerPose(c||a),m=j,h!==null){const Z=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let he=!1;Z.length!==L.cameras.length&&(L.cameras.length=0,he=!0);for(let Ee=0;Ee<Z.length;Ee++){const Ne=Z[Ee];let Ge=null;if(d!==null)Ge=d.getViewport(Ne);else{const G=f.getViewSubImage(u,Ne);Ge=G.viewport,Ee===0&&(e.setRenderTargetTextures(S,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(S))}let Fe=R[Ee];Fe===void 0&&(Fe=new Xn,Fe.layers.enable(Ee),Fe.viewport=new Ot,R[Ee]=Fe),Fe.matrix.fromArray(Ne.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ne.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ee===0&&(L.matrix.copy(Fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),he===!0&&L.cameras.push(Fe)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const Ee=f.getDepthInformation(Z[0]);Ee&&Ee.isValid&&Ee.texture&&p.init(Ee,i.renderState)}if(Me&&Me.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let Ee=0;Ee<Z.length;Ee++){const Ne=Z[Ee].camera;if(Ne){let Ge=_[Ne];Ge||(Ge=new Zd,_[Ne]=Ge);const Fe=f.getCameraImage(Ne);Ge.sourceTexture=Fe}}}}for(let Z=0;Z<b.length;Z++){const he=w[Z],Me=b[Z];he!==null&&Me!==void 0&&Me.update(he,j,c||a)}ne&&ne(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}const ie=new tp;ie.setAnimationLoop(se),this.setAnimationLoop=function(V){ne=V},this.dispose=function(){}}}const Or=new nr,iM=new zt;function rM(r,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,Jd(r)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function i(p,_,v,E,S){_.isMeshBasicMaterial?s(p,_):_.isMeshLambertMaterial?(s(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(p,_),f(p,_)):_.isMeshPhongMaterial?(s(p,_),h(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(p,_),u(p,_),_.isMeshPhysicalMaterial&&d(p,_,S)):_.isMeshMatcapMaterial?(s(p,_),m(p,_)):_.isMeshDepthMaterial?s(p,_):_.isMeshDistanceMaterial?(s(p,_),g(p,_)):_.isMeshNormalMaterial?s(p,_):_.isLineBasicMaterial?(a(p,_),_.isLineDashedMaterial&&o(p,_)):_.isPointsMaterial?l(p,_,v,E):_.isSpriteMaterial?c(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===Dn&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===Dn&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const v=e.get(_),E=v.envMap,S=v.envMapRotation;E&&(p.envMap.value=E,Or.copy(S),Or.x*=-1,Or.y*=-1,Or.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),p.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Or)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function a(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function o(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,v,E){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*v,p.scale.value=E*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function c(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function h(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function f(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function u(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function d(p,_,v){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Dn&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,_){_.matcap&&(p.matcap.value=_.matcap)}function g(p,_){const v=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const S=E.program;n.uniformBlockBinding(v,S)}function c(v,E){let S=i[v.id];S===void 0&&(m(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",p));const b=E.program;n.updateUBOMapping(v,b);const w=e.render.frame;s[v.id]!==w&&(u(v),s[v.id]=w)}function h(v){const E=f();v.__bindingPointIndex=E;const S=r.createBuffer(),b=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const E=i[v.id],S=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,A=S.length;w<A;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,P=x.length;y<P;y++){const R=x[y];if(d(R,w,y,b)===!0){const L=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let B=0;B<z.length;B++){const k=z[B],N=g(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,L+H,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,H),H+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,E,S,b){const w=v.value,A=E+"_"+S;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const x=b[A];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return b[A]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function m(v){const E=v.uniforms;let S=0;const b=16;for(let A=0,x=E.length;A<x;A++){const y=Array.isArray(E[A])?E[A]:[E[A]];for(let P=0,R=y.length;P<R;P++){const L=y[P],z=Array.isArray(L.value)?L.value:[L.value];for(let H=0,B=z.length;H<B;H++){const k=z[H],N=g(k),ee=S%b,te=ee%N.boundary,D=ee+te;S+=te,D!==0&&b-D<N.storage&&(S+=b-D),L.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=N.storage}}}const w=S%b;return w>0&&(S+=b-w),v.__size=S,v.__cache={},this}function g(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",v),E}function p(v){const E=v.target;E.removeEventListener("dispose",p);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function _(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:_}}const aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function oM(){return Ei===null&&(Ei=new tg(aM,16,16,qs,er),Ei.name="DFG_LUT",Ei.minFilter=_n,Ei.magFilter=_n,Ei.wrapS=ji,Ei.wrapT=ji,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class op{constructor(e={}){const{canvas:t=I_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=li}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=d,p=new Set([Qu,Ju,Zu]),_=new Set([li,Oi,Ba,za,ju,Ku]),v=new Uint32Array(4),E=new Int32Array(4);let S=null,b=null;const w=[],A=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let P=!1;this._outputColorSpace=si;let R=0,L=0,z=null,H=-1,B=null;const k=new Ot,N=new Ot;let ee=null;const te=new pt(0);let D=0,ue=t.width,de=t.height,ne=1,se=null,ie=null;const V=new Ot(0,0,ue,de),j=new Ot(0,0,ue,de);let Z=!1;const he=new $d;let Me=!1,Pe=!1;const je=new zt,Ee=new X,Ne=new Ot,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function G(){return z===null?ne:1}let U=n;function We(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qu}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ut,!1),U===null){const O="webgl2";if(U=We(O,T),U===null)throw We(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw ft("WebGLRenderer: "+T.message),T}let Qe,He,be,C,M,F,J,Q,$,ye,ce,Ue,we,ae,le,Ae,Re,_e,Xe,I,fe,oe,ge;function re(){Qe=new lx(U),Qe.init(),fe=new JS(U,Qe),He=new ex(U,Qe,e,fe),be=new KS(U,Qe),He.reversedDepthBuffer&&u&&be.buffers.depth.setReversed(!0),C=new hx(U),M=new FS,F=new ZS(U,Qe,be,M,He,fe,C),J=new ox(y),Q=new _g(U),oe=new Jv(U,Q),$=new cx(U,Q,C,oe),ye=new dx(U,$,Q,oe,C),_e=new fx(U,He,F),le=new tx(M),ce=new NS(y,J,Qe,He,oe,le),Ue=new rM(y,M),we=new BS,ae=new WS(Qe),Re=new Zv(y,J,be,ye,m,l),Ae=new jS(y,ye,He),ge=new sM(U,C,He,be),Xe=new Qv(U,Qe,C),I=new ux(U,Qe,C),C.programs=ce.programs,y.capabilities=He,y.extensions=Qe,y.properties=M,y.renderLists=we,y.shadowMap=Ae,y.state=be,y.info=C}re(),g!==li&&(x=new mx(g,t.width,t.height,i,s));const K=new nM(y,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(ue,de,!1))},this.getSize=function(T){return T.set(ue,de)},this.setSize=function(T,O,q=!0){if(K.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=T,de=O,t.width=Math.floor(T*ne),t.height=Math.floor(O*ne),q===!0&&(t.style.width=T+"px",t.style.height=O+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(ue*ne,de*ne).floor()},this.setDrawingBufferSize=function(T,O,q){ue=T,de=O,ne=q,t.width=Math.floor(T*q),t.height=Math.floor(O*q),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(g===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(V)},this.setViewport=function(T,O,q,Y){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,O,q,Y),be.viewport(k.copy(V).multiplyScalar(ne).round())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,O,q,Y){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,O,q,Y),be.scissor(N.copy(j).multiplyScalar(ne).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){be.setScissorTest(Z=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,q=!0){let Y=0;if(T){let W=!1;if(z!==null){const pe=z.texture.format;W=p.has(pe)}if(W){const pe=z.texture.type,ve=_.has(pe),me=Re.getClearColor(),Le=Re.getClearAlpha(),De=me.r,Ze=me.g,it=me.b;ve?(v[0]=De,v[1]=Ze,v[2]=it,v[3]=Le,U.clearBufferuiv(U.COLOR,0,v)):(E[0]=De,E[1]=Ze,E[2]=it,E[3]=Le,U.clearBufferiv(U.COLOR,0,E))}else Y|=U.COLOR_BUFFER_BIT}O&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Re.dispose(),we.dispose(),ae.dispose(),M.dispose(),J.dispose(),ye.dispose(),oe.dispose(),ge.dispose(),ce.dispose(),K.dispose(),K.removeEventListener("sessionstart",qe),K.removeEventListener("sessionend",Ut),Ke.stop()};function Ce(T){T.preventDefault(),Xh("WebGLRenderer: Context Lost."),P=!0}function ke(){Xh("WebGLRenderer: Context Restored."),P=!1;const T=C.autoReset,O=Ae.enabled,q=Ae.autoUpdate,Y=Ae.needsUpdate,W=Ae.type;re(),C.autoReset=T,Ae.enabled=O,Ae.autoUpdate=q,Ae.needsUpdate=Y,Ae.type=W}function ut(T){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Te(T){const O=T.target;O.removeEventListener("dispose",Te),Oe(O)}function Oe(T){et(T),M.remove(T)}function et(T){const O=M.get(T).programs;O!==void 0&&(O.forEach(function(q){ce.releaseProgram(q)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,q,Y,W,pe){O===null&&(O=Ge);const ve=W.isMesh&&W.matrixWorld.determinant()<0,me=ni(T,O,q,Y,W);be.setMaterial(Y,ve);let Le=q.index,De=1;if(Y.wireframe===!0){if(Le=$.getWireframeAttribute(q),Le===void 0)return;De=2}const Ze=q.drawRange,it=q.attributes.position;let ze=Ze.start*De,xt=(Ze.start+Ze.count)*De;pe!==null&&(ze=Math.max(ze,pe.start*De),xt=Math.min(xt,(pe.start+pe.count)*De)),Le!==null?(ze=Math.max(ze,0),xt=Math.min(xt,Le.count)):it!=null&&(ze=Math.max(ze,0),xt=Math.min(xt,it.count));const Nt=xt-ze;if(Nt<0||Nt===1/0)return;oe.setup(W,Y,me,q,Le);let Lt,St=Xe;if(Le!==null&&(Lt=Q.get(Le),St=I,St.setIndex(Lt)),W.isMesh)Y.wireframe===!0?(be.setLineWidth(Y.wireframeLinewidth*G()),St.setMode(U.LINES)):St.setMode(U.TRIANGLES);else if(W.isLine){let cn=Y.linewidth;cn===void 0&&(cn=1),be.setLineWidth(cn*G()),W.isLineSegments?St.setMode(U.LINES):W.isLineLoop?St.setMode(U.LINE_LOOP):St.setMode(U.LINE_STRIP)}else W.isPoints?St.setMode(U.POINTS):W.isSprite&&St.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ll("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))St.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const cn=W._multiDrawStarts,Be=W._multiDrawCounts,zn=W._multiDrawCount,ht=Le?Q.get(Le).bytesPerElement:1,fi=M.get(Y).currentProgram.getUniforms();for(let Mi=0;Mi<zn;Mi++)fi.setValue(U,"_gl_DrawID",Mi),St.render(cn[Mi]/ht,Be[Mi])}else if(W.isInstancedMesh)St.renderInstances(ze,Nt,W.count);else if(q.isInstancedBufferGeometry){const cn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Be=Math.min(q.instanceCount,cn);St.renderInstances(ze,Nt,Be)}else St.render(ze,Nt)};function xe(T,O,q){T.transparent===!0&&T.side===Ai&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,on(T,O,q),T.side=Tr,T.needsUpdate=!0,on(T,O,q),T.side=Ai):on(T,O,q)}this.compile=function(T,O,q=null){q===null&&(q=T),b=ae.get(q),b.init(O),A.push(b),q.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),T!==q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights();const Y=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const pe=W.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const me=pe[ve];xe(me,q,W),Y.add(me)}else xe(pe,q,W),Y.add(pe)}),b=A.pop(),Y},this.compileAsync=function(T,O,q=null){const Y=this.compile(T,O,q);return new Promise(W=>{function pe(){if(Y.forEach(function(ve){M.get(ve).currentProgram.isReady()&&Y.delete(ve)}),Y.size===0){W(T);return}setTimeout(pe,10)}Qe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ye=null;function Ve(T){Ye&&Ye(T)}function qe(){Ke.stop()}function Ut(){Ke.start()}const Ke=new tp;Ke.setAnimationLoop(Ve),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(T){Ye=T,K.setAnimationLoop(T),T===null?Ke.stop():Ke.start()},K.addEventListener("sessionstart",qe),K.addEventListener("sessionend",Ut),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const q=K.enabled===!0&&K.isPresenting===!0,Y=x!==null&&(z===null||q)&&x.begin(y,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,O,z),b=ae.get(T,A.length),b.init(O),A.push(b),je.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),he.setFromProjectionMatrix(je,Pi,O.reversedDepth),Pe=this.localClippingEnabled,Me=le.init(this.clippingPlanes,Pe),S=we.get(T,w.length),S.init(),w.push(S),K.enabled===!0&&K.isPresenting===!0){const ve=y.xr.getDepthSensingMesh();ve!==null&&wt(ve,O,-1/0,y.sortObjects)}wt(T,O,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(se,ie),Fe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Fe&&Re.addToRenderList(S,T),this.info.render.frame++,Me===!0&&le.beginShadows();const W=b.state.shadowsArray;if(Ae.render(W,T,O),Me===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&x.hasRenderPass())===!1){const ve=S.opaque,me=S.transmissive;if(b.setupLights(),O.isArrayCamera){const Le=O.cameras;if(me.length>0)for(let De=0,Ze=Le.length;De<Ze;De++){const it=Le[De];At(ve,me,T,it)}Fe&&Re.render(T);for(let De=0,Ze=Le.length;De<Ze;De++){const it=Le[De];Gt(S,T,it,it.viewport)}}else me.length>0&&At(ve,me,T,O),Fe&&Re.render(T),Gt(S,T,O)}z!==null&&L===0&&(F.updateMultisampleRenderTarget(z),F.updateRenderTargetMipmap(z)),Y&&x.end(y),T.isScene===!0&&T.onAfterRender(y,T,O),oe.resetDefaultState(),H=-1,B=null,A.pop(),A.length>0?(b=A[A.length-1],Me===!0&&le.setGlobalState(y.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function wt(T,O,q,Y){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||he.intersectsSprite(T)){Y&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(je);const ve=ye.update(T),me=T.material;me.visible&&S.push(T,ve,me,q,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||he.intersectsObject(T))){const ve=ye.update(T),me=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ne.copy(ve.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(je)),Array.isArray(me)){const Le=ve.groups;for(let De=0,Ze=Le.length;De<Ze;De++){const it=Le[De],ze=me[it.materialIndex];ze&&ze.visible&&S.push(T,ve,ze,q,Ne.z,it)}}else me.visible&&S.push(T,ve,me,q,Ne.z,null)}}const pe=T.children;for(let ve=0,me=pe.length;ve<me;ve++)wt(pe[ve],O,q,Y)}function Gt(T,O,q,Y){const{opaque:W,transmissive:pe,transparent:ve}=T;b.setupLightsView(q),Me===!0&&le.setGlobalState(y.clippingPlanes,q),Y&&be.viewport(k.copy(Y)),W.length>0&&gt(W,O,q),pe.length>0&&gt(pe,O,q),ve.length>0&&gt(ve,O,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function At(T,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const ze=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Ni(1,1,{generateMipmaps:!0,type:ze?er:li,minFilter:Yr,samples:Math.max(4,He.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const pe=b.state.transmissionRenderTarget[Y.id],ve=Y.viewport||k;pe.setSize(ve.z*y.transmissionResolutionScale,ve.w*y.transmissionResolutionScale);const me=y.getRenderTarget(),Le=y.getActiveCubeFace(),De=y.getActiveMipmapLevel();y.setRenderTarget(pe),y.getClearColor(te),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&Re.render(q);const Ze=y.toneMapping;y.toneMapping=Ui;const it=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),Me===!0&&le.setGlobalState(y.clippingPlanes,Y),gt(T,q,Y),F.updateMultisampleRenderTarget(pe),F.updateRenderTargetMipmap(pe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let xt=0,Nt=O.length;xt<Nt;xt++){const Lt=O[xt],{object:St,geometry:cn,material:Be,group:zn}=Lt;if(Be.side===Ai&&St.layers.test(Y.layers)){const ht=Be.side;Be.side=Dn,Be.needsUpdate=!0,mt(St,q,Y,cn,Be,zn),Be.side=ht,Be.needsUpdate=!0,ze=!0}}ze===!0&&(F.updateMultisampleRenderTarget(pe),F.updateRenderTargetMipmap(pe))}y.setRenderTarget(me,Le,De),y.setClearColor(te,D),it!==void 0&&(Y.viewport=it),y.toneMapping=Ze}function gt(T,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let W=0,pe=T.length;W<pe;W++){const ve=T[W],{object:me,geometry:Le,group:De}=ve;let Ze=ve.material;Ze.allowOverride===!0&&Y!==null&&(Ze=Y),me.layers.test(q.layers)&&mt(me,O,q,Le,Ze,De)}}function mt(T,O,q,Y,W,pe){T.onBeforeRender(y,O,q,Y,W,pe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(y,O,q,Y,T,pe),W.transparent===!0&&W.side===Ai&&W.forceSinglePass===!1?(W.side=Dn,W.needsUpdate=!0,y.renderBufferDirect(q,O,Y,W,T,pe),W.side=Tr,W.needsUpdate=!0,y.renderBufferDirect(q,O,Y,W,T,pe),W.side=Ai):y.renderBufferDirect(q,O,Y,W,T,pe),T.onAfterRender(y,O,q,Y,W,pe)}function on(T,O,q){O.isScene!==!0&&(O=Ge);const Y=M.get(T),W=b.state.lights,pe=b.state.shadowsArray,ve=W.state.version,me=ce.getParameters(T,W.state,pe,O,q),Le=ce.getProgramCacheKey(me);let De=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;const Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=J.get(T.envMap||Y.environment,Ze),Y.envMapRotation=Y.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",Te),De=new Map,Y.programs=De);let it=De.get(Le);if(it!==void 0){if(Y.currentProgram===it&&Y.lightsStateVersion===ve)return ln(T,me),it}else me.uniforms=ce.getUniforms(T),T.onBeforeCompile(me,y),it=ce.acquireProgram(me,Le),De.set(Le,it),Y.uniforms=me.uniforms;const ze=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=le.uniform),ln(T,me),Y.needsLights=Xt(T),Y.lightsStateVersion=ve,Y.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=it,Y.uniformsList=null,it}function bt(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=qo.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function ln(T,O){const q=M.get(T);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function ni(T,O,q,Y,W){O.isScene!==!0&&(O=Ge),F.resetTextureUnits();const pe=O.fog,ve=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,me=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:$s,Le=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,De=J.get(Y.envMap||ve,Le),Ze=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!q.morphAttributes.position,xt=!!q.morphAttributes.normal,Nt=!!q.morphAttributes.color;let Lt=Ui;Y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Lt=y.toneMapping);const St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,cn=St!==void 0?St.length:0,Be=M.get(Y),zn=b.state.lights;if(Me===!0&&(Pe===!0||T!==B)){const Zt=T===B&&Y.id===H;le.setState(Y,T,Zt)}let ht=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==zn.state.version||Be.outputColorSpace!==me||W.isBatchedMesh&&Be.batching===!1||!W.isBatchedMesh&&Be.batching===!0||W.isBatchedMesh&&Be.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Be.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||W.isInstancedMesh&&Be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Be.instancingMorph===!1&&W.morphTexture!==null||Be.envMap!==De||Y.fog===!0&&Be.fog!==pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==le.numPlanes||Be.numIntersection!==le.numIntersection)||Be.vertexAlphas!==Ze||Be.vertexTangents!==it||Be.morphTargets!==ze||Be.morphNormals!==xt||Be.morphColors!==Nt||Be.toneMapping!==Lt||Be.morphTargetsCount!==cn)&&(ht=!0):(ht=!0,Be.__version=Y.version);let fi=Be.currentProgram;ht===!0&&(fi=on(Y,O,W));let Mi=!1,Dr=!1,fs=!1;const Mt=fi.getUniforms(),nn=Be.uniforms;if(be.useProgram(fi.program)&&(Mi=!0,Dr=!0,fs=!0),Y.id!==H&&(H=Y.id,Dr=!0),Mi||B!==T){be.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(U,"projectionMatrix",T.projectionMatrix),Mt.setValue(U,"viewMatrix",T.matrixWorldInverse);const ar=Mt.map.cameraPosition;ar!==void 0&&ar.setValue(U,Ee.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,Dr=!0,fs=!0)}if(Be.needsLights&&(zn.state.directionalShadowMap.length>0&&Mt.setValue(U,"directionalShadowMap",zn.state.directionalShadowMap,F),zn.state.spotShadowMap.length>0&&Mt.setValue(U,"spotShadowMap",zn.state.spotShadowMap,F),zn.state.pointShadowMap.length>0&&Mt.setValue(U,"pointShadowMap",zn.state.pointShadowMap,F)),W.isSkinnedMesh){Mt.setOptional(U,W,"bindMatrix"),Mt.setOptional(U,W,"bindMatrixInverse");const Zt=W.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Mt.setValue(U,"boneTexture",Zt.boneTexture,F))}W.isBatchedMesh&&(Mt.setOptional(U,W,"batchingTexture"),Mt.setValue(U,"batchingTexture",W._matricesTexture,F),Mt.setOptional(U,W,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",W._indirectTexture,F),Mt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",W._colorsTexture,F));const sr=q.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&_e.update(W,q,fi),(Dr||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,Mt.setValue(U,"receiveShadow",W.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(nn.envMapIntensity.value=O.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=oM()),Dr&&(Mt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&Wt(nn,fs),pe&&Y.fog===!0&&Ue.refreshFogUniforms(nn,pe),Ue.refreshMaterialUniforms(nn,Y,ne,de,b.state.transmissionRenderTarget[T.id]),qo.upload(U,bt(Be),nn,F)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(qo.upload(U,bt(Be),nn,F),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Mt.setValue(U,"center",W.center),Mt.setValue(U,"modelViewMatrix",W.modelViewMatrix),Mt.setValue(U,"normalMatrix",W.normalMatrix),Mt.setValue(U,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Zt=Y.uniformsGroups;for(let ar=0,ds=Zt.length;ar<ds;ar++){const Oh=Zt[ar];ge.update(Oh,fi),ge.bind(Oh,fi)}}return fi}function Wt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Xt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,O,q){const Y=M.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=O,M.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const q=M.get(T);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const Kt=U.createFramebuffer();this.setRenderTarget=function(T,O=0,q=0){z=T,R=O,L=q;let Y=null,W=!1,pe=!1;if(T){const me=M.get(T);if(me.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(U.FRAMEBUFFER,me.__webglFramebuffer),k.copy(T.viewport),N.copy(T.scissor),ee=T.scissorTest,be.viewport(k),be.scissor(N),be.setScissorTest(ee),H=-1;return}else if(me.__webglFramebuffer===void 0)F.setupRenderTarget(T);else if(me.__hasExternalTextures)F.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(me.__boundDepthTexture!==Ze){if(Ze!==null&&M.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const De=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[O])?Y=De[O][q]:Y=De[O],W=!0):T.samples>0&&F.useMultisampledRTT(T)===!1?Y=M.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?Y=De[q]:Y=De,k.copy(T.viewport),N.copy(T.scissor),ee=T.scissorTest}else k.copy(V).multiplyScalar(ne).floor(),N.copy(j).multiplyScalar(ne).floor(),ee=Z;if(q!==0&&(Y=Kt),be.bindFramebuffer(U.FRAMEBUFFER,Y)&&be.drawBuffers(T,Y),be.viewport(k),be.scissor(N),be.setScissorTest(ee),W){const me=M.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,q)}else if(pe){const me=O;for(let Le=0;Le<T.textures.length;Le++){const De=M.get(T.textures[Le]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Le,De.__webglTexture,q,me)}}else if(T!==null&&q!==0){const me=M.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,q)}H=-1},this.readRenderTargetPixels=function(T,O,q,Y,W,pe,ve,me=0){if(!(T&&T.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Le=Le[ve]),Le){be.bindFramebuffer(U.FRAMEBUFFER,Le);try{const De=T.textures[me],Ze=De.format,it=De.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me),!He.textureFormatReadable(Ze)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(it)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-Y&&q>=0&&q<=T.height-W&&U.readPixels(O,q,Y,W,fe.convert(Ze),fe.convert(it),pe)}finally{const De=z!==null?M.get(z).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,O,q,Y,W,pe,ve,me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Le=Le[ve]),Le)if(O>=0&&O<=T.width-Y&&q>=0&&q<=T.height-W){be.bindFramebuffer(U.FRAMEBUFFER,Le);const De=T.textures[me],Ze=De.format,it=De.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me),!He.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ze),U.bufferData(U.PIXEL_PACK_BUFFER,pe.byteLength,U.STREAM_READ),U.readPixels(O,q,Y,W,fe.convert(Ze),fe.convert(it),0);const xt=z!==null?M.get(z).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,xt);const Nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await U_(U,Nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pe),U.deleteBuffer(ze),U.deleteSync(Nt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,q=0){const Y=Math.pow(2,-q),W=Math.floor(T.image.width*Y),pe=Math.floor(T.image.height*Y),ve=O!==null?O.x:0,me=O!==null?O.y:0;F.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ve,me,W,pe),be.unbindTexture()};const ki=U.createFramebuffer(),hs=U.createFramebuffer();this.copyTextureToTexture=function(T,O,q=null,Y=null,W=0,pe=0){let ve,me,Le,De,Ze,it,ze,xt,Nt;const Lt=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(q!==null)ve=q.max.x-q.min.x,me=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ze=q.min.y,it=q.isBox3?q.min.z:0;else{const nn=Math.pow(2,-W);ve=Math.floor(Lt.width*nn),me=Math.floor(Lt.height*nn),T.isDataArrayTexture?Le=Lt.depth:T.isData3DTexture?Le=Math.floor(Lt.depth*nn):Le=1,De=0,Ze=0,it=0}Y!==null?(ze=Y.x,xt=Y.y,Nt=Y.z):(ze=0,xt=0,Nt=0);const St=fe.convert(O.format),cn=fe.convert(O.type);let Be;O.isData3DTexture?(F.setTexture3D(O,0),Be=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(F.setTexture2DArray(O,0),Be=U.TEXTURE_2D_ARRAY):(F.setTexture2D(O,0),Be=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const zn=U.getParameter(U.UNPACK_ROW_LENGTH),ht=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fi=U.getParameter(U.UNPACK_SKIP_PIXELS),Mi=U.getParameter(U.UNPACK_SKIP_ROWS),Dr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,De),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,it);const fs=T.isDataArrayTexture||T.isData3DTexture,Mt=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const nn=M.get(T),sr=M.get(O),Zt=M.get(nn.__renderTarget),ar=M.get(sr.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,Zt.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let ds=0;ds<Le;ds++)fs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(T).__webglTexture,W,it+ds),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(O).__webglTexture,pe,Nt+ds)),U.blitFramebuffer(De,Ze,ve,me,ze,xt,ve,me,U.DEPTH_BUFFER_BIT,U.NEAREST);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||M.has(T)){const nn=M.get(T),sr=M.get(O);be.bindFramebuffer(U.READ_FRAMEBUFFER,ki),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,hs);for(let Zt=0;Zt<Le;Zt++)fs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,nn.__webglTexture,W,it+Zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,nn.__webglTexture,W),Mt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,sr.__webglTexture,pe,Nt+Zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,sr.__webglTexture,pe),W!==0?U.blitFramebuffer(De,Ze,ve,me,ze,xt,ve,me,U.COLOR_BUFFER_BIT,U.NEAREST):Mt?U.copyTexSubImage3D(Be,pe,ze,xt,Nt+Zt,De,Ze,ve,me):U.copyTexSubImage2D(Be,pe,ze,xt,De,Ze,ve,me);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Be,pe,ze,xt,Nt,ve,me,Le,St,cn,Lt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Be,pe,ze,xt,Nt,ve,me,Le,St,Lt.data):U.texSubImage3D(Be,pe,ze,xt,Nt,ve,me,Le,St,cn,Lt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pe,ze,xt,ve,me,St,cn,Lt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pe,ze,xt,Lt.width,Lt.height,St,Lt.data):U.texSubImage2D(U.TEXTURE_2D,pe,ze,xt,ve,me,St,cn,Lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,zn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dr),pe===0&&O.generateMipmaps&&U.generateMipmap(Be),be.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&F.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?F.setTextureCube(T,0):T.isData3DTexture?F.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?F.setTexture2DArray(T,0):F.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){R=0,L=0,z=null,be.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}function Yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function lp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ks={duration:.5,overwrite:!1,delay:0},oh,an,Ct,ci=1e8,Et=1/ci,xu=Math.PI*2,lM=xu/4,cM=0,cp=Math.sqrt,uM=Math.cos,hM=Math.sin,tn=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},ir=function(e){return typeof e=="number"},lh=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},In=function(e){return e!==!1},ch=function(){return typeof window<"u"},Co=function(e){return It(e)||tn(e)},up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,fM=/random\([^)]+\)/g,dM=/,\s*/g,Nf=/(?:-?\.?\d|\.)+/gi,hp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fp=/[+-]=-?[.\d]+/,pM=/[^,'"\[\]\s]+/gi,mM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,bi,Su,uh,ei={},ul={},dp,pp=function(e){return(ul=Zs(e,ei))&&On},hh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Va=function(e,t){return!t&&console.warn(e)},mp=function(e,t){return e&&(ei[e]=t)&&ul&&(ul[e]=t)||ei},Ha=function(){return 0},_M={suppressEvents:!0,isStart:!0,kill:!1},$o={suppressEvents:!0,kill:!1},gM={suppressEvents:!0},fh={},yr=[],Mu={},_p,Wn={},fc={},Ff=30,jo=[],dh="",ph=function(e){var t=e[0],n,i;if(zi(t)||It(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=jo.length;i--&&!jo[i].targetTest(t););n=jo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new kp(e[i],n)))||e.splice(i,1);return e},Jr=function(e){return e._gsap||ph(ui(e))[0]._gsap},gp=function(e,t,n){return(n=e[t])&&It(n)?e[t]():lh(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},zs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},vM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hl=function(){var e=yr.length,t=yr.slice(0),n,i;for(Mu={},yr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},mh=function(e){return!!(e._initted||e._startAt||e.add)},vp=function(e,t,n,i){yr.length&&!an&&hl(),e.render(t,n,!!(an&&t<0&&mh(e))),yr.length&&!an&&hl()},xp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pM).length<2?t:tn(e)?e.trim():e},Sp=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Zs=function(e,t){for(var n in t)e[n]=t[n];return e},Of=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},fl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ta=function(e){var t=e.parent||Pt,n=e.keyframes?xM(gn(e.keyframes)):ti;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},SM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Mp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Al=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},MM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yu=function(e,t,n,i){return e._startAt&&(an?e._startAt.revert($o):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yM=function r(e){return!e||e._ts&&r(e.parent)},Bf=function(e){return e._repeat?Js(e._tTime,e=e.duration()+e._rDelay)*e:0},Js=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Cl=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Rl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Cl(e),n._dirty||Qr(n,e)),e},yp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dl(e.rawTime(),t),(!t._dur||eo(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Ci=function(e,t,n,i){return t.parent&&wr(t),t._start=Rt((ir(n)?n:n||e!==Pt?ri(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mp(e,t,"_first","_last",e._sort?"_start":0),Eu(t)||(e._recent=t),i||yp(e,t),e._ts<0&&Rl(e,e._tTime),e},Ep=function(e,t){return(ei.ScrollTrigger||hh("scrollTrigger",t))&&ei.ScrollTrigger.create(t,e)},bp=function(e,t,n,i,s){if(gh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_p!==$n.frame)return yr.push(e),e._lazy=[s,i],1},EM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Eu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&EM(e)&&!(!e._initted&&Eu(e))||(e._ts<0||e._dp._ts<0)&&!Eu(e))?0:1,o=e._rDelay,l=0,c,h,f;if(o&&e._repeat&&(l=eo(0,e._tDur,t),h=Js(l,o),e._yoyo&&h&1&&(a=1-a),h!==Js(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||an||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&bp(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&yu(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&wr(e,1),!n&&!an&&(Kn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Qs=function(e,t,n,i){var s=e._repeat,a=Rt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Rt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Rl(e,e._tTime=e._tDur*o),e.parent&&Cl(e),n||Qr(e.parent,e),e},zf=function(e){return e instanceof Tn?Qr(e):Qs(e,e._dur)},wM={_start:0,endTime:Ha,totalDuration:Ha},ri=function r(e,t,n){var i=e.labels,s=e._recent||wM,a=e.duration()>=ci?s.endTime(!1):e._dur,o,l,c;return tn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},wa=function(e,t,n){var i=ir(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;a.immediateRender=In(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ht(t[0],a,t[s+1])},Pr=function(e,t){return e||e===0?t(e):t},eo=function(e,t,n){return n<e?e:n>t?t:n},pn=function(e,t){return!tn(e)||!(t=mM.exec(e))?"":t[1]},AM=function(e,t,n){return Pr(n,function(i){return eo(e,t,i)})},bu=[].slice,Tp=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==bi},CM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return tn(i)&&!t||Tp(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):tn(e)&&!n&&(Su||!ea())?bu.call((t||uh).querySelectorAll(e),0):gn(e)?CM(e,n):Tp(e)?bu.call(e,0):e?[e]:[]},Tu=function(e){return e=ui(e)[0]||Va("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ui(t,n.querySelectorAll?n:n===e?Va("Invalid scope")||uh.createElement("div"):e)}},wp=function(e){return e.sort(function(){return .5-Math.random()})},Ap=function(e){if(It(e))return e;var t=zi(e)?e:{each:e},n=es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,f=i;return tn(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],f=i[1]),function(u,d,m){var g=(m||t).length,p=a[g],_,v,E,S,b,w,A,x,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,ci])[1],!y){for(A=-ci;A<(A=m[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=a[g]=[],_=l?Math.min(y,g)*h-.5:i%y,v=y===ci?0:l?g*f/y-.5:i/y|0,A=0,x=ci,w=0;w<g;w++)E=w%y-_,S=v-(w/y|0),p[w]=b=c?Math.abs(c==="y"?S:E):cp(E*E+S*S),b>A&&(A=b),b<x&&(x=b);i==="random"&&wp(p),p.max=A-x,p.min=x,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=pn(t.amount||t.each)||0,n=n&&g<0?Op(n):n}return g=(p[u]-p.min)/p.max||0,Rt(p.b+(n?n(g):g)*p.v)+p.u}},wu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ir(n)?0:pn(n))}},Cp=function(e,t){var n=gn(e),i,s;return!n&&zi(e)&&(i=n=e.radius||ci,e.values?(e=ui(e.values),(s=!ir(e[0]))&&(i*=i)):e=wu(e.increment)),Pr(t,n?It(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ci,h=0,f=e.length,u,d;f--;)s?(u=e[f].x-o,d=e[f].y-l,u=u*u+d*d):u=Math.abs(e[f]-o),u<c&&(c=u,h=f);return h=!i||c<=i?e[h]:a,s||h===a||ir(a)?h:h+pn(a)}:wu(e))},Rp=function(e,t,n,i){return Pr(gn(e)?!t:n===!0?!!(n=0):!i,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},RM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},PM=function(e,t){return function(n){return e(parseFloat(n))+(t||pn(n))}},DM=function(e,t,n){return Dp(e,t,0,1,n)},Pp=function(e,t,n){return Pr(n,function(i){return e[~~t(i)]})},LM=function r(e,t,n){var i=t-e;return gn(e)?Pp(e,r(0,e.length),t):Pr(n,function(s){return(i+(s-e)%i)%i+e})},IM=function r(e,t,n){var i=t-e,s=i*2;return gn(e)?Pp(e,r(0,e.length-1),t):Pr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ga=function(e){return e.replace(fM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(dM);return Rp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Dp=function(e,t,n,i,s){var a=t-e,o=i-n;return Pr(s,function(l){return n+((l-e)/a*o||0)})},UM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=tn(e),o={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(h=[],f=e.length,u=f-2,c=1;c<f;c++)h.push(r(e[c-1],e[c]));f--,s=function(m){m*=f;var g=Math.min(u,~~m);return h[g](m-g)},n=t}else i||(e=Zs(gn(e)?[]:{},e));if(!h){for(l in t)_h.call(o,e,l,"get",t[l]);s=function(m){return Sh(m,o)||(a?e.p:e)}}}return Pr(n,s)},kf=function(e,t,n){var i=e.labels,s=ci,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Kn=function(e,t,n){var i=e.vars,s=i[t],a=Ct,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&yr.length&&hl(),o&&(Ct=o),h=l?s.apply(c,l):s.call(c),Ct=a,h},va=function(e){return wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&Kn(e,"onInterrupt"),e},Ns,Lp=[],Ip=function(e){if(e)if(e=!e.name&&e.default||e,ch()||e.headless){var t=e.name,n=It(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ha,render:Sh,add:_h,kill:KM,modifier:jM,rawVars:0},a={targetTest:0,get:0,getSetter:xh,aliases:{},register:0};if(ea(),e!==i){if(Wn[t])return;ti(i,ti(fl(e,s),a)),Zs(i.prototype,Zs(s,fl(e,a))),Wn[i.prop=t]=i,e.targetTest&&(jo.push(i),fh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mp(t,i),e.register&&e.register(On,i,Nn)}else Lp.push(e)},yt=255,xa={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},dc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},Up=function(e,t,n){var i=e?ir(e)?[e>>16,e>>8&yt,e&yt]:0:xa.black,s,a,o,l,c,h,f,u,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xa[e])i=xa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Nf),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=dc(l+1/3,s,a),i[1]=dc(l,s,a),i[2]=dc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(hp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Nf)||xa.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/yt,a=i[1]/yt,o=i[2]/yt,f=Math.max(s,a,o),u=Math.min(s,a,o),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Np=function(e){var t=[],n=[],i=-1;return e.split(Er).forEach(function(s){var a=s.match(Us)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Vf=function(e,t,n){var i="",s=(e+i).match(Er),a=t?"hsla(":"rgba(",o=0,l,c,h,f;if(!s)return e;if(s=s.map(function(u){return(u=Up(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Np(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Er,"1").split(Us),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Er),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},Er=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),NM=/hsl[a]?\(/,Fp=function(e){var t=e.join(" "),n;if(Er.lastIndex=0,Er.test(t))return n=NM.test(t),e[1]=Vf(e[1],n),e[0]=Vf(e[0],n,Np(e[1])),!0},Wa,$n=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,f,u,d,m=function g(p){var _=r()-i,v=p===!0,E,S,b,w;if((_>e||_<0)&&(n+=_-t),i+=_,b=i-n,E=b-a,(E>0||v)&&(w=++f.frame,u=b-f.time*1e3,f.time=b=b/1e3,a+=E+(E>=s?4:s-E),S=1),v||(l=c(g)),S)for(d=0;d<o.length;d++)o[d](b,u,w,p)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){dp&&(!Su&&ch()&&(bi=Su=window,uh=bi.document||{},ei.gsap=On,(bi.gsapVersions||(bi.gsapVersions=[])).push(On.version),pp(ul||bi.GreenSockGlobals||!bi.gsap&&bi||{}),Lp.forEach(Ip)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Wa=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Wa=0,c=Ha},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,_,v){var E=_?function(S,b,w,A){p(S,b,w,A),f.remove(E)}:p;return f.remove(p),o[v?"unshift":"push"](E),ea(),E},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&d>=_&&d--},_listeners:o},f})(),ea=function(){return!Wa&&$n.wake()},lt={},FM=/^[\d.\-M][\d.\-,\s]/,OM=/["']/g,BM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(OM,"").trim():+c,i=l.substr(o+1).trim();return t},zM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},kM=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[BM(t[1])]:zM(e).split(",").map(xp)):lt._CE&&FM.test(e)?lt._CE("",e):n},Op=function(e){return function(t){return 1-e(1-t)}},Bp=function r(e,t){for(var n=e._first,i;n;)n instanceof Tn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},es=function(e,t){return e&&(It(e)?e:lt[e]||kM(e))||t},us=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Un(e,function(o){lt[o]=ei[o]=s,lt[a=o.toLowerCase()]=n;for(var l in s)lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[o+"."+l]=s[l]}),s},zp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/xu*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*hM((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:zp(o);return s=xu/s,l.config=function(c,h){return r(e,c,h)},l},mc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:zp(n);return i.config=function(s){return r(e,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;us(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;us("Elastic",pc("in"),pc("out"),pc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};us("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});us("Circ",function(r){return-(cp(1-r*r)-1)});us("Sine",function(r){return r===1?1:-uM(r*lM)+1});us("Back",mc("in"),mc("out"),mc());lt.SteppedEase=lt.steps=ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Et;return function(o){return((i*eo(0,a,o)|0)+s)*n}}};Ks.ease=lt["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return dh+=r+","+r+"Params,"});var kp=function(e,t){this.id=cM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:gp,this.set=t?t.getSetter:xh},Xa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qs(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Wa||$n.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ea(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rl(this,n),!s._dp||s.parent||yp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Js(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(eo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Cl(this),MM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ea(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ci(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gM);var i=an;return an=n,mh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ri(this,n),In(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=It(n)?n:Sp,l=function(){var h=i.then;i.then=null,s&&s(),It(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){va(this)},r})();ti(Xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){lp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Pt&&Ci(n.parent||Pt,Yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ep(Yi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return wa(0,arguments,this),this},t.from=function(i,s,a){return wa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return wa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ta(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(i,s,ri(this,a),1),this},t.call=function(i,s,a){return Ci(this,Ht.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ht(i,a,ri(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Ta(a).immediateRender=In(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,f){return o.startAt=a,Ta(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,l,c,h,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Rt(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,m,g,p,_,v,E,S,b,w,A;if(this!==Pt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||f){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,S=this._start,E=this._ts,_=!E,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=Rt(h%p),h===l?(g=this._repeat,u=c):(b=Rt(h/p),g=~~b,g&&g===b&&(u=c,g--),u>c&&(u=c)),b=Js(this._tTime,p),!o&&this._tTime&&b!==g&&this._tTime-b*p-this._dur<=0&&(b=g),w&&g&1&&(u=c-u,A=1),g!==b&&!this._lock){var x=w&&b&1,y=x===(w&&g&1);if(g<b&&(x=!x),o=x?0:h%c?c:h,this._lock=1,this.render(o||(A?0:Rt(g*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Bp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=TM(this,Rt(o),Rt(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!b&&(Kn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||u>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,a),u!==this._time||!this._ts&&!_){v=0,m&&(h+=this._zTime=-Et);break}}d=m}else{d=this._last;for(var P=i<0?i:u;d;){if(m=d._prev,(d._act||P<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(P-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(P-d._start)*d._ts,s,a||an&&mh(d)),u!==this._time||!this._ts&&!_){v=0,m&&(h+=this._zTime=P?-Et:Et);break}}d=m}}if(v&&!s&&(this.pause(),v.render(u>=o?0:-Et)._zTime=u>=o?1:-1,this._ts))return this._start=S,Cl(this),this.render(i,s,a);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&wr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Kn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ir(s)||(s=ri(this,s,i)),!(i instanceof Xa)){if(gn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(tn(i))return this.addLabel(i,s);if(It(i))i=Ht.delayedCall(0,i);else return this}return this!==i?Ci(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ci);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ht?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return tn(i)?this.removeLabel(i):It(i)?this.killTweensOf(i):(i.parent===this&&Al(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ri(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ht.delayedCall(0,s||Ha,a);return o.data="isPause",this._hasPause=1,Ci(this,o,ri(this,i))},t.removePause=function(i){var s=this._first;for(i=ri(this,i);s;)s._start===i&&s.data==="isPause"&&wr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)gr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ui(i),l=this._first,c=ir(s),h;l;)l instanceof Ht?vM(l._targets,o)&&(c?(!gr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ri(a,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,m=Ht.to(a,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Et,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&Qs(m,p,0,1).render(m._time,!0,!0),d=1}h&&h.apply(m,f||[])}},s));return u?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ti({startAt:{time:ri(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),kf(this,ri(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),kf(this,ri(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Rt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ci,c,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ci(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Rt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Qs(a,a===Pt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Pt._ts&&(vp(Pt,dl(i,Pt)),_p=$n.frame),$n.frame>=Ff){Ff+=Qn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},e})(Xa);ti(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var VM=function(e,t,n,i,s,a,o){var l=new Nn(this._pt,e,t,0,1,Yp,null,s),c=0,h=0,f,u,d,m,g,p,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ga(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),u=n.match(hc)||[];f=hc.exec(i);)m=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:m.charAt(1)==="="?zs(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},c=hc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(fp.test(i)||_)&&(l.e=0),this._pt=l,l},_h=function(e,t,n,i,s,a,o,l,c,h){It(i)&&(i=i(s||0,e,a));var f=e[t],u=n!=="get"?n:It(f)?c?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=It(f)?c?YM:Wp:vh,m;if(tn(i)&&(~i.indexOf("random(")&&(i=Ga(i)),i.charAt(1)==="="&&(m=zs(u,i)+(pn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||Au)return!isNaN(u*i)&&i!==""?(m=new Nn(this._pt,e,t,+u||0,i-(u||0),typeof f=="boolean"?$M:Xp,0,d),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!f&&!(t in e)&&hh(t,i),VM.call(this,e,t,u,i,d,l||Qn.stringFilter,c))},HM=function(e,t,n,i,s){if(It(e)&&(e=Aa(e,s,t,n,i)),!zi(e)||e.style&&e.nodeType||gn(e)||up(e))return tn(e)?Aa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Aa(e[o],s,t,n,i);return a},Vp=function(e,t,n,i,s,a){var o,l,c,h;if(Wn[e]&&(o=new Wn[e]).init(s,o.rawVars?t[e]:HM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ns))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},gr,Au,gh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,m=e._dur,g=e._startAt,p=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:p,E=e._overwrite==="auto"&&!oh,S=e.timeline,b,w,A,x,y,P,R,L,z,H,B,k,N;if(S&&(!u||!s)&&(s="none"),e._ease=es(s,Ks.ease),e._yEase=f?Op(es(f===!0?s:f,Ks.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!i.runBackwards,!S||u&&!i.stagger){if(L=p[0]?Jr(p[0]).harness:0,k=L&&i[L.prop],b=fl(i,fh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&m?$o:_M),g._lazy=0),a){if(wr(e._startAt=Ht.set(p,ti({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!o&&!d)&&e._startAt.revert($o),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!g){if(t&&(o=!1),A=ti({overwrite:!1,data:"isFromStart",lazy:o&&!g&&In(l),immediateRender:o,stagger:0,parent:_},b),k&&(A[L.prop]=k),wr(e._startAt=Ht.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert($o):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&In(l)||l&&!m,w=0;w<p.length;w++){if(y=p[w],R=y._gsap||ph(p)[w]._gsap,e._ptLookup[w]=H={},Mu[R.id]&&yr.length&&hl(),B=v===p?w:v.indexOf(y),L&&(z=new L).init(y,k||b,e,B,v)!==!1&&(e._pt=x=new Nn(e._pt,y,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(ee){H[ee]=x}),z.priority&&(P=1)),!L||k)for(A in b)Wn[A]&&(z=Vp(A,b,e,B,y,v))?z.priority&&(P=1):H[A]=x=_h.call(e,y,A,"get",b[A],B,v,0,i.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),E&&e._pt&&(gr=e,Pt.killTweensOf(y,H,e.globalTime(t)),N=!e.parent,gr=0),e._pt&&l&&(Mu[R.id]=1)}P&&qp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,u&&t<=0&&S.render(ci,!0,!0)},GM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,u,d;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,d=e._targets.length;d--;){if(h=u[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Au=1,e.vars[t]="+=0",gh(e,o),Au=0,l?Va(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=Ft(n)+pn(f.e)),f.b&&(f.b=h.s+pn(f.b))},WM=function(e,t){var n=e[0]?Jr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Zs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},XM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(gn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Aa=function(e,t,n,i,s){return It(e)?e.call(t,n,i,s):tn(e)&&~e.indexOf("random(")?Ga(e):e},Hp=dh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gp={};Un(Hp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Gp[r]=1});var Ht=(function(r){lp(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ta(i))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,m=l.keyframes,g=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,v=i.parent||Pt,E=(gn(n)||up(n)?ir(n[0]):"length"in i)?[n]:ui(n),S,b,w,A,x,y,P,R;if(o._targets=E.length?ph(E):Va("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,m||u||Co(c)||Co(h)){if(i=o.vars,S=o.timeline=new Tn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:E}),S.kill(),S.parent=S._dp=Yi(o),S._start=0,u||Co(c)||Co(h)){if(A=E.length,P=u&&Ap(u),zi(u))for(x in u)~Hp.indexOf(x)&&(R||(R={}),R[x]=u[x]);for(b=0;b<A;b++)w=fl(i,Gp),w.stagger=0,_&&(w.yoyoEase=_),R&&Zs(w,R),y=E[b],w.duration=+Aa(c,Yi(o),b,y,E),w.delay=(+Aa(h,Yi(o),b,y,E)||0)-o._delay,!u&&A===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),S.to(y,w,P?P(b,y,E):0),S._ease=lt.none;S.duration()?c=h=0:o.timeline=0}else if(m){Ta(ti(S.vars.defaults,{ease:"none"})),S._ease=es(m.ease||i.ease||"none");var L=0,z,H,B;if(gn(m))m.forEach(function(k){return S.to(E,k,">")}),S.duration();else{w={};for(x in m)x==="ease"||x==="easeEach"||XM(x,m[x],w,m.easeEach);for(x in w)for(z=w[x].sort(function(k,N){return k.t-N.t}),L=0,b=0;b<z.length;b++)H=z[b],B={ease:H.e,duration:(H.t-(b?z[b-1].t:0))/100*c},B[x]=H.v,S.to(E,B,L),L+=B.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!oh&&(gr=Yi(o),Pt.killTweensOf(E),gr=0),Ci(v,Yi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!m&&o._start===Rt(v._time)&&In(f)&&yM(Yi(o))&&v.data!=="nested")&&(o._tTime=-Et,o.render(Math.max(0,-h)||0)),p&&Ep(Yi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Et&&!h?l:i<Et?0:i,u,d,m,g,p,_,v,E,S;if(!c)bM(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(u=Rt(f%g),f===l?(m=this._repeat,u=c):(p=Rt(f/g),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),_=this._yoyo&&m&1,_&&(S=this._yEase,u=c-u),p=Js(this._tTime,g),u===o&&!a&&this._initted&&m===p)return this._tTime=f,this;m!==p&&(E&&this._yEase&&Bp(E,_),this.vars.repeatRefresh&&!_&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(Rt(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(bp(this,h?i:u,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(u/c),this._from&&(this.ratio=v=1-v),!o&&f&&!s&&!p&&(Kn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;E&&E.render(i<0?i:E._dur*E._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&yu(this,i,s,a),Kn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&yu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&wr(this,1),!s&&!(h&&!o)&&(f||o||_)&&(Kn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Wa||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||gh(this,c),h=this._ease(c/this._dur),GM(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Rl(this,0),this.parent||Mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?va(this):this.scrollTrigger&&this.scrollTrigger.kill(!!an),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,gr&&gr.vars.overwrite!==!0)._first||va(this),this.parent&&a!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ui(i):o,c=this._ptLookup,h=this._pt,f,u,d,m,g,p,_;if((!s||s==="all")&&SM(o,l))return s==="all"&&(this._pt=0),va(this);for(f=this._op=this._op||[],s!=="all"&&(tn(s)&&(g={},Un(s,function(v){return g[v]=1}),s=g),s=WM(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){u=c[_],s==="all"?(f[_]=s,m=u,d={}):(d=f[_]=f[_]||{},m=s);for(g in m)p=u&&u[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Al(this,p,"_pt"),delete u[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&va(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return wa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return wa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Pt.killTweensOf(i,s,a)},e})(Xa);ti(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var e=new Tn,t=bu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var vh=function(e,t,n){return e[t]=n},Wp=function(e,t,n){return e[t](n)},YM=function(e,t,n,i){return e[t](i.fp,n)},qM=function(e,t,n){return e.setAttribute(t,n)},xh=function(e,t){return It(e[t])?Wp:lh(e[t])&&e.setAttribute?qM:vh},Xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$M=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Sh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},KM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Al(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ZM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Nn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Xp,this.d=l||this,this.set=c||vh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ZM,this.m=n,this.mt=s,this.tween=i},r})();Un(dh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return fh[r]=1});ei.TweenMax=ei.TweenLite=Ht;ei.TimelineLite=ei.TimelineMax=Tn;Pt=new Tn({sortChildren:!1,defaults:Ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Fp;var ts=[],Ko={},JM=[],Hf=0,QM=0,_c=function(e){return(Ko[e]||JM).map(function(t){return t()})},Cu=function(){var e=Date.now(),t=[];e-Hf>2&&(_c("matchMediaInit"),ts.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=bi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),_c("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hf=e,_c("matchMedia"))},$p=(function(){function r(t,n){this.selector=n&&Tu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=QM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){It(n)&&(s=i,i=n,n=It);var a=this,o=function(){var c=Ct,h=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Tu(s)),Ct=a,f=i.apply(a,arguments),It(f)&&a._r.push(f),Ct=c,a.selector=h,a.isReverted=!1,f};return a.last=o,n===It?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ts.length;a--;)ts[a].id===this.id&&ts.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),ey=(function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){zi(n)||(n={matches:n});var a=new $p(0,s||this.scope),o=a.conditions={},l,c,h;Ct&&!a.selector&&(a.selector=Ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=bi.matchMedia(n[c]),l&&(ts.indexOf(a)<0&&ts.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Cu):l.addEventListener("change",Cu)));return h&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),pl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ip(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){tn(e)&&(e=ui(e)[0]);var s=Jr(e||{}).get,a=n?Sp:xp;return n==="native"&&(n=""),e&&(t?a((Wn[t]&&Wn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Wn[o]&&Wn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ui(e),e.length>1){var i=e.map(function(h){return On.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var a=Wn[t],o=Jr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var f=new a;Ns._pt=0,f.init(e,n?h+n:h,Ns,0,[e]),f.render(1,f),Ns._pt&&Sh(1,Ns)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=On.to(e,ti((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,Ks.ease)),Of(Ks,e||{})},config:function(e){return Of(Qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Wn[o]&&!ei[o]&&Va(t+" effect requires "+o+" plugin.")}),fc[t]=function(o,l,c){return n(ui(o),ti(l||{},s),c)},a&&(Tn.prototype[t]=function(o,l,c){return this.add(fc[t](o,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=es(t)},parseEase:function(e,t){return arguments.length?es(e,t):lt},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=In(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&Ci(n,i,i._start-i._delay),i=s;return Ci(Pt,n,0),n},context:function(e,t){return e?new $p(e,t):Ct},matchMedia:function(e){return new ey(e)},matchMediaRefresh:function(){return ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Cu()},addEventListener:function(e,t){var n=Ko[e]||(Ko[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ko[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:LM,wrapYoyo:IM,distribute:Ap,random:Rp,snap:Cp,normalize:DM,getUnit:pn,clamp:AM,splitColor:Up,toArray:ui,selector:Tu,mapRange:Dp,pipe:RM,unitize:PM,interpolate:UM,shuffle:wp},install:pp,effects:fc,ticker:$n,updateRoot:Tn.updateRoot,plugins:Wn,globalTimeline:Pt,core:{PropTween:Nn,globals:mp,Tween:Ht,Timeline:Tn,Animation:Xa,getCache:Jr,_removeLinkedListItem:Al,reverting:function(){return an},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return oh=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pl[r]=Ht[r]});$n.add(Tn.updateRoot);Ns=pl.to({},{duration:0});var ty=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ny=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ty(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},gc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(tn(s)&&(l={},Un(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ny(o,s)}}}},On=pl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gc("roundProps",wu),gc("modifiers"),gc("snap",Cp))||pl;Ht.version=Tn.version=On.version="3.14.2";dp=1;ch()&&ea();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;var Gf,vr,ks,Mh,$r,Wf,yh,iy=function(){return typeof window<"u"},rr={},Vr=180/Math.PI,Vs=Math.PI/180,Cs=Math.atan2,Xf=1e8,Eh=/([A-Z])/g,ry=/(left|right|width|margin|padding|x)/i,sy=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ru=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ay=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ly=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},uy=function(e,t,n){return e.style[t]=n},hy=function(e,t,n){return e.style.setProperty(t,n)},fy=function(e,t,n){return e._gsap[t]=n},dy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},py=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},my=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Dt="transform",Fn=Dt+"Origin",_y=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in rr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=qi(i,o)}):this.tfm[e]=a.x?a[e]:qi(i,e),e===Fn&&(this.tfm.zOrigin=a.zOrigin);else return Di.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Dt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},Zp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Eh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=yh(),(!s||!s.isStart)&&!n[Dt]&&(Zp(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jp=function(e,t){var n={target:e,props:[],revert:gy,save:_y};return e._gsap||On.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Qp,Pu=function(e,t){var n=vr.createElementNS?vr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vr.createElement(e);return n&&n.style?n:vr.createElement(e)},Zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Eh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ta(t)||t,1)||""},Yf="O,Moz,ms,Ms,Webkit".split(","),ta=function(e,t,n){var i=t||$r,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Yf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Yf[a]:"")+e},Du=function(){iy()&&window.document&&(Gf=window,vr=Gf.document,ks=vr.documentElement,$r=Pu("div")||{style:{}},Pu("div"),Dt=ta(Dt),Fn=Dt+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qp=!!ta("perspective"),yh=On.core.reverting,Mh=1)},qf=function(e){var t=e.ownerSVGElement,n=Pu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ks.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ks.removeChild(n),s},$f=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},em=function(e){var t,n;try{t=e.getBBox()}catch{t=qf(e),n=1}return t&&(t.width||t.height)||n||(t=qf(e)),t&&!t.width&&!t.x&&!t.y?{x:+$f(e,["x","cx","x1"])||0,y:+$f(e,["y","cy","y1"])||0,width:0,height:0}:t},tm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&em(e))},Ar=function(e,t){if(t){var n=e.style,i;t in rr&&t!==Fn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Eh,"-$1").toLowerCase())):n.removeAttribute(t)}},xr=function(e,t,n,i,s,a){var o=new Nn(e._pt,t,n,0,1,a?Kp:jp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},jf={deg:1,rad:1,turn:1},vy={grid:1,flex:1},Cr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=$r.style,l=ry.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",m,g,p,_;if(i===a||!s||jf[i]||jf[a])return s;if(a!=="px"&&!u&&(s=r(e,t,n,"px")),_=e.getCTM&&tm(e),(d||a==="%")&&(rr[t]||~t.indexOf("adius")))return m=_?e.getBBox()[l?"width":"height"]:e[h],Ft(d?s/m*f:s/100*m);if(o[l?"width":"height"]=f+(u?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===vr||!g.appendChild)&&(g=vr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===$n.time&&!p.uncache)return Ft(s/p.width*f);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+i,m=e[h],v?e.style[t]=v:Ar(e,t)}else(d||a==="%")&&!vy[Zn(g,"display")]&&(o.position=Zn(e,"position")),g===e&&(o.position="static"),g.appendChild($r),m=$r[h],g.removeChild($r),o.position="absolute";return l&&d&&(p=Jr(g),p.time=$n.time,p.width=g[h]),Ft(u?m*s/f:m&&s?f/m*s:0)},qi=function(e,t,n,i){var s;return Mh||Du(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),rr[t]&&t!=="transform"?(s=qa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_l(Zn(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ml[t]&&ml[t](e,t,n)||Zn(e,t)||gp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cr(e,t,s,n)+n:s},xy=function(e,t,n,i){if(!n||n==="none"){var s=ta(t,e,1),a=s&&Zn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var o=new Nn(this._pt,e.style,t,0,1,Yp),l=0,c=0,h,f,u,d,m,g,p,_,v,E,S,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Zn(e,t)||i,g?e.style[t]=g:Ar(e,t)),h=[n,i],Fp(h),n=h[0],i=h[1],u=n.match(Us)||[],b=i.match(Us)||[],b.length){for(;f=Us.exec(i);)p=f[0],v=i.substring(l,f.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(g=u[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=zs(d,p)+S),_=parseFloat(p),E=p.substr((_+"").length),l=Us.lastIndex-E.length,E||(E=E||Qn.units[t]||S,l===i.length&&(i+=E,o.e+=E)),S!==E&&(d=Cr(e,t,g,E)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:d,c:_-d,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Kp:jp;return fp.test(i)&&(o.e=0),this._pt=o,o},Kf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Sy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Kf[n]||n,t[1]=Kf[i]||i,t.join(" ")},My=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],rr[o]&&(l=1,o=o==="transformOrigin"?Fn:Dt),Ar(n,o);l&&(Ar(n,Dt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qa(n,1),a.uncache=1,Zp(i)))}},ml={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Nn(e._pt,t,n,0,0,My);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ya=[1,0,0,1,0,0],nm={},im=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zf=function(e){var t=Zn(e,Dt);return im(t)?Ya:t.substr(7).match(hp).map(Ft)},bh=function(e,t){var n=e._gsap||Jr(e),i=e.style,s=Zf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ya:s):(s===Ya&&!e.offsetParent&&e!==ks&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ks.appendChild(e)),s=Zf(e),l?i.display=l:Ar(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ks.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Lu=function(e,t,n,i,s,a){var o=e._gsap,l=s||bh(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,d=l[0],m=l[1],g=l[2],p=l[3],_=l[4],v=l[5],E=t.split(" "),S=parseFloat(E[0])||0,b=parseFloat(E[1])||0,w,A,x,y;n?l!==Ya&&(A=d*p-m*g)&&(x=S*(p/A)+b*(-g/A)+(g*v-p*_)/A,y=S*(-m/A)+b*(d/A)-(d*v-m*_)/A,S=x,b=y):(w=em(e),S=w.x+(~E[0].indexOf("%")?S/100*w.width:S),b=w.y+(~(E[1]||E[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(_=S-c,v=b-h,o.xOffset=f+(_*d+v*g)-_,o.yOffset=u+(_*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Fn]="0px 0px",a&&(xr(a,o,"xOrigin",c,S),xr(a,o,"yOrigin",h,b),xr(a,o,"xOffset",f,o.xOffset),xr(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+b)},qa=function(e,t){var n=e._gsap||new kp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Zn(e,Fn)||"0",h,f,u,d,m,g,p,_,v,E,S,b,w,A,x,y,P,R,L,z,H,B,k,N,ee,te,D,ue,de,ne,se,ie;return h=f=u=g=p=_=v=E=S=0,d=m=1,n.svg=!!(e.getCTM&&tm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),A=bh(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),c=n.xOrigin-ee.x+"px "+(n.yOrigin-ee.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),Lu(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,w=n.yOrigin||0,A!==Ya&&(R=A[0],L=A[1],z=A[2],H=A[3],h=B=A[4],f=k=A[5],A.length===6?(d=Math.sqrt(R*R+L*L),m=Math.sqrt(H*H+z*z),g=R||L?Cs(L,R)*Vr:0,v=z||H?Cs(z,H)*Vr+g:0,v&&(m*=Math.abs(Math.cos(v*Vs))),n.svg&&(h-=b-(b*R+w*z),f-=w-(b*L+w*H))):(ie=A[6],ne=A[7],D=A[8],ue=A[9],de=A[10],se=A[11],h=A[12],f=A[13],u=A[14],x=Cs(ie,de),p=x*Vr,x&&(y=Math.cos(-x),P=Math.sin(-x),N=B*y+D*P,ee=k*y+ue*P,te=ie*y+de*P,D=B*-P+D*y,ue=k*-P+ue*y,de=ie*-P+de*y,se=ne*-P+se*y,B=N,k=ee,ie=te),x=Cs(-z,de),_=x*Vr,x&&(y=Math.cos(-x),P=Math.sin(-x),N=R*y-D*P,ee=L*y-ue*P,te=z*y-de*P,se=H*P+se*y,R=N,L=ee,z=te),x=Cs(L,R),g=x*Vr,x&&(y=Math.cos(x),P=Math.sin(x),N=R*y+L*P,ee=B*y+k*P,L=L*y-R*P,k=k*y-B*P,R=N,B=ee),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,_=180-_),d=Ft(Math.sqrt(R*R+L*L+z*z)),m=Ft(Math.sqrt(k*k+ie*ie)),x=Cs(B,k),v=Math.abs(x)>2e-4?x*Vr:0,S=se?1/(se<0?-se:se):0),n.svg&&(N=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!im(Zn(e,Dt)),N&&e.setAttribute("transform",N))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Ft(d),n.scaleY=Ft(m),n.rotation=Ft(g)+o,n.rotationX=Ft(p)+o,n.rotationY=Ft(_)+o,n.skewX=v+o,n.skewY=E+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=_l(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?Ey:Qp?rm:yy,n.uncache=0,n},_l=function(e){return(e=e.split(" "))[0]+" "+e[1]},vc=function(e,t,n){var i=pn(t);return Ft(parseFloat(t)+parseFloat(Cr(e,"x",n+"px",i)))+i},yy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rm(e,t)},Br="0deg",da="0px",zr=") ",rm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,m=n.scaleX,g=n.scaleY,p=n.transformPerspective,_=n.force3D,v=n.target,E=n.zOrigin,S="",b=_==="auto"&&e&&e!==1||_===!0;if(E&&(f!==Br||h!==Br)){var w=parseFloat(h)*Vs,A=Math.sin(w),x=Math.cos(w),y;w=parseFloat(f)*Vs,y=Math.cos(w),a=vc(v,a,A*y*-E),o=vc(v,o,-Math.sin(w)*-E),l=vc(v,l,x*y*-E+E)}p!==da&&(S+="perspective("+p+zr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(b||a!==da||o!==da||l!==da)&&(S+=l!==da||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+zr),c!==Br&&(S+="rotate("+c+zr),h!==Br&&(S+="rotateY("+h+zr),f!==Br&&(S+="rotateX("+f+zr),(u!==Br||d!==Br)&&(S+="skew("+u+", "+d+zr),(m!==1||g!==1)&&(S+="scale("+m+", "+g+zr),v.style[Dt]=S||"translate(0, 0)"},Ey=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,m=n.xOrigin,g=n.yOrigin,p=n.xOffset,_=n.yOffset,v=n.forceCSS,E=parseFloat(a),S=parseFloat(o),b,w,A,x,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Vs,c*=Vs,b=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=Vs,y=Math.tan(c-h),y=Math.sqrt(1+y*y),A*=y,x*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),b*=y,w*=y)),b=Ft(b),w=Ft(w),A=Ft(A),x=Ft(x)):(b=f,x=u,w=A=0),(E&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(E=Cr(d,"x",a,"px"),S=Cr(d,"y",o,"px")),(m||g||p||_)&&(E=Ft(E+m-(m*b+g*A)+p),S=Ft(S+g-(m*w+g*x)+_)),(i||s)&&(y=d.getBBox(),E=Ft(E+i/100*y.width),S=Ft(S+s/100*y.height)),y="matrix("+b+","+w+","+A+","+x+","+E+","+S+")",d.setAttribute("transform",y),v&&(d.style[Dt]=y)},by=function(e,t,n,i,s){var a=360,o=tn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Vr:1),c=l-i,h=i+c+"deg",f,u;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Xf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Xf)%a-~~(c/a)*a)),e._pt=u=new Nn(e._pt,t,n,i,c,ay),u.e=h,u.u="deg",e._props.push(n),u},Jf=function(e,t){for(var n in t)e[n]=t[n];return e},Ty=function(e,t,n){var i=Jf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,f,u,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Dt]=t,o=qa(n,1),Ar(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],a[Dt]=t,o=qa(n,1),a[Dt]=c);for(l in rr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=pn(c),m=pn(h),f=d!==m?Cr(n,l,c,m):parseFloat(c),u=parseFloat(h),e._pt=new Nn(e._pt,o,l,f,u-f,Ru),e._pt.u=m||0,e._props.push(l));Jf(o,i)};Un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ml[e>1?"border"+r:r]=function(o,l,c,h,f){var u,d;if(arguments.length<4)return u=a.map(function(m){return qi(o,m,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},a.forEach(function(m,g){return d[m]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,d,f)}});var sm={name:"css",register:Du,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,f,u,d,m,g,p,_,v,E,S,b,w,A,x,y;Mh||Du(),this.styles=this.styles||Jp(e),x=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Wn[g]&&Vp(g,t,n,i,e,s)))){if(d=typeof h,m=ml[g],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ga(h)),m)m(this,e,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Er.lastIndex=0,Er.test(c)||(p=pn(c),_=pn(h),_?p!==_&&(c=Cr(e,g,c,_)+_):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),x.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],tn(c)&&~c.indexOf("random(")&&(c=Ga(c)),pn(c+"")||c==="auto"||(c+=Qn.units[g]||pn(qi(e,g))||""),(c+"").charAt(1)==="="&&(c=qi(e,g))):c=qi(e,g),u=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),f=parseFloat(h),g in Di&&(g==="autoAlpha"&&(u===1&&qi(e,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,o.visibility),xr(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Di[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in rr,E){if(this.styles.save(g),y=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=Zn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=h,h=Zn(e,"perspective"),P?e.style.perspective=P:Ar(e,"perspective")}f=parseFloat(h)}if(S||(b=e._gsap,b.renderTransform&&!t.parseTransform||qa(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,S=this._pt=new Nn(this._pt,o,Dt,0,1,b.renderTransform,b,0,-1),S.dep=1),g==="scale")this._pt=new Nn(this._pt,b,"scaleY",b.scaleY,(v?zs(b.scaleY,v+f):f)-b.scaleY||0,Ru),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(Fn,0,o[Fn]),h=Sy(h),b.svg?Lu(e,h,0,w,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==b.zOrigin&&xr(this,b,"zOrigin",b.zOrigin,_),xr(this,o,g,_l(c),_l(h)));continue}else if(g==="svgOrigin"){Lu(e,h,1,w,0,this);continue}else if(g in nm){by(this,b,g,u,v?zs(u,v+h):h);continue}else if(g==="smoothOrigin"){xr(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){Ty(this,h,e);continue}}else g in o||(g=ta(g)||g);if(E||(f||f===0)&&(u||u===0)&&!sy.test(h)&&g in o)p=(c+"").substr((u+"").length),f||(f=0),_=pn(h)||(g in Qn.units?Qn.units[g]:p),p!==_&&(u=Cr(e,g,c,_)),this._pt=new Nn(this._pt,E?b:o,g,u,(v?zs(u,v+f):f)-u,!E&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?cy:Ru),this._pt.u=_||0,E&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=ly):p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=oy);else if(g in o)xy.call(this,e,g,c,v?v+h:h);else if(g in e)this.add(e,g,c||e[g],v?v+h:h,i,s);else if(g!=="parseTransform"){hh(g,h);continue}E||(g in o?x.push(g,0,o[g]):typeof e[g]=="function"?x.push(g,2,e[g]()):x.push(g,1,c||e[g])),a.push(g)}}A&&qp(this)},render:function(e,t){if(t.tween._time||!yh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qi,aliases:Di,getSetter:function(e,t,n){var i=Di[t];return i&&i.indexOf(",")<0&&(t=i),t in rr&&t!==Fn&&(e._gsap.x||qi(e,"x"))?n&&Wf===n?t==="scale"?dy:fy:(Wf=n||{})&&(t==="scale"?py:my):e.style&&!lh(e.style[t])?uy:~t.indexOf("-")?hy:xh(e,t)},core:{_removeProperty:Ar,_getMatrix:bh}};On.utils.checkPrefix=ta;On.core.getStyleSaver=Jp;(function(r,e,t,n){var i=Un(r+","+e+","+t,function(s){rr[s]=1});Un(e,function(s){Qn.units[s]="deg",nm[s]=1}),Di[i[13]]=r+","+e,Un(n,function(s){var a=s.split(":");Di[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});On.registerPlugin(sm);var Yn=On.registerPlugin(sm)||On;Yn.core.Tween;function wy(){Ay(),Cy()}function Ay(){const r=document.getElementById("splash-webgl-canvas");if(!r)return;const e=new Wd,t=new Xn(75,innerWidth/innerHeight,.1,1e3),n=new op({canvas:r,alpha:!0,antialias:!0});n.setSize(innerWidth,innerHeight),n.setPixelRatio(Math.min(devicePixelRatio,2)),t.position.z=4;const i=new sh(1.5,1),s=new cl({color:58879,wireframe:!0,transparent:!0,opacity:.6}),a=new Si(i,s);e.add(a);const o=new ah(2.2,2.25,64),l=new cl({color:11544319,side:Ai,transparent:!0,opacity:.3}),c=new Si(o,l);e.add(c);const h=200,f=new Bn,u=new Float32Array(h*3);for(let _=0;_<h*3;_+=3){const v=Math.random()*Math.PI*2,E=Math.acos(2*Math.random()-1),S=2+Math.random()*2;u[_]=S*Math.sin(E)*Math.cos(v),u[_+1]=S*Math.sin(E)*Math.sin(v),u[_+2]=S*Math.cos(E)}f.setAttribute("position",new Jn(u,3));const d=new ih({color:58879,size:.02,transparent:!0,opacity:.5,blending:rl}),m=new jd(f,d);e.add(m);let g=!0;function p(){g&&(requestAnimationFrame(p),a.rotation.x+=.005,a.rotation.y+=.008,c.rotation.z-=.003,m.rotation.y+=.002,n.render(e,t))}p(),window.addEventListener("resize",()=>{n.setSize(innerWidth,innerHeight),t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix()}),window.triggerSplashExplosion=()=>{Yn.to(s,{opacity:0,duration:.8}),Yn.to(l,{opacity:0,duration:.8}),Yn.to(d,{opacity:0,duration:.8}),Yn.to(a.scale,{x:3,y:3,z:3,duration:.8,ease:"power2.out"}),Yn.to(m.scale,{x:2,y:2,z:2,duration:.8,ease:"power2.out"}),setTimeout(()=>{g=!1,n.dispose()},1e3)}}function Cy(){const r=document.getElementById("global-webgl-canvas");if(!r)return;const e=new Wd,t=new Xn(60,innerWidth/innerHeight,.1,3e3),n=new op({canvas:r,alpha:!0,antialias:!1});n.setSize(innerWidth,innerHeight),n.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.position.z=600;const i=[{count:800,spread:2500,depth:1200,size:2.5,speed:.08,color1:58879,color2:11544319},{count:600,spread:2e3,depth:800,size:1.8,speed:.12,color1:4491519,color2:58879},{count:400,spread:1500,depth:500,size:1.2,speed:.18,color1:16777215,color2:8930559}],s=[];i.forEach(f=>{const u=new Bn,d=new Float32Array(f.count*3),m=new Float32Array(f.count*3),g=new pt(f.color1),p=new pt(f.color2);for(let E=0;E<f.count*3;E+=3){d[E]=(Math.random()-.5)*f.spread,d[E+1]=(Math.random()-.5)*f.spread,d[E+2]=(Math.random()-.5)*f.depth;const S=g.clone().lerp(p,Math.random());m[E]=S.r,m[E+1]=S.g,m[E+2]=S.b}u.setAttribute("position",new Jn(d,3)),u.setAttribute("color",new Jn(m,3));const _=new ih({size:f.size,vertexColors:!0,transparent:!0,opacity:.5,blending:rl,depthWrite:!1}),v=new jd(u,_);e.add(v),s.push({particles:v,speed:f.speed})});let a=0,o=0;document.addEventListener("mousemove",f=>{a=(f.clientX-innerWidth/2)*.5,o=(f.clientY-innerHeight/2)*.5});let l=0;window.addEventListener("scroll",()=>{l=window.scrollY},{passive:!0});let c=0;function h(){requestAnimationFrame(h),c+=.003,t.position.x+=(a*.08-t.position.x)*.03,t.position.y+=(-o*.08-t.position.y)*.03,t.lookAt(0,0,0),s.forEach(({particles:f,speed:u},d)=>{f.rotation.y=c*u,f.rotation.x=c*u*.3,f.position.y=-l*.05*(d+1)*.3}),n.render(e,t)}h(),window.addEventListener("resize",()=>{n.setSize(innerWidth,innerHeight),t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix()})}const Ry={matrix:Dy,orbital:Ly,hexgrid:Iy,smoke:Uy,aurora:Ny};let Zo=null;function Py(r,e){am();const t=Ry[e];t&&r&&(Zo=t(r))}function am(){Zo&&(Zo(),Zo=null)}function Dy(r){const e=r.getContext("2d");let t,n,i,s,a;const o="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01234567890ABCDEF</>{}[];".split("");function l(){t=r.width=r.parentElement.offsetWidth,n=r.height=r.parentElement.offsetHeight,i=Math.floor(t/14),s=new Array(i).fill(1).map(()=>Math.random()*-100)}l(),window.addEventListener("resize",l);function c(){e.fillStyle="rgba(5, 5, 16, 0.06)",e.fillRect(0,0,t,n),e.font="14px monospace";for(let h=0;h<s.length;h++){const f=o[Math.floor(Math.random()*o.length)],u=h*14,d=s[h]*14,m=Math.max(0,1-s[h]*14/n);Math.random()>.97?e.fillStyle=`rgba(255, 255, 255, ${.9*m})`:s[h]*14>n*.3?e.fillStyle=`rgba(176, 38, 255, ${.5*m})`:e.fillStyle=`rgba(0, 229, 255, ${.8*m})`,e.fillText(f,u,d),d>n&&Math.random()>.975&&(s[h]=0),s[h]+=.5+Math.random()*.5}a=requestAnimationFrame(c)}return e.fillStyle="rgba(5, 5, 16, 1)",e.fillRect(0,0,t,n),c(),()=>{cancelAnimationFrame(a),window.removeEventListener("resize",l)}}function Ly(r){const e=r.getContext("2d");let t,n,i=0,s;function a(){t=r.width=r.parentElement.offsetWidth,n=r.height=r.parentElement.offsetHeight}a(),window.addEventListener("resize",a);const o=Array.from({length:150},()=>({x:Math.random(),y:Math.random(),size:Math.random()*1.5+.3,twinkle:Math.random()*Math.PI*2})),l=[{ring:0,angle:0,speed:.008},{ring:0,angle:Math.PI,speed:.008},{ring:1,angle:Math.PI/3,speed:-.005},{ring:2,angle:Math.PI/2,speed:.012},{ring:2,angle:Math.PI*1.5,speed:.012}];function c(){e.clearRect(0,0,t,n),i+=.01;const h=t*.5,f=n*.5;o.forEach(g=>{const p=.3+Math.sin(i*2+g.twinkle)*.3;e.fillStyle=`rgba(255, 255, 255, ${p})`,e.beginPath(),e.arc(g.x*t,g.y*n,g.size,0,Math.PI*2),e.fill()});const u=e.createRadialGradient(h,f,30,h,f,120);u.addColorStop(0,"rgba(0, 229, 255, 0.15)"),u.addColorStop(.5,"rgba(0, 100, 180, 0.05)"),u.addColorStop(1,"transparent"),e.fillStyle=u,e.beginPath(),e.arc(h,f,120,0,Math.PI*2),e.fill();const d=e.createRadialGradient(h-15,f-15,5,h,f,50);d.addColorStop(0,"rgba(30, 80, 120, 0.8)"),d.addColorStop(1,"rgba(10, 20, 40, 0.9)"),e.fillStyle=d,e.beginPath(),e.arc(h,f,50,0,Math.PI*2),e.fill();const m=[{rx:160,ry:50,tilt:-.3,color:"rgba(0, 229, 255, 0.2)"},{rx:220,ry:70,tilt:.15,color:"rgba(176, 38, 255, 0.15)"},{rx:300,ry:90,tilt:-.1,color:"rgba(0, 229, 255, 0.1)"}];m.forEach((g,p)=>{e.save(),e.translate(h,f),e.rotate(g.tilt),e.strokeStyle=g.color,e.lineWidth=1,e.setLineDash([4,6]),e.beginPath(),e.ellipse(0,0,g.rx,g.ry,0,0,Math.PI*2),e.stroke(),e.setLineDash([]),e.restore()}),l.forEach(g=>{g.angle+=g.speed;const p=m[g.ring],_=h+Math.cos(g.angle)*p.rx*Math.cos(p.tilt)-Math.sin(g.angle)*p.ry*Math.sin(p.tilt),v=f+Math.cos(g.angle)*p.rx*Math.sin(p.tilt)+Math.sin(g.angle)*p.ry*Math.cos(p.tilt);e.fillStyle="rgba(0, 229, 255, 0.08)",e.beginPath(),e.arc(_,v,8,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0, 229, 255, 0.9)",e.shadowBlur=8,e.shadowColor="#00e5ff",e.beginPath(),e.arc(_,v,3,0,Math.PI*2),e.fill(),e.shadowBlur=0}),s=requestAnimationFrame(c)}return c(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",a)}}function Iy(r){const e=r.getContext("2d");let t,n,i=0,s;function a(){t=r.width=r.parentElement.offsetWidth,n=r.height=r.parentElement.offsetHeight}a(),window.addEventListener("resize",a);const o=40,l=Math.sqrt(3);function c(d,m,g,p,_){const v=.3+Math.sin(i*2+_)*.3;e.strokeStyle=`rgba(0, 229, 255, ${p*v})`,e.lineWidth=.8,e.beginPath();for(let E=0;E<6;E++){const S=Math.PI/3*E-Math.PI/6,b=d+g*Math.cos(S),w=m+g*Math.sin(S);E===0?e.moveTo(b,w):e.lineTo(b,w)}e.closePath(),e.stroke(),v>.5&&Math.random()>.98&&(e.fillStyle=`rgba(176, 38, 255, ${v})`,e.beginPath(),e.arc(d,m,2,0,Math.PI*2),e.fill())}let h=0,f=0;r.parentElement.addEventListener("mousemove",d=>{const m=r.parentElement.getBoundingClientRect();h=d.clientX-m.left,f=d.clientY-m.top});function u(){e.clearRect(0,0,t,n),i+=.02;const d=o*l,m=o*1.5;for(let _=-1;_<n/d+1;_++)for(let v=-1;v<t/m+1;v++){const E=v*m,S=_*d+(v%2===0?0:d/2),b=Math.hypot(E-h,S-f),w=Math.hypot(t,n),A=Math.sin(i*3-b*.01),x=Math.max(.05,.3-b/w*.3+A*.15);c(E,S,o*.9,x,b*.015)}const g=Math.round(h/m)*m,p=Math.round(f/d)*d;e.strokeStyle="rgba(176, 38, 255, 0.2)",e.lineWidth=.5;for(let _=0;_<6;_++){const v=Math.PI/3*_,E=g+Math.cos(v)*o*2,S=p+Math.sin(v)*o*2;e.beginPath(),e.moveTo(g,p),e.lineTo(E,S),e.stroke()}s=requestAnimationFrame(u)}return u(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",a)}}function Uy(r){const e=r.getContext("2d");let t,n,i=0,s;function a(){t=r.width=r.parentElement.offsetWidth,n=r.height=r.parentElement.offsetHeight}a(),window.addEventListener("resize",a);const o=Array.from({length:60},()=>({x:Math.random()*(t||800),y:Math.random()*(n||600),size:Math.random()*80+40,vx:(Math.random()-.5)*.3,vy:-Math.random()*.5-.1,opacity:Math.random()*.06+.02,hue:Math.random()>.5?186:275,phase:Math.random()*Math.PI*2})),l=Array.from({length:8},()=>({x:Math.random()*(t||800),y:Math.random()*(n||600),pulse:Math.random()*Math.PI*2}));function c(){e.clearRect(0,0,t,n),i+=.01,o.forEach(f=>{f.x+=f.vx+Math.sin(i+f.phase)*.3,f.y+=f.vy,f.y<-f.size&&(f.y=n+f.size,f.x=Math.random()*t),f.x<-f.size&&(f.x=t+f.size),f.x>t+f.size&&(f.x=-f.size);const u=f.size+Math.sin(i*2+f.phase)*10,d=e.createRadialGradient(f.x,f.y,0,f.x,f.y,u);f.hue===186?(d.addColorStop(0,`rgba(0, 229, 255, ${f.opacity*1.5})`),d.addColorStop(.5,`rgba(0, 150, 200, ${f.opacity*.7})`)):(d.addColorStop(0,`rgba(176, 38, 255, ${f.opacity*1.5})`),d.addColorStop(.5,`rgba(100, 20, 180, ${f.opacity*.7})`)),d.addColorStop(1,"transparent"),e.fillStyle=d,e.beginPath(),e.arc(f.x,f.y,u,0,Math.PI*2),e.fill()}),l.forEach(f=>{f.pulse+=.03;const u=4+Math.sin(f.pulse)*2;e.fillStyle="rgba(0, 255, 136, 0.6)",e.shadowBlur=8,e.shadowColor="rgba(0, 255, 136, 0.4)",e.beginPath(),e.arc(f.x,f.y,u,0,Math.PI*2),e.fill(),e.shadowBlur=0;const d=10+Math.sin(f.pulse)*8;e.strokeStyle=`rgba(0, 255, 136, ${.3-Math.sin(f.pulse)*.15})`,e.lineWidth=1,e.beginPath(),e.arc(f.x,f.y,d,0,Math.PI*2),e.stroke()});const h=.3+Math.sin(i*4)*.15;e.strokeStyle=`rgba(255, 60, 60, ${h*.15})`,e.lineWidth=2,e.setLineDash([8,12]),e.beginPath(),e.arc(t*.7,n*.3,60+Math.sin(i*2)*10,0,Math.PI*2),e.stroke(),e.setLineDash([]),s=requestAnimationFrame(c)}return c(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",a)}}function Ny(r){const e=r.getContext("2d");let t,n,i=0,s;function a(){t=r.width=r.parentElement.offsetWidth,n=r.height=r.parentElement.offsetHeight}a(),window.addEventListener("resize",a);const o=Array.from({length:100},()=>({x:Math.random(),y:Math.random()*.6,size:Math.random()*1.2+.3,twinkle:Math.random()*Math.PI*2})),l=Array.from({length:20},()=>({x:Math.random()*(t||800),y:Math.random()*(n||600),vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,phase:Math.random()*Math.PI*2,size:Math.random()*3+1}));function c(){e.clearRect(0,0,t,n),i+=.008,o.forEach(f=>{const u=.2+Math.sin(i*3+f.twinkle)*.2;e.fillStyle=`rgba(255, 255, 255, ${u})`,e.beginPath(),e.arc(f.x*t,f.y*n,f.size,0,Math.PI*2),e.fill()}),[{yOffset:.35,amplitude:60,color1:[0,229,255],color2:[100,255,200],speed:1},{yOffset:.4,amplitude:80,color1:[176,38,255],color2:[0,200,255],speed:.7},{yOffset:.45,amplitude:50,color1:[80,200,255],color2:[176,80,255],speed:1.3}].forEach(f=>{const u=n*f.yOffset;for(let d=0;d<3;d++){e.beginPath(),e.moveTo(0,n);for(let y=0;y<=t;y+=4){const P=Math.sin(y*.003+i*f.speed)*f.amplitude,R=Math.sin(y*.007-i*f.speed*.5)*f.amplitude*.4,L=Math.sin(y*.001+i*.3)*f.amplitude*.6,z=u+P+R+L+d*20;e.lineTo(y,z)}e.lineTo(t,n),e.closePath();const[m,g,p]=f.color1,[_,v,E]=f.color2,S=(Math.sin(i*.5)+1)/2,b=Math.round(m+(_-m)*S),w=Math.round(g+(v-g)*S),A=Math.round(p+(E-p)*S),x=.03-d*.008;e.fillStyle=`rgba(${b}, ${w}, ${A}, ${Math.max(.005,x)})`,e.fill()}}),l.forEach(f=>{f.x+=f.vx+Math.sin(i*2+f.phase)*.2,f.y+=f.vy+Math.cos(i*1.5+f.phase)*.2,f.x<0&&(f.x=t),f.x>t&&(f.x=0),f.y<0&&(f.y=n),f.y>n&&(f.y=0);const u=.3+Math.sin(i*3+f.phase)*.3;e.fillStyle=`rgba(200, 255, 230, ${u})`,e.shadowBlur=12,e.shadowColor=`rgba(200, 255, 230, ${u*.5})`,e.beginPath(),e.arc(f.x,f.y,f.size,0,Math.PI*2),e.fill(),e.shadowBlur=0}),s=requestAnimationFrame(c)}return c(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",a)}}function Fy(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Oy(r,e,t){return e&&Fy(r.prototype,e),r}var sn,Jo,jn,Sr,Mr,Hs,om,Hr,Ca,lm,Ki,_i,cm,um=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},hm=1,Fs=[],at=[],Fi=[],Ra=Date.now,Iu=function(e,t){return t},By=function(){var e=Ca.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,at),i.push.apply(i,Fi),at=n,Fi=i,Iu=function(a,o){return t[a](o)}},br=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},Pa=function(e){return!!~lm.indexOf(e)},xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ro="scrollLeft",Po="scrollTop",Uu=function(){return Ki&&Ki.isPressed||at.cache++},gl=function(e,t){var n=function i(s){if(s||s===0){hm&&(jn.history.scrollRestoration="manual");var a=Ki&&Ki.isPressed;s=i.v=Math.round(s)||(Ki&&Ki.iOS?1:0),e(s),i.cacheID=at.cache,a&&Iu("ss",s)}else(t||at.cache!==i.cacheID||Iu("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},wn={s:Ro,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gl(function(r){return arguments.length?jn.scrollTo(r,qt.sc()):jn.pageXOffset||Sr[Ro]||Mr[Ro]||Hs[Ro]||0})},qt={s:Po,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:gl(function(r){return arguments.length?jn.scrollTo(wn.sc(),r):jn.pageYOffset||Sr[Po]||Mr[Po]||Hs[Po]||0})},Pn=function(e,t){return(t&&t._ctx&&t._ctx.selector||sn.utils.toArray)(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},zy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Rr=function(e,t){var n=t.s,i=t.sc;Pa(e)&&(e=Sr.scrollingElement||Mr);var s=at.indexOf(e),a=i===qt.sc?1:2;!~s&&(s=at.push(e)-1),at[s+a]||xn(e,"scroll",Uu);var o=at[s+a],l=o||(at[s+a]=gl(br(e,n),!0)||(Pa(e)?i:gl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),l},Nu=function(e,t,n){var i=e,s=e,a=Ra(),o=a,l=t||50,c=Math.max(500,l*3),h=function(m,g){var p=Ra();g||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},u=function(m){var g=o,p=s,_=Ra();return(m||m===0)&&m!==i&&h(m),a===o||_-o>c?0:(i+(n?p:-p))/((n?_:a)-g)*1e3};return{update:h,reset:f,getVelocity:u}},pa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Qf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},fm=function(){Ca=sn.core.globals().ScrollTrigger,Ca&&Ca.core&&By()},dm=function(e){return sn=e||um(),!Jo&&sn&&typeof document<"u"&&document.body&&(jn=window,Sr=document,Mr=Sr.documentElement,Hs=Sr.body,lm=[jn,Sr,Mr,Hs],sn.utils.clamp,cm=sn.core.context||function(){},Hr="onpointerenter"in Hs?"pointer":"mouse",om=Bt.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_i=Bt.eventTypes=("ontouchstart"in Mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return hm=0},500),fm(),Jo=1),Jo};wn.op=qt;at.cache=0;var Bt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Jo||dm(sn)||console.warn("Please gsap.registerPlugin(Observer)"),Ca||fm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,g=n.event,p=n.onDragStart,_=n.onDragEnd,v=n.onDrag,E=n.onPress,S=n.onRelease,b=n.onRight,w=n.onLeft,A=n.onUp,x=n.onDown,y=n.onChangeX,P=n.onChangeY,R=n.onChange,L=n.onToggleX,z=n.onToggleY,H=n.onHover,B=n.onHoverEnd,k=n.onMove,N=n.ignoreCheck,ee=n.isNormalizer,te=n.onGestureStart,D=n.onGestureEnd,ue=n.onWheel,de=n.onEnable,ne=n.onDisable,se=n.onClick,ie=n.scrollSpeed,V=n.capture,j=n.allowClicks,Z=n.lockAxis,he=n.onLockAxis;this.target=o=Pn(o)||Mr,this.vars=n,d&&(d=sn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,ie=ie||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(Hs).lineHeight)||22);var Me,Pe,je,Ee,Ne,Ge,Fe,G=this,U=0,We=0,Qe=n.passive||!h&&n.passive!==!1,He=Rr(o,wn),be=Rr(o,qt),C=He(),M=be(),F=~a.indexOf("touch")&&!~a.indexOf("pointer")&&_i[0]==="pointerdown",J=Pa(o),Q=o.ownerDocument||Sr,$=[0,0,0],ye=[0,0,0],ce=0,Ue=function(){return ce=Ra()},we=function(Oe,et){return(G.event=Oe)&&d&&zy(Oe.target,d)||et&&F&&Oe.pointerType!=="touch"||N&&N(Oe,et)},ae=function(){G._vx.reset(),G._vy.reset(),Pe.pause(),f&&f(G)},le=function(){var Oe=G.deltaX=Qf($),et=G.deltaY=Qf(ye),xe=Math.abs(Oe)>=i,Ye=Math.abs(et)>=i;R&&(xe||Ye)&&R(G,Oe,et,$,ye),xe&&(b&&G.deltaX>0&&b(G),w&&G.deltaX<0&&w(G),y&&y(G),L&&G.deltaX<0!=U<0&&L(G),U=G.deltaX,$[0]=$[1]=$[2]=0),Ye&&(x&&G.deltaY>0&&x(G),A&&G.deltaY<0&&A(G),P&&P(G),z&&G.deltaY<0!=We<0&&z(G),We=G.deltaY,ye[0]=ye[1]=ye[2]=0),(Ee||je)&&(k&&k(G),je&&(p&&je===1&&p(G),v&&v(G),je=0),Ee=!1),Ge&&!(Ge=!1)&&he&&he(G),Ne&&(ue(G),Ne=!1),Me=0},Ae=function(Oe,et,xe){$[xe]+=Oe,ye[xe]+=et,G._vx.update(Oe),G._vy.update(et),c?Me||(Me=requestAnimationFrame(le)):le()},Re=function(Oe,et){Z&&!Fe&&(G.axis=Fe=Math.abs(Oe)>Math.abs(et)?"x":"y",Ge=!0),Fe!=="y"&&($[2]+=Oe,G._vx.update(Oe,!0)),Fe!=="x"&&(ye[2]+=et,G._vy.update(et,!0)),c?Me||(Me=requestAnimationFrame(le)):le()},_e=function(Oe){if(!we(Oe,1)){Oe=pa(Oe,h);var et=Oe.clientX,xe=Oe.clientY,Ye=et-G.x,Ve=xe-G.y,qe=G.isDragging;G.x=et,G.y=xe,(qe||(Ye||Ve)&&(Math.abs(G.startX-et)>=s||Math.abs(G.startY-xe)>=s))&&(je||(je=qe?2:1),qe||(G.isDragging=!0),Re(Ye,Ve))}},Xe=G.onPress=function(Te){we(Te,1)||Te&&Te.button||(G.axis=Fe=null,Pe.pause(),G.isPressed=!0,Te=pa(Te),U=We=0,G.startX=G.x=Te.clientX,G.startY=G.y=Te.clientY,G._vx.reset(),G._vy.reset(),xn(ee?o:Q,_i[1],_e,Qe,!0),G.deltaX=G.deltaY=0,E&&E(G))},I=G.onRelease=function(Te){if(!we(Te,1)){vn(ee?o:Q,_i[1],_e,!0);var Oe=!isNaN(G.y-G.startY),et=G.isDragging,xe=et&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ye=pa(Te);!xe&&Oe&&(G._vx.reset(),G._vy.reset(),h&&j&&sn.delayedCall(.08,function(){if(Ra()-ce>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(Q.createEvent){var Ve=Q.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,jn,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Ve)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&et&&!ee&&Pe.restart(!0),je&&le(),_&&et&&_(G),S&&S(G,xe)}},fe=function(Oe){return Oe.touches&&Oe.touches.length>1&&(G.isGesturing=!0)&&te(Oe,G.isDragging)},oe=function(){return(G.isGesturing=!1)||D(G)},ge=function(Oe){if(!we(Oe)){var et=He(),xe=be();Ae((et-C)*ie,(xe-M)*ie,1),C=et,M=xe,f&&Pe.restart(!0)}},re=function(Oe){if(!we(Oe)){Oe=pa(Oe,h),ue&&(Ne=!0);var et=(Oe.deltaMode===1?l:Oe.deltaMode===2?jn.innerHeight:1)*m;Ae(Oe.deltaX*et,Oe.deltaY*et,0),f&&!ee&&Pe.restart(!0)}},K=function(Oe){if(!we(Oe)){var et=Oe.clientX,xe=Oe.clientY,Ye=et-G.x,Ve=xe-G.y;G.x=et,G.y=xe,Ee=!0,f&&Pe.restart(!0),(Ye||Ve)&&Re(Ye,Ve)}},Ce=function(Oe){G.event=Oe,H(G)},ke=function(Oe){G.event=Oe,B(G)},ut=function(Oe){return we(Oe)||pa(Oe,h)&&se(G)};Pe=G._dc=sn.delayedCall(u||.25,ae).pause(),G.deltaX=G.deltaY=0,G._vx=Nu(0,50,!0),G._vy=Nu(0,50,!0),G.scrollX=He,G.scrollY=be,G.isDragging=G.isGesturing=G.isPressed=!1,cm(this),G.enable=function(Te){return G.isEnabled||(xn(J?Q:o,"scroll",Uu),a.indexOf("scroll")>=0&&xn(J?Q:o,"scroll",ge,Qe,V),a.indexOf("wheel")>=0&&xn(o,"wheel",re,Qe,V),(a.indexOf("touch")>=0&&om||a.indexOf("pointer")>=0)&&(xn(o,_i[0],Xe,Qe,V),xn(Q,_i[2],I),xn(Q,_i[3],I),j&&xn(o,"click",Ue,!0,!0),se&&xn(o,"click",ut),te&&xn(Q,"gesturestart",fe),D&&xn(Q,"gestureend",oe),H&&xn(o,Hr+"enter",Ce),B&&xn(o,Hr+"leave",ke),k&&xn(o,Hr+"move",K)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Ee=je=!1,G._vx.reset(),G._vy.reset(),C=He(),M=be(),Te&&Te.type&&Xe(Te),de&&de(G)),G},G.disable=function(){G.isEnabled&&(Fs.filter(function(Te){return Te!==G&&Pa(Te.target)}).length||vn(J?Q:o,"scroll",Uu),G.isPressed&&(G._vx.reset(),G._vy.reset(),vn(ee?o:Q,_i[1],_e,!0)),vn(J?Q:o,"scroll",ge,V),vn(o,"wheel",re,V),vn(o,_i[0],Xe,V),vn(Q,_i[2],I),vn(Q,_i[3],I),vn(o,"click",Ue,!0),vn(o,"click",ut),vn(Q,"gesturestart",fe),vn(Q,"gestureend",oe),vn(o,Hr+"enter",Ce),vn(o,Hr+"leave",ke),vn(o,Hr+"move",K),G.isEnabled=G.isPressed=G.isDragging=!1,ne&&ne(G))},G.kill=G.revert=function(){G.disable();var Te=Fs.indexOf(G);Te>=0&&Fs.splice(Te,1),Ki===G&&(Ki=0)},Fs.push(G),ee&&Pa(o)&&(Ki=G),G.enable(g)},Oy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Bt.version="3.14.2";Bt.create=function(r){return new Bt(r)};Bt.register=dm;Bt.getAll=function(){return Fs.slice()};Bt.getById=function(r){return Fs.filter(function(e){return e.vars.id===r})[0]};um()&&sn.registerPlugin(Bt);var Ie,Ls,st,Tt,qn,_t,Th,vl,$a,Da,Sa,Do,fn,Pl,Fu,yn,ed,td,Is,pm,xc,mm,Mn,Ou,_m,gm,pr,Bu,wh,Gs,Ah,La,zu,Sc,Lo=1,dn=Date.now,Mc=dn(),hi=0,Ma=0,nd=function(e,t,n){var i=Gn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},id=function(e,t){return t&&(!Gn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ky=function r(){return Ma&&requestAnimationFrame(r)},rd=function(){return Pl=1},sd=function(){return Pl=0},Ti=function(e){return e},ya=function(e){return Math.round(e*1e5)/1e5||0},vm=function(){return typeof window<"u"},xm=function(){return Ie||vm()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},as=function(e){return!!~Th.indexOf(e)},Sm=function(e){return(e==="Height"?Ah:st["inner"+e])||qn["client"+e]||_t["client"+e]},Mm=function(e){return br(e,"getBoundingClientRect")||(as(e)?function(){return il.width=st.innerWidth,il.height=Ah,il}:function(){return $i(e)})},Vy=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=br(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Sm(s):e["client"+s])||0}},Hy=function(e,t){return!t||~Fi.indexOf(e)?Mm(e):function(){return il}},Li=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=br(e,n))?a()-Mm(e)()[s]:as(e)?(qn[n]||_t[n])-Sm(i):e[n]-e["offset"+i])},Io=function(e,t){for(var n=0;n<Is.length;n+=3)(!t||~t.indexOf(Is[n+1]))&&e(Is[n],Is[n+1],Is[n+2])},Gn=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},Ea=function(e){return typeof e=="number"},Gr=function(e){return typeof e=="object"},ma=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},yc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Rs=Math.abs,ym="left",Em="top",Ch="right",Rh="bottom",ns="width",is="height",Ia="Right",Ua="Left",Na="Top",Fa="Bottom",Vt="padding",ai="margin",na="Width",Ph="Height",Yt="px",oi=function(e){return st.getComputedStyle(e)},Gy=function(e){var t=oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ad=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$i=function(e,t){var n=t&&oi(e)[Fu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},xl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},bm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Wy=function(e){return function(t){return Ie.utils.snap(bm(e),t)}},Dh=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Xy=function(e){return function(t,n){return Dh(bm(e))(t,n.direction)}},Uo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},en=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},No=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},od={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fo={toggleActions:"play",anticipatePin:0},Sl={top:0,left:0,center:.5,bottom:1,right:1},Qo=function(e,t){if(Gn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Sl?Sl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Oo=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,m=Tt.createElement("div"),g=as(n)||br(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=g?_t:n,v=e.indexOf("start")!==-1,E=v?c:h,S="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===qt?Ch:Rh)+":"+(a+parseFloat(u))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=S,m.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(m,_.children[0]):_.appendChild(m),m._offset=m["offset"+i.op.d2],el(m,0,i,v),m},el=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+na]=1,s["border"+o+na]=0,s[n.p]=t+"px",Ie.set(e,s)},rt=[],ku={},ja,ld=function(){return dn()-hi>34&&(ja||(ja=requestAnimationFrame(Qi)))},Ps=function(){(!Mn||!Mn.isPressed||Mn.startX>_t.clientWidth)&&(at.cache++,Mn?ja||(ja=requestAnimationFrame(Qi)):Qi(),hi||ls("scrollStart"),hi=dn())},Ec=function(){gm=st.innerWidth,_m=st.innerHeight},ba=function(e){at.cache++,(e===!0||!fn&&!mm&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!Ou||gm!==st.innerWidth||Math.abs(st.innerHeight-_m)>st.innerHeight*.25))&&vl.restart(!0)},os={},Yy=[],Tm=function r(){return Qt(Je,"scrollEnd",r)||jr(!0)},ls=function(e){return os[e]&&os[e].map(function(t){return t()})||Yy},Hn=[],wm=function(e){for(var t=0;t<Hn.length;t+=5)(!e||Hn[t+4]&&Hn[t+4].query===e)&&(Hn[t].style.cssText=Hn[t+1],Hn[t].getBBox&&Hn[t].setAttribute("transform",Hn[t+2]||""),Hn[t+3].uncache=1)},Am=function(){return at.forEach(function(e){return mn(e)&&++e.cacheID&&(e.rec=e())})},Lh=function(e,t){var n;for(yn=0;yn<rt.length;yn++)n=rt[yn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));La=!0,t&&wm(t),t||ls("revert")},Cm=function(e,t){at.cache++,(t||!En)&&at.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),Gn(e)&&(st.history.scrollRestoration=wh=e)},En,rs=0,cd,qy=function(){if(cd!==rs){var e=cd=rs;requestAnimationFrame(function(){return e===rs&&jr(!0)})}},Rm=function(){_t.appendChild(Gs),Ah=!Mn&&Gs.offsetHeight||st.innerHeight,_t.removeChild(Gs)},ud=function(e){return $a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},jr=function(e,t){if(qn=Tt.documentElement,_t=Tt.body,Th=[st,Tt,qn,_t],hi&&!e&&!La){en(Je,"scrollEnd",Tm);return}Rm(),En=Je.isRefreshing=!0,La||Am();var n=ls("refreshInit");pm&&Je.sort(),t||Lh(),at.forEach(function(i){mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),La=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),zu=1,ud(!0),rt.forEach(function(i){var s=Li(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),ud(!1),zu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Cm(wh,1),vl.pause(),rs++,En=2,Qi(2),rt.forEach(function(i){return mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=Je.isRefreshing=!1,ls("refresh")},Vu=0,tl=1,Oa,Qi=function(e){if(e===2||!En&&!La){Je.isUpdating=!0,Oa&&Oa.update(0);var t=rt.length,n=dn(),i=n-Mc>=50,s=t&&rt[0].scroll();if(tl=Vu>s?-1:1,En||(Vu=s),i&&(hi&&!Pl&&n-hi>200&&(hi=0,ls("scrollEnd")),Sa=Mc,Mc=n),tl<0){for(yn=t;yn-- >0;)rt[yn]&&rt[yn].update(0,i);tl=1}else for(yn=0;yn<t;yn++)rt[yn]&&rt[yn].update(0,i);Je.isUpdating=!1}ja=0},Hu=[ym,Em,Rh,Ch,ai+Fa,ai+Ia,ai+Na,ai+Ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nl=Hu.concat([ns,is,"boxSizing","max"+na,"max"+Ph,"position",ai,Vt,Vt+Na,Vt+Ia,Vt+Fa,Vt+Ua]),$y=function(e,t,n){Ws(n);var i=e._gsap;if(i.spacerIsNative)Ws(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},bc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Hu.length,a=t.style,o=e.style,l;s--;)l=Hu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Rh]=o[Ch]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ns]=xl(e,wn)+Yt,a[is]=xl(e,qt)+Yt,a[Vt]=o[ai]=o[Em]=o[ym]="0",Ws(i),o[ns]=o["max"+na]=n[ns],o[is]=o["max"+Ph]=n[is],o[Vt]=n[Vt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},jy=/([A-Z])/g,Ws=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(jy,"-$1").toLowerCase())}},Bo=function(e){for(var t=nl.length,n=e.style,i=[],s=0;s<t;s++)i.push(nl[s],n[nl[s]]);return i.t=e,i},Ky=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},il={left:0,top:0},hd=function(e,t,n,i,s,a,o,l,c,h,f,u,d,m){mn(e)&&(e=e(l)),Gn(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Qo("0"+e.substr(3),n):0));var g=d?d.time():0,p,_,v;if(d&&d.seek(0),isNaN(e)||(e=+e),Ea(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,e)),o&&el(o,n,i,!0);else{mn(t)&&(t=t(l));var E=(e||"0").split(" "),S,b,w,A;v=Pn(t,l)||_t,S=$i(v)||{},(!S||!S.left&&!S.top)&&oi(v).display==="none"&&(A=v.style.display,v.style.display="block",S=$i(v),A?v.style.display=A:v.style.removeProperty("display")),b=Qo(E[0],S[i.d]),w=Qo(E[1]||"0",n),e=S[i.p]-c[i.p]-h+b+s-w,o&&el(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var x=e+n,y=a._isStart;p="scroll"+i.d2,el(a,x,i,y&&x>20||!y&&(f?Math.max(_t[p],qn[p]):a.parentNode[p])<=x+1),f&&(c=$i(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Yt))}return d&&v&&(p=$i(v),d.seek(u),_=$i(v),d._caScrollDist=p[i.p]-_[i.p],e=e/d._caScrollDist*u),d&&d.seek(g),d?e:Math.round(e)},Zy=/(webkit|moz|length|cssText|inset)/i,fd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===_t){e._stOrig=s.cssText,o=oi(e);for(a in o)!+a&&!Zy.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},Pm=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},zo=function(e,t,n){var i={};i[t.p]="+="+n,Ie.set(e,i)},dd=function(e,t){var n=Rr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,h,f){var u=a.tween,d=l.onComplete,m={};c=c||n();var g=Pm(n,c,function(){u.kill(),a.tween=0});return f=h&&f||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return g(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){at.cache++,a.tween&&Qi()},l.onComplete=function(){a.tween=0,d&&d.call(u)},u=a.tween=Ie.to(e,l),u};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(e,"wheel",n.wheelHandler),Je.isTouch&&en(e,"touchmove",n.wheelHandler),s},Je=(function(){function r(t,n){Ls||r.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ma){this.update=this.refresh=this.kill=Ti;return}n=ad(Gn(n)||Ea(n)||n.nodeType?{trigger:n}:n,Fo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,m=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,_=s.onScrubComplete,v=s.onSnapComplete,E=s.once,S=s.snap,b=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,x=s.fastScrollEnd,y=s.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:qt,R=!f&&f!==0,L=Pn(n.scroller||st),z=Ie.core.getCache(L),H=as(L),B=("pinType"in n?n.pinType:br(L,"pinType")||H&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=R&&n.toggleActions.split(" "),ee="markers"in n?n.markers:Fo.markers,te=H?0:parseFloat(oi(L)["border"+P.p2+na])||0,D=this,ue=n.onRefreshInit&&function(){return n.onRefreshInit(D)},de=Vy(L,H,P),ne=Hy(L,H),se=0,ie=0,V=0,j=Rr(L,P),Z,he,Me,Pe,je,Ee,Ne,Ge,Fe,G,U,We,Qe,He,be,C,M,F,J,Q,$,ye,ce,Ue,we,ae,le,Ae,Re,_e,Xe,I,fe,oe,ge,re,K,Ce,ke;if(D._startClamp=D._endClamp=!1,D._dir=P,p*=45,D.scroller=L,D.scroll=A?A.time.bind(A):j,Pe=j(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(pm=1,n.refreshPriority===-9999&&(Oa=D)),z.tweenScroll=z.tweenScroll||{top:dd(L,qt),left:dd(L,wn)},D.tweenTo=Z=z.tweenScroll[P.p],D.scrubDuration=function(xe){fe=Ea(xe)&&xe,fe?I?I.duration(xe):I=Ie.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:fe,paused:!0,onComplete:function(){return _&&_(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(f),_e=0,l||(l=i.vars.id)),S&&((!Gr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in _t.style&&Ie.set(H?[_t,qn]:L,{scrollBehavior:"auto"}),at.forEach(function(xe){return mn(xe)&&xe.target===(H?Tt.scrollingElement||qn:L)&&(xe.smooth=!1)}),Me=mn(S.snapTo)?S.snapTo:S.snapTo==="labels"?Wy(i):S.snapTo==="labelsDirectional"?Xy(i):S.directional!==!1?function(xe,Ye){return Dh(S.snapTo)(xe,dn()-ie<500?0:Ye.direction)}:Ie.utils.snap(S.snapTo),oe=S.duration||{min:.1,max:2},oe=Gr(oe)?Da(oe.min,oe.max):Da(oe,oe),ge=Ie.delayedCall(S.delay||fe/2||.1,function(){var xe=j(),Ye=dn()-ie<500,Ve=Z.tween;if((Ye||Math.abs(D.getVelocity())<10)&&!Ve&&!Pl&&se!==xe){var qe=(xe-Ee)/He,Ut=i&&!R?i.totalProgress():qe,Ke=Ye?0:(Ut-Xe)/(dn()-Sa)*1e3||0,wt=Ie.utils.clamp(-qe,1-qe,Rs(Ke/2)*Ke/.185),Gt=qe+(S.inertia===!1?0:wt),At,gt,mt=S,on=mt.onStart,bt=mt.onInterrupt,ln=mt.onComplete;if(At=Me(Gt,D),Ea(At)||(At=Gt),gt=Math.max(0,Math.round(Ee+At*He)),xe<=Ne&&xe>=Ee&&gt!==xe){if(Ve&&!Ve._initted&&Ve.data<=Rs(gt-xe))return;S.inertia===!1&&(wt=At-qe),Z(gt,{duration:oe(Rs(Math.max(Rs(Gt-Ut),Rs(At-Ut))*.185/Ke/.05||0)),ease:S.ease||"power3",data:Rs(gt-xe),onInterrupt:function(){return ge.restart(!0)&&bt&&bt(D)},onComplete:function(){D.update(),se=j(),i&&!R&&(I?I.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),_e=Xe=i&&!R?i.totalProgress():D.progress,v&&v(D),ln&&ln(D)}},xe,wt*He,gt-xe-wt*He),on&&on(D,Z.tween)}}else D.isActive&&se!==xe&&ge.restart(!0)}).pause()),l&&(ku[l]=D),u=D.trigger=Pn(u||d!==!0&&d),ke=u&&u._gsap&&u._gsap.stRevert,ke&&(ke=ke(D)),d=d===!0?u:Pn(d),Gn(o)&&(o={targets:u,className:o}),d&&(m===!1||m===ai||(m=!m&&d.parentNode&&d.parentNode.style&&oi(d.parentNode).display==="flex"?!1:Vt),D.pin=d,he=Ie.core.getCache(d),he.spacer?be=he.pinState:(w&&(w=Pn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),he.spacerIsNative=!!w,w&&(he.spacerState=Bo(w))),he.spacer=F=w||Tt.createElement("div"),F.classList.add("pin-spacer"),l&&F.classList.add("pin-spacer-"+l),he.pinState=be=Bo(d)),n.force3D!==!1&&Ie.set(d,{force3D:!0}),D.spacer=F=he.spacer,Re=oi(d),Ue=Re[m+P.os2],Q=Ie.getProperty(d),$=Ie.quickSetter(d,P.a,Yt),bc(d,F,Re),M=Bo(d)),ee){We=Gr(ee)?ad(ee,od):od,G=Oo("scroller-start",l,L,P,We,0),U=Oo("scroller-end",l,L,P,We,0,G),J=G["offset"+P.op.d2];var ut=Pn(br(L,"content")||L);Ge=this.markerStart=Oo("start",l,ut,P,We,J,0,A),Fe=this.markerEnd=Oo("end",l,ut,P,We,J,0,A),A&&(Ce=Ie.quickSetter([Ge,Fe],P.a,Yt)),!B&&!(Fi.length&&br(L,"fixedMarkers")===!0)&&(Gy(H?_t:L),Ie.set([G,U],{force3D:!0}),ae=Ie.quickSetter(G,P.a,Yt),Ae=Ie.quickSetter(U,P.a,Yt))}if(A){var Te=A.vars.onUpdate,Oe=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){D.update(0,0,1),Te&&Te.apply(A,Oe||[])})}if(D.previous=function(){return rt[rt.indexOf(D)-1]},D.next=function(){return rt[rt.indexOf(D)+1]},D.revert=function(xe,Ye){if(!Ye)return D.kill(!0);var Ve=xe!==!1||!D.enabled,qe=fn;Ve!==D.isReverted&&(Ve&&(re=Math.max(j(),D.scroll.rec||0),V=D.progress,K=i&&i.progress()),Ge&&[Ge,Fe,G,U].forEach(function(Ut){return Ut.style.display=Ve?"none":"block"}),Ve&&(fn=D,D.update(Ve)),d&&(!b||!D.isActive)&&(Ve?$y(d,F,be):bc(d,F,oi(d),we)),Ve||D.update(Ve),fn=qe,D.isReverted=Ve)},D.refresh=function(xe,Ye,Ve,qe){if(!((fn||!D.enabled)&&!Ye)){if(d&&xe&&hi){en(r,"scrollEnd",Tm);return}!En&&ue&&ue(D),fn=D,Z.tween&&!Ve&&(Z.tween.kill(),Z.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(De){return De.vars.immediateRender&&De.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Ut=de(),Ke=ne(),wt=A?A.duration():Li(L,P),Gt=He<=.01||!He,At=0,gt=qe||0,mt=Gr(Ve)?Ve.end:n.end,on=n.endTrigger||u,bt=Gr(Ve)?Ve.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),ln=D.pinnedContainer=n.pinnedContainer&&Pn(n.pinnedContainer,D),ni=u&&Math.max(0,rt.indexOf(D))||0,Wt=ni,Xt,Kt,ki,hs,T,O,q,Y,W,pe,ve,me,Le;for(ee&&Gr(Ve)&&(me=Ie.getProperty(G,P.p),Le=Ie.getProperty(U,P.p));Wt-- >0;)O=rt[Wt],O.end||O.refresh(0,1)||(fn=D),q=O.pin,q&&(q===u||q===d||q===ln)&&!O.isReverted&&(pe||(pe=[]),pe.unshift(O),O.revert(!0,!0)),O!==rt[Wt]&&(ni--,Wt--);for(mn(bt)&&(bt=bt(D)),bt=nd(bt,"start",D),Ee=hd(bt,u,Ut,P,j(),Ge,G,D,Ke,te,B,wt,A,D._startClamp&&"_startClamp")||(d?-.001:0),mn(mt)&&(mt=mt(D)),Gn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Gn(bt)?bt.split(" ")[0]:"")+mt:(At=Qo(mt.substr(2),Ut),mt=Gn(bt)?bt:(A?Ie.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Ee):Ee)+At,on=u)),mt=nd(mt,"end",D),Ne=Math.max(Ee,hd(mt||(on?"100% 0":wt),on,Ut,P,j()+At,Fe,U,D,Ke,te,B,wt,A,D._endClamp&&"_endClamp"))||-.001,At=0,Wt=ni;Wt--;)O=rt[Wt]||{},q=O.pin,q&&O.start-O._pinPush<=Ee&&!A&&O.end>0&&(Xt=O.end-(D._startClamp?Math.max(0,O.start):O.start),(q===u&&O.start-O._pinPush<Ee||q===ln)&&isNaN(bt)&&(At+=Xt*(1-O.progress)),q===d&&(gt+=Xt));if(Ee+=At,Ne+=At,D._startClamp&&(D._startClamp+=At),D._endClamp&&!En&&(D._endClamp=Ne||-.001,Ne=Math.min(Ne,Li(L,P))),He=Ne-Ee||(Ee-=.01)&&.001,Gt&&(V=Ie.utils.clamp(0,1,Ie.utils.normalize(Ee,Ne,re))),D._pinPush=gt,Ge&&At&&(Xt={},Xt[P.a]="+="+At,ln&&(Xt[P.p]="-="+j()),Ie.set([Ge,Fe],Xt)),d&&!(zu&&D.end>=Li(L,P)))Xt=oi(d),hs=P===qt,ki=j(),ye=parseFloat(Q(P.a))+gt,!wt&&Ne>1&&(ve=(H?Tt.scrollingElement||qn:L).style,ve={style:ve,value:ve["overflow"+P.a.toUpperCase()]},H&&oi(_t)["overflow"+P.a.toUpperCase()]!=="scroll"&&(ve.style["overflow"+P.a.toUpperCase()]="scroll")),bc(d,F,Xt),M=Bo(d),Kt=$i(d,!0),Y=B&&Rr(L,hs?wn:qt)(),m?(we=[m+P.os2,He+gt+Yt],we.t=F,Wt=m===Vt?xl(d,P)+He+gt:0,Wt&&(we.push(P.d,Wt+Yt),F.style.flexBasis!=="auto"&&(F.style.flexBasis=Wt+Yt)),Ws(we),ln&&rt.forEach(function(De){De.pin===ln&&De.vars.pinSpacing!==!1&&(De._subPinOffset=!0)}),B&&j(re)):(Wt=xl(d,P),Wt&&F.style.flexBasis!=="auto"&&(F.style.flexBasis=Wt+Yt)),B&&(T={top:Kt.top+(hs?ki-Ee:Y)+Yt,left:Kt.left+(hs?Y:ki-Ee)+Yt,boxSizing:"border-box",position:"fixed"},T[ns]=T["max"+na]=Math.ceil(Kt.width)+Yt,T[is]=T["max"+Ph]=Math.ceil(Kt.height)+Yt,T[ai]=T[ai+Na]=T[ai+Ia]=T[ai+Fa]=T[ai+Ua]="0",T[Vt]=Xt[Vt],T[Vt+Na]=Xt[Vt+Na],T[Vt+Ia]=Xt[Vt+Ia],T[Vt+Fa]=Xt[Vt+Fa],T[Vt+Ua]=Xt[Vt+Ua],C=Ky(be,T,b),En&&j(0)),i?(W=i._initted,xc(1),i.render(i.duration(),!0,!0),ce=Q(P.a)-ye+He+gt,le=Math.abs(He-ce)>1,B&&le&&C.splice(C.length-2,2),i.render(0,!0,!0),W||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),xc(0)):ce=He,ve&&(ve.value?ve.style["overflow"+P.a.toUpperCase()]=ve.value:ve.style.removeProperty("overflow-"+P.a));else if(u&&j()&&!A)for(Kt=u.parentNode;Kt&&Kt!==_t;)Kt._pinOffset&&(Ee-=Kt._pinOffset,Ne-=Kt._pinOffset),Kt=Kt.parentNode;pe&&pe.forEach(function(De){return De.revert(!1,!0)}),D.start=Ee,D.end=Ne,Pe=je=En?re:j(),!A&&!En&&(Pe<re&&j(re),D.scroll.rec=0),D.revert(!1,!0),ie=dn(),ge&&(se=-1,ge.restart(!0)),fn=0,i&&R&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Gt||V!==D.progress||A||g||i&&!i._initted)&&(i&&!R&&(i._initted||V||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Ee<-.001&&!V?Ie.utils.normalize(Ee,Ne,0):V,!0),D.progress=Gt||(Pe-Ee)/He===V?0:V),d&&m&&(F._pinOffset=Math.round(D.progress*ce)),I&&I.invalidate(),isNaN(me)||(me-=Ie.getProperty(G,P.p),Le-=Ie.getProperty(U,P.p),zo(G,P,me),zo(Ge,P,me-(qe||0)),zo(U,P,Le),zo(Fe,P,Le-(qe||0))),Gt&&!En&&D.update(),h&&!En&&!Qe&&(Qe=!0,h(D),Qe=!1)}},D.getVelocity=function(){return(j()-je)/(dn()-Sa)*1e3||0},D.endAnimation=function(){ma(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?R||ma(i,D.direction<0,1):ma(i,i.reversed()))},D.labelToScroll=function(xe){return i&&i.labels&&(Ee||D.refresh()||Ee)+i.labels[xe]/i.duration()*He||0},D.getTrailing=function(xe){var Ye=rt.indexOf(D),Ve=D.direction>0?rt.slice(0,Ye).reverse():rt.slice(Ye+1);return(Gn(xe)?Ve.filter(function(qe){return qe.vars.preventOverlaps===xe}):Ve).filter(function(qe){return D.direction>0?qe.end<=Ee:qe.start>=Ne})},D.update=function(xe,Ye,Ve){if(!(A&&!Ve&&!xe)){var qe=En===!0?re:D.scroll(),Ut=xe?0:(qe-Ee)/He,Ke=Ut<0?0:Ut>1?1:Ut||0,wt=D.progress,Gt,At,gt,mt,on,bt,ln,ni;if(Ye&&(je=Pe,Pe=A?j():qe,S&&(Xe=_e,_e=i&&!R?i.totalProgress():Ke)),p&&d&&!fn&&!Lo&&hi&&(!Ke&&Ee<qe+(qe-je)/(dn()-Sa)*p?Ke=1e-4:Ke===1&&Ne>qe+(qe-je)/(dn()-Sa)*p&&(Ke=.9999)),Ke!==wt&&D.enabled){if(Gt=D.isActive=!!Ke&&Ke<1,At=!!wt&&wt<1,bt=Gt!==At,on=bt||!!Ke!=!!wt,D.direction=Ke>wt?1:-1,D.progress=Ke,on&&!fn&&(gt=Ke&&!wt?0:Ke===1?1:wt===1?2:3,R&&(mt=!bt&&N[gt+1]!=="none"&&N[gt+1]||N[gt],ni=i&&(mt==="complete"||mt==="reset"||mt in i))),y&&(bt||ni)&&(ni||f||!i)&&(mn(y)?y(D):D.getTrailing(y).forEach(function(ki){return ki.endAnimation()})),R||(I&&!fn&&!Lo?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",Ke,i._tTime/i._tDur):(I.vars.totalProgress=Ke,I.invalidate().restart())):i&&i.totalProgress(Ke,!!(fn&&(ie||xe)))),d){if(xe&&m&&(F.style[m+P.os2]=Ue),!B)$(ya(ye+ce*Ke));else if(on){if(ln=!xe&&Ke>wt&&Ne+1>qe&&qe+1>=Li(L,P),b)if(!xe&&(Gt||ln)){var Wt=$i(d,!0),Xt=qe-Ee;fd(d,_t,Wt.top+(P===qt?Xt:0)+Yt,Wt.left+(P===qt?0:Xt)+Yt)}else fd(d,F);Ws(Gt||ln?C:M),le&&Ke<1&&Gt||$(ye+(Ke===1&&!ln?ce:0))}}S&&!Z.tween&&!fn&&!Lo&&ge.restart(!0),o&&(bt||E&&Ke&&(Ke<1||!Sc))&&$a(o.targets).forEach(function(ki){return ki.classList[Gt||E?"add":"remove"](o.className)}),a&&!R&&!xe&&a(D),on&&!fn?(R&&(ni&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(D)),(bt||!Sc)&&(c&&bt&&yc(D,c),k[gt]&&yc(D,k[gt]),E&&(Ke===1?D.kill(!1,1):k[gt]=0),bt||(gt=Ke===1?1:3,k[gt]&&yc(D,k[gt]))),x&&!Gt&&Math.abs(D.getVelocity())>(Ea(x)?x:2500)&&(ma(D.callbackAnimation),I?I.progress(1):ma(i,mt==="reverse"?1:!Ke,1))):R&&a&&!fn&&a(D)}if(Ae){var Kt=A?qe/A.duration()*(A._caScrollDist||0):qe;ae(Kt+(G._isFlipped?1:0)),Ae(Kt)}Ce&&Ce(-qe/A.duration()*(A._caScrollDist||0))}},D.enable=function(xe,Ye){D.enabled||(D.enabled=!0,en(L,"resize",ba),H||en(L,"scroll",Ps),ue&&en(r,"refreshInit",ue),xe!==!1&&(D.progress=V=0,Pe=je=se=j()),Ye!==!1&&D.refresh())},D.getTween=function(xe){return xe&&Z?Z.tween:I},D.setPositions=function(xe,Ye,Ve,qe){if(A){var Ut=A.scrollTrigger,Ke=A.duration(),wt=Ut.end-Ut.start;xe=Ut.start+wt*xe/Ke,Ye=Ut.start+wt*Ye/Ke}D.refresh(!1,!1,{start:id(xe,Ve&&!!D._startClamp),end:id(Ye,Ve&&!!D._endClamp)},qe),D.update()},D.adjustPinSpacing=function(xe){if(we&&xe){var Ye=we.indexOf(P.d)+1;we[Ye]=parseFloat(we[Ye])+xe+Yt,we[1]=parseFloat(we[1])+xe+Yt,Ws(we)}},D.disable=function(xe,Ye){if(xe!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Ye||I&&I.pause(),re=0,he&&(he.uncache=1),ue&&Qt(r,"refreshInit",ue),ge&&(ge.pause(),Z.tween&&Z.tween.kill()&&(Z.tween=0)),!H)){for(var Ve=rt.length;Ve--;)if(rt[Ve].scroller===L&&rt[Ve]!==D)return;Qt(L,"resize",ba),H||Qt(L,"scroll",Ps)}},D.kill=function(xe,Ye){D.disable(xe,Ye),I&&!Ye&&I.kill(),l&&delete ku[l];var Ve=rt.indexOf(D);Ve>=0&&rt.splice(Ve,1),Ve===yn&&tl>0&&yn--,Ve=0,rt.forEach(function(qe){return qe.scroller===D.scroller&&(Ve=1)}),Ve||En||(D.scroll.rec=0),i&&(i.scrollTrigger=null,xe&&i.revert({kill:!1}),Ye||i.kill()),Ge&&[Ge,Fe,G,U].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),Oa===D&&(Oa=0),d&&(he&&(he.uncache=1),Ve=0,rt.forEach(function(qe){return qe.pin===d&&Ve++}),Ve||(he.spacer=0)),n.onKill&&n.onKill(D)},rt.push(D),D.enable(!1,!1),ke&&ke(D),i&&i.add&&!He){var et=D.update;D.update=function(){D.update=et,at.cache++,Ee||Ne||D.refresh()},Ie.delayedCall(.01,D.update),He=.01,Ee=Ne=0}else D.refresh();d&&qy()},r.register=function(n){return Ls||(Ie=n||xm(),vm()&&window.document&&r.enable(),Ls=Ma),Ls},r.defaults=function(n){if(n)for(var i in n)Fo[i]=n[i];return Fo},r.disable=function(n,i){Ma=0,rt.forEach(function(a){return a[i?"kill":"disable"](n)}),Qt(st,"wheel",Ps),Qt(Tt,"scroll",Ps),clearInterval(Do),Qt(Tt,"touchcancel",Ti),Qt(_t,"touchstart",Ti),Uo(Qt,Tt,"pointerdown,touchstart,mousedown",rd),Uo(Qt,Tt,"pointerup,touchend,mouseup",sd),vl.kill(),Io(Qt);for(var s=0;s<at.length;s+=3)No(Qt,at[s],at[s+1]),No(Qt,at[s],at[s+2])},r.enable=function(){if(st=window,Tt=document,qn=Tt.documentElement,_t=Tt.body,Ie&&($a=Ie.utils.toArray,Da=Ie.utils.clamp,Bu=Ie.core.context||Ti,xc=Ie.core.suppressOverwrites||Ti,wh=st.history.scrollRestoration||"auto",Vu=st.pageYOffset||0,Ie.core.globals("ScrollTrigger",r),_t)){Ma=1,Gs=document.createElement("div"),Gs.style.height="100vh",Gs.style.position="absolute",Rm(),ky(),Bt.register(Ie),r.isTouch=Bt.isTouch,pr=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ou=Bt.isTouch===1,en(st,"wheel",Ps),Th=[st,Tt,qn,_t],Ie.matchMedia?(r.matchMedia=function(c){var h=Ie.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},Ie.addEventListener("matchMediaInit",function(){Am(),Lh()}),Ie.addEventListener("matchMediaRevert",function(){return wm()}),Ie.addEventListener("matchMedia",function(){jr(0,1),ls("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return Ec(),Ec})):console.warn("Requires GSAP 3.11.0 or later"),Ec(),en(Tt,"scroll",Ps);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,a=Ie.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=$i(_t),qt.m=Math.round(o.top+qt.sc())||0,wn.m=Math.round(o.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),Do=setInterval(ld,250),Ie.delayedCall(.5,function(){return Lo=0}),en(Tt,"touchcancel",Ti),en(_t,"touchstart",Ti),Uo(en,Tt,"pointerdown,touchstart,mousedown",rd),Uo(en,Tt,"pointerup,touchend,mouseup",sd),Fu=Ie.utils.checkPrefix("transform"),nl.push(Fu),Ls=dn(),vl=Ie.delayedCall(.2,jr).pause(),Is=[Tt,"visibilitychange",function(){var c=st.innerWidth,h=st.innerHeight;Tt.hidden?(ed=c,td=h):(ed!==c||td!==h)&&ba()},Tt,"DOMContentLoaded",jr,st,"load",jr,st,"resize",ba],Io(en),rt.forEach(function(c){return c.enable(0,1)}),l=0;l<at.length;l+=3)No(Qt,at[l],at[l+1]),No(Qt,at[l],at[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Sc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Do)||(Do=i)&&setInterval(ld,i),"ignoreMobileResize"in n&&(Ou=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Io(Qt)||Io(en,n.autoRefreshEvents||"none"),mm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Pn(n),a=at.indexOf(s),o=as(s);~a&&at.splice(a,o?6:2),i&&(o?Fi.unshift(st,i,_t,i,qn,i):Fi.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Gn(n)?Pn(n):n).getBoundingClientRect(),o=a[s?ns:is]*i||0;return s?a.right-o>0&&a.left+o<st.innerWidth:a.bottom-o>0&&a.top+o<st.innerHeight},r.positionInViewport=function(n,i,s){Gn(n)&&(n=Pn(n));var a=n.getBoundingClientRect(),o=a[s?ns:is],l=i==null?o/2:i in Sl?Sl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/st.innerWidth:(a.top+l)/st.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=os.killAll||[];os={},i.forEach(function(s){return s()})}},r})();Je.version="3.14.2";Je.saveStyles=function(r){return r?$a(r).forEach(function(e){if(e&&e.style){var t=Hn.indexOf(e);t>=0&&Hn.splice(t,5),Hn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),Bu())}}):Hn};Je.revert=function(r,e){return Lh(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?ba(!0):(Ls||Je.register())&&jr(!0)};Je.update=function(r){return++at.cache&&Qi(r===!0?2:0)};Je.clearScrollMemory=Cm;Je.maxScroll=function(r,e){return Li(r,e?wn:qt)};Je.getScrollFunc=function(r,e){return Rr(Pn(r),e?wn:qt)};Je.getById=function(r){return ku[r]};Je.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!hi};Je.snapDirectional=Dh;Je.addEventListener=function(r,e){var t=os[r]||(os[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=os[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var f=[],u=[],d=Ie.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(m){f.length||d.restart(!0),f.push(m.trigger),u.push(m),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&mn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return mn(s)&&(s=s(),en(Je,"refresh",function(){return s=e.batchMax()})),$a(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Je.create(c))}),t};var pd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Tc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===qn&&r(_t,t)},ko={auto:1,scroll:1},Jy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ie.core.getCache(s),o=dn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ko[(l=oi(s)).overflowY]||ko[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!as(s)&&(ko[(l=oi(s)).overflowY]||ko[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Dm=function(e,t,n,i){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Jy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(Tt,Bt.eventTypes[0],_d,!1,!0)},onDisable:function(){return Qt(Tt,Bt.eventTypes[0],_d,!0)}})},Qy=/(input|label|select|textarea)/i,md,_d=function(e){var t=Qy.test(e.target.tagName);(t||md)&&(e._gsapAllow=!0,md=t)},eE=function(e){Gr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Pn(e.target)||qn,h=Ie.core.globals().ScrollSmoother,f=h&&h.get(),u=pr&&(e.content&&Pn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Rr(c,qt),m=Rr(c,wn),g=1,p=(Bt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,_=0,v=mn(i)?function(){return i(o)}:function(){return i||2.8},E,S,b=Dm(c,e.type,!0,s),w=function(){return S=!1},A=Ti,x=Ti,y=function(){l=Li(c,qt),x=Da(pr?1:0,l),n&&(A=Da(0,Li(c,wn))),E=rs},P=function(){u._gsap.y=ya(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(S){requestAnimationFrame(w);var ee=ya(o.deltaY/2),te=x(d.v-ee);if(u&&te!==d.v+d.offset){d.offset=te-d.v;var D=ya((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",u._gsap.y=D+"px",d.cacheID=at.cache,Qi()}return!0}d.offset&&P(),S=!0},L,z,H,B,k=function(){y(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return u&&Ie.set(u,{y:"+=0"}),e.ignoreCheck=function(N){return pr&&N.type==="touchmove"&&R()||g>1.05&&N.type!=="touchstart"||o.isGesturing||N.touches&&N.touches.length>1},e.onPress=function(){S=!1;var N=g;g=ya((st.visualViewport&&st.visualViewport.scale||1)/p),L.pause(),N!==g&&Tc(c,g>1.01?!0:n?!1:"x"),z=m(),H=d(),y(),E=rs},e.onRelease=e.onGestureStart=function(N,ee){if(d.offset&&P(),!ee)B.restart(!0);else{at.cache++;var te=v(),D,ue;n&&(D=m(),ue=D+te*.05*-N.velocityX/.227,te*=pd(m,D,ue,Li(c,wn)),L.vars.scrollX=A(ue)),D=d(),ue=D+te*.05*-N.velocityY/.227,te*=pd(d,D,ue,Li(c,qt)),L.vars.scrollY=x(ue),L.invalidate().duration(te).play(.01),(pr&&L.vars.scrollY>=l||D>=l-1)&&Ie.to({},{onUpdate:k,duration:te})}a&&a(N)},e.onWheel=function(){L._ts&&L.pause(),dn()-_>1e3&&(E=0,_=dn())},e.onChange=function(N,ee,te,D,ue){if(rs!==E&&y(),ee&&n&&m(A(D[2]===ee?z+(N.startX-N.x):m()+ee-D[1])),te){d.offset&&P();var de=ue[2]===te,ne=de?H+N.startY-N.y:d()+te-ue[1],se=x(ne);de&&ne!==se&&(H+=se-ne),d(se)}(te||ee)&&Qi()},e.onEnable=function(){Tc(c,n?!1:"x"),Je.addEventListener("refresh",k),en(st,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),b.enable()},e.onDisable=function(){Tc(c,!0),Qt(st,"resize",k),Je.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Bt(e),o.iOS=pr,pr&&!d()&&d(1),pr&&Ie.ticker.add(Ti),B=o._dc,L=Ie.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Pm(d,d(),function(){return L.pause()})},onUpdate:Qi,onComplete:B.vars.onComplete}),o};Je.sort=function(r){if(mn(r))return rt.sort(r);var e=st.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new Bt(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var e=r instanceof Bt?r:eE(r);return Mn&&Mn.target===e.target&&Mn.kill(),as(e.target)&&(Mn=e),e};Je.core={_getVelocityProp:Nu,_inputObserver:Dm,_scrollers:at,_proxies:Fi,bridge:{ss:function(){hi||ls("scrollStart"),hi=dn()},ref:function(){return fn}}};xm()&&Ie.registerPlugin(Je);var tE="1.3.17";function Lm(r,e,t){return Math.max(r,Math.min(e,t))}function nE(r,e,t){return(1-t)*r+t*e}function iE(r,e,t,n){return nE(r,e,1-Math.exp(-t*n))}function rE(r,e){return(r%e+e)%e}var sE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Lm(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=iE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function aE(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var oE=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=aE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Im=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},gd=100/6,dr={passive:!1},lE=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,dr),this.element.addEventListener("touchstart",this.onTouchStart,dr),this.element.addEventListener("touchmove",this.onTouchMove,dr),this.element.addEventListener("touchend",this.onTouchEnd,dr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Im;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,dr),this.element.removeEventListener("touchstart",this.onTouchStart,dr),this.element.removeEventListener("touchmove",this.onTouchMove,dr),this.element.removeEventListener("touchend",this.onTouchEnd,dr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?gd:n===2?this.window.width:1,s=n===1?gd:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},vd=r=>Math.min(1,1.001-Math.pow(2,-10*r)),cE=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new sE;emitter=new Im;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:g=!0,prevent:p,virtualScroll:_,overscroll:v=!0,autoRaf:E=!1,anchors:S=!1,autoToggle:b=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:x=A,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=tE,(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=vd:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:m,autoResize:g,prevent:p,virtualScroll:_,overscroll:v,autoRaf:E,anchors:S,autoToggle:b,allowNestedScroll:w,naiveDimensions:x,stopInertiaOnNavigate:y},this.dimensions=new oE(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new lE(t,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${i.split("#")[1]}`;this.scrollTo(a,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const h=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof h=="function"&&h?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=t;this.options.gestureOrientation==="both"?u=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(u=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,g=i&&n.type==="touchend";g&&(u=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+u,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!h)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let u;if(typeof r=="string"?(u=document.querySelector(r),u||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(u=r),u){if(this.options.wrapper!==window){const m=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?m.left:m.top}const d=u.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const u=r-this.animatedScroll;u>this.limit/2?r=r-this.limit:u<-this.limit/2&&(r=r+this.limit)}}else r=Lm(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof a=="number"&&typeof o!="function"?o=vd:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,r,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(u,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),i&&(this.targetScroll=u),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,a,o,l,c,h,f,u;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);i.computedStyle=b;const w=b.overflowX,A=b.overflowY;if(s=["auto","overlay","scroll"].includes(w),a=["auto","overlay","scroll"].includes(A),i.hasOverflowX=s,i.hasOverflowY=a,!s&&!a||d==="vertical"&&!a||d==="horizontal"&&!s)return!1;c=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,u=r.clientHeight,o=c>f,l=h>u,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,c=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,u=i.clientHeight;if(!s&&!a||!o&&!l||d==="vertical"&&(!a||!l)||d==="horizontal"&&(!s||!o))return!1;let m;if(d==="horizontal")m="x";else if(d==="vertical")m="y";else{const b=e!==0,w=t!==0;b&&s&&o&&(m="x"),w&&a&&l&&(m="y")}if(!m)return!1;let g,p,_,v,E;if(m==="x")g=r.scrollLeft,p=c-f,_=e,v=s,E=o;else if(m==="y")g=r.scrollTop,p=h-u,_=t,v=a,E=l;else return!1;return(_>0?g<p:g>0)&&v&&E}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?rE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};(function(){function r(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];var o=s.length;if(n)for(o||n.removeChild(this);o--;){var l=s[o];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),o?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=r,DocumentFragment.prototype.append=r),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function uE(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function xd(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Sd(r,e,t){return e&&xd(r.prototype,e),t&&xd(r,t),r}function hE(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Md(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function yd(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Md(Object(t),!0).forEach(function(n){hE(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Md(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Um(r,e){return dE(r)||mE(r,e)||Nm(r,e)||gE()}function bn(r){return fE(r)||pE(r)||Nm(r)||_E()}function fE(r){if(Array.isArray(r))return Gu(r)}function dE(r){if(Array.isArray(r))return r}function pE(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function mE(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var t=[],n=!0,i=!1,s=void 0;try{for(var a=r[Symbol.iterator](),o;!(n=(o=a.next()).done)&&(t.push(o.value),!(e&&t.length===e));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw s}}return t}}function Nm(r,e){if(r){if(typeof r=="string")return Gu(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Gu(r,e)}}function Gu(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function _E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kr(r,e){return Object.getOwnPropertyNames(Object(r)).reduce(function(t,n){var i=Object.getOwnPropertyDescriptor(Object(r),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(t,n,s||i)},{})}function to(r){return typeof r=="string"}function Ih(r){return Array.isArray(r)}function Vo(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Kr(r),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(to(t)||Ih(t)?String(t):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(r.position)),e}function Uh(r){var e=to(r)||Ih(r)?String(r):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Dl(r){return r!==null&&typeof r=="object"}function vE(r){return Dl(r)&&/^(1|3|11)$/.test(r.nodeType)}function xE(r){return typeof r=="number"&&r>-1&&r%1===0}function SE(r){return Dl(r)&&xE(r.length)}function cs(r){return Ih(r)?r:r==null?[]:SE(r)?Array.prototype.slice.call(r):[r]}function Ed(r){var e=r;return to(r)&&(/^(#[a-z]\w+)$/.test(r.trim())?e=document.getElementById(r.trim().slice(1)):e=document.querySelectorAll(r)),cs(e).reduce(function(t,n){return[].concat(bn(t),bn(cs(n).filter(vE)))},[])}var ME=Object.entries,Ml="_splittype",xi={},yE=0;function Ii(r,e,t){if(!Dl(r))return console.warn("[data.set] owner is not an object"),null;var n=r[Ml]||(r[Ml]=++yE),i=xi[n]||(xi[n]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(xi[n]=yd(yd({},i),e)):e!==void 0&&(i[e]=t),t}function Zr(r,e){var t=Dl(r)?r[Ml]:null,n=t&&xi[t]||{};return n}function Fm(r){var e=r&&r[Ml];e&&(delete r[e],delete xi[e])}function EE(){Object.keys(xi).forEach(function(r){delete xi[r]})}function bE(){ME(xi).forEach(function(r){var e=Um(r,2),t=e[0],n=e[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(xi[t]=null,delete xi[t])})}function TE(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=r?String(r):"";return t.trim().replace(/\s+/g," ").split(e)}var Nh="\\ud800-\\udfff",Om="\\u0300-\\u036f\\ufe20-\\ufe23",Bm="\\u20d0-\\u20f0",zm="\\ufe0e\\ufe0f",wE="[".concat(Nh,"]"),Wu="[".concat(Om).concat(Bm,"]"),Xu="\\ud83c[\\udffb-\\udfff]",AE="(?:".concat(Wu,"|").concat(Xu,")"),km="[^".concat(Nh,"]"),Vm="(?:\\ud83c[\\udde6-\\uddff]){2}",Hm="[\\ud800-\\udbff][\\udc00-\\udfff]",Gm="\\u200d",Wm="".concat(AE,"?"),Xm="[".concat(zm,"]?"),CE="(?:"+Gm+"(?:"+[km,Vm,Hm].join("|")+")"+Xm+Wm+")*",RE=Xm+Wm+CE,PE="(?:".concat(["".concat(km).concat(Wu,"?"),Wu,Vm,Hm,wE].join("|"),`
)`),DE=RegExp("".concat(Xu,"(?=").concat(Xu,")|").concat(PE).concat(RE),"g"),LE=[Gm,Nh,Om,Bm,zm],IE=RegExp("[".concat(LE.join(""),"]"));function UE(r){return r.split("")}function Ym(r){return IE.test(r)}function NE(r){return r.match(DE)||[]}function FE(r){return Ym(r)?NE(r):UE(r)}function OE(r){return r==null?"":String(r)}function BE(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r=OE(r),r&&to(r)&&!e&&Ym(r)?FE(r):r.split(e)}function Yu(r,e){var t=document.createElement(r);return e&&Object.keys(e).forEach(function(n){var i=e[n],s=to(i)?i.trim():i;s===null||s===""||(n==="children"?t.append.apply(t,bn(cs(s))):t.setAttribute(n,s))}),t}var Fh={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function zE(r,e){e=Kr(Fh,e);var t=Uh(e.types),n=e.tagName,i=r.nodeValue,s=document.createDocumentFragment(),a=[],o=[];return/^\s/.test(i)&&s.append(" "),a=TE(i).reduce(function(l,c,h,f){var u,d;return t.chars&&(d=BE(c).map(function(m){var g=Yu(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:m});return Ii(g,"isChar",!0),o=[].concat(bn(o),[g]),g})),t.words||t.lines?(u=Yu(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?d:c}),Ii(u,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(u)):d.forEach(function(m){s.appendChild(m)}),h<f.length-1&&s.append(" "),t.words?l.concat(u):l},[]),/\s$/.test(i)&&s.append(" "),r.replaceWith(s),{words:a,chars:o}}function qm(r,e){var t=r.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(t))return n;if(t===3&&/\S/.test(r.nodeValue))return zE(r,e);var i=cs(r.childNodes);if(i.length&&(Ii(r,"isSplit",!0),!Zr(r).isRoot)){r.style.display="inline-block",r.style.position="relative";var s=r.nextSibling,a=r.previousSibling,o=r.textContent||"",l=s?s.textContent:" ",c=a?a.textContent:" ";Ii(r,{isWordEnd:/\s$/.test(o)||/^\s/.test(l),isWordStart:/^\s/.test(o)||/\s$/.test(c)})}return i.reduce(function(h,f){var u=qm(f,e),d=u.words,m=u.chars;return{words:[].concat(bn(h.words),bn(d)),chars:[].concat(bn(h.chars),bn(m))}},n)}function kE(r,e,t,n){if(!t.absolute)return{top:e?r.offsetTop:null};var i=r.offsetParent,s=Um(n,2),a=s[0],o=s[1],l=0,c=0;if(i&&i!==document.body){var h=i.getBoundingClientRect();l=h.x+a,c=h.y+o}var f=r.getBoundingClientRect(),u=f.width,d=f.height,m=f.x,g=f.y,p=g+o-c,_=m+a-l;return{width:u,height:d,top:p,left:_}}function $m(r){Zr(r).isWord?(Fm(r),r.replaceWith.apply(r,bn(r.childNodes))):cs(r.children).forEach(function(e){return $m(e)})}var VE=function(){return document.createDocumentFragment()};function HE(r,e,t){var n=Uh(e.types),i=e.tagName,s=r.getElementsByTagName("*"),a=[],o=[],l=null,c,h,f,u=[],d=r.parentElement,m=r.nextElementSibling,g=VE(),p=window.getComputedStyle(r),_=p.textAlign,v=parseFloat(p.fontSize),E=v*.2;return e.absolute&&(f={left:r.offsetLeft,top:r.offsetTop,width:r.offsetWidth},h=r.offsetWidth,c=r.offsetHeight,Ii(r,{cssWidth:r.style.width,cssHeight:r.style.height})),cs(s).forEach(function(S){var b=S.parentElement===r,w=kE(S,b,e,t),A=w.width,x=w.height,y=w.top,P=w.left;/^br$/i.test(S.nodeName)||(n.lines&&b&&((l===null||y-l>=E)&&(l=y,a.push(o=[])),o.push(S)),e.absolute&&Ii(S,{top:y,left:P,width:A,height:x}))}),d&&d.removeChild(r),n.lines&&(u=a.map(function(S){var b=Yu(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(_,"; width: 100%;")});Ii(b,"isLine",!0);var w={height:0,top:1e4};return g.appendChild(b),S.forEach(function(A,x,y){var P=Zr(A),R=P.isWordEnd,L=P.top,z=P.height,H=y[x+1];w.height=Math.max(w.height,z),w.top=Math.min(w.top,L),b.appendChild(A),R&&Zr(H).isWordStart&&b.append(" ")}),e.absolute&&Ii(b,{height:w.height,top:w.top}),b}),n.words||$m(g),r.replaceChildren(g)),e.absolute&&(r.style.width="".concat(r.style.width||h,"px"),r.style.height="".concat(c,"px"),cs(s).forEach(function(S){var b=Zr(S),w=b.isLine,A=b.top,x=b.left,y=b.width,P=b.height,R=Zr(S.parentElement),L=!w&&R.isLine;S.style.top="".concat(L?A-R.top:A,"px"),S.style.left=w?"".concat(f.left,"px"):"".concat(x-(L?f.left:0),"px"),S.style.height="".concat(P,"px"),S.style.width=w?"".concat(f.width,"px"):"".concat(y,"px"),S.style.position="absolute"})),d&&(m?d.insertBefore(r,m):d.appendChild(r)),u}var Ds=Kr(Fh,{}),GE=(function(){Sd(r,null,[{key:"clearData",value:function(){EE()}},{key:"setDefaults",value:function(t){return Ds=Kr(Ds,Vo(t)),Fh}},{key:"revert",value:function(t){Ed(t).forEach(function(n){var i=Zr(n),s=i.isSplit,a=i.html,o=i.cssWidth,l=i.cssHeight;s&&(n.innerHTML=a,n.style.width=o||"",n.style.height=l||"",Fm(n))})}},{key:"create",value:function(t,n){return new r(t,n)}},{key:"data",get:function(){return xi}},{key:"defaults",get:function(){return Ds},set:function(t){Ds=Kr(Ds,Vo(t))}}]);function r(e,t){uE(this,r),this.isSplit=!1,this.settings=Kr(Ds,Vo(t)),this.elements=Ed(e),this.split()}return Sd(r,[{key:"split",value:function(t){var n=this;this.revert(),this.elements.forEach(function(a){Ii(a,"html",a.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=Kr(this.settings,Vo(t)));var s=Uh(this.settings.types);s.none||(this.elements.forEach(function(a){Ii(a,"isRoot",!0);var o=qm(a,n.settings),l=o.words,c=o.chars;n.words=[].concat(bn(n.words),bn(l)),n.chars=[].concat(bn(n.chars),bn(c))}),this.elements.forEach(function(a){if(s.lines||n.settings.absolute){var o=HE(a,n.settings,i);n.lines=[].concat(bn(n.lines),bn(o))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),bE())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),r.revert(this.elements)}}]),r})();Yn.registerPlugin(Je);document.addEventListener("DOMContentLoaded",()=>{const r=new cE({lerp:.08,smoothWheel:!0,wheelMultiplier:.8});r.on("scroll",Je.update),Yn.ticker.add(ne=>r.raf(ne*1e3)),Yn.ticker.lagSmoothing(0);const e=document.getElementById("custom-cursor");if(!matchMedia("(hover: none)").matches&&e){let j=function(){ie+=(ne-ie)*.12,V+=(se-V)*.12,e.style.transform=`translate(${ie-20}px, ${V-20}px)`,requestAnimationFrame(j)};var de=j;let ne=innerWidth/2,se=innerHeight/2,ie=ne,V=se;requestAnimationFrame(j),document.addEventListener("mousemove",Z=>{ne=Z.clientX,se=Z.clientY}),document.addEventListener("mouseover",Z=>{Z.target.closest("a, button, .skill-card, .project-card, .stat-card, .contact-line")&&e.classList.add("hovering")}),document.addEventListener("mouseout",Z=>{Z.target.closest("a, button, .skill-card, .project-card, .stat-card, .contact-line")&&e.classList.remove("hovering")})}const n=document.getElementById("scroll-progress");window.addEventListener("scroll",()=>{const ne=document.documentElement.scrollHeight-innerHeight,se=window.scrollY/ne*100;n.style.width=`${se}%`},{passive:!0});const i=document.getElementById("main-nav"),s=document.querySelectorAll(".nav-link"),a=document.querySelectorAll(".section"),o=()=>{window.scrollY>50?i.classList.add("scrolled"):i.classList.remove("scrolled")};window.addEventListener("scroll",o,{passive:!0});const l=new IntersectionObserver(ne=>{ne.forEach(se=>{if(se.isIntersecting){s.forEach(V=>V.classList.remove("active"));const ie=document.querySelector(`.nav-link[data-section="${se.target.id}"]`);ie&&ie.classList.add("active")}})},{rootMargin:"-30% 0px -60% 0px"});a.forEach(ne=>{ne.id!=="hero"&&l.observe(ne)}),s.forEach(ne=>{ne.addEventListener("click",se=>{se.preventDefault();const ie=document.querySelector(ne.getAttribute("href"));ie&&r.scrollTo(ie,{offset:-60})})}),document.querySelectorAll(".btn").forEach(ne=>{const se=ne.getAttribute("href");se&&se.startsWith("#")&&ne.addEventListener("click",ie=>{ie.preventDefault();const V=document.querySelector(se);V&&r.scrollTo(V,{offset:-60})})}),wy();const c=["INITIALIZING SYSTEM OVERRIDE...","LOADING KERNEL MODULES...","WELCOME, SIR."],h=document.getElementById("splash-typewriter"),f=document.querySelector(".splash-progress-bar");let u=0,d=0;const m=c.join("").length;let g=0;function p(){u<c.length&&(d<c[u].length?(h.textContent+=c[u][d],d++,g++,f.style.width=`${g/m*100}%`,setTimeout(p,25)):(u++,d=0,u<c.length?(h.textContent="",setTimeout(p,300)):(f.style.width="100%",setTimeout(_,800))))}function _(){const ne=document.getElementById("splash-screen");ne.classList.add("splash-exit"),setTimeout(()=>{ne.style.display="none",ue()},800)}setTimeout(p,600);const v=[{name:"Flutter",level:90},{name:"React 19",level:85},{name:"Electron",level:80},{name:"Laravel",level:75},{name:"Vite",level:90},{name:"DevOps",level:85},{name:"Arch Linux",level:95}],E=document.getElementById("skills-grid"),S=[];v.forEach((ne,se)=>{const ie=document.createElement("div");ie.className="skill-card reveal-up";let V="";const j=[];for(let Z=0;Z<12;Z++)V+=`<div class="eq-bar" id="eq-${se}-${Z}"></div>`,j.push({id:`eq-${se}-${Z}`,offset:Math.random()*100,h:20,target:20});S.push({bars:j,hovered:!1}),ie.innerHTML=`
      <div class="skill-card-header">
        <span class="skill-name">${ne.name}</span>
        <span class="skill-level-text">${ne.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${ne.level}"></div>
      </div>
      <div class="skill-eq">${V}</div>
    `,E.appendChild(ie),ie.addEventListener("mouseenter",()=>S[se].hovered=!0),ie.addEventListener("mouseleave",()=>S[se].hovered=!1),ie.addEventListener("mousemove",Z=>{const he=ie.getBoundingClientRect();ie.style.setProperty("--local-x",`${Z.clientX-he.left}px`),ie.style.setProperty("--local-y",`${Z.clientY-he.top}px`)})});let b=0;function w(){b+=.04,S.forEach(ne=>{ne.bars.forEach((se,ie)=>{const V=document.getElementById(se.id);V&&(se.target=ne.hovered?85+Math.sin(b*3+ie*.5)*15:15+Math.sin(b+se.offset)*12+Math.cos(b*.7+ie)*8,se.h+=(se.target-se.h)*.15,V.style.height=`${se.h}%`)})}),requestAnimationFrame(w)}requestAnimationFrame(w);const A=[{name:"Manhwa Studio Pro",desc:"All-in-One Desktop Application automating recap video creation with deep AI integration — Gemini 2.5 Flash, Imagen 4, and multi-engine TTS.",techs:["React 19","TypeScript","Electron","Vite","Python","AI/ML"],type:"nodes",tag:"Desktop App",env:"matrix",fullDesc:"A comprehensive desktop application that automates the entire manhwa recap video creation pipeline. From parsing raw panel images and generating AI-powered scripts with Gemini 2.5 Flash, to producing studio-quality voiceovers via multi-engine TTS (ElevenLabs, Edge, Gemini) and compositing final videos with FFmpeg — all orchestrated through a sleek React 19 interface running on Electron 40.",highlights:["AI script generation using Gemini 2.5 Flash with context-aware prompts","Multi-engine TTS synthesis with automatic fallback and rate-limit handling","Thumbnail generation via Imagen 4 with style-matched prompts","Real-time video preview with frame-by-frame timeline editor","Automatic panel detection, cleaning, and sequencing pipeline"],screenshots:["/projects_asset/manhwa/1.png","/projects_asset/manhwa/2.png","/projects_asset/manhwa/3.png","/projects_asset/manhwa/4.png","/projects_asset/manhwa/5.png","/projects_asset/manhwa/6.png","/projects_asset/manhwa/7.png"]},{name:"Fleet Tracking",desc:"Professional mobile application utilizing IOPGPS APIs for real-time fleet telemetry and global asset monitoring.",techs:["Next.JS","NestJS","IOPGPS API","Real-time","Maps"],type:"radar",tag:"Web App",env:"orbital",fullDesc:"A comprehensive fleet management solution providing real-time GPS tracking, vehicle telemetry, and remote command capabilities. Built with Flutter for cross-platform deployment, it integrates directly with IOPGPS hardware APIs to deliver live location updates, fuel monitoring, engine diagnostics, and geofence alerts — all rendered on interactive map layers with historical route playback.",highlights:["Real-time GPS tracking with sub-second location updates","Remote engine start/stop commands via IOPGPS relay API","Live fuel level monitoring with consumption analytics","Geofence zone management with instant breach alerts","Historical route playback with speed and stop analysis"],screenshots:["/projects_asset/fleet/1.jpeg","/projects_asset/fleet/2.jpeg"]},{name:"Transgo App",desc:"Flutter mobile app for vehicle rental in Jakarta — browse fleets, book cars & motorcycles, pay with TgPay, and track orders in real-time.",techs:["Flutter","GetX","Firebase","REST API","Maps","Dart"],type:"nodes",tag:"Mobile App",env:"hexgrid",fullDesc:"A full-featured Flutter mobile application for Transgo — Indonesia's modern vehicle rental platform serving Jakarta and surrounding areas. Users can browse available car and motorcycle fleets, apply filters and seasonal promotions, complete bookings with detailed pickup terms and pricing, and pay seamlessly via the integrated TgPay digital wallet. The app features Google Sign-In, Firebase Cloud Messaging for push notifications, background location tracking for the dashboard map, an in-app chatbot for support, fleet ranking leaderboards, and Transgo Rewards loyalty tiers — all built with GetX state management and connected to the transgo.id REST API.",highlights:["Fleet browsing with filters, flash sales, and seasonal charges","TgPay integrated wallet for seamless in-app payments","Background location tracking with interactive map dashboard","Firebase Cloud Messaging push notifications and in-app alerts","Transgo Rewards loyalty program with tier progression","28K+ installs and 5K+ active devices on Google Play"],screenshots:["/projects_asset/transgo/1.jpeg","/projects_asset/transgo/2.jpeg","/projects_asset/transgo/3.jpeg","/projects_asset/transgo/4.jpeg","/projects_asset/transgo/5.jpeg","/projects_asset/transgo/6.jpeg"]},{name:"SIAGA",desc:"Life-saving IoT Gas & Air Quality monitor with real-time data streaming via MQTT, live charting, and NodeMCU WiFi configuration.",techs:["Java","Gradle","MQTT","IoT","HiveMQ","NodeMCU","C++"],type:"radar",tag:"IoT Platform - Mobile App",env:"smoke",fullDesc:"An IoT-powered environmental monitoring system that detects dangerous gas concentrations and air quality degradation in real-time. The Flutter mobile app connects to NodeMCU-based sensor arrays over MQTT (HiveMQ Cloud), displaying live data streams on interactive charts with configurable danger thresholds and push notification alerts — potentially saving lives by providing early warnings of hazardous conditions.",highlights:["Real-time MQTT data streaming from NodeMCU sensor arrays","Live interactive charts with configurable danger thresholds","Push notification system for hazardous gas level alerts","WiFi provisioning interface for NodeMCU configuration","Historical data logging with trend analysis dashboard"],screenshots:["/projects_asset/siaga/1.jpg","/projects_asset/siaga/2.jpeg","/projects_asset/siaga/3.jpeg","/projects_asset/siaga/4.jpg","/projects_asset/siaga/5.jpg","/projects_asset/siaga/6.jpeg","/projects_asset/siaga/7.jpg","/projects_asset/siaga/8.jpg","/projects_asset/siaga/9.jpg"],hudCallouts:{slideIndex:7,people:[{name:"Arkan",role:"Electronics Engineer",linkedin:"https://www.linkedin.com/in/arkan-ardiansyah-5a849b395/",x:39,y:28,direction:"down"},{name:"Kitna",role:"Initiator",linkedin:"https://www.linkedin.com/in/kitna-mahardika-favian-77801729b/",x:50,y:34,direction:"up"},{name:"Vriza",role:"Network Engineer",linkedin:"https://www.linkedin.com/in/vriza-hexandria-saputra-181544356/",x:66,y:34,direction:"down"}]}},{name:"MindSpace",desc:"Accessible mental health platform connecting clients with therapists, featuring secure chat and dynamic profiles.",techs:["Flutter","Laravel","WebSocket","REST API","MySQL","DevOps","Crossplatform"],type:"nodes",tag:"Full-Stack",env:"aurora",fullDesc:"A compassionate digital platform bridging the gap between mental health professionals and those seeking support. Built with a Flutter frontend and Laravel backend, MindSpace offers real-time encrypted chat, therapist matching based on specialization and availability, session scheduling, progress tracking journals, and dynamic profile management — all designed with accessibility and emotional safety as core principles.",highlights:["Real-time encrypted chat via WebSocket with message persistence","Intelligent therapist matching by specialization and availability","Session scheduling with calendar integration and reminders","Personal journaling with mood tracking and progress visualization","Dynamic profiles with verification badges for licensed therapists"],screenshots:["/projects_asset/mindspace/1.png","/projects_asset/mindspace/2.png","/projects_asset/mindspace/3.png","/projects_asset/mindspace/4.png","/projects_asset/mindspace/5.png","/projects_asset/mindspace/6.png","/projects_asset/mindspace/7.png","/projects_asset/mindspace/8.png","/projects_asset/mindspace/9.png"]}],x=document.getElementById("projects-grid");A.forEach((ne,se)=>{const ie=document.createElement("div");ie.className="project-card reveal-up";const V=ne.techs.map(j=>`<span class="tech-pill">${j}</span>`).join("");ie.innerHTML=`
      <canvas class="project-canvas" id="pcanvas-${se}" data-type="${ne.type}"></canvas>
      <span class="project-tag">${ne.tag}</span>
      <h3 class="project-name">${ne.name}</h3>
      <p class="project-desc">${ne.desc}</p>
      <div class="project-techs">${V}</div>
    `,x.appendChild(ie),ie.addEventListener("mousemove",j=>{const Z=ie.getBoundingClientRect();ie.style.setProperty("--local-x",`${j.clientX-Z.left}px`),ie.style.setProperty("--local-y",`${j.clientY-Z.top}px`)}),ie.addEventListener("click",()=>ee(se))});const y=document.getElementById("warp-overlay"),P=document.getElementById("warp-canvas"),R=document.getElementById("showcase"),L=document.getElementById("showcase-env-canvas");function z(ne){return new Promise(se=>{const ie=P.getContext("2d"),V=P.width=innerWidth,j=P.height=innerHeight,Z=V/2,he=j/2,Me=Array.from({length:300},()=>{const Ne=Math.random()*Math.PI*2,Ge=Math.random()*50+20;return{angle:Ne,dist:Ge,speed:Math.random()*8+4,length:Math.random()*80+30,width:Math.random()*1.5+.5,hue:Math.random()>.6?186:270}});let Pe=0;const je=ne==="in"?1200:900;y.classList.add("active"),y.style.opacity="1";function Ee(){Pe+=16;const Ne=Math.min(Pe/je,1),Ge=ne==="in"?Ne*Ne*Ne:1-Math.pow(1-Ne,3);ie.fillStyle=`rgba(5, 5, 16, ${ne==="in"?.15:.25})`,ie.fillRect(0,0,V,j);const Fe=ne==="in"?1+Ge*25:26-Ge*25;Me.forEach(We=>{We.dist+=We.speed*Fe*.3;const Qe=Z+Math.cos(We.angle)*We.dist,He=he+Math.sin(We.angle)*We.dist,be=We.length*Fe*.15,C=Z+Math.cos(We.angle)*(We.dist-be),M=he+Math.sin(We.angle)*(We.dist-be),F=Math.min(1,Fe*.04);ie.strokeStyle=We.hue===186?`rgba(0, 229, 255, ${F})`:`rgba(176, 38, 255, ${F})`,ie.lineWidth=We.width,ie.beginPath(),ie.moveTo(Qe,He),ie.lineTo(C,M),ie.stroke(),We.dist>Math.max(V,j)&&(We.dist=Math.random()*30+10,We.angle=Math.random()*Math.PI*2)});const G=50+Fe*8,U=ie.createRadialGradient(Z,he,0,Z,he,G);U.addColorStop(0,`rgba(255, 255, 255, ${.1*Fe*.04})`),U.addColorStop(1,"transparent"),ie.fillStyle=U,ie.beginPath(),ie.arc(Z,he,G,0,Math.PI*2),ie.fill(),Ne<1?requestAnimationFrame(Ee):(ne==="out"&&(y.classList.remove("active"),y.style.opacity="0"),se())}ie.fillStyle="rgba(5, 5, 16, 1)",ie.fillRect(0,0,V,j),requestAnimationFrame(Ee)})}function H(ne){document.getElementById("showcase-tag").textContent=ne.tag,document.getElementById("showcase-title").textContent=ne.name,document.getElementById("showcase-desc").textContent=ne.fullDesc;const se=document.getElementById("showcase-techs");se.innerHTML=ne.techs.map(he=>`<span class="showcase-tech-pill">${he}</span>`).join("");const ie=document.getElementById("showcase-highlights");ie.innerHTML=ne.highlights.map(he=>`<li>${he}</li>`).join("");const V=document.getElementById("carousel-track"),j=document.getElementById("carousel-dots"),Z=ne.screenshots||[];if(Z.length===0){V.innerHTML=`
        <div class="carousel-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <rect x="2" y="2" width="20" height="20" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="m21 15-5-5L5 21"/>
          </svg>
          <span>SCREENSHOTS COMING SOON</span>
        </div>`,j.innerHTML="",B=0;return}V.innerHTML=Z.map((he,Me)=>{if(ne.hudCallouts&&ne.hudCallouts.slideIndex===Me){const Pe=ne.hudCallouts.people.map((je,Ee)=>`
          <div class="hud-callout" style="--hud-x: ${je.x}%; --hud-y: ${je.y}%;" data-delay="${Ee}" data-direction="${je.direction||"down"}">
            <div class="hud-anchor"></div>
            <div class="hud-connector"></div>
            <div class="hud-label">
              <div class="hud-label-header">
                <span class="hud-scan-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <span class="hud-name">${je.name}</span>
              </div>
              <span class="hud-role">${je.role}</span>
              <a href="${je.linkedin}" target="_blank" rel="noopener" class="hud-linkedin">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        `).join("");return`<div class="carousel-slide carousel-slide-hud" data-slide-idx="${Me}">
          <img src="${he}" alt="Screenshot" loading="lazy"/>
          <button class="hud-toggle" aria-label="Toggle HUD" title="Toggle HUD">
            <svg class="hud-toggle-on" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
            </svg>
            <svg class="hud-toggle-off" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
            <span>HUD</span>
          </button>
          <div class="hud-overlay">${Pe}</div>
        </div>`}return`<div class="carousel-slide" data-slide-idx="${Me}"><img src="${he}" alt="Screenshot" loading="lazy"/></div>`}).join(""),j.innerHTML=Z.map((he,Me)=>`<div class="carousel-dot${Me===0?" active":""}" data-idx="${Me}"></div>`).join(""),B=0,V.style.transform="translateX(0)"}let B=0;function k(ne){const se=document.getElementById("carousel-track"),ie=document.querySelectorAll(".carousel-dot"),V=ie.length;V!==0&&(B=(ne%V+V)%V,se.style.transform=`translateX(-${B*100}%)`,ie.forEach((j,Z)=>j.classList.toggle("active",Z===B)),document.querySelectorAll(".carousel-slide-hud").forEach(j=>{Number(j.dataset.slideIdx)===B?(j.classList.remove("hud-active"),j.offsetWidth,j.classList.add("hud-active")):j.classList.remove("hud-active")}))}document.getElementById("carousel-prev").addEventListener("click",()=>k(B-1)),document.getElementById("carousel-next").addEventListener("click",()=>k(B+1)),document.getElementById("carousel-dots").addEventListener("click",ne=>{const se=ne.target.closest(".carousel-dot");se&&k(Number(se.dataset.idx))}),document.getElementById("carousel-track").addEventListener("click",ne=>{const se=ne.target.closest(".hud-toggle");if(!se)return;const ie=se.closest(".carousel-slide-hud");if(!ie)return;ie.classList.toggle("hud-hidden");const V=ie.classList.contains("hud-hidden");se.querySelector(".hud-toggle-on").style.display=V?"none":"block",se.querySelector(".hud-toggle-off").style.display=V?"block":"none"});let N=0;async function ee(ne){const se=A[ne];H(se),N=window.scrollY,r.stop(),await z("in"),R.classList.remove("showcase-hidden"),document.body.classList.add("showcase-open"),Py(L,se.env),y.classList.remove("active"),y.style.opacity="0",requestAnimationFrame(()=>{R.classList.add("showcase-visible")})}async function te(){R.classList.remove("showcase-visible"),am(),await z("out"),R.classList.add("showcase-hidden"),document.body.classList.remove("showcase-open"),window.scrollTo(0,N),r.start()}document.getElementById("showcase-back").addEventListener("click",te),document.querySelectorAll(".stat-card").forEach(ne=>{ne.addEventListener("mousemove",se=>{const ie=ne.getBoundingClientRect();ne.style.setProperty("--local-x",`${se.clientX-ie.left}px`),ne.style.setProperty("--local-y",`${se.clientY-ie.top}px`)})}),jm();const D=document.getElementById("current-year");D&&(D.textContent=new Date().getFullYear());function ue(){document.querySelectorAll(".split-text").forEach(he=>{const Me=new GE(he,{types:"chars, words"});Yn.set(Me.chars,{y:80,rotationZ:8,opacity:0}),Je.create({trigger:he,start:"top 88%",once:!0,onEnter:()=>{Yn.to(Me.chars,{y:0,rotationZ:0,opacity:1,stagger:.02,duration:.7,ease:"back.out(1.4)"})}})}),document.querySelectorAll(".reveal-up").forEach((he,Me)=>{Je.create({trigger:he,start:"top 90%",once:!0,onEnter:()=>{setTimeout(()=>he.classList.add("revealed"),Me*60)}})}),document.querySelectorAll(".skill-bar-fill").forEach(he=>{Je.create({trigger:he,start:"top 90%",once:!0,onEnter:()=>{setTimeout(()=>{he.style.width=he.dataset.level+"%"},200)}})}),document.querySelectorAll(".stat-number").forEach(he=>{Je.create({trigger:he,start:"top 85%",once:!0,onEnter:()=>{const Me=parseInt(he.dataset.count);Yn.to({val:0},{val:Me,duration:2,ease:"power2.out",onUpdate:function(){he.textContent=Math.round(this.targets()[0].val)}})}})});const ie="Engineering robust, cross-platform digital ecosystems across Windows, Linux, macOS, Android, and iOS.",V=document.getElementById("typewriter");let j=0;function Z(){j<ie.length&&(V.textContent+=ie[j],j++,setTimeout(Z,25))}setTimeout(Z,500),Yn.from(".hero-content",{y:40,opacity:0,duration:1,delay:.1,ease:"power2.out"})}});
