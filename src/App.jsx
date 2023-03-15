import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  camera.position.set( 0, 0, 100 );
  camera.lookAt( 0, 0, 0 );

  //create a blue LineBasicMaterial
  const material = new THREE.LineBasicMaterial( { color: 0x0000ff },{linewidth: 1} );
  const points = [];
  points.push( new THREE.Vector3( - 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );

  const line = new THREE.Line( geometry, material );
  const geometry = new THREE.BufferGeometry().setFromPoints( points )

  const scene = new THREE.Scene();

  return (
    <div className="App">
      scene.add( line );
      renderer.render( scene, camera );
    </div>
  )
}

export default App
