//These functions scale the icon size down on hover

(() => {
  console.log('fired!');

  var iconSet = document.querySelectorAll('svg');

  function logThisIcon(){
    console.log('hover on this icon: ', this.id);

    document.getElementById("apple").onmouseover = function() {mouseOver()};
    document.getElementById("apple").onmouseout = function() {mouseOut()};

    document.getElementById("fence").onmouseover = function() {mouseOver1()};
    document.getElementById("fence").onmouseout = function() {mouseOut1()};

    document.getElementById("farm").onmouseover = function() {mouseOver3()};
    document.getElementById("farm").onmouseout = function() {mouseOut3()};

    document.getElementById("can").onmouseover = function() {mouseOver2()};
    document.getElementById("can").onmouseout = function() {mouseOut2()};

    document.getElementById("flower").onmouseover = function() {mouseOver4()};
    document.getElementById("flower").onmouseout = function() {mouseOut4()};

    document.getElementById("honey").onmouseover = function() {mouseOver5()};
    document.getElementById("honey").onmouseout = function() {mouseOut5()};

    document.getElementById("mower").onmouseover = function() {mouseOver6()};
    document.getElementById("mower").onmouseout = function() {mouseOut6()};

    document.getElementById("pot").onmouseover = function() {mouseOver7()};
    document.getElementById("pot").onmouseout = function() {mouseOut7()};

    document.getElementById("soil").onmouseover = function() {mouseOver8()};
    document.getElementById("soil").onmouseout = function() {mouseOut8()};

    document.getElementById("sun").onmouseover = function() {mouseOver9()};
    document.getElementById("sun").onmouseout = function() {mouseOut9()};


  function mouseOver1() {
    document.getElementById("fence").style.width = "30%";
    }

    function mouseOut1() {
        document.getElementById("fence").style.width = "40%";
    }

      function mouseOver2() {
    document.getElementById("can").style.width = "30%";
    }

    function mouseOut2() {
        document.getElementById("can").style.width = "40%";
    }

      function mouseOver3() {
    document.getElementById("farm").style.width = "30%";
    }

    function mouseOut3() {
         document.getElementById("farm").style.width = "40%";
    }

      function mouseOver4() {
    document.getElementById("flower").style.width = "30%";
    }

    function mouseOut4() {
        document.getElementById("flower").style.width = "40%";
    }

      function mouseOver5() {
    document.getElementById("honey").style.width = "30%";
    }

    function mouseOut5() {
        document.getElementById("honey").style.width = "40%";
    }

      function mouseOver6() {
    document.getElementById("mower").style.width = "30%";
    }

    function mouseOut6() {
        document.getElementById("mower").style.width = "40%";
    }

      function mouseOver7() {
    document.getElementById("pot").style.width = "30%";
    }

    function mouseOut7() {
        document.getElementById("pot").style.width = "40%";
    }

      function mouseOver8() {
    document.getElementById("soil").style.width = "30%";
    }

    function mouseOut8() {
        document.getElementById("soil").style.width = "40%";
    }

      function mouseOver9() {
    document.getElementById("sun").style.width = "30%";
    }

    function mouseOut9() {
        document.getElementById("sun").style.width = "40%";
    }


    function mouseOver() {

        document.getElementById("apple").style.width = "30%";
    }

    function mouseOut() {
        document.getElementById("apple").style.width = "40%";
    }

  }


  iconSet.forEach(icon => icon.addEventListener('mouseover',logThisIcon));
})();
