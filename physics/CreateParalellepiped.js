import * as THREE from 'three';
import CreateRigidBody from './CreateRigidBody.js';
import margin from './Margin.js';

function createParalellepiped(scene,sx,sy,sz,mass,pos,quat,material){

    const threeObject=new THREE.Mesh(new THREE.BoxGeometry(sx,sy,sz,1,1,1),material);
    const shape=new Ammo.btBoxShape(new Ammo.btVector3(sx*0.5,sy*0.5,sz*0.5));
    shape.setMargin(margin);
    //object.userData.originSize={'x':sx,'y':sy,'z':sz}
    console.log("crateParalapiepeidss:",scene,sx*0.1,sy*0.1,sz*0.1,shape,margin,mass,pos,quat);

    CreateRigidBody(scene,threeObject,shape,mass,pos,quat);
    

    return threeObject;
}
export default createParalellepiped;