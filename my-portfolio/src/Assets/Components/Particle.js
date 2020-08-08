import React from 'react'
import Particles from 'react-particles-js'
import Params from './particlesjs-config'

const Particle = () => {
    return (
        <div>
            <Particles className="particlejs"
              params={Params}
            />
        </div>
    )
}

export default Particle
