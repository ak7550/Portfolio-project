const Params = {
  "particles": {
    "number": {
      "value": 45,
      "density": {
        "enable": false,
        "value_area": 831.3726794310091
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6900393239277377,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.16849199663016,
        "sync": false
      }
    },
    "size": {
      "value": 2.3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 149.0508074044899,
      "color": "#ffffff",
      "opacity": 0.34659314690823145,
      "width": 1.4964708229758168
    },
    "move": {
      "enable": true,
      "speed": 4.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}

export default Params;