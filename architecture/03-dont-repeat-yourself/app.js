(function () {
    function createBoxes () {
        const app1 = document.querySelector("#app");
        const box1 = document.createElement("div");

        box1.id = "box1";
        box1.classList.add("box");
        box1.classList.add("yellow");
        app1.appendChild(box1);

        const app2 = document.querySelector("#app");
        const box2 = document.createElement("div");

        box2.id = "box2";
        box2.classList.add("box");
        box2.classList.add("red");
        app2.appendChild(box2);

        const app3 = document.querySelector("#app");
        const box3 = document.createElement("div");

        box3.id = "box3";
        box3.classList.add("box");
        box3.classList.add("green");
        app3.appendChild(box3);

        const app4 = document.querySelector("#app");
        const box4 = document.createElement("div");

        box4.id = "box4";
        box4.classList.add("box");
        box4.classList.add("pink");
        app4.appendChild(box3);

        const app5 = document.querySelector("#app");
        const box5 = document.createElement("div");

        box5.id = "box5";
        box5.classList.add("box");
        box5.classList.add("blue");
        app5.appendChild(box5);
    }

    function animateBoxes () {
        setTimeout(function () {
            const box1 = document.querySelector("#box1");
            box1.classList.add("magic");
            move(box1);
        }, 0);

        setTimeout(function () {
            const box2 = document.querySelector("#box2");
            box2.classList.add("magic");
            spin(box2);
        }, 500);

        setTimeout(function () {
            const box3 = document.querySelector("#box3");
            box3.classList.add("magic");
            skew(box3);
        }, 1000);

        setTimeout(function () {
            const box4 = document.querySelector("#box4");
            box4.classList.add("magic");
            transparent(box4);
        }, 1000);

        setTimeout(function () {
            const box5 = document.querySelector("#box5");
            box5.classList.add("magic");
            shadow(box5);
        }, 1000);


    }

    createBoxes();
    animateBoxes();
})();


