function _0x1b4e(_0xd6f3d6,_0x19ce29){const _0x5ec007=_0x5ec0();return _0x1b4e=function(_0x1b4ec4,_0x240de4){_0x1b4ec4=_0x1b4ec4-0x13d;let _0x4f44f2=_0x5ec007[_0x1b4ec4];return _0x4f44f2;},_0x1b4e(_0xd6f3d6,_0x19ce29);}const _0x496e64=_0x1b4e;(function(_0x4e718d,_0x2c4caf){const _0x28251e=_0x1b4e,_0x525621=_0x4e718d();while(!![]){try{const _0x394ea1=-parseInt(_0x28251e(0x178))/0x1*(-parseInt(_0x28251e(0x18d))/0x2)+parseInt(_0x28251e(0x14d))/0x3*(parseInt(_0x28251e(0x13f))/0x4)+-parseInt(_0x28251e(0x16c))/0x5*(parseInt(_0x28251e(0x15f))/0x6)+parseInt(_0x28251e(0x145))/0x7+-parseInt(_0x28251e(0x180))/0x8*(parseInt(_0x28251e(0x161))/0x9)+parseInt(_0x28251e(0x17c))/0xa*(-parseInt(_0x28251e(0x165))/0xb)+parseInt(_0x28251e(0x181))/0xc;if(_0x394ea1===_0x2c4caf)break;else _0x525621['push'](_0x525621['shift']());}catch(_0x305d86){_0x525621['push'](_0x525621['shift']());}}}(_0x5ec0,0x88081));import*as _0x20c6c0 from'three';const _VS=_0x496e64(0x174),_FS=_0x496e64(0x17e);function _0x5ec0(){const _0x5da6d6=['keyCode','233757PIsCrh','xDistance','_colourSpline','Step','11XgJEmJ','parent','_AddParticles','currentSize','AdditiveBlending','setAttribute','zDistance','1358995ECEzaz','ObjectType','BufferGeometry','innerHeight','Get','TextureLoader','velocityX','Points','\x0auniform\x20float\x20pointMultiplier;\x0aattribute\x20float\x20size;\x0aattribute\x20float\x20angle;\x0aattribute\x20vec4\x20colour;\x0avarying\x20vec4\x20vColour;\x0avarying\x20vec2\x20vAngle;\x0avoid\x20main()\x20{\x0a\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20gl_PointSize\x20=\x20size\x20*\x20pointMultiplier\x20/\x20gl_Position.w;\x0a\x20\x20vAngle\x20=\x20vec2(cos(angle),\x20sin(angle));\x0a\x20\x20vColour\x20=\x20colour;\x0a}','_material','min','angle','5001oNSGTx','push','random','maxLife','5993810fNreVM','needsUpdate','\x0auniform\x20sampler2D\x20diffuseTexture;\x0avarying\x20vec4\x20vColour;\x0avarying\x20vec2\x20vAngle;\x0avoid\x20main()\x20{\x0a\x20\x20vec2\x20coords\x20=\x20(gl_PointCoord\x20-\x200.5)\x20*\x20mat2(vAngle.x,\x20vAngle.y,\x20-vAngle.y,\x20vAngle.x)\x20+\x200.5;\x0a\x20\x20gl_FragColor\x20=\x20texture2D(diffuseTexture,\x20coords)\x20*\x20vColour;\x0a}','_points','24PxgCnv','981156eqZWGm','load','Float32BufferAttribute','copy','filter','gdfsghk','length','camera','colour','life','size','Particles','366LKTThu','attributes','_UpdateGeometry','_lerp','sign','_particles','ShaderMaterial','particleSize','endColor','12HKUmWR','Color','_geometry','particleTexture','_alphaSpline','clone','1462139qDHtdV','distanceTo','sort','abs','add','startColor','lerp','velocityY','844059wZpxWS','rotation','_onKeyUp','tan','multiplyScalar','_sizeSpline','yDistance','AddPoint','userData','sub','alpha','Vector3','_camera','_UpdateParticles','velocity','position','floor','velocityZ','18LVmxCK'];_0x5ec0=function(){return _0x5da6d6;};return _0x5ec0();}class LinearSpline{constructor(_0x5e7544){const _0x32efce=_0x496e64;this[_0x32efce(0x17f)]=[],this[_0x32efce(0x190)]=_0x5e7544;}[_0x496e64(0x154)](_0x1f93fc,_0x2ffc5c){const _0x3223b5=_0x496e64;this[_0x3223b5(0x17f)][_0x3223b5(0x179)]([_0x1f93fc,_0x2ffc5c]);}[_0x496e64(0x170)](_0x2ee286){const _0x13185a=_0x496e64;let _0x52753f=0x0;for(let _0x250a0b=0x0;_0x250a0b<this[_0x13185a(0x17f)][_0x13185a(0x187)];_0x250a0b++){if(this[_0x13185a(0x17f)][_0x250a0b][0x0]>=_0x2ee286)break;_0x52753f=_0x250a0b;}const _0x47015f=Math[_0x13185a(0x176)](this[_0x13185a(0x17f)][_0x13185a(0x187)]-0x1,_0x52753f+0x1);if(_0x52753f==_0x47015f)return this[_0x13185a(0x17f)][_0x52753f][0x1];return this[_0x13185a(0x190)]((_0x2ee286-this[_0x13185a(0x17f)][_0x52753f][0x0])/(this[_0x13185a(0x17f)][_0x47015f][0x0]-this[_0x13185a(0x17f)][_0x52753f][0x0]),this[_0x13185a(0x17f)][_0x52753f][0x1],this[_0x13185a(0x17f)][_0x47015f][0x1]);}}class ParticleSystem{constructor(_0x59262f){const _0x2db2b7=_0x496e64,_0x1ba790={'diffuseTexture':{'value':new _0x20c6c0[(_0x2db2b7(0x171))]()[_0x2db2b7(0x182)](_0x59262f[_0x2db2b7(0x142)])},'pointMultiplier':{'value':window[_0x2db2b7(0x16f)]/(0x2*Math[_0x2db2b7(0x150)](0.5*0x3c*Math['PI']/0xb4))}};this[_0x2db2b7(0x175)]=new _0x20c6c0[(_0x2db2b7(0x193))]({'uniforms':_0x1ba790,'vertexShader':_VS,'fragmentShader':_FS,'blending':_0x20c6c0[_0x2db2b7(0x169)],'depthTest':!![],'depthWrite':![],'transparent':!![],'vertexColors':!![]}),this[_0x2db2b7(0x159)]=_0x59262f[_0x2db2b7(0x188)],this[_0x2db2b7(0x192)]=[],this[_0x2db2b7(0x141)]=new _0x20c6c0[(_0x2db2b7(0x16e))](),this[_0x2db2b7(0x141)][_0x2db2b7(0x16a)](_0x2db2b7(0x15c),new _0x20c6c0[(_0x2db2b7(0x183))]([],0x3)),this[_0x2db2b7(0x141)][_0x2db2b7(0x16a)](_0x2db2b7(0x18b),new _0x20c6c0[(_0x2db2b7(0x183))]([],0x1)),this[_0x2db2b7(0x141)][_0x2db2b7(0x16a)](_0x2db2b7(0x189),new _0x20c6c0[(_0x2db2b7(0x183))]([],0x4)),this[_0x2db2b7(0x141)][_0x2db2b7(0x16a)](_0x2db2b7(0x177),new _0x20c6c0[(_0x2db2b7(0x183))]([],0x1)),this[_0x2db2b7(0x17f)]=new _0x20c6c0[(_0x2db2b7(0x173))](this[_0x2db2b7(0x141)],this[_0x2db2b7(0x175)]),this[_0x2db2b7(0x17f)][_0x2db2b7(0x155)][_0x2db2b7(0x16d)]=_0x2db2b7(0x18c),_0x59262f[_0x2db2b7(0x166)][_0x2db2b7(0x149)](this[_0x2db2b7(0x17f)]),this[_0x2db2b7(0x143)]=new LinearSpline((_0x12653b,_0x9b8fc0,_0x5bd082)=>{return _0x9b8fc0+_0x12653b*(_0x5bd082-_0x9b8fc0);}),this[_0x2db2b7(0x143)][_0x2db2b7(0x154)](0.6,0x1),this[_0x2db2b7(0x143)][_0x2db2b7(0x154)](0x1,0x0),this[_0x2db2b7(0x163)]=new LinearSpline((_0x32c178,_0x2ae37f,_0x525a7b)=>{const _0x2b45d8=_0x2db2b7,_0xc9ff1c=_0x2ae37f[_0x2b45d8(0x144)]();return _0xc9ff1c[_0x2b45d8(0x14b)](_0x525a7b,_0x32c178);}),this[_0x2db2b7(0x163)][_0x2db2b7(0x154)](0x0,new _0x20c6c0[(_0x2db2b7(0x140))](_0x59262f[_0x2db2b7(0x14a)])),this[_0x2db2b7(0x163)][_0x2db2b7(0x154)](0x1,new _0x20c6c0[(_0x2db2b7(0x140))](_0x59262f[_0x2db2b7(0x13e)])),this[_0x2db2b7(0x152)]=new LinearSpline((_0x347c2b,_0x34110e,_0x251ed2)=>{return _0x34110e+_0x347c2b*(_0x251ed2-_0x34110e);}),this[_0x2db2b7(0x152)][_0x2db2b7(0x154)](0x0,0x1),this[_0x2db2b7(0x152)][_0x2db2b7(0x154)](0.5,0x5),this[_0x2db2b7(0x152)][_0x2db2b7(0x154)](0x1,0x1),this[_0x2db2b7(0x18f)]();}[_0x496e64(0x14f)](_0x5766d6){const _0x286429=_0x496e64;switch(_0x5766d6[_0x286429(0x160)]){case 0x20:this[_0x286429(0x167)]();break;}}[_0x496e64(0x167)](_0x2dcfaa,_0x7977eb){const _0x280470=_0x496e64;let _0x2977d7=_0x7977eb[_0x280470(0x13d)];!this[_0x280470(0x186)]&&(this[_0x280470(0x186)]=0x0);this[_0x280470(0x186)]+=_0x2dcfaa;const _0xe43fa9=Math[_0x280470(0x15d)](this[_0x280470(0x186)]*0x3);this[_0x280470(0x186)]-=_0xe43fa9/0x3;for(let _0x3185a9=0x0;_0x3185a9<_0xe43fa9;_0x3185a9++){const _0x5b0f1d=(Math[_0x280470(0x17a)]()*0.75+0.25)*0xa;this[_0x280470(0x192)][_0x280470(0x179)]({'position':new _0x20c6c0[(_0x280470(0x158))]((Math[_0x280470(0x17a)]()*_0x7977eb[_0x280470(0x162)]-0x1)*0x1,(Math[_0x280470(0x17a)]()*_0x7977eb[_0x280470(0x153)]-0x1)*0x1,(Math[_0x280470(0x17a)]()*_0x7977eb[_0x280470(0x16b)]-0x1)*0x1),'size':(Math[_0x280470(0x17a)]()*0.5+0.5)*_0x2977d7,'colour':new _0x20c6c0[(_0x280470(0x140))](),'alpha':0x1,'life':_0x5b0f1d,'maxLife':_0x5b0f1d,'rotation':Math[_0x280470(0x17a)]()*0x2*Math['PI'],'velocity':new _0x20c6c0[(_0x280470(0x158))](_0x7977eb[_0x280470(0x172)],_0x7977eb[_0x280470(0x14c)],_0x7977eb[_0x280470(0x15e)])});}}[_0x496e64(0x18f)](){const _0xc8ef2b=_0x496e64,_0x3428ba=[],_0xb8ed6e=[],_0x14a869=[],_0x1adc4f=[];for(let _0x11e3f1 of this[_0xc8ef2b(0x192)]){_0x3428ba[_0xc8ef2b(0x179)](_0x11e3f1[_0xc8ef2b(0x15c)]['x'],_0x11e3f1[_0xc8ef2b(0x15c)]['y'],_0x11e3f1[_0xc8ef2b(0x15c)]['z']),_0x14a869[_0xc8ef2b(0x179)](_0x11e3f1[_0xc8ef2b(0x189)]['r'],_0x11e3f1[_0xc8ef2b(0x189)]['g'],_0x11e3f1[_0xc8ef2b(0x189)]['b'],_0x11e3f1[_0xc8ef2b(0x157)]),_0xb8ed6e[_0xc8ef2b(0x179)](_0x11e3f1[_0xc8ef2b(0x168)]),_0x1adc4f[_0xc8ef2b(0x179)](_0x11e3f1[_0xc8ef2b(0x14e)]);}this[_0xc8ef2b(0x141)][_0xc8ef2b(0x16a)](_0xc8ef2b(0x15c),new _0x20c6c0[(_0xc8ef2b(0x183))](_0x3428ba,0x3)),this[_0xc8ef2b(0x141)][_0xc8ef2b(0x16a)](_0xc8ef2b(0x18b),new _0x20c6c0[(_0xc8ef2b(0x183))](_0xb8ed6e,0x1)),this[_0xc8ef2b(0x141)][_0xc8ef2b(0x16a)](_0xc8ef2b(0x189),new _0x20c6c0[(_0xc8ef2b(0x183))](_0x14a869,0x4)),this[_0xc8ef2b(0x141)][_0xc8ef2b(0x16a)](_0xc8ef2b(0x177),new _0x20c6c0[(_0xc8ef2b(0x183))](_0x1adc4f,0x1)),this[_0xc8ef2b(0x141)][_0xc8ef2b(0x18e)][_0xc8ef2b(0x15c)][_0xc8ef2b(0x17d)]=!![],this[_0xc8ef2b(0x141)][_0xc8ef2b(0x18e)][_0xc8ef2b(0x18b)][_0xc8ef2b(0x17d)]=!![],this[_0xc8ef2b(0x141)][_0xc8ef2b(0x18e)][_0xc8ef2b(0x189)][_0xc8ef2b(0x17d)]=!![],this[_0xc8ef2b(0x141)][_0xc8ef2b(0x18e)][_0xc8ef2b(0x177)][_0xc8ef2b(0x17d)]=!![];}[_0x496e64(0x15a)](_0x34d6f0){const _0x39491b=_0x496e64;for(let _0x271faa of this[_0x39491b(0x192)]){_0x271faa[_0x39491b(0x18a)]-=_0x34d6f0;}this[_0x39491b(0x192)]=this[_0x39491b(0x192)][_0x39491b(0x185)](_0x3f9360=>{const _0x3b9fac=_0x39491b;return _0x3f9360[_0x3b9fac(0x18a)]>0x0;});let _0x21501a=0x0;for(let _0x433c0a of this[_0x39491b(0x192)]){const _0x40cc6c=0x1-_0x433c0a[_0x39491b(0x18a)]/_0x433c0a[_0x39491b(0x17b)];_0x433c0a[_0x39491b(0x14e)]+=_0x34d6f0*0.5,_0x433c0a[_0x39491b(0x157)]=this[_0x39491b(0x143)][_0x39491b(0x170)](_0x40cc6c),_0x433c0a[_0x39491b(0x168)]=_0x433c0a[_0x39491b(0x18b)]*this[_0x39491b(0x152)][_0x39491b(0x170)](_0x40cc6c),_0x433c0a[_0x39491b(0x189)][_0x39491b(0x184)](this[_0x39491b(0x163)][_0x39491b(0x170)](_0x40cc6c)),_0x433c0a[_0x39491b(0x15c)][_0x39491b(0x149)](_0x433c0a[_0x39491b(0x15b)][_0x39491b(0x144)]()[_0x39491b(0x151)](_0x34d6f0));const _0x10aa12=_0x433c0a[_0x39491b(0x15b)][_0x39491b(0x144)]();_0x10aa12[_0x39491b(0x151)](_0x34d6f0*0.1),_0x10aa12['x']=Math[_0x39491b(0x191)](_0x433c0a[_0x39491b(0x15b)]['x'])*Math[_0x39491b(0x176)](Math[_0x39491b(0x148)](_0x10aa12['x']),Math[_0x39491b(0x148)](_0x433c0a[_0x39491b(0x15b)]['x'])),_0x10aa12['y']=Math[_0x39491b(0x191)](_0x433c0a[_0x39491b(0x15b)]['y'])*Math[_0x39491b(0x176)](Math[_0x39491b(0x148)](_0x10aa12['y']),Math[_0x39491b(0x148)](_0x433c0a[_0x39491b(0x15b)]['y'])),_0x10aa12['z']=Math[_0x39491b(0x191)](_0x433c0a[_0x39491b(0x15b)]['z'])*Math[_0x39491b(0x176)](Math[_0x39491b(0x148)](_0x10aa12['z']),Math[_0x39491b(0x148)](_0x433c0a[_0x39491b(0x15b)]['z'])),_0x433c0a[_0x39491b(0x15b)][_0x39491b(0x156)](_0x10aa12);}this[_0x39491b(0x192)][_0x39491b(0x147)]((_0x445ae5,_0x31dcf1)=>{const _0x389e59=_0x39491b,_0x6ff94e=this[_0x389e59(0x159)][_0x389e59(0x15c)][_0x389e59(0x146)](_0x445ae5[_0x389e59(0x15c)]),_0x3ab86d=this[_0x389e59(0x159)][_0x389e59(0x15c)][_0x389e59(0x146)](_0x31dcf1[_0x389e59(0x15c)]);if(_0x6ff94e>_0x3ab86d)return-0x1;if(_0x6ff94e<_0x3ab86d)return 0x1;return 0x0;});}[_0x496e64(0x164)](_0x1b8c7f,_0x499847){const _0x59da7a=_0x496e64;this[_0x59da7a(0x167)](_0x1b8c7f,_0x499847),this[_0x59da7a(0x15a)](_0x1b8c7f),this[_0x59da7a(0x18f)]();}}export default ParticleSystem;