fetch('https://628b2f157886bbbb37b20caa.mockapi.io/moto')
.then(resp => resp.json()).then(res => displayMoto(res))

function displayMoto(motorbikes) {
    const container = document.getElementById('container');

    for (const moto of motorbikes) {
        console.log(moto);
        const motoDiv = document.createElement('div');
        motoDiv.classList.add('moto-div');

        const motoModel = document.createElement('h2');
        motoModel.innerText = moto.model;
        motoDiv.appendChild(motoModel);

        const motoConstr = document.createElement('p');
        motoConstr.innerText = "Produced by: " + moto.constructor;
        motoDiv.appendChild(motoConstr);

        const motoImage = document.createElement('img');
        motoImage.classList.add('moto-image')
        motoImage.src = moto.image;
        motoDiv.appendChild(motoImage);

        const motoCil = document.createElement('div');
        motoCil.innerText = "CC: " + moto.cilinder;
        motoDiv.appendChild(motoCil);

        const optionalTitle = document.createElement('h3');
        optionalTitle.innerText = 'Optional:';
        motoDiv.appendChild(optionalTitle);

        const motoOptionals = document.createElement('ul');
        for (const optional of moto.optional) {
            const optionalLi = document.createElement('li');
            optionalLi.innerText = optional;
            motoOptionals.appendChild(optionalLi);
        }

        motoDiv.appendChild(motoOptionals);

        const motoYop = document.createElement('p');
        motoYop.innerText = "Year of production: " + moto.yop;
        motoDiv.appendChild(motoYop);

        const motoAvail = document.createElement('div');
        function isStillAvailable() {
            if (moto.available === true) {
                return 'Is this motorbike still available? yes' 
            } else {
                return 'Is this motorbike still available? no'
            }
        }
        motoAvail.innerText = isStillAvailable();
        motoDiv.appendChild(motoAvail);

        const colorsTitle = document.createElement('h3');
        colorsTitle.innerText = 'Colors',
        motoDiv.appendChild(colorsTitle);

        const motoColors = document.createElement('div');
        motoColors.classList.add('moto-colors');
        for (const color of moto.colors) {
            const colorDiv = document.createElement('div');
            colorDiv.classList.add('color-div');
            colorDiv.style.backgroundColor = color;
            motoColors.appendChild(colorDiv);
        }
        motoDiv.appendChild(motoColors);

        const classTitle = document.createElement('h4');
        classTitle.innerText = 'Classes';
        motoDiv.appendChild(classTitle);

        const motoClassList = document.createElement('ul');
        for (const type of moto.class) {
            const typeLi = document.createElement('li');
            typeLi.innerText = type;
            motoClassList.appendChild(typeLi); 
        }

        motoDiv.appendChild(motoClassList);
        
        container.appendChild(motoDiv)
    }
}