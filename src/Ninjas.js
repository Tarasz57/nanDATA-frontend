import React from 'react';

function Ninjas(props) {
    const { ninjas } = props;
    //jeigu noreciau kitokiu kintamuju pavadinimu, reiktu:
    //const {name: myName, age: myAge, belt: myBelt};
    // const ninjaList = ninjas.map(ninja => {
    //     if(ninja.age > 20) {
    //         return(
    //             <div className="ninja" key={ ninja.id }>
    //                 <div>Name: { ninja.name }</div>
    //                 <div>Age: { ninja.age }</div>
    //                 <div>Belt: { ninja.belt }</div>
    //             </div>
    //         )
    //     }
    //     else {
    //         return null;
    //     }
    // });
    //realiai for each loopas, padaro is objektu divus va tokius
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
        ) : null;
    })
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas